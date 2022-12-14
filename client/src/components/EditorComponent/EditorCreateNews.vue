<template>
  <div class="news-create-block">
    <h2>Создание новости</h2>
    <div class="news-header">
      <h3>Введите заголовок новости</h3>
        <InputText v-model="value" />
    </div>


    <div class="editor">
      <Editor></Editor>
    </div>

    <div class="news-create-btns">
      <button class="news-create-btns__item">Отмена</button>
      <button class="news-create-btns__item">Сохранить новость</button>
    </div>

  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';

</script>

<style>

.news-header {
  margin: 20px 0;
}

.news-create-block {
  position: relative;
  height: 70vh;
  border: 3px solid #4169E1;
  padding: 10px;
  width: 100vh;
}

.news-create-btns {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  bottom: 20px;
  right: 20px;
  width: 250px;
}

.news-create-btns__item {
    height: 50px;
    width: 100px;
    background-color: #4169E1;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #708090;
}

</style>