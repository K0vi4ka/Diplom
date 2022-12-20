<template lang="">
  <header class="header">
    <div class="header-nav" @click = "MenuClickHandler" ref="itemsWrapper">
      <p class="header-nav__item" ref="main">Главное</p>
      <p class="header-nav__item">Популярное</p>
      <p class="header-nav__item">Спорт</p>
      <p class="header-nav__item">Политика</p>
      <p class="header-nav__item">Наука</p>
    </div>

    <p>{{userName}}</p>
  </header>
</template>

<script setup>
  import {ref, onMounted} from 'vue'
  import UserService from '@/service/UserService';
const navComp ={
  "Главная": "main",
  "Популярное": "popular",
  "Спорт": "sport",
  "Политика": "politic",
  "Наука": "science",
}

const userService = new UserService();
const userName = ref("")
const itemsWrapper = ref("");
const selectCategory = ref('');

const MenuClickHandler = (e) =>{
  if(e.target.getAttribute('class') === 'header-nav__item'){
    const navItem = [...document.querySelectorAll('.header-nav__item')];
    navItem.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active');
    selectCategory.value = navComp[e.target.innerHTML];
  }
}

onMounted(() =>{
  const token = localStorage.getItem('refreshToken');
   userService.getUserByToken({"token": token}).then(userData =>{
    userService.getUser(userData.userId).then(data =>{
      userName.value = data.nickname
    })
  })

  itemsWrapper.value.children[0].classList.add('active')
})

</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color:#C71585;
    color: #FFFFFF;
    padding: 0 10px;
  }

  .active {
    transform: translateY(5px); 
    font-size: 1.5rem;
    color: #000000;
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