<template>
  <header>
    <NavMenuVue/>
  </header>

  <main class="main">
    <div class="side-menu" @click="changeSideMenuContentHandler">
      <p class="side-menu__item">Ваши статьи</p>
      <p class="side-menu__item">Создать новую статью</p>
    </div>

    <div class="content">
      <div v-if="contentValue === 'news'">
        <div class="author-news" v-for="content in authorContent" :key="content">
          <NewsItem :content="content"/>
        </div>
      </div>

      <EditorCreateNewsVue v-if="contentValue  === 'create'"></EditorCreateNewsVue>
    </div>
  </main>
</template>
<script setup>

  import {ref, onMounted} from "vue"
  import NewsItem from "../NewsItem.vue";
  import NavMenuVue from "../Navigation/NavMenu.vue";
  import EditorCreateNewsVue from './EditorCreateNews.vue';
  import { PublicationService } from "@/service/PublicationService";
  import UserService from "@/service/UserService";

  const contentValue = ref("news");
  const authorContent = ref('')
  const publicationService = new PublicationService();
  const userService = new UserService();

  const changeSideMenuContentHandler = (e) => {
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

  onMounted(() => {
    let token = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken')
    userService.getUserByToken({"token": token}).then(user =>{
      publicationService.getPublicationByUserId(user.userId).then(data =>{
        authorContent.value = data;
      })
     })
  })

</script>
<style scoped>
  .main {
    display:  flex;
    margin: 20px;
    margin-left: 0;
  }

  .content {  
    margin-left: 10%;
    -webkit-box-shadow: 1px 0px 14px 10px rgba(34, 60, 80, 0.08) inset;
    -moz-box-shadow: 1px 0px 14px 10px rgba(34, 60, 80, 0.08) inset;
    box-shadow: 1px 0px 14px 10px rgba(34, 60, 80, 0.08) inset;
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    background-color:  #047650;
    min-width: 250px;
    border-radius: 0 10px 10px 0;
    -webkit-box-shadow: 6px 10px 8px 0px rgba(34, 60, 80, 0.39);
    -moz-box-shadow: 6px 10px 8px 0px rgba(34, 60, 80, 0.39);
    box-shadow: 6px 10px 8px 0px rgba(34, 60, 80, 0.39);
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