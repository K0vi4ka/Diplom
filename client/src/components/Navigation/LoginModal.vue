<template lang="">
  <form v-if="show" class="modal" >
    <div class="modal-email">
      <label for="login-email">Введите логин</label>
      <input type="email" id="login-email" v-model="loginInp">
      <p class="email-warnings"></p>
    </div>
    <div class="modal-password">
      <label for="login-password">Введите пароль</label>
      <input type="password" id="login-password" v-model="passInp">
    </div>
    <div class="btn-container">
      <button class="btn-container__btn" @click="sendData">OK</button>
      <button class="btn-container__btn" @click="$emit('update:modelValue', show.value)">Отмена</button>
    </div>

  </form>
</template>
<script setup>
  import { ref} from 'vue'
  import AuthService from "@/service/AuthService"
  const show = ref(true);
  const loginInp = ref("")
  const passInp = ref("")
  const authService = new AuthService()


  const sendData = function(e){
    e.preventDefault();
    const res = validData()
    console.log(res)
    if(res === 1){
      const token = authService.login({
        "email": loginInp.value,
        "password": passInp.value
      }).then(responce =>{
        console.log(responce.data)
      })
      console.log(token)
    }

  }

  const validData = () =>{
    const login = validateEmail(loginInp.value);
    const pass = validatePassword(passInp.value)
    console.log(pass)
    if(login & pass){ return 1}
  }

  const validateEmail = (email) => {
  return new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.toLowerCase())
  };

  const validatePassword = (password) => {
    return !/[~`!#$%\\^&*+=\-\\[\]\\';,/{}|\\":<>\\?]/g.test(password)
  }


</script>
<style scoped>
  .modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    color:#000000;
    background: #fff;
    border: 5px solid #4169E1;;
    border-radius: 8px;
    padding: 15px;
    min-width: 420px;
    max-width: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  label{
    display: inline-block;
    width: 150px;
  }

  input{
    font-size: 20px;
  }

  input .warning {
    border: 1px solid black;
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
  }

  .btn-container__btn {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #4169E1;
    color: #FFFFFF;
  }


</style>