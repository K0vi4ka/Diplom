<template lang="">
  <NavMenuVue @updateCategory="updateCategory"/>
  <ContentPageVue :content="selectCategory"/>
</template>
<script setup>
import {ref, onMounted} from 'vue';

  import NavMenuVue from '../Navigation/NavMenu.vue';
  import UserService from '@/service/UserService'
  import ContentPageVue from '../ContentPage.vue';
  import router from '@/router/router';

  const userService = new UserService();
  const selectCategory = ref('Главное');

  const updateCategory = (value) =>{
    selectCategory.value = value
  }

  onMounted(()=>{
    const token = localStorage.getItem('refreshToken');
    if(token) {
      userService.getUserByToken({"token": token}).then(user =>{
        userService.getUserRoles(user.userId).then(roles =>{
        if(roles === 'admin'){
          router.push('/editorMain')
        }
      })
     })
    }
})

</script>
<style scoped>
  
</style>