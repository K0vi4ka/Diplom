<template>
  <div class="comments-container"  v-if="commentsValue.length !== 0">

    <div class="comments-conteiner" v-for="comment in commentsValue"  @change="changeData" :key="comment">
      <CommentItem  :comment="comment"  />
    </div>
  </div>
</template>

<script setup>
import {ref,defineProps,onMounted,watch} from "vue"
import CommentItem from '@/components/CommentItem.vue'


  const props = defineProps(["comments"])
  const commentsValue = ref([])

  onMounted(async () => {
    commentsValue.value = await props.comments;
    console.log(commentsValue.value)
  })

  watch(props,async () => {
    commentsValue.value = await props.comments;
    console.log(commentsValue.value)
  })

  const changeData = () => {
    console.log("work")
  }


</script>

<style scoped>
  
</style>