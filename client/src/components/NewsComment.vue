<template>
  <div class="comments-container">

    <div class="comments-conteiner" v-for="comment in comments" :key="comment">
      <CommentItem :comment="comment"/>
    </div>
  </div>
</template>

<script setup>
import {onMounted,ref} from "vue"
import CommentItem from '@/components/CommentItem.vue'
import CommentsService from "@/service/CommentsService";
import { AuthStore } from "@/service/pinia-store";


  const comments = ref([])
  const commentsService = new CommentsService();
  const store = AuthStore();

  onMounted(() => {
    commentsService.getCommentsByPublicationId(Number(store.currentPublication)).then(data =>{
      comments.value = data
    })
  })
</script>

<style scoped>
  
</style>