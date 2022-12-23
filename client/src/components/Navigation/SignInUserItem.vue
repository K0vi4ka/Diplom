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
  import {ref,defineProps,onMounted} from 'vue'
  import UserMenu from './UserMenu.vue';
  import UserService from '@/service/UserService';
  import AdminMenu from './AdminMenu.vue';


  const props = defineProps(['userItem'])
  const userName = ref('');
  const userService = new UserService();
  const userRoles = ref('')

  onMounted(()=>{
    userService.getUser(props.userItem).then(user =>{
      userName.value = user.nickname
      
    })
    userService.getUserRoles(props.userItem).then(roles=>{
      userRoles.value = roles
      console.log(userRoles.value)
    })
  })
</script>
<style>
  .sign-in-item-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 150px;
  }
</style>