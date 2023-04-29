<template >
  <div class="content-block">
    <div class="item">
      <p>ФИО</p>
        <InputText id="username" v-model="fio" v-bind:value="user.FIO" @input="inputFIO" />
    </div>
    <div class="item">
      <p>Псевдоним</p>
        <InputText v-model="nickname" v-bind:value="user.nickname " @input="inputNickname" />
    </div>
    <div class="item">
      <p>Email</p>
        <InputText id="email" v-model="email" v-bind:value="user.email" @input="inputEmail" />
    </div>
    <div class="item">
      <p>Телефон</p>
        <InputText id="phone" v-model="phone" v-bind:value="user.phone"  @input="inputPhone" />
    </div>
  </div>
  <div class="btns-container">
    <button class="confirm__btn" @click="changeDataHandler">ОК</button>
    <button class="confirm__btn" @click="closeDialog">Отмена</button>
  </div>
</template>
<script setup>
  import InputText from 'primevue/inputtext';
  import { ref,onMounted,inject } from 'vue';
  import { AuthStore } from '@/service/pinia-store';
  import UserService from '@/service/UserService';

  const authStore = AuthStore();
  const userService = new UserService();
  const user = ref({});
  const fio = ref("");
  const nickname = ref("")
  const email = ref("")
  const phone = ref("");
  const dialogRef = inject("dialogRef");


  onMounted(() => {
    user.value = authStore.selectedUser;
  })

  const inputFIO = (e) => {
    fio.value = e.target
  }

  const inputNickname = (e) => {
    nickname.value = e.target
  }

  const inputEmail = (e) => {
    email.value = e.target
  }

  const inputPhone = (e) => {
    phone.value = e.target
  }


  const changeDataHandler = async () => {
    console.log(user.value.id,nickname.value,email.value,fio.value,phone.value)
    await userService.updateUserData(user.value.id,nickname.value,email.value,fio.value,phone.value);
    closeDialog();
  }

  const closeDialog = () => {
    dialogRef.value.close();
  }
</script>
<style scoped>

  .content-block {
    margin-top: 20px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 30px;
  }

  .btns-container {
    display: flex;
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