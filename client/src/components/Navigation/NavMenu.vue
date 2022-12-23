<template lang="">
  <header class="header">
    <div class="header-nav" @click ="MenuClickHandler" ref="itemsWrapper">
      <p class="header-nav__item" >Главное</p>
      <p class="header-nav__item" >Популярное</p>
      <p class="header-nav__item" >Спорт</p>
      <p class="header-nav__item" >Политика</p>
      <p class="header-nav__item" >Наука</p>
    </div>

    <div class="help-items">
      <AuthItem @updateUser="updateUser" v-if="!userItem"/>

      <SignInUserItem v-if="userItem" :userItem="userItem" :key="userItem"/>
    </div>

  </header>
</template>

<script setup>
import {ref, onMounted,watch,defineEmits} from 'vue'
import AuthItem from './AuthItem';
import SignInUserItem from '@/components/Navigation/SignInUserItem'
import UserService from '@/service/UserService';

const emit = defineEmits(['updateCategory'])
const userService = new UserService();

const itemsWrapper = ref("");
const selectCategory = ref();
const userItem = ref();
const userRoles = ref();

const updateUser = (value) =>{
  userItem.value = value
}

const MenuClickHandler = (e) =>{
  if(e.target.getAttribute('class') === 'header-nav__item'){
    const navItem = [...document.querySelectorAll('.header-nav__item')];
    navItem.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')
    selectCategory.value = e.target.innerHTML
    } 
  }

  watch(() => selectCategory.value, async () => {
    emit('updateCategory',selectCategory.value)
  });

onMounted(() =>{
  const token = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    if(token) {
      userService.getUserByToken({"token": token}).then(user =>{
        userItem.value = user.userId
        userService.getUserRoles(user.userId).then(roles =>{
          userRoles.value = roles
      })
     })
    }
  

  let headerCheck = false;
  [...itemsWrapper.value.children].forEach(item =>{
    if(item.getAttribute('class').split(' ')[1] === 'active'){
      headerCheck = true
    }
  })
  if(!headerCheck){
    itemsWrapper.value.children[0].classList.add('active')
  }
})

</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color:#164a47;
    color: #FFFFFF;
    padding: 0 10px;
    -webkit-box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.32);
-moz-box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.32);
box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.32);
  }

  .active {
    transform: translateY(5px); 
    font-size: 1.5rem;
    color:  #d53a3a;
  }

  .header-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    height: 100%;
  }

  .header-nav__item {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header-nav__item:hover {
    transform: translateY(5px);
    font-size: 1.5rem;
  }

</style>