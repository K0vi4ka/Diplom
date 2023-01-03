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

    <div class="comments-block">
      <div class="comments-block-header">
       <p>Коментарии</p> 
      </div>
      <div class="comment-input">
        <Textarea class="castom-textarea" v-model="commentValue" :autoResize="true" rows="3" cols="30" />
        <br>
        <button id="comment-btn" @click="sendComment" class="comment-btn submit">Отправить</button>
        <button id="comment-btn" class="comment-btn cancel">Отмена</button>
      </div>
      <div class="news-comments">
        <NewsCommentVue />
      </div>
    </div>
  </div>
  
</template>
<script setup>
  import { onMounted,ref, watch } from 'vue';
  import NavMenuVue from './Navigation/NavMenu.vue';
  import NewsService from '@/service/NewsService';
  import { PublicationService } from '@/service/PublicationService';
  import Textarea from 'primevue/textarea';
  import NewsCommentVue from './NewsComment.vue';
  import { AuthStore } from '@/service/pinia-store';
  import CommentsService from '@/service/CommentsService';


  const newsService = new NewsService();
  const pageContent = ref('');
  const pageAdditionalContent = ref({})
  const publicationService = new PublicationService();
  const commentsService = new CommentsService();
  const store = new AuthStore();
  const commentValue = ref('')

  onMounted(() => {
    let path = window.location.hash.split('/')[3]

    newsService.getNewsContentByPath(path).then(fileContent =>{
      pageContent.value = fileContent
    })

    newsService.getNewsIdByPath(path).then(newsId =>{
      publicationService.getPublicationIdByNewsId(newsId.id).then(publicationId =>{
        store.updateCurrentPublication(publicationId.data)
      })
      publicationService.getPublicationByNewsId(newsId.id).then(publicatoin =>{
        let date = publicatoin.updateDate
        let newDate = publicationService.parsePublicationData(date)
        publicatoin.updateDate = newDate;
        pageAdditionalContent.value = publicatoin
      })
    }) 
  })

  watch(() => pageContent.value, async () => {
    document.querySelector('.content').innerHTML = pageContent.value
  });

  const sendComment = () =>{
    console.log(commentValue)
    const commentBody = {
      "value" : commentValue.value,
      "author" : store.userId
    }

    console.log(commentBody,store.currentPublication)
    commentsService.createComment(commentBody,store.currentPublication)
  }

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

  .content {
    margin: 20px;
  }

  .comments-block {
    border-top: 5px solid #e2e2e2;
  }

  .comments-block-header {
    font-size: 30px;
    background-color: #4169E1;
    color: #FFFFFF;
  }

  .comments-block-header>p {
    margin-left: 20px;
  }

  .comments-block>div {
    margin: 20px 0;
  }

  .castom-textarea {
    font-size: 28px;
    padding: 5px;
  }

  .comment-btn {
    height: 30px;
    background-color: #4169E1;
    color: #FFFFFF;
    border-radius: 10px;
    border: 0px;
    margin-left: 10px;
    padding: 5px;
  }
</style>