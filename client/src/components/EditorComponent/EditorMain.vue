<template>
  <header><SignInNavMenuVue/></header>

  <main class="main">
    <div class="side-menu" @click="changeSideMenuContentHandler">
      <p class="side-menu__item">Ваши статьи</p>
      <p class="side-menu__item">Создать новую статью</p>
    </div>

    <div class="content">
      <div v-if="contentValue === 'news'"> JUST CHECK</div>
      <EditorCreateNewsVue v-if="contentValue  === 'create'"></EditorCreateNewsVue>
    </div>
  </main>
</template>
<script setup>
  import {ref} from "vue"
  import SignInNavMenuVue from '../Navigation/SignInNavMenu.vue';
  import EditorCreateNewsVue from './EditorCreateNews.vue';

  const contentValue = ref("news");

  const changeSideMenuContentHandler = (e) => {
    console.log(e.target.innerHTML)
    switch(e.target.innerHTML) {
      case 'Ваши статьи': contentValue.value = 'news' 
      break;
      case 'Создать новую статью': contentValue.value = "create"
      break
      default: 
      break;
    }

    updateSideMenuStyle(e);
  }

  const updateSideMenuStyle = (e) =>{
    const sideMenuItems = [...document.querySelectorAll('.side-menu__item')]
    sideMenuItems.forEach(item => item.classList.remove('side-menu--active'))
    e.target.classList.add('side-menu--active');
  }

</script>
<style scoped>
  .main {
    display:  flex;
    justify-content: space-between;
    margin: 20px;
    margin-left: 0;
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    background-color:  #4169E1;
    min-width: 250px;
    border-radius: 0 10px 10px 0;
  }

  .side-menu__item {
    color:#FFFFFF;
  }

  .side-menu__item:hover {
    transform: translateX(20px);
    font-size: 1.2rem;
  }

  .side-menu--active {
    border-bottom: 2px solid #FFFFFF;
    font-size: 1.2rem;
  }

</style>