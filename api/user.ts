import { API } from ".";
import { ErrorResType } from "../types"
import { UsersType } from "../types/userType";

export const GET_NEW_USERS = async(limit: Number):Promise<UsersType[] | ErrorResType> => {
    try{
        const newUsersRes = await API.get<UsersType[]>(`/users/newUsers/${limit}`)

        return newUsersRes.data
    }catch(error: any){
        const { data, status } = error.response

        return { message: data.message, status }
    }
}

export const GET_ACTIVE_USERS = async(limit: Number):Promise<UsersType[] | ErrorResType> => {
    try{
        const newUsersRes = await API.get<UsersType[]>(`/users/activeUsers/${limit}`)

        return newUsersRes.data
    }catch(error: any){
        const { data, status } = error.response

        return { message: data.message, status }
    }
}