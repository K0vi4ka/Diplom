<template>
  <div class="comments-container"  v-if="commentsValue.length !== 0">

    <div class="comments-conteiner" v-for="comment in commentsValue" :key="comment">
      <CommentItem  :comment="comment" />
    </div>
  </div>
</template>

<script setup>
import {ref,defineProps,onMounted} from "vue"
import CommentItem from '@/components/CommentItem.vue'


  const props = defineProps(["comments"])
  const commentsValue = ref([])

  onMounted(async () => {
    commentsValue.value = await props.comments;
    console.log(commentsValue.value)
  })
</script>

<style scoped>
  
</style>