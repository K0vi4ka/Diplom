<template lang="">
  <NavMenuVue/>

  <div class="wrapper">
    <div class="news-info">
      <span class="news-header">{{pageAdditionalContent.newsName}}</span>
      <p class="news-author">Автор статьи {{pageAdditionalContent.nickname}}</p>
      <p class="news-category">Категория {{pageAdditionalContent.categoryName}}</p>
      <p class="news-created-date">Созданно {{pageAdditionalContent.updateDate}}</p>
    </div>

    <div class="content"></div>
  </div>
  
</template>
<script setup>
  import { onMounted,ref, watch } from 'vue';
  import NavMenuVue from './Navigation/NavMenu.vue';
  import NewsService from '@/service/NewsService';
  import { PublicationService } from '@/service/PublicationService';

  const newsService = new NewsService();
  const pageContent = ref('');
  const pageAdditionalContent = ref({})
  const publicationService = new PublicationService();
  const mounthArray = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]


  onMounted(() => {
    let path = window.location.hash.split('/')[3]

    newsService.getNewsContentByPath(path).then(fileContent =>{
      pageContent.value = fileContent
    })

    newsService.getNewsIdByPath(path).then(newsId =>{
      publicationService.getPublicationByNewsId(newsId.id).then(publicatoin =>{
        let date = publicatoin.updateDate.split("T")[0].split('-').reverse()
        let newDate = date.reduce((preValue,item,index) =>{
          return index === 1? preValue+ mounthArray[index]+" ": preValue+item+" "
        },"")
        publicatoin.updateDate = newDate;
        pageAdditionalContent.value = publicatoin
      })
    }) 
  })

  watch(() => pageContent.value, async () => {
    document.querySelector('.content').innerHTML = pageContent.value
  });

</script>
<style >
  img {
    max-height: 400px;
  }

  .wrapper {
    padding: 10px;
  }

  .news-info {
    border-bottom: 5px solid #e2e2e2;
  }

  .news-header {
    font-size: 2.5rem;
    font-style: italic;
  }

  .news-author {
    text-align: right;
    font-style: italic;
  }

  .news-category {
    text-align: right;
    font-style: italic;
  }


</style>