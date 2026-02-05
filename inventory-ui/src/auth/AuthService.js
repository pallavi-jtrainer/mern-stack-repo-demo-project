import api from "../api/api";

export const registerUser = (data) => {
    // console.log("auth: ",data)
    api.post("/auth/register", data)};
export const loginUser = (data) => api.post("/auth/login", data);