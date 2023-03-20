<template lang="">
  <transition name="slide-fade">
    <div v-if="authStore.popup" class="popup-block" @click="popupClose"></div>
  </transition>

  <NavMenuVue />
  <ContentPageVue/>
</template>
<script setup>
import {onMounted} from 'vue';

  import NavMenuVue from '../Navigation/NavMenu.vue';
  import ContentPageVue from '../ContentPage.vue';
  import UserService from '@/service/UserService';
  import { AuthStore } from '@/service/pinia-store';

  const authStore = AuthStore();
  const userService = new UserService();

  const popupClose = () =>{
    authStore.updatePopup();
  }

  onMounted(()=>{
    const token = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    if(token) {
      userService.getUserByToken({"token": token}).then(user =>{
        authStore.userId = user.userId
     })
    }
  })

</script>
<style scoped>
  .popup-block {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #353535;
    opacity: 0.7;
  }

  .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>