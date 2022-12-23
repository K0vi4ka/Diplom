<template lang="">
  <h2>{{newsData[0]}}</h2>
  <p>{{newsData[1]}}</p>
  <p class="news-author">{{newsData[2]}}</p>
</template>

<script setup>

  import {ref, defineProps,onMounted} from 'vue'
  const props = defineProps(['content'])
  const newsData = ref([])

  onMounted(() => {
    newsData.value = props.content


  })
</script>

<style >
  .news-author {
    font-style: italic;
    text-align: right;
  }
</style>