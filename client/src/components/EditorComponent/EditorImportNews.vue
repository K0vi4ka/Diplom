<template>
  <h1>Импорт Статей</h1>

  <h2>Выберите категорию получаемых статей</h2>

  <select name="" id="" @click="LoadContent" v-model="importsType">
    <option value=""></option>
    <option value="sport">Спорт</option>
    <option value="scince">Наука</option>
    <option value="business">Политика</option>
  </select>

  <div class="imports-content-block">
    <div v-if="content.length !== 0 ">
      <div class="imports-item-wrapper" v-for="item in content.articles"  :key="item">
        <a class="imports-item"  v-bind:href = "item.url" target="_blank">
          <h3 class="imports-item__text">{{ item.title }}</h3>
          <p class="imports-item__text">{{ item.author }}</p>
        </a>
        <input type="checkbox">
      </div>

      <button class="confirm__btn" @click="changeDataHandler">Добавить выбранные статьи</button>
    </div>
  </div>
  
</template>
<script setup>
  import { ref} from 'vue';
  import ImportsService from '@/service/ImportsService';
  import LinkedNewsService from '@/service/LinkedNewsService';
  import LinkeSourceService from '@/service/LinkeSource';

  const importService = new ImportsService();
  const linkedNewsService =new LinkedNewsService();
  const linkeSourceService = new LinkeSourceService();

  const importsType = ref("");
  const content = ref([]);

  const categoryIdObj = {
    "sports" : 1,
    "business" : 2,
    "scince" : 3
  }

  const LoadContent = async () => {
    const type = importsType.value;
    console.log(importsType.value)
    switch(type) {
      case "sport" : content.value = await importService.getSportsNews();
      break;
      case "scince" : content.value = await  importService.getScienceNews();
      break;
      case "business" : content.value = await importService.getBusinessNews();
      break;
      default: break;
    }
  }

  const changeDataHandler = () => {
    const checkboxes = document.querySelectorAll('input');
    const activeCheckbox = [...checkboxes].map((item,index) => {
      if(item.checked) {
        console.log(index)
        return index;
      }
    })

    console.log(activeCheckbox)

    activeCheckbox.forEach(async item=> {
      if(item === undefined) return;
      const elem = content.value.articles[item]
      const sourceId = await linkeSourceService.createLinkeSource(elem.author);
      const obj = {
        "title": elem.title,
        "source": await sourceId,
        "link": elem.url,
        "categoryId": categoryIdObj[importsType.value],
        "date": elem.publishedAt
      }

      console.log(obj)
      linkedNewsService.createLinkedNews(obj);
    })
  }

</script>
<style scoped>
  .imports-item:active{
    color: black;
  }
  .imports-item:visited {
    color: black;
  }
  .imports-item:link {
    color: black;
  }

  .imports-item {
    color: black;
    margin: 10px;
    font-size: 1.2rem;
    width: 80%;
  }

  .imports-item__text {
    margin-left: 20px;
    text-decoration: none;
  }
  a,u {
    text-decoration: none;
  }
  

  .imports-item-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .confirm__btn {
    height: 50px;
    width: 100px;
    background-color: #4169E1;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #708090;
    margin: 10px;
  }

</style>