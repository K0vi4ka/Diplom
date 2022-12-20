import api from "@/auth-axios"

export default class UserService {
  async login(obj){
    const responce = await api.post("http://localhost:5000/auth/login",obj)
    return responce.data
  }

}