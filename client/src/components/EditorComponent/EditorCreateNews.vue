<template>
  <div class="news-create-block">
    <h2>Создание новости</h2>

    <p class="public-is-created"></p>

    <div class="news-info">
      <label for="newsname">Введите заголовок новости</label>
      <InputText id="newsname" v-model="newsName"/>

      <label for="category">Выберите категорию</label>
      <select name="category" id="category" v-model="categorName">
        <option value=""></option>
        <option v-for="category in categoryObj" :key="category.value" :value="category.id">{{category}}</option>
      </select>
    </div>

    <div class="editor">
      <Editor v-model="editorText"></Editor>
    </div>

    <div class="news-create-btns">
      <button class="news-create-btns__item">Отмена</button>
      <button class="news-create-btns__item" @click="createPublication">Сохранить новость</button>
    </div>

  </div>
</template>

<script setup>
import CategoryService from '@/service/CategoryService';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import { ref, onMounted } from 'vue';
import {PublicationService} from '@/service/PublicationService';
import UserService from '@/service/UserService';

const editorText = ref("")
const newsName = ref("")
const categoryObj = ref([])
const categorName = ref("");

const categoryService = new CategoryService();
const publicationService = new PublicationService();
const userService = new UserService();



onMounted(() =>{
   categoryService.getAllCategory().then(data =>{
    categoryObj.value = data
   })
})


const createPublication = async() =>{
  if(categorName.value && newsName.value && editorText.value){
    const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    const user = await userService.getUserByToken({"token": refreshToken})
    const responce = await publicationService.createPublication({"newsName":newsName.value,'filePath':"news-storage","data":editorText.value},categorName.value, (await user.userId))
    if(responce){
      document.querySelector('.public-is-created').innerHTML = "Запись успешна создана"
    }
  }
}
</script>

<style>

img {
  max-height: 400px;
}

.news-info {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.news-info> label  {
  margin-top: 10px;
}

.news-create-block {
  position: relative;
  min-height: 70vh;
  padding: 10px;
  margin-left: 30px;
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

.public-is-created {
  color: #5cff59;
}

</style>