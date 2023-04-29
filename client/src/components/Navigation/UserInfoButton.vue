<template lang="">
  <button @click=profileHandler class="user-option-menu__link">Ваш профиль</button>
</template>
<script setup>
  import router from '@/router/router';
  import { AuthStore } from '@/service/pinia-store';
  import UserService from '@/service/UserService';

  const authStore = AuthStore();
  const userService = new UserService();

  
  const profileHandler =  async () => {
    const userData = await userService.getUserByID(authStore.userId)
    authStore.updateSelctedUser(await userData);
    router.push("/newsTime/profile");
  }

</script>
<style>
  .user-option-menu__link {
    background-color: #047650;
    color: #FFFFFF;
    text-decoration: none;
    padding: 5px;
    background-color: #164a47;
    border: 0px;
  }

  .user-option-menu__link:hover {
    transform: scale(1.05);
    background-color: #047650;
  }
</style>