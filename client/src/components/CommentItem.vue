<template >
  <div class="comment-item-container">
    <div class="comment-info">
    <p>{{ comment.user }}</p>
    <p>{{ comment.date }}</p>
  </div>

  <div class="comment-value">
    <p>{{ comment.value }}</p>
  </div>
  </div>
 
</template>
<script setup>
  import { ref,defineProps,onMounted } from 'vue';
  import { PublicationService } from '@/service/PublicationService';

  const props = defineProps(['comment'])
  const comment = ref([]);
  const publicationService = new PublicationService();
  

  onMounted(() => {
    comment.value = props.comment
    let newDate = publicationService.parsePublicationData(props.comment.date);
    comment.value.date = newDate
  })

</script>
<style >
  .comment-info {
    display: flex;
    background-color: #f4f4f4;    
  }

  .comment-info p {
    margin:10px ;

  }

  .comment-value {
    margin-left: 10px;
    font-size: 20px;
  }

  .comment-item-container {
    border-bottom: 3px solid #c1c1c1;
  }

</style>