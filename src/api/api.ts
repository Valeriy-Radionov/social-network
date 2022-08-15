import axios from "axios";

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
    }

}

