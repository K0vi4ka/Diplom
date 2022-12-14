import axios from "axios"

export default class UserService {
  async login(obj){
    const responce = await axios.post("http://localhost:5000/auth/login",obj)
    return responce.data
  }
}