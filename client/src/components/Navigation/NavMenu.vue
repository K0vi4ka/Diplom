<template>
  <header class="header">
    <div class="header-nav" @click ="MenuClickHandler">
      <p class="logo">Ntime</p>
      <p class="header-nav__item" >Главное</p>
      <p class="header-nav__item" >Популярное</p>
      <p class="header-nav__item" v-for="category in allCategory" :key="category" >{{category}}</p>
    </div>

    <div class="help-items">
      <AuthItem v-if="!authStore.userId"/>

      <SignInUserItem v-if="authStore.userId" :userItem="authStore.userId" :key="authStore.userId"/>
    </div>

  </header>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import AuthItem from './AuthItem';
import SignInUserItem from '@/components/Navigation/SignInUserItem'
import UserService from '@/service/UserService';
import CategoryService from '@/service/CategoryService';
import { AuthStore } from '@/service/pinia-store';
import router from '@/router/router';

const userService = new UserService();
const categoryService = new CategoryService();

const authStore = AuthStore();


const allCategory = ref("")
const userRoles = ref();

const MenuClickHandler = (e) =>{
  console.log(e.target)
  if(e.target.getAttribute('class') === 'header-nav__item'){
    const navItem = [...document.querySelectorAll('.header-nav__item')];
    navItem.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')
    authStore.categoryName = e.target.innerHTML
    } 
    const path = window.location.href;
    if(path.split('/').reverse()[0] !== 'newsTime'){
      router.push('/newsTime')
    }
  }

onMounted(() =>{
  const token = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    if(token) {
      userService.getUserByToken({"token": token}).then(user =>{
        userService.getUserRoles(user.userId).then(roles =>{
          userRoles.value = roles
      })
     })
    }

    categoryService.getAllCategory().then(category =>{
      allCategory.value = category
    });

    if(authStore.categoryName === 'Главное') {
      document.querySelector('.header-nav__item').classList.add('active')
    }
    else {
      setTimeout(()=>{
        [...document.querySelectorAll('.header-nav__item')].forEach(item=>{
          if(item.innerHTML === authStore.categoryName){
            item.classList.add('active')
          }
        })
      },200)
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

  .logo {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration:underline;
    font-size: 1.5rem;
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