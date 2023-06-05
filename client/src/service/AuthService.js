import api from "@/auth-axios"
import axios from "axios";

export default class UserService {
  async login(obj){
    const responce = await api.post("http://localhost:5000/auth/login",obj)
    return responce.data
  }

  async registration(regArr) {
    const respObj = {};
    const parseDataArr = regArr.map((item) =>[item.getAttribute('id').split('-')[1],item.value])
    parseDataArr.forEach(item => {
      console.log(item)
      respObj[item[0]] = item[1]
    })
    const responce = await axios.post("http://localhost:5000/auth/registration",respObj)
    return responce.data
  }

  async isUserConfirmEmail(userId) {
    const responce = await api.get(`http://localhost:5000/unconfirm-user/isUserConfirm/${userId}`)
    return await responce.data
  }
}