<template lang="">
  <div class="content" ref="content"></div>
  <iframe :src="link" frameborder="0" class="frame"></iframe>
</template>
<script setup>
  import {ref,onMounted} from 'vue';
  import { AuthStore } from '@/service/pinia-store';
  import LinkedNewsService from "@/service/LinkedNewsService";

  const content = ref(null);
  const store = AuthStore();
  const linkedNewsService = new LinkedNewsService();
  const link= ref("")



  onMounted(async ()=>{
    console.log(store.linkNews)
    const resp =  await linkedNewsService.getContent(store.linkNews.id);
    content.value.innerHTML = resp;
    link.value = content.value.querySelector('a').innerHTML;

    
    
  })

</script>
<style >

.content {
  display: none;
}
  .frame {
    width: 100%;
    height: 1000px;
  }
</style>