import * as axios from "axios"


let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "bfcbbf6e-7258-4f66-8972-7d3c4779743b"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

const samuraiApi = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getPageUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },

    getStatus(id){
        return instance.get(`profile/status/${id}`)
        .then(responce => responce.data)
    },

    updateStatus(status){
        return instance.put(`profile/status`, {
            status
        })
    },

    login(data){
        return instance.post("/auth/login", {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: true
        })
    },

    logout(){
        return instance.delete("/auth/login")
    },

    setPhoto(file){
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }



}

export default samuraiApi;
