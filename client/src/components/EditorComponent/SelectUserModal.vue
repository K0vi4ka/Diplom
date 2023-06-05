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
  import { useToast } from 'primevue/usetoast';

  const authStore = AuthStore();
  const userService = new UserService();
  const user = ref({});
  const fio = ref("");
  const nickname = ref("")
  const phone = ref("");
  const dialogRef = inject("dialogRef");
  const toast = useToast();


  onMounted(async () => {
    user.value = await userService.getUserByID(authStore.selectedUser.id);
  })

  const inputFIO = (e) => {
    fio.value = e.target
  }

  const inputNickname = (e) => {
    nickname.value = e.target
  }

  const inputPhone = (e) => {
    phone.value = e.target
  }

  const changeDataHandler = async () => {
    const sendNick = nickname.value.value?nickname.value.value: user.value.nickname;
    const sendFio =  fio.value.value?fio.value.value: user.value.fio;
    const sendEmail = user.value.email;
    const sendPhone = phone.value.value? phone.value.value: user.value.phone;
    try{
      user.value = await userService.updateUserData(user.value,sendNick,sendEmail,sendFio,sendPhone);
      toast.add({ severity: 'success', summary: 'Уведомление', detail: 'Данные пользователя успешно изменены', life: 3000 });
      dialogRef.value.close();
    }
    catch {
      toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Данные пользователя не были изменены', life: 3000 });
    }

  }

  const closeDialog = async () => {
    toast.add({ severity: 'error', summary: 'Уведомление', detail: 'Данные пользователя не были изменены', life: 3000 });
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