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

    
    <div class="share-block">
      <p class="share-par">Поделитесь данной публикацией</p>

      <div class="share-buttons">
      <ShareNetwork
    network="facebook"
    :url=router.currentRoute.value.path
    :title=pageAdditionalContent.newsName
    hashtags="vuejs,vite">
    <i class="pi pi-facebook icons" style="font-size: 2rem; color: #3b5998"></i>
    </ShareNetwork>

    <ShareNetwork
    network="vk"
    :url=router.currentRoute.value.path
    :title=pageAdditionalContent.newsName
    hashtags="vuejs,vite">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="39" height="39" viewBox="0 0 48 48">
<path fill="#1976d2" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M25.2,33.2c-9,0-14.1-6.1-14.3-16.4h4.5c0.1,7.5,3.5,10.7,6.1,11.3V16.8h4.2v6.5c2.6-0.3,5.3-3.2,6.2-6.5h4.2	c-0.7,4-3.7,7-5.8,8.2c2.1,1,5.5,3.6,6.7,8.2h-4.7c-1-3.1-3.5-5.5-6.8-5.9v5.9H25.2z"></path>
</svg>
    </ShareNetwork>

    <ShareNetwork
    network="telegram"
    :url=router.currentRoute.value.path
    :title=pageAdditionalContent.newsName
    hashtags="vuejs,vite">
    <i class="pi pi-telegram icons" style="font-size: 2rem; color: #0088cc"></i>
    </ShareNetwork>

    <ShareNetwork
    network="whatsapp"
    :url=router.currentRoute.value.path
    :title=pageAdditionalContent.newsName
    hashtags="vuejs,vite">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 58 58">
    <path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/><path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/></svg>
    </ShareNetwork>
    </div>
    </div>
    


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
  import LikesService from '@/service/LikesService';
  import router from '@/router/router';
  import { useToast } from 'primevue/usetoast';

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
  const toast = useToast();

  onMounted(async () => {

    let pathArr = router.currentRoute.value.path.split('/');
    let path = pathArr[pathArr.length - 1];

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
        publicationService.updatePublicationViews(publicatoin.id)
        let date = publicatoin.updateDate
        let newDate = publicationService.parsePublicationData(date)
        publicatoin.updateDate = newDate;
        pageAdditionalContent.value = publicatoin
      })
    })

    

  })

  setInterval(async () => {
    const commentsLength = comments.value.length;
      try {
        const newCommet =  await commentsService.isTableHaveNewRecord(commentsLength,store.currentPublication);
        comments.value.reverse()
        await newCommet.forEach(item => {
        comments.value.push(item);
      });
      comments.value.reverse()
      }
      catch(e){
        console.log(e)
      }
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
      try {
        const commentBody = {
        "value" : commentValue.value,
        "author" : store.userId
      }
      const commentsLength = comments.value.length;
      await commentsService.createComment(commentBody,store.currentPublication)
    
      try {
        const newCommet =  await commentsService.isTableHaveNewRecord(commentsLength,store.currentPublication);
        comments.value.reverse()
        await newCommet.forEach(item => {
        comments.value.push(item);
      });
      comments.value.reverse()
      }
      catch(e){
        console.log(e)
      }

      commentValue.value = ""; 
      toast.add({ severity: 'info', summary: 'Уведомление', detail: 'Ваш коментарий успешно создан', life: 3000 });
    }
    catch{
      toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Ошибка, ваш коментарий не создан', life: 3000 });
    }
         
    }
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

  .icons {
    margin: 0;
    padding: 0;
  }

  .share-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
  }

  .share-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }

  .share-par {
    font-size: 1.5rem;
    font-style: italic;
  }

  .share-par::first-letter {
    margin-left: 40px;
  }
</style>