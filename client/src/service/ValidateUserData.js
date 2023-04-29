import api from "@/auth-axios";

export default class VaidateUserData {
  nameAndSurnameValid(name) {
    let check = true;
    const regx = new RegExp(/[A-Za-z]|[А-Яа-я]/,"gm");
    const nameArr = name.trim().split(' ')
    if(nameArr.length > 1) {
      nameArr.forEach(item => {
        regx.test(item)? check: check = false
      })
    }
    else {
      check = false
    }
    return check
  }

  emailValid(email) {
    const regx = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm");
    return regx.test(email);
  }

  passwordValid(password) {
    let filter = /^[a-zA-Z0-9]{6,16}$/;
    return String(password).search (filter) != -1;
  }

  accessPass(pass, secpass) {
    return pass === secpass
  }

  loginValid(password) {
    let filter = /^[a-zA-Z0-9]{6,16}$/;
    return String(password).search (filter) != -1;
  }

  async nicknameExist(nickname) {
    if(nickname.length < 5) return false
    const responce = await api.get(`http://localhost:5000/users/exist/nickname/${nickname}`)
    return responce.data
  }

  async emailExist(email) {
    const responce = await api.get(`http://localhost:5000/users/exist/email/${email}`)
    return responce.data
  }

  phoneValid(phone) {
    console.log('work')
    var filter = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;
    return String(phone).search (filter) != -1;
  }

  validateUserData(item) {
    item.FIO = item.FIO == null? " - ": item.FIO;
    item.email = item.email == null? " - ": item.email;
    item.phone = item.phone == null? " - ": item.phone;
  }
}