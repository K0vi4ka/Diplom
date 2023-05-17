<template>
<router-view>

</router-view>
</template>

<script setup>

  import { onMounted } from 'vue';
  import { AuthStore } from './service/pinia-store';
  import UserService from './service/UserService';

  const store = AuthStore();
  const userService = new UserService();


  onMounted(async () => {
    const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    if(refreshToken) {
      const token = await userService.getToken(refreshToken);
      store.userId = await token.userId;
     }
    }
  )
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
