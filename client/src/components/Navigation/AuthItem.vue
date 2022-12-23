<template lang="">
  <div class="auth-menu" v-if="!AuthPerson">
    <button class="auth-menu__btn" @click="test">Войти</button>
    <button class="auth-menu__btn">Регистрация</button>
  </div>
  
  <transition>
    <LoginModal v-if="loginFlag" v-model ="loginFlag" @updateUser="updateUser"></LoginModal>
  </transition>

</template>
<script setup>
  import { ref, defineEmits,watch} from 'vue'
  import LoginModal from "./LoginModal"
  const user = ref('')

  const updateUser = (value) =>{
    user.value = value
  }


  const emit = defineEmits(['updateUser'])
  let AuthPerson = ref(false);
  const loginFlag = ref(false);

  const test = function test() {
    if(loginFlag.value == true) return
    loginFlag.value = true;
  }

  watch(() => user.value, async () => {
    emit('updateUser',user.value)
  });


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
</style>