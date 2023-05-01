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

  async getUserByID(id) {
    let responce = await api.get(`http://localhost:5000/users/${id}`);
    return responce.data;
  }

  async updateUserData(id,nickname,email,fio,phone){
    let responce = await api.post(`http://localhost:5000/users/update:${id}`,{
      "nickname": nickname,
      "email": email,
      "FIO" : fio,
      "phone" : phone
    })
    return responce.data
  }

  async chagePassword(obj) {
      let responce = await api.post("http://localhost:5000/users/update/password",obj)
      return responce.data
  }
}