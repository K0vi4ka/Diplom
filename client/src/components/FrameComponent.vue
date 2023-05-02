<template lang="">
  <iframe class="frame" v-bind:src="link" allowpaymentrequest=true frameborder="0"></iframe>
</template>
<script setup>
  import {ref,onMounted} from 'vue';
  import { AuthStore } from '@/service/pinia-store';

  const link = ref("");
  const store = AuthStore();


  onMounted(()=>{
    link.value = store.linkNews;
  })

</script>
<style >
  .frame {
    width: 100%;
    height: 1000px;
  }
</style>