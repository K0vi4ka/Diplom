<template lang="">
  <div class="auth-menu" v-if="!AuthPerson">
    <button class="auth-menu__btn" @click="test">Войти</button>
    <button class="auth-menu__btn">Регистрация</button>
  </div>
  
  <transition>
    <LoginModal v-if="loginFlag" v-model ="loginFlag"></LoginModal>
  </transition>

</template>
<script setup>
  import { ref, onMounted} from 'vue'
  import LoginModal from "./LoginModal"

  let AuthPerson = ref(false);
  const loginFlag = ref(false);

  const test = function test() {
    if(loginFlag.value == true) return
    loginFlag.value = true;
  }

  onMounted(() =>{
    
  })
</script>
<style scoped>

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

  .auth-menu__btn:hover {
    transform: scale(1.2);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 2s
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>