import { Button, Modal, Select, TextInput } from "@mantine/core";
import { useState } from "react";

export const BucketModal = ({
  openedAddBucket,
  closeAddBucket,
}: {
  openedAddBucket: boolean;
  closeAddBucket: () => void;
}) => {
  
  const [bucketName, setBucketName] = useState<string>('');
  const [selectedBucketGroupOption, setBucketSelectedGroupOption] = useState<string | null>(null);

  return (
    <Modal opened={openedAddBucket} onClose={closeAddBucket} title="Add Bucket" centered>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Bucket Name:', bucketName, 'Selected Group:', selectedBucketGroupOption);
        closeAddBucket();
      }}>
        <TextInput
          label="Bucket Name"
          placeholder="Enter bucket name"
          value={bucketName}
          onChange={(event) => setBucketName(event.currentTarget.value)}
          required
        />
        <Select
          label="Add to group"
          placeholder="Select group"
          data={['Group 1', 'Group 2', 'Group 3']}
          value={selectedBucketGroupOption}
          onChange={(value) => setBucketSelectedGroupOption(value)}
          required
        />
        <Button type="submit" fullWidth mt="md" color={"rgba(23, 148, 250, 1)"}>
          Add Bucket!
        </Button>
      </form>
    </Modal>
  );
}