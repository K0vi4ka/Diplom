<template lang="">
  <button @click=exitHandler class="user-option-menu__link">Выйти со страницы</button>
</template>
<script setup>
  import router from '@/router/router';
  import { AuthStore } from '@/service/pinia-store';

  const authStore = AuthStore();

  
  const exitHandler = () => {
    localStorage.removeItem("authtoken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("authtoken");
    sessionStorage.removeItem("refreshToken");
    authStore.updateUserId(null);
    router.push({path: "/newsTime"})
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