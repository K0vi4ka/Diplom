<template lang="">
  <main class="main">
    <div class="publication-wrapper" @click="selectNewsHandler">
      <div class="news" v-for="content in pageContent" :key="content">
          <NewsItem :content="content"/>
      </div>
    </div>
    
    <div v-if="pageContent.length === 0">Ошибка загрузки</div>
  </main>
</template>
<script setup>
  import NewsItem from '@/components/NewsItem.vue'
  import { ref, defineProps, onMounted, watch } from 'vue';
  import { PublicationService } from '@/service/PublicationService';
  import CategoryService from '@/service/CategoryService';
  import router from '@/router/router';
  import NewsService from '@/service/NewsService';

  const contentProps = defineProps(['content']);
  const publicationService = new PublicationService();
  const categoryService = new CategoryService();
  const newsService = new NewsService();
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
      console.log(path)
      router.push(`/newsTime/news/${path.split('/')[1]}`)
    })
  }

  const loadMainPage = () =>{
    publicationService.getAllPublication().then(content =>{
         pageContent.value = content
      })
  }
  
  onMounted(()=>{
    if(contentProps.content === 'Главное'){
      loadMainPage();
    }
  })

  watch(() => contentProps.content, async () => {
    pageContent.value = []
    if(contentProps.content === 'Главное'){
      loadMainPage();
    }
    else if(contentProps.content === 'Популярное') {
      console.log('Возможно потом')
    }
    else {
      categoryService.getCaegoryValue(contentProps.content).then(categoryId =>{
        publicationService.getPublicationByCategoryId(categoryId).then((publications)=>{
          pageContent.value = publications
       })
       
      })
    }


  });

</script>
<style scoped>


  .publication-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%; 
    background-color: #e8e8e8;
    margin: 20px auto;
    border-radius: 10px;
  }

  .news {
    padding: 20px;
    height: 100px;
    border-bottom: 2px solid #000000;
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
</style>