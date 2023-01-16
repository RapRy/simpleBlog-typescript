import { API } from ".";
import { ErrorResType } from "../types"
import { TopicType } from "../types/topicType";

export const GET_LATEST_TOPICS = async (limit: Number):Promise<TopicType[] | ErrorResType> => {
    try {
        const topicsRes = await API.get<TopicType[]>(`/topics/latest/limit/${limit}`)

        return topicsRes.data
    } catch (error: any) {
        const { data, status } = error.response

        return { message: data.message, status }
    }
}

export const GET_HOT_TOPICS = async (limit: Number):Promise<TopicType[] | ErrorResType> => {
    try {
        const topicsRes = await API.get<TopicType[]>(`/topics/hot/limit/${limit}`)

        return topicsRes.data
    } catch (error: any) {
        const { data, status } = error.response

        return { message: data.message, status }
    }
}