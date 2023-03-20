<template>
  <h1>Список пользователей</h1>
  <div class="list">
    <DataTable :value="allUsers">
      <Column field="id" style="width: 50px; text-align: center;"/>
      <Column field="FIO" header="ФИО пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"></Column>
      <Column field="nickname" header="Псевдоним пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
      <Column field="email" header="Почта пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
      <Column field="phone" header="Телефон пользователя" style="padding: 20px; border-bottom: 1px solid #000000; text-align: center;"> </Column>
    </DataTable>

    <button @click="itemClickHandler">show</button>
    <DynamicDialog />
  </div>
 

</template>
<script setup>
  import {ref,onMounted, defineAsyncComponent} from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import UserService from '@/service/UserService';
  import { useDialog } from 'primevue/usedialog';

  const SelectUserModal = defineAsyncComponent(() => import('./SelectUserModal.vue'));

  const allUsers = ref();
  const userService = new UserService();
  const dynamicDialog = useDialog();

  const itemClickHandler = () => {
    console.log('work')
      dynamicDialog.open(SelectUserModal, {
      props: {
            header: "Добавление пары",
            modal: true,
            dismissableMask: true,
        },
        onClose: () => {
            
        }
    });
  }

  onMounted(async () => {
    allUsers.value = await userService.getAllUsers();
    
    allUsers.value.forEach(item => {
      item.FIO = item.FIO == null? " - ": item.FIO;
      item.email = item.email == null? " - ": item.email;
      item.phone = item.phone == null? " - ": item.phone;
    })
    
  })

</script>
<style scoped>
  .list {
    font-size: 20px;
  }

</style>