<template>
  <div class="auth-menu" v-if="!AuthPerson">
    <button class="auth-menu__btn" @click="showModal">Войти</button>
    <button class="auth-menu__btn">Регистрация</button>
  </div>
  
  <transition name="nested">
      <LoginModal v-if="authStore.popup" v-model ="loginFlag"></LoginModal>
  </transition>

</template>
<script setup>
  import { ref} from 'vue'
  import LoginModal from "./LoginModal"
  import { AuthStore } from '@/service/pinia-store';

  let AuthPerson = ref(false);
  const loginFlag = ref(false);
  const authStore = AuthStore();

  const showModal = () => {
    console.log(authStore.popup)
    authStore.updatePopup();
  }

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

  .nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>