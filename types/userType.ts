type ActivityType = {
    _id: String,
    id: String,
    date: Date
}

export interface UsersType{
 _id: String,
 post: {
    topics: String[],
    replies: String[],
    upvotes: String[],
    downvotes: String[]
 },
 name: {
    firstName: String,
    lastName: String
 },
 username: String,
 email: String,
 password: String,
 avatar: String,
 accountType: Number,
 date: {
    registered: Date,
    activity: ActivityType[]
 },
 schoolId: Number,
 createdAt: Date,
 updatedAt: Date,
 __v?: Number
}