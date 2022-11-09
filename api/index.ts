import axios, { AxiosRequestConfig } from "axios";

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
