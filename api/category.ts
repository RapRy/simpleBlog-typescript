import { API } from "./index"
import { ErrorResType } from "../types"
import { CategoryType } from "../types/categoryType"

type GetCategoriesType = {
    categories: CategoryType[]
}

export const GET_LATEST_TOPICS = async ():Promise<CategoryType[] | ErrorResType> => {
    try {
        const categoriesRes = await API.get<GetCategoriesType>(`/categories`)

        return categoriesRes.data.categories
    } catch (error: any) {
        const { data, status } = error.response

        return { message: data.message, status }
    }
}