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

    <svg @click="changeHeart" style="color: red" xmlns="http://www.w3.org/2000/svg" width="18" height="16"  class="bi bi-suit-heart-fill heart" viewBox="0 0 16 16" fill="white"> <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" stroke="red" class="" ></path> </svg>

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

      <div class="news-comments" >
        <NewsCommentVue :comments="comments" v-model="comments" v-if="comments.length !== 0"/>
      </div>
    </div>
  </div>
  <DynamicDialog />
</template>
<script setup>
  import { onMounted,ref, watch,defineAsyncComponent,provide } from 'vue';
  import NavMenuVue from './Navigation/NavMenu.vue';
  import NewsService from '@/service/NewsService';
  import { PublicationService } from '@/service/PublicationService';
  import Textarea from 'primevue/textarea';
  import NewsCommentVue from './NewsComment.vue';
  import { AuthStore } from '@/service/pinia-store';
  import CommentsService from '@/service/CommentsService';
  import { useDialog } from 'primevue/usedialog';
  import DynamicDialog from 'primevue/dynamicdialog';
  import LikesService from '@/service/LikesService';

  const LoginModal = defineAsyncComponent(() => import('./Navigation/LoginModal.vue'));
  const dynamicDialog = useDialog();


  const newsService = new NewsService();
  const likesService = new LikesService();
  const pageContent = ref('');
  const pageAdditionalContent = ref({})
  const publicationService = new PublicationService();
  const commentsService = new CommentsService();
  const store = new AuthStore();
  const commentValue = ref('')
  const comments = ref([]);

  onMounted(async () => {


    let path = window.location.hash.split('/')[3]

    newsService.getNewsContentByPath(path).then(fileContent =>{
      pageContent.value = fileContent
    })

    newsService.getNewsIdByPath(path).then(newsId =>{
      publicationService.getPublicationIdByNewsId(newsId.id).then(async publicationId =>{
        
    const heart = await likesService.isUserHaveLike(publicationId,store.userId);
    console.log(heart)
    if(heart) {
      document.querySelector('.heart').setAttribute("fill","red")
      likeRef.value = true
    }
    else {
      document.querySelector('.heart').setAttribute("fill","white")
      likeRef.value = false;
    }
        store.updateCurrentPublication(publicationId)
        commentsService.getCommentsByPublicationId(publicationId).then(comm => {
          comments.value = comm.reverse();
          console.log(comments.value)
        })

      })
      publicationService.getPublicationByNewsId(newsId.id).then(publicatoin =>{
        let date = publicatoin.updateDate
        let newDate = publicationService.parsePublicationData(date)
        publicatoin.updateDate = newDate;
        pageAdditionalContent.value = publicatoin
      })
    })

  })

  setInterval(() => {
    commentsService.getCommentsByPublicationId(store.currentPublication).then(comm => {
          comments.value = comm.reverse();
          console.log(comments.value)
    })
  },5000)

  watch(() => pageContent.value, async () => {
    document.querySelector('.content').innerHTML = pageContent.value
  });

  watch(comments.value,() => {

  })

  const sendComment = async () =>{
    if(store.userId == null) {
      provide("dynamicDialog",dynamicDialog)
        dynamicDialog.open(LoginModal, {
        props: {
            header: 'Ваши данные',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            data: {

            },

            modal: true,
            
            onClose: () => {
              return
            }
        },
    })
    }
    else {
      const commentBody = {
      "value" : commentValue.value,
      "author" : store.userId
    }
    commentsService.createComment(commentBody,store.currentPublication)
    }
    commentsService.getCommentsByPublicationId(store.currentPublication).then(comm => {
          comments.value = comm.reverse();
    })
    commentValue.value = "";    
  }

  const likeRef = ref(false)
  const changeHeart = () => {
    if(store.userId === null) {
      provide("dynamicDialog",dynamicDialog)
        dynamicDialog.open(LoginModal, {
        props: {
            header: 'Ваши данные',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            data: {

            },

            modal: true,
            
            onClose: () => {
              return
            }
        },
    })
    }
      const heart = document.querySelector(".heart")
      console.log(heart)
      if(!likeRef.value){
          likesService.createLike(store.getCurrentPublicationId(),store.userId)
          heart.classList.remove("heart-unscale")
          heart.setAttribute("fill","red");
          heart.classList.add("heart-scale")
      }
      else {
        likesService.deleteLike(store.getCurrentPublicationId(),store.userId)
        heart.classList.remove("heart-scale")
        heart.setAttribute("fill","white");
        heart.classList.add("heart-unscale")
      }
      likeRef.value = !likeRef.value
  }

</script>
<style >

  .heart {
    position: relative;
    bottom: 20px;
    left: 90%;
    transform: scale(4);
  }

  .heart-scale {
    animation-name: scale;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }

  .heart-unscale {
    animation-name: unscale;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }
  
  @keyframes unscale {
    0% {
      transform: scale(4);
    }
    50% {
      transform: scale(3);
    }
    100% {
      transform: scale(4);
    }
  }

  @keyframes scale {
    0% {
      transform: scale(4);
    }
    50% {
      transform: scale(6);
    }
    100% {
      transform: scale(4);
    }
    
  }
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
    margin-bottom: 50px;
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