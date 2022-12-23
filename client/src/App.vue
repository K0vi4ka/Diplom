<template>
  <router-view />

</template>

<script setup>
  import { onMounted } from 'vue';
  import router from './router/router';

  onMounted(() => {
    router.push('newsTime');
  })


</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
