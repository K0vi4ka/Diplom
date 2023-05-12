<template>
  <div>
    <div class="select">
          <p>Выберит нужную вам дату</p>
          <Dropdown v-model="publicDate" editable :options="publicDateArr" optionLabel="name" placeholder="Select a City" class="dropdown-menu" @change="selectDate"/>
    </div>
    <div class="statistics-content" v-if="likesCount">
    
      <div class="like-satistics" >
        <h2>Наиболее популярные категории</h2>
        
        <div v-for="category in categoryName" :key="category" class="statistics-category">
          <p class="statistics-category__name">{{category}}</p>
          <progress class="progress-items__progressbar" v-bind:max="likesCount" v-bind:value="categoryObjStat[category]" v-bind:mykey="category" ></progress>
          <p>{{categoryObjStat[category]}}</p>
        </div>
        <p class="category-info">Общее количество лайков: {{likesCount}}</p>
      </div>

      <div class="views-statistics">
        <h2>Самые популярные публикации за данный период</h2>

        <DataTable :value="publicationPopular">
          <Column field="news" header="Название публикации" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"></Column>
          <Column field="user" header="Автор" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
          <Column field="category" header="Категория" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
          <Column field="views" header="Количество просмотров" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
        </DataTable>

        <p class="views-info">Общее количество просмотров на записях за данных период: {{publicationViews}}</p>
      </div>

      <div class="users-statistics">
        <h2>Топ самых активных пользователей</h2>
        <DataTable :value="activeUsersStats">
          <Column field=user header="Пользователь" style="padding: 20px; border-bottom: 1px solid #000000; text-align: left;"></Column>
          <Column field="count" header="Количество лайков" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;  width: 30%;"> </Column>
        </DataTable>
      </div>
    </div>
    <div class="statistics-error" v-if="!likesCount">
      <p>Извените, статистика за данный период не доступна из-за нехватики информации</p>
    </div>
    
  </div>
</template>
<script setup>
  import {ref, onMounted,watch} from "vue";
  import Dropdown from 'primevue/dropdown';
  import { PublicationService } from "@/service/PublicationService";
  import LikesService from '@/service/LikesService';
  import CategoryService from "@/service/CategoryService";
  import DataTable from "primevue/datatable";
  import Column from 'primevue/column';
  import UserService from "@/service/UserService";
  import NewsService from "@/service/NewsService";
  

  const publicDateArr = ref([]);
  const publicDate = ref("");
  const likesCount = ref(0);
  const likes = ref([]);
  const categoryName = ref([])
  const categoryObjStat = ref({})
  const publicationViews = ref(0);
  const publicationPopular = ref([]);
  const activeUsers = ref([]);
  const activeUsersStats = ref([])


  const categoryService = new CategoryService();
  const publicationService = new PublicationService();
  const likesService = new LikesService();
  const userService = new UserService();
  const newsService = new NewsService();


  onMounted(async ()=> {
    const date = await publicationService.getPublicationDate();
    publicDateArr.value = await publicationService.parsePopularPublicationDate(await date);
    publicDate.value = publicDateArr.value[1];
    console.log(publicDate.value)
    likes.value = await likesService.getAllUsersLikeForDate(publicDate.value.code);
    console.log(likes.value)
    likesCount.value = likes.value.length;
    const dateNow = new Date(await likes.value[0]["createdAt"])

    categoryName.value = await categoryService.getAllCategory();
    if(likes.value) {
      categoryName.value.forEach((item,index) => {
        categoryObjStat.value[item] =  likesService.getCategoryLikeCount(index,dateNow)
      })
    }
    
    publicationViews.value = (await publicationService.getUsersViewsAmoung(dateNow)).data;
    const topPublicArr =  await publicationService.getTopPublicationViews(dateNow);
    
    
    topPublicArr.forEach(async item => {
      let buff = await userService.getUser(await item.usersId);
      const buffObj = {
        "id" : item.id,
        "news": await newsService.getNewsName(await item.newsId),
        "user" : buff.nickname,
        "category" :  await categoryService.getCategoryName(await item.categoryId),
        "views" : item.views
      }
      publicationPopular.value.push(buffObj);
    })
    
    
    activeUsers.value = await likesService.getActiveUsersForDate(dateNow);
    await activeUsers.value.forEach(async item => {

      const usersStats = await likesService.getActiveUsersStats(item,dateNow);
      let buff = await userService.getUser(await usersStats.user);
      const buffObj = {
        "user": buff.nickname,
        "count" : usersStats.count
      }
      activeUsersStats.value.push(buffObj); 
    })
  })

  const selectDate = async () => {
    likes.value = await likesService.getAllUsersLikeForDate(publicDate.value.code);
    console.log(likes.value)
    likesCount.value = likes.value.length;
    const dateNow = new Date(await likes.value[0]["createdAt"])

    categoryName.value = await categoryService.getAllCategory();
    if(likes.value) {
      categoryName.value.forEach((item,index) => {
        categoryObjStat.value[item] =  likesService.getCategoryLikeCount(index,dateNow)
      })
    }
    
    publicationViews.value = (await publicationService.getUsersViewsAmoung(dateNow)).data;
    const topPublicArr =  await publicationService.getTopPublicationViews(dateNow);
    
    
    topPublicArr.forEach(async item => {
      let buff = await userService.getUser(await item.usersId);
      const buffObj = {
        "id" : item.id,
        "news": await newsService.getNewsName(await item.newsId),
        "user" : buff.nickname,
        "category" :  await categoryService.getCategoryName(await item.categoryId),
        "views" : item.views
      }
      publicationPopular.value.push(buffObj);
    })
    
    
    activeUsers.value = await likesService.getActiveUsersForDate(dateNow);
    await activeUsers.value.forEach(async item => {

      const usersStats = await likesService.getActiveUsersStats(item,dateNow);
      let buff = await userService.getUser(await usersStats.user);
      const buffObj = {
        "user": buff.nickname,
        "count" : usersStats.count
      }
      activeUsersStats.value.push(buffObj); 
    })
  }

  
  watch(likes,async ()=> {
    categoryName.value = await categoryService.getAllCategory();
    const date = new Date(likes.value[0]["createdAt"]) 
    categoryName.value.forEach(async (item,index) => {
      categoryObjStat.value[item] = await likesService.getCategoryLikeCount(index,date)
    })
    console.log(categoryObjStat.value)    
  })
</script>
<style scoped>
  p {
    font-size:  20px ;
  }

  .select {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  h2 {
    margin-left: 50px;
    margin-top: 20px;
  }

  .select p {
    margin: 0 10px;
  }

  .statistics-category__name {
    width: 100px;
  }

  .category-info {
    margin-left: 30px;
  }

  progress {
    height: 18px;
    background-color: #1dcb40;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 80%;
  }

  .statistics-category {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  }

  .like-satistics {
    border-bottom: 3px solid #e2e2e2;
  }
  
  .views-info {
    margin: 20px;
    margin-left: 30px;

  }
  
  .statistics-header {
    padding: 10px;
    padding-left: 30px;
  }

  .statistics-content {
    margin: 20px;
  }

  .views-statistics {
    border-bottom: 3px solid #e2e2e2;
    width: 100%;
  }
</style>