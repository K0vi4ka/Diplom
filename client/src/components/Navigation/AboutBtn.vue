<template >
  <Dialog v-model:visible="visible" modal header="О приложении" :style="{ width: '50vw' }">
    <p>
      Данный сайт был разработан Замираловым Иваном Юрьевичем в ходе выполнения дипломного проекта.
      Тема дипломного проекта: Разработка новостного сайта "NewsTime" для просмотра и размещения новостных статей. 
      Сайт разработан в оброзавательных целях. В результате разработки были достигнуты все поставленные цели. 
      Год разработки - 2023.
    </p>
</Dialog>
  <button @click="visible = true" class="user-option-menu__link" >Справка</button>
</template>
<script setup>
import {ref} from 'vue'
import Dialog from 'primevue/dialog';


const visible = ref(false);

</script>
<style scoped>
    .user-option-menu__link {
    background-color: #047650;
    color: #FFFFFF;
    text-decoration: none;
    padding: 5px;
    background-color: #164a47;
    border: 0px;
  }

  .user-option-menu__link:hover {
    transform: scale(1.05);
    background-color: #047650;
  }
</style>