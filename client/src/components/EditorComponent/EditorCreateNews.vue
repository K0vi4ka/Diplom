<template>
  <div class="news-create-block">

    <p class="public-is-created"></p>

    <div class="news-info" @click="categoryHandler">
      <label for="newsname">Введите заголовок новости</label>
      <InputText id="newsname" v-model="newsName" />

      <label for="category">Выберите категорию</label>
      <select name="category" id="category" v-model="categorName">
        <option value=""></option>
        <option v-for="category in categoryObj" :key="category.value" :value="category.id">{{ category.value }}</option>
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
import { PublicationService } from '@/service/PublicationService';
import UserService from '@/service/UserService';
import { useToast } from 'primevue/usetoast';

const editorText = ref("")
const newsName = ref("")
const categoryObj = ref([])
const categorName = ref("");

const categoryService = new CategoryService();
const publicationService = new PublicationService();
const userService = new UserService();
const toast = useToast();



onMounted(() => {
  categoryService.getFullCategoryData().then(data => {
    categoryObj.value = data.map(item => {
      return item
    })
  })
})


const createPublication = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    const token = await userService.getToken(refreshToken);

    await publicationService.createPublication(
      {"newsName": newsName.value, 'filePath': "news-storage", "data": editorText.value}, 
      categorName.value,
      (await token).userId
    )
    toast.add({ severity: 'info', summary: 'Уведомление', detail: 'Публикация успешно создана', life: 3000 });
  }
  catch {
    toast.add({ severity: 'error', summary: 'Уведомление', detail: 'Публикация не была создана', life: 3000 });
  }
}

const categoryHandler = (e) => {
  console.log(e.target)
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

.news-info>label {
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