<template>
  <div class="comments-container">
    <h1>COmments</h1>

    <div class="comments-conteiner" v-for="comment in comments" :key="comment">
      <p>{{comment.user}}</p>
      <p>{{comment.value}}</p>
      <p>{{comment.date}}</p>

    </div>
  </div>
</template>

<script setup>
import {onMounted,ref} from "vue"
import CommentsService from "@/service/CommentsService";

  //const props = defineProps({news:Number})
  const comments = ref([])
  const commentsService = new CommentsService();

  onMounted(() => {
    commentsService.getCommentsByPublicationId(32).then(data =>{
      console.log(data)
      comments.value = data
    })
  })
</script>

<style scoped>
  
</style>