<template >
  <div class="news-wrapper">
    <div>
      <h2>{{ data.title }}</h2>
      <p>{{categoryName}}</p>
    </div>

    <div class = "news-info-item">
      <p>{{ data.date }}</p>
      <p class="news-author">Автор: {{sourceName}}</p>
    </div>
  </div>

</template>
<script setup>
  import {ref, defineProps,onMounted} from 'vue';
   import { PublicationService } from '@/service/PublicationService';

  const props = defineProps(['item']);
  const data = ref([])
  const publicationService = new PublicationService();
  const categoryName = ref("");
  const sourceName = ref("");
  

  onMounted(() => {
    data.value = props.item;
    categoryName.value = data.value.category.value;
    sourceName.value = data.value.linkeSource.source;
    data.value.date = publicationService.parsePublicationData(data.value.date)

  })

</script>
<style>
  .news-author {
    font-style: italic;
    text-align: right;
  } 

  .news-info-item {
    display: flex;
    justify-content: space-between;
  }

  .news-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a{
    text-decoration: none;
  }

  a:visited{
    color: black;
  }

  a:link {
    color: black;
  }
</style>