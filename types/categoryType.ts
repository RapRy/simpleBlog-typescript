export interface CategoryType{
    _id: String;
    meta: {
        topics: String[]
    };
    name: String;
    active: Number;
    createdAt: Date | String;
    updatedAt: Date | String;
    __v?: Number
}