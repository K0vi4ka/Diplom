import api from "@/auth-axios.js"


export default class UserService {
  async getUser(id) {
    let responce = await api.get(`http://localhost:5000/users/${id}`)
    return responce.data;
  }

  async getUserRoles(id) {
    let responce = await api.get(`http://localhost:5000/users/roles/${id}`)
    return responce.data;
  } 
}