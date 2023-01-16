export interface TopicType{
    _id: String;
    meta: {
        replies: String[];
        views: String[];
        upvotes: String[];
        downvotes: String[]
    },
    title: String;
    description: String;
    active: Number;
    ref: {
        category: String;
        creator: String;
    },
    createdAt: Date;
    updatedAt: Date;
    __v?: Number
}