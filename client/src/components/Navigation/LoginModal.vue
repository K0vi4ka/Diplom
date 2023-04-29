<template lang="">
  <form class="modal" >
    <div class="modal-email">
      <label for="login-email">Введите логин</label>
      <input type="email" id="login-email" v-model="loginInp">
      <p class="email-warnings"></p>
    </div>
    <div class="modal-password">
      <label for="login-password">Введите пароль</label>
      <input type="password" id="login-password" v-model="passInp">
    </div>
    <div class="modal-checkbox">
      <input type="checkbox" id="authCheckbox">
      <label for="authCheckbox" @click="memberInp = !memberInp">Запомнить данные</label>
    </div>
    <div class="btn-container">
      <button class="btn-container__btn" @click="sendData">OK</button>
      <button class="btn-container__btn" @click="cancelBtnHandler">Отмена</button>
    </div>

  </form>
</template>
<script setup>
  import { ref} from 'vue'
  import AuthService from "@/service/AuthService"
  import { AuthStore } from '@/service/pinia-store';

  const loginInp = ref("")
  const passInp = ref("")
  const memberInp = ref(false)
  const authService = new AuthService();
  const authStore = AuthStore();

  const sendData = async function(e){
    e.preventDefault();
    try
    {
      const {accessToken,refreshToken,user} = await authService.login({email: loginInp.value,password: passInp.value})
   
      if(memberInp.value){
        localStorage.setItem('authtoken',accessToken);
        localStorage.setItem('refreshToken',refreshToken);
      }
      else{
        sessionStorage.setItem('authtoken',accessToken);
        sessionStorage.setItem('refreshToken',refreshToken);
        authStore.updateUserId(user.id) 
      }  
      authStore.updatePopup()    
    }

    catch(e){
      console.log(e)
    }
  }

  const cancelBtnHandler = (e) =>{
    e.preventDefault();
    authStore.updatePopup();
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