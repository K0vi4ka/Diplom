import axios from "axios"

export default class UserService {
  async getUser(id) {
    let responce = await axios.get(`http://localhost:5000/users/${id}}`)
    return responce;
  }
}