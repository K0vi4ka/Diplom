<template lang="">
  <main class="main">
    <div class="publication-wrapper" >
      <div class="news" v-for="content in pageContent" :key="content">
        <h2 class="news-name">{{content[0]}}</h2>
        <p class="news-category">{{content[1]}}</p>
        <p class="news-author">Автор {{content[2]}}</p>
      </div>
    </div>
    <div v-if="pageContent.length === 0">Ошибка загрузки</div>
  </main>
</template>
<script setup>
  import { ref, defineProps, onMounted, watch } from 'vue';
  import { PublicationService } from '@/service/PublicationService';
  import CategoryService from '@/service/CategoryService';

  const contentProps = defineProps(['content']);
  const publicationService = new PublicationService();
  const categoryService = new CategoryService();
  const pageContent = ref([]);

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
        console.log(categoryId)
        publicationService.getPublicationByCategoryId(categoryId).then((publications)=>{
          console.log(publications)
          pageContent.value = publications
       })
       
      })
    }
  });

</script>
<style scoped>


  .publication-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 90%; 
    margin: auto;
    background-color: #f7d2d2;
  }

  .news {
    min-width: 200px;
    padding: 20px;
    height: 100px;
    border: 2px solid ;
    margin: 3px;
  }

  .news-author {
    font-style: italic;
    text-align: right;
  }
</style>