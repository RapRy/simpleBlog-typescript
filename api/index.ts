import axios, { AxiosRequestConfig } from "axios";
import { ErrorResType } from "../types";
import { StatisticsCountType } from "../types";

export const API = axios.create({
  // baseURL: "https://universityofschoolscolleges.herokuapp.com",
  baseURL: "http://localhost:5000",
  // headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((req: AxiosRequestConfig): AxiosRequestConfig => {
  if (localStorage.getItem("profile"))
    if (req.headers) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage?.getItem("profile") || "{}").token
      }`;
    }

  return req;
});

// type GetStatisticsType = {
//   counts: StatisticsCountType
// }

export const GET_STATISTICS_COUNT = async ():Promise<StatisticsCountType | ErrorResType> => {
  try {
    const statisticsCount = await API.get<StatisticsCountType>(`/statistics/all-stats-count`)

    return statisticsCount.data
  } catch (error: any) {
    const { data, status } = error.response

        return { message: data.message, status }
  }
}