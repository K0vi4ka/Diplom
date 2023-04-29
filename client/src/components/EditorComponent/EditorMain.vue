<template>
  <header>
    <NavMenuVue/>
  </header>

  <main class="main">

    <div class="side-menu" @click="changeSideMenuContentHandler">
      <p class="side-menu__item">Ваши статьи</p>
      <p class="side-menu__item">Создать новую статью</p>
      <p class="side-menu__item">Список пользователей</p>
      <p class="side-menu__item">Импортировать статьи</p>
    </div>

    
    <div class="content-wrapper">
      <h2 class="content-header">{{headerValue}}</h2>

      <div class="content" @click="selectNewsHandler">
      <div v-if="contentValue === 'news'">
        <div class="news" v-for="content in authorContent" :key="content">
          <NewsItem :content="content"/>
        </div>
      </div>

      <EditorCreateNewsVue v-if="contentValue  === 'create'"></EditorCreateNewsVue>
      <EditorUserList v-if="contentValue == 'usersList'" />
      <EditorImportNews v-if="contentValue == 'imoprtsNews'"/>
      
    </div>
    </div>
    
  </main>
</template>
<script setup>

  import {ref, onMounted,watch} from "vue"
  import NewsItem from "../NewsItem.vue";
  import NavMenuVue from "../Navigation/NavMenu.vue";
  import EditorCreateNewsVue from './EditorCreateNews.vue';
  import { PublicationService } from "@/service/PublicationService";
  import UserService from "@/service/UserService";
  import router from "@/router/router";
  import NewsService from "@/service/NewsService";
  import { AuthStore } from "@/service/pinia-store";
  import EditorUserList from "./EditorUserList.vue";
  import EditorImportNews from "./EditorImportNews.vue";

  const contentValue = ref("news");
  const authorContent = ref('')
  const publicationService = new PublicationService();
  const userService = new UserService();
  const newsService = new NewsService();
  const store = new AuthStore();

  const headerObj = {
    "news": "Ваши статьи",
    "create": "Создание новой статьи"
  }

  const headerValue = ref(headerObj[contentValue.value])

  const changeSideMenuContentHandler = (e) => {
    switch(e.target.innerHTML) {
      case 'Ваши статьи': contentValue.value = 'news' 
      break;
      case 'Создать новую статью': contentValue.value = "create"
      break;
      case 'Список пользователей' : contentValue.value = 'usersList'
      break;
      case 'Импортировать статьи' : contentValue.value = 'imoprtsNews'
      break;
      default: contentValue.value;
    }
    updateSideMenuStyle(e);
  }

  const updateSideMenuStyle = (e) =>{
    if(e.target.getAttribute('class') === "side-menu__item") {
      const sideMenuItems = [...document.querySelectorAll('.side-menu__item')]
      sideMenuItems.forEach(item => item.classList.remove('side-menu--active'))
      e.target.classList.add('side-menu--active');
    }
  }

  const findTargetName = (e) =>{
    if(e.target.getAttribute('class') ==='news-name'){
      return e.target.innerHTML
    }
    if(e.target.getAttribute('class') ==='news'){
      return e.target.children[0].innerHTML
    }
    else {
      return e.target.parentNode.children[0].innerHTML
    }
  }

  const selectNewsHandler = async (e) => {
    if(contentValue.value === "news") {
      let selectPage = findTargetName(e)
      await newsService.getNewsPathByName(selectPage).then(path =>{
        console.log(path)
        router.push(`/newsTime/news/${path.filePath.split('/')[1]}`)
      })
    }
    
  }

  onMounted(() => {
    let token = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken')
    userService.getUserByToken({"token": token}).then(user =>{
      publicationService.getPublicationByUserId(user.userId).then(data =>{
        authorContent.value = data;
      })
     })

     const sideMenuItem = document.querySelector('.side-menu__item');
     sideMenuItem.classList.add('side-menu--active');
  })

  watch(() => contentValue.value,() => {
    headerValue.value = headerObj[contentValue.value]
  });

  watch(() => store.categoryName,() => {
    router.push('/newsTime')
  });
  

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
    border-radius: 10px;
    width: 110vh;
  }

  .content-header {
    margin: 10px;
    margin-left: 10%;
    font-size: 40px;
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

  .news {
    width: 100vh;
    border-bottom: 3px solid #e2e2e2;
    padding: 10px;

  } 

  .news:hover {
    -webkit-box-shadow: -24px 6px 5px -5px rgba(183, 194, 202, 0.6);
    -moz-box-shadow: -24px 6px 5px -5px rgba(183, 194, 202, 0.6);
    box-shadow: -24px 6px 5px -5px rgba(183, 194, 202, 0.6);
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