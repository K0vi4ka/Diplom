<template lang="">
  <h2>{{newsData[0]}}</h2>
  <p>{{newsData[1]}}</p>
  <div class = "news-info-item">
    <p>{{newsData[3]}}</p>
    <p class="news-author">Автор: {{newsData[2]}}</p>
  </div>

</template>

<script setup>

  import {ref, defineProps,onMounted} from 'vue'
  import { PublicationService } from '@/service/PublicationService';

  const props = defineProps(['content'])
  const publicationService = new PublicationService();
  const newsData = ref([])

  onMounted(() => {
    newsData.value = props.content
    newsData.value['3'] = publicationService.parsePublicationData(newsData.value['3'])
  })
</script>

<style >
  .news-author {
    font-style: italic;
    text-align: right;
  } 

  .news-info-item {
    display: flex;
    justify-content: space-between;
  }
</style>