import { Avatar, ActionIcon } from "@mantine/core";
import BucketView from "../components/BucketView";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useParams } from "react-router";
import { get } from "../utils/apiClient";
import { useEffect, useState } from "react";
import { handleError } from "../utils/handlers";
import { useGroups } from "../context/GroupsProvider";

const GroupBuckets = () => {
  const { gid = '' } = useParams();
  const { buckets, refreshBucketsOfGroup } = useGroups();
  const [title, setTitle] = useState<string>('');
  const [members, setMembers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
			console.log(gid, refreshBucketsOfGroup)
      refreshBucketsOfGroup(gid);
      
      try {
        const res = await get(`/group/${gid}`);
        if (res.error) {
          handleError(res.error);
        } else {
          setTitle(res.groupName);
          setMembers(res.members);
        }
      } catch (err) {
        console.error("Error fetching group:", err);
      }
      
      setLoading(false);
    };

    if (gid) fetchData();
  }, [gid]);

  if (!gid) return <div>Invalid Group</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div
      style={{marginTop: '150px'}}
    >
      <BucketView title={title} buckets={buckets?.[gid] ?? []}>
        <Avatar.Group>
        {members.slice(0, 3).map((_, index) => (
          <Avatar key={index} src={`https://example.com/avatar${index}.jpg`} />
        ))}
        {members.length > 3 ? <Avatar>+{members.length - 3}</Avatar> : <></>}
        </Avatar.Group>
        <ActionIcon variant="light" color="gray" radius="xl" aria-label="Settings">
          <MoreHorizIcon />
        </ActionIcon>
      </BucketView>
    </div>
  );
};

export default GroupBuckets;
