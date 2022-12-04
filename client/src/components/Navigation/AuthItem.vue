<template lang="">
  <div class="auth-menu" v-if="!AuthPerson">
    <button class="auth-menu__btn">Войти</button>
    <button class="auth-menu__btn">Регистрация</button>
  </div>
  <div class="person-menu" v-if="AuthPerson">
    <p class="person-menu__item">{{person}}</p>
    <button>change</button>
  </div>
</template>
<script setup>
  import { ref, onMounted} from 'vue'
  //import UserService from "../../service/UserService"

  let AuthPerson = ref(false);
  let person = ref("");
  //const userService = ref(new UserService());

  onMounted(() =>{
    let authStorage = localStorage.getItem('person');
    let authSession;
    if(authStorage){
      authSession = authStorage;
    }
    else {
      authSession = sessionStorage.getItem('person')
    }
    if(authSession) {
      person.value = authSession;
      AuthPerson.value = true
    }
    console.log(person.value)
   //console.log(userService.value.getUser(1))
  })
</script>
<style>

  .auth-menu {
    display: flex;
    justify-content: space-around;
    width: 250px;
  }
  .auth-menu__btn {
    height: 50px;
    width: 100px;
    background-color: #4169E1;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #708090;
  }
</style>