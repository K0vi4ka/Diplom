<template>
  <div class="list">
    <DataTable :value="allUsers" @row-click="itemClickHandler($event.data)">
      <Column field="id" style="width: 50px; text-align: center;"/>
      <Column field="FIO" header="ФИО пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"></Column>
      <Column field="nickname" header="Псевдоним пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
      <Column field="email" header="Почта пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
      <Column field="phone" header="Телефон пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
    </DataTable>
    <DynamicDialog />
  </div>
 
</template>
<script setup>
  import {ref,onMounted, defineAsyncComponent,provide } from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import UserService from '@/service/UserService';
  import { useDialog } from 'primevue/usedialog';
  import DynamicDialog from 'primevue/dynamicdialog';
  import { AuthStore } from '@/service/pinia-store';
  import VaidateUserData from '@/service/ValidateUserData';

  const SelectUserModal = defineAsyncComponent(() => import('./SelectUserModal.vue'));

  const allUsers = ref();
  const userService = new UserService();
  const dynamicDialog = useDialog();
  const authStore = AuthStore();
  const validateUserData = new VaidateUserData();


  const itemClickHandler = (data) => {
    authStore.updateSelctedUser(data);
        provide("dynamicDialog",dynamicDialog)
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
              user:data,
            },
            modal: true,
            
            onClose: () => {
            
            }
        },
    });
  }

  onMounted(async () => {
    allUsers.value = await userService.getAllUsers();
    
    allUsers.value.forEach(item => {
      validateUserData.validateUserData(item);
    }) 
  })


</script>
<style scoped>
  .list {
    font-size: 20px;
  }

</style>