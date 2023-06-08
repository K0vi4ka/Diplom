<template>
  <NavMenu/>
  <DynamicDialog />
  <Toast/>
  <h1 class="profile_header">Ваш Профиль</h1>

  <div class="content-wrapper">
    <div class="user-info">
      <h2 class="user-info__header hd">Ваши данные</h2>

      <div class="user-info__data">
        <p>Ваши инициалы</p>
        <p>{{ user.FIO}}</p>

        <p>Ваш псевдоним</p>
        <p>{{ user.nickname}}</p>

        <p>Ваша электронная почта</p>
        <p>{{ user.email }}</p>

        <p>Ваш телефон</p>
        <p>{{ user.phone }}</p>

        <p>Дата регистрации</p>
        <p>{{ user.createdAt }}</p>
      </div>

      <button class="btn" @click="updateUserData">Изменить ваши личные данные</button>

      <div class="change-password">
        <h2>Изменение пароля</h2>
        <div class="change-password__block">
          <p class="change-password__par" >Введите старый пароль</p>
          <InputText v-model="oldPassword" id="login"></InputText>

          <p class="change-password__par">Введите новый пароль</p>
          <InputText  v-model="newPassword" id = "password"></InputText>
          <br>
          <button class="btn change-btn" @click="changePassword" >Изменить пароль</button>
        </div>
      </div>
    </div>


    <div class="statistics">
      <h2 class="statistics__header hd">Ваша Статистика</h2>
      
      <div class="progress-items" v-for="category in allCategory" :key="category">
        <p class="progress-items__category-name">{{ category }}</p>
        <progress class="progress-items__progressbar" v-bind:max="progressCount" v-bind:value="statisticsObj[category]" v-bind:mykey="category"></progress>
        <p class="progress-items__likes">{{ statisticsObj[category] }}</p>
      </div>

      <p class="likes-amount">Общее количество лайков: {{ progressCount }}</p>

    </div>
  </div>
</template>
<script setup>
  import { onMounted, ref, defineAsyncComponent} from 'vue';
  import NavMenu from './Navigation/NavMenu.vue';
  import { AuthStore } from '@/service/pinia-store';
  import VaidateUserData from '@/service/ValidateUserData';
  import LikesService from '@/service/LikesService';
  import CategoryService from '@/service/CategoryService';
  import { useDialog } from 'primevue/usedialog';
  import InputText from 'primevue/inputtext';
  import UserService from '@/service/UserService';
  import DynamicDialog from 'primevue/dynamicdialog';
  import { useToast } from 'primevue/usetoast';
  import Toast from 'primevue/toast';

  const SelectUserModal = defineAsyncComponent(() => import('@/components/EditorComponent/SelectUserModal.vue'));
  const dynamicDialog = useDialog();

  const piniaStore = AuthStore();
  const user = ref({})
  const validate = new VaidateUserData();
  const likesService = new LikesService();
  const categoryService = new CategoryService();
  const userService = new UserService();
  const toast = useToast();

  const statisticsObj = ref({});
  const allCategory = ref()
  const progressCount = ref(0);
  const newPassword = ref("");
  const oldPassword = ref("");



  onMounted(async () => {
    const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    if(refreshToken) {
      const token = await userService.getToken(refreshToken);
      piniaStore.userId = await token.userId;
     }
    user.value = await userService.getUserByID(piniaStore.userId)
    piniaStore.selectedUser = user.value
    validate.validateUserData(await user.value);
    formatDate();

    const category = await categoryService.getAllCategory();
    category.forEach(item => {
      statisticsObj.value[`${item}`] = 0;
    })
    allCategory.value = Object.keys(statisticsObj.value)
    console.log(allCategory.value)

    const likes = await likesService.getUserLikes(user.value.id);
    getLikesStatistic(likes);
    
  });

  const changePassword = async () => {
    try {
      const obj =       {
        "userId": user.value.id,
        "oldPassword" : oldPassword.value,
        "newPassword" : newPassword.value,
      }
      await userService.chagePassword(obj);
      oldPassword.value = "";
      newPassword.value = "";
      toast.add({ severity: 'success', summary: 'Уведомление', detail: 'Данные пользователя успешно изменены', life: 3000 });
    }
    catch{
      toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Пароли введены не верно', life: 3000 });
    }


  }

  const getLikesStatistic =  (likes) => {
    progressCount.value = likes.length;
    likes.forEach(async item => {
      let categoryName = await categoryService.getCategoryName(item.publication.categoryId);
      statisticsObj.value[await categoryName]++;
    })
  }

  const formatDate = () => {
    const mounthArray = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    let date = user.value.createdAt.split("T")[0].split('-').reverse()
    let newDate = date.reduce((preValue,item,index) =>{
      return index === 1? preValue+ mounthArray[index]+" ": preValue+item+" "
    },"")
    user.value.createdAt = newDate;
  }

  const updateUserData = () => {
    dynamicDialog.open(SelectUserModal, {
        props: {
            header: 'Ваши данные',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },

            data:{
              user: piniaStore.getUser(),
            },
            modal: true,
        },
        onClose: async () => {
          user.value = await userService.getUserByID(piniaStore.userId)
          validate.validateUserData(await user.value);
          formatDate();
              
         }
    });
  }
</script>
<style scoped>
  .profile_header {
    margin-left: 50px;
    margin-top: 30px;

  }

  .hd {
    margin-top: 30px;
    margin-left: 70px;
    border-bottom: 3px solid #e2e2e2;
  }

  .content-wrapper{ 
    width: 90%;
  }
  .user-info__data{
    display: grid;
    grid-template-columns: 400px 300px;
    grid-template-rows: repeat(5,40px);
    font-size: 24px;
    margin-top: 30px;
    margin-left: 70px;
    text-align: center;
  }

  .progress-items {
    display: flex;
    justify-content: center;
    margin-left: 70px;
    margin-top: 50px;
  }


  .progress-items__category-name {
    width: 100px;
  }

  .progress-items__likes {
    margin-left: 20px;
  }

  .change-btn {
    position: relative;
    left: 80%;
  }

  .progress-items__progressbar {
    height: 18px;
    background-color: #1dcb40;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 80%;
  }

  .likes-amount {
    font-size: 20px;
    font-style: italic;
    margin-left: 90px;
    margin-top: 30px;
  }

  .btn {
    position: relative;
    left: 80%;
    height: 50px;
    width: 200px;
    background-color: #4169E1;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #708090;
}

  .change-password {
    border-top:  1px solid #708090;
    margin-top: 30px;
    margin-left: 70px;
  }

  .change-password__par {
    margin-top: 30px;
  }

  .change-password__block {
    margin-left: 30px;
  }
</style>