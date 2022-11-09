import { API } from "./index"
import { ErrorResType } from "../types"
import { SignInFormdataType, UserType } from "../types/authType"
import { AxiosResponse } from "axios"

type SignInGet = {
    result: UserType, token: string
    // data: {result: UserType, token: String}
    // data: {UserType}
}

export const SIGN_IN = async (params: SignInFormdataType): Promise<UserType | ErrorResType> => {
    try {
        const user = await API.post<SignInGet>("/users/signin", params)

        return { ...user?.data?.result, token: user?.data?.token}
    } catch (error: any) {
        const { data, status } = error.response

        return { message: data.message, status }
    }
}