<template lang="">
  <div class="sign-in-item-wrapper">
  <p>{{userName}}</p>
  
  <div class="user-bloks">
    <div v-if="userRoles == 'admin'" :key="userRoles">
      <AdminMenu/>
    </div>
    
    <div v-if="userRoles=== 'user'">
      <UserMenu/>
    </div>
  </div>

</div>
</template>
<script setup>
  import {ref,onMounted} from 'vue'
  import UserMenu from './UserMenu.vue';
  import UserService from '@/service/UserService';
  import AdminMenu from './AdminMenu.vue';
  import { AuthStore } from '@/service/pinia-store';

  const userService = new UserService();
  const store = new AuthStore();

  const userRoles = ref('')
  const userName = ref('');

  onMounted(async ()=>{
    await userService.getUser(store.userId).then(user =>{
      userName.value = user.nickname
    })
    const token = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    
    if(token) {
      const user = await userService.getToken(token);
      userRoles.value = await userService.getUserRoles((await user).userId)
    }
  })
</script>
<style>
  .sign-in-item-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 150px;
  }
</style>