<template>
 <form class="modal" @focusout="collectInp" ref="formBlock">
    <div class="modal-name">
      <label for="reg-name">Введите Ваше ФИО</label>
      <div class="input-wrapper">
        <input type="text" id="reg-FIO" v-model="nameInp" ref="nameInpRef" placeholder="Иванов Иван">
        <p class="name-warnings error"></p>
      </div>
    </div>

    <div class="modal-email">
      <label for="reg-email">Введите электронную почту</label>
      <div class="input-wrapper">
        <input type="email" id="reg-email" v-model="emailInp" ref="emailInpRef" placeholder="somemail@mail.ru">
        <p class="email-warnings error"></p>
      </div>
    </div>

    <div class="modal-phone">
      <label for="reg-phone">Введите ваш мобильный телефон</label>
      <div class="input-wrapper">
        <InputMask id="reg-phone" v-model="phoneInp" mask="+375 (99) 999-99-99?" ref="phoneInpRef"/>
        <p class="phone-warnings error"></p>
      </div>
    </div>

    <div class="modal-login">
      <label for="reg-nickname">Введите псевдоним</label>

      <div class="input-wrapper">
        <input type="text" id="reg-nickname" v-model="loginInp" ref="loginInpRef" placeholder="ivan89">
        <p class="login-warnings error"></p>
      </div> 
    </div>

    <div class="modal-password">
      <label for="reg-password">Введите пароль</label>

      <div class="input-wrapper">
        <input type="password" id="reg-password" v-model="passInp" autocomplete="off" ref="passInpRef" placeholder="password">
        <p class="pass-warnings error"></p>
      </div>
    </div>

    <div class="modal-access-password">
      <label for="reg-access-password">Подтвердите введенный пароль</label>

      <div class="input-wrapper">
        <input type="password" id="reg-access-password" v-model="accesspasswordInp" autocomplete="off" ref="accesspassInpRef">
        <p class="access-pass-warnings error"></p>
      </div>
    </div>
    
    <div class="btn-container">
      <button class="btn-container__btn" @click="sendRegData">OK</button>
      <button class="btn-container__btn" @click="cancelBtnHandler">Отмена</button>
    </div>

  </form>
</template>
<script setup>
  import {ref} from "vue";
  import { AuthStore } from "@/service/pinia-store";
  import ValidateUserData from "@/service/ValidateUserData"
  import InputMask from 'primevue/inputmask';
  import AuthService from '@/service/AuthService';

  const nameInp = ref("");
  const emailInp = ref("");
  const loginInp = ref("");
  const passInp = ref("");
  const phoneInp = ref("")
  const accesspasswordInp = ref("");
  const formBlock = ref('')

  const nameInpRef = ref();
  const emailInpRef = ref();
  const loginInpRef = ref();
  const passInpRef = ref();
  const accesspassInpRef= ref();
  const phoneInpRef = ref();

  

  const authStore = new AuthStore();
  const validUserData = new ValidateUserData();
  const authService = new AuthService();

  const regErrorObj = {
    "reg-name" : "Ошибка, введенное имя введенно не корректно",
    "reg-email" : "Ошибка, электронная почта введена не корректно",
    "reg-nickname" : "Ошибка, данный логин уже используется",
    "reg-password" : "Ошибка, в вашем пароле используются запрещенные символы",
    "reg-access-password" : "Ошибка, введенные пароли не совпадают",
    "reg-phone": "Ошибка, введенный номер телефона не правильный"
  }


  const sendRegData = async (e) => {
    e.preventDefault();
    const inpArr = [...formBlock.value.elements].filter((item,idx) => idx < 6);
    inpArr.forEach(item => {
      inputValidHandler(item);
    })
    const sendRegInp = inpArr.filter((item,idx) => {
      if(idx < inpArr.length -1) {
        return item.value
      }
    })
    

    const {accessToken,refreshToken,user} = await authService.registration(sendRegInp);
   
      if(accessToken)
      {
        sessionStorage.setItem('authtoken',accessToken);
        sessionStorage.setItem('refreshToken',refreshToken);
        authStore.updateUserId(user.id);
      }  
      authStore.updatePopup()    
    }

  const inputValidHandler = async (input) => {
    let result;
    switch(input) {
      case emailInpRef.value:  result = validUserData.emailValid(emailInp.value) && await validUserData.emailExist(emailInp.value);
        break;
      case passInpRef.value:result = validUserData.passwordValid(passInp.value);
        break;
      case accesspassInpRef.value: result = validUserData.accessPass(passInp.value, accesspasswordInp.value)
        break;
      case nameInpRef.value : result = validUserData.nameAndSurnameValid(nameInp.value)
        break;  
      case loginInpRef.value : result = await validUserData.nicknameExist(loginInp.value)
        break;
      case phoneInpRef.value : result = validUserData.phoneValid(phoneInp.value)
        break;
      default:
        break;
    }

    if(result === false) {
      input.classList.add('warning');
      input.parentNode.children[1].innerHTML = regErrorObj[input.getAttribute('id')]
    }
    else {
      input.classList.remove('warning');
      input.parentNode.children[1].innerHTML = "" 
    }
  }

  const collectInp = async (e) => {
    inputValidHandler(e.target);
  }


  const cancelBtnHandler = (e) => {
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
    color:#000000;
    background: #fff;
    border: 5px solid #4169E1;;
    border-radius: 8px;
    padding: 15px;
    min-width: 450px;
    max-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal div {
    display: flex;
    justify-content: space-between;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width:500px
  }

  label{
    display: inline-block;
    width: 150px;
  }

  input{
    font-size: 20px;
    margin: 0 10px;
  }

  .warning {
    border: 2px solid rgb(255, 0, 0);
  }

  .error {
    font-size: 12px;
    color: rgb(255, 0, 0);
    height: 40px;
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

  label {
    height: 40px
  }


</style>