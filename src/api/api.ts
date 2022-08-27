import axios from "axios";
import {UsersType} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1ca42077-7cf4-467f-8cb0-9dda07038fd9"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post("auth/login", {email, password, rememberMe})
    },

    logout() {
        return instance.delete("auth/login")
    }
}