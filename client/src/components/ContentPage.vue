<template lang="">
  <DynamicDialog />
  <main class="main">

    <div v-if="store.categoryName === 'Популярное' && publicDateArr.length !== 0" class="popular-news">
      <div class="select-block">
        <h2 class="popular_header">Популярное за {{publicDate.name}}</h2>
        <div class="select">
          <p>Выберит нужную вам дату</p>
          <Dropdown v-model="publicDate" editable :options="publicDateArr" optionLabel="name" placeholder="Select a City" @change="selectDate" class="dropdown-menu"/>
        </div>
      </div>
      
    </div>
    <div class="publication-wrapper" @click="selectNewsHandler">
      <div class="news" v-for="content in pageContent" :key="content">
          <NewsItem :content="content"/>
      </div>
    </div>
  
    <div class="publication-wrapper">
      <div class="news imports" v-for="item in importContent" :key="item" v-bind:href = "item.link" target="_blank" @click="OpenFrame">
          <ImportsItem :item="item"/>
      </div>
    </div>

    <div v-if="pageContent.length === 0 && importContent.length == 0">Ошибка загрузки</div>
  </main>
</template>
<script setup>

  import DynamicDialog from 'primevue/dynamicdialog';
  import NewsItem from '@/components/NewsItem.vue'
  import { ref, onMounted, watch} from 'vue';
  import { PublicationService } from '@/service/PublicationService';
  import CategoryService from '@/service/CategoryService';
  import router from '@/router/router';
  import NewsService from '@/service/NewsService';
  import { AuthStore } from '@/service/pinia-store';
  import LinkedNewsService from '@/service/LinkedNewsService';
  import Dropdown from 'primevue/dropdown';
  import ImportsItem from './ImportsItem.vue';


  const publicationService = new PublicationService();
  const categoryService = new CategoryService();
  const newsService = new NewsService();
  const linkedNewsService = new LinkedNewsService();
  const store = AuthStore();
  const publicDateArr = ref([]);
  const publicDate = ref("");


  const importContent = ref([]);
  const pageContent = ref([]);

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
    let selectPage = findTargetName(e)
    await newsService.getNewsPathByName(selectPage).then(path =>{
      router.push(`/newsTime/news/${path.filePath.split('/')[1]}`);
    })
  }

  const loadMainPage = async () =>{
    publicationService.getAllPublication().then(content =>{
         pageContent.value = content
      })
    importContent.value = await linkedNewsService.getAllLinkdeNews();
    console.log(importContent.value)
  }
  
  onMounted(async ()=>{
    const date = await publicationService.getPublicationDate()
    publicDateArr.value = publicationService.parsePopularPublicationDate(await date);
    publicDate.value = publicDateArr.value[0];
    

    if(!store.categoryName) {
      store.updateCategoryName("Главное");
    }
    if(store.categoryName === 'Главное'){
      loadMainPage();
    }
    else if(store.categoryName === 'Популярное') {
      console.log(publicDate.value.code)
      pageContent.value = await publicationService.getPopularPublicByDate(publicDate.value.code);
      importContent.value = [];
    }
    else {
      categoryService.getCaegoryValue(store.categoryName).then(async categoryId =>{
        publicationService.getPublicationByCategoryId(categoryId).then((publications)=>{
          pageContent.value = publications
       })
       importContent.value = await linkedNewsService.getAllLinkdNewsById(categoryId);
      })
    }
  })

  watch(() => store.categoryName, async () => {
    pageContent.value = []
    if(store.categoryName === 'Главное'){
      loadMainPage();
    }
    else if(store.categoryName === 'Популярное') {
      console.log(publicDate.value.code)
      pageContent.value = await publicationService.getPopularPublicByDate(publicDate.value.code);
      importContent.value = [];
    }
    else {
      categoryService.getCaegoryValue(store.categoryName).then(async categoryId =>{
        publicationService.getPublicationByCategoryId(categoryId).then((publications)=>{
          pageContent.value = publications
       })
       importContent.value = await linkedNewsService.getAllLinkdNewsById(categoryId);
       
      })
    }
  });

  const selectDate = async () => {
    pageContent.value = await publicationService.getPopularPublicByDate(publicDate.value.code);
    importContent.value = [];
  }

</script>
<style scoped>


  .publication-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%; 
    background-color: #e8e8e8;
    margin: 20px auto;
    margin-bottom: 0px;
    border-radius: 10px;
  }

  .publication-wrapper:nth-child(2) {
    margin-top: 0;
  }

  .news {
    padding: 20px;
    height: 150px;
    border-bottom: 2px solid #000000;
    transition: all 200ms;
  }

  .news:hover {
    font-size: 1.2rem;
    -webkit-box-shadow: -24px 6px 5px -5px rgba(183, 194, 202, 0.6);
    -moz-box-shadow: -24px 6px 5px -5px rgba(183, 194, 202, 0.6);
    box-shadow: -24px 6px 5px -5px rgba(183, 194, 202, 0.6);
  }

  .news-author {
    font-style: italic;
    text-align: right;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 2s
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .popular-news {
    margin-left: 50px;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .select-block {
    display: flex;
    align-items: center;
    width: 95%;
    justify-content: space-between;
  }

  .popular_header {
    margin-left: 50px;
  }
</style>