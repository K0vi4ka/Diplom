<template >
  <div class="comment-item-container" :data-id= comment.id >
    <div class="comment-info">
    <p>{{ comment.user }}</p>
    <p>{{ comment.date }}</p>
  </div>

  <div class="comment">
    <p class="comment-content">{{ comment.value }}</p>

  </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
  <Toast/>
</template>
<script setup>
  import { ref,defineProps,onMounted } from 'vue';
  import { PublicationService } from '@/service/PublicationService';

  const props = defineProps(['comment'])
  const comment = ref([]);
  const publicationService = new PublicationService();


  onMounted(async () => {
    comment.value = props.comment;
    let newDate = publicationService.parsePublicationData(props.comment.date);
    comment.value.date = newDate;
  })

  

</script>
<style >
  .comment-info {
    display: flex;
    justify-content: space-between;
    background-color: #f4f4f4;    
  }

  .comment-info p {
    margin:10px ;

  }

  .comment {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 20px;
    padding: 10px;
  }

  .comment-content {
    width: 80%;
  }

  .comment-item-container {
    border-bottom: 3px solid #c1c1c1;
    width: 98%;
  }

</style>