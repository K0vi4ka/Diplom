<template lang="">
  <header class="header">
    <div class="header-nav" @click ="MenuClickHandler" ref="itemsWrapper">
      <p class="header-nav__item" >Главное</p>
      <p class="header-nav__item" >Популярное</p>
      <p class="header-nav__item" >Спорт</p>
      <p class="header-nav__item" >Политика</p>
      <p class="header-nav__item" >Наука</p>
    </div>
    <AuthItem/>
  </header>
</template>

<script setup>
import {ref, onMounted,watch,defineEmits} from 'vue'
import AuthItem from './AuthItem';
const emit = defineEmits(['updateCategory'])

const itemsWrapper = ref("")
// const navComp ={
//   "Главное": "main",
//   "Популярное": "popular",
//   "Спорт": "sport",
//   "Политика": "politic",
//   "Наука": "science",
// }

const selectCategory = ref();

const MenuClickHandler = (e) =>{
  if(e.target.getAttribute('class') === 'header-nav__item'){
    const navItem = [...document.querySelectorAll('.header-nav__item')];
    navItem.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')
    selectCategory.value = e.target.innerHTML
    } 
  }

  watch(() => selectCategory.value, async () => {
    emit('updateCategory',selectCategory.value)
  });


onMounted(() =>{
  itemsWrapper.value.children[0].classList.add('active')
})

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

  .active {
    transform: translateY(5px); 
    font-size: 1.5rem;
    color: #000000;
  }

  .header-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    height: 100%;
  }

  .header-nav__item {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header-nav__item:hover {
    transform: translateY(5px);
    font-size: 1.5rem;
  }

</style>