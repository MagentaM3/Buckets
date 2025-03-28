import { getData } from './dataStore';
import { Group } from '../interface';
import { v4 } from 'uuid';

// Function to create the group, given the name and the members
export function createGroup(groupName: string, memberIds: string[], images: string[]) {
	const database = getData();
	const groups = database.groups;
	const groupId = v4();
	
	const group: Group = {
		groupId: groupId,
		groupName: groupName,
		members: memberIds,
		buckets: [],
		images,
	};

	groups.push(group);

	return groupId;
}

// Function to delete the groups given the id
export function deleteGroup(findGroupId: string) {
	const database = getData();
	const groups = database.groups;

	const index = groups.findIndex(group => group.groupId === findGroupId);
	
	if (index === -1) {
		throw new Error(`Group with ID ${findGroupId} not found`);
	}

	groups.splice(index, 1);

	return {};
}

// passes through groupId and members to add
// returns updated list of members
export function addToGroup(groupId: string, memberIds: string[]) {
	const database = getData();
	const groups = database.groups;

	const group = groups.find(group => group.groupId === groupId);
	if (!group) {
		throw new Error(`Group with ID ${groupId} not found`);
	}

	memberIds.forEach(id => {
		if (!group.members.includes(id)) {
			group.members.push(id);
		} else {
			console.log(`User with ID ${id} is already a member of the group.`);
		}
	});

	return group.members;
}

export function removeFromGroup(groupId: string, memberIds: string[]) {
	const database = getData();
	const groups = database.groups;

	const group = groups.find(group => group.groupId === groupId);
	
	if (!group) {
		throw new Error(`Group with ID ${groupId} not found`);
	}

	group.members = group.members.filter(id => !memberIds.includes(id));

	return group.members;
}

export function editGroup(groupId: string, updatedGroupName: string) {
	const database = getData();
	const groups = database.groups;

	const group = groups.find(group => group.groupId === groupId);
	if (!group) {
		throw new Error(`Group with ID ${groupId} not found`);
	}

	group.groupName = updatedGroupName;

	return group.groupName;
}

export function getGroup(groupId: string) {
	const database = getData();
	const groups = database.groups;

	const group = groups.find(group => group.groupId === groupId);
	if (!group) {
		throw new Error(`Group with ID ${groupId} not found`);
	}

	return group;
}

export function getAllGroups(memberId: string) {
	const database = getData();
	const groups = database.groups;
	
	return groups.filter(group => group.members.includes(memberId));
}
