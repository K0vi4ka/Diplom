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
  
  async getUserByToken(token){
    let responce = await api.post('http://localhost:5000/token', token)
    return responce.data
  }

  async getAllUsers() {
    let responce =  await api.get('http://localhost:5000/users');
    console.log(responce.data)
    return responce.data;
  }
}