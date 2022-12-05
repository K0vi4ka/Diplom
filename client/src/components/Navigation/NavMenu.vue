<template lang="">
  <header class="header">
    <div class="header-nav">
      <p class="header-nav__item">Главное</p>
      <p class="header-nav__item">Популярное</p>
      <p class="header-nav__item">Спорт</p>
      <p class="header-nav__item">Политика</p>
      <p class="header-nav__item">Наука</p>
    </div>

    <AuthItem/>
  </header>
</template>

<script setup>
import AuthItem from './AuthItem';
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color:#C71585;
    color: #FFFFFF;
    padding: 0 10px;
  }

  .header-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: Mo;
    width: 70%;
    height: 100%;
  }
</style>