<template lang="">
  <form class="modal" >
    <div class="modal-email inp-block">
      <label for="login-email">Введите логин</label>
      <input type="email" id="login-email" v-model="loginInp">
    </div>
    <div class="modal-password inp-block">
      <label for="login-password">Введите пароль</label>
      <input type="password" id="login-password" v-model="passInp">
    </div>
    <div class="warning">{{warningMesssage}}</div>
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
  import { ref,inject} from 'vue'
  import AuthService from "@/service/AuthService"
  import { AuthStore } from '@/service/pinia-store';

  const loginInp = ref("")
  const passInp = ref("")
  const memberInp = ref(false)
  const authService = new AuthService();
  const authStore = AuthStore();
  const dialogRef = inject("dialogRef");
  const warningMesssage = ref("");

  const sendData = async function(e){
    e.preventDefault();
    try
    {
      const {accessToken,refreshToken,user} = await authService.login({email: loginInp.value,password: passInp.value})
      const confirmUser = await authService.isUserConfirmEmail(await user.id)
      if(!await confirmUser) {
        warningMesssage.value = "Ваш аккаунт не подтвержден. Пожалуйста перейдите на свою почту и подтвердите его"
        return
      }

      if(memberInp.value){
        console.log(refreshToken)
        localStorage.setItem('authtoken',await accessToken);
        localStorage.setItem('refreshToken',await refreshToken);
        authStore.updateUserId(await user.id) 
        dialogRef.value.close();
      }
      else{
        sessionStorage.setItem('authtoken',await accessToken);
        sessionStorage.setItem('refreshToken',await refreshToken);
        authStore.updateUserId(await user.id) 
        dialogRef.value.close();
      }    
    }

    catch(e){
      console.log(e);
      warningMesssage.value = "Ошибка данные введены не верно"
    }
  }

  const cancelBtnHandler = () =>{
    dialogRef.value.close();
  }


</script>
<style scoped>

  label{
    display: inline-block;
    width: 250px;
    margin-bottom: 20px;
  }

  input{
    font-size: 20px;
  }

  .warning {
    display: flex;
    justify-content: flex-end;
    color: #ff0000;
    transform: translateX(10px);
  }

  input .warning {
    border: 1px solid black;
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
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