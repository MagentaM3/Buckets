export interface dataStore {
    users: User[];
    groups: Groups[];
    buckets: Buckets[];
    items: Items[];
}

export interface User {
    id: string;
    username: string;
    password: string;
    // groups: [Groups];
    // friends: [User];
    // buckets: [Buckets];
}

export interface Groups {
    groupId: string;
    groupName: string;
    members: [User];
    buckets: [Buckets]
}

export interface Buckets {
    bucketId: string;
    bucketName: string;
    gid: string;
    items: Items[];
}

export interface Items {
    itemId: string;
    itemName: string;
    itemDesc: string;
    itemUrl: string;
    addedBy: string;
    images: string;
    likes: number;
    bucketId: string;
}