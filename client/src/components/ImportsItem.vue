<template >
  <div class="news-wrapper" @click="clickData">
    <div>
      <h2>{{ data.title }}</h2>
      <p>{{categoryName}}</p>
    </div>

    <div class = "news-info-item">
      <p>{{ data.date }}</p>
      <p class="news-author">Автор: {{sourceName}}</p>
    </div>
  </div>

  <DynamicDialog />

</template>
<script setup>
  import {ref, defineProps,onMounted,defineAsyncComponent,provide} from 'vue';
   import { PublicationService } from '@/service/PublicationService';
   import DynamicDialog from 'primevue/dynamicdialog';
   import { useDialog } from 'primevue/usedialog';
   import { AuthStore } from '@/service/pinia-store';

  const props = defineProps(['item']);
  const data = ref([])
  const publicationService = new PublicationService();
  const categoryName = ref("");
  const sourceName = ref("");
  const frameComponent = defineAsyncComponent(() => import("./FrameComponent.vue"));
  const dynamicDialog = useDialog();
  const store = AuthStore();
  

  onMounted(() => {
    data.value = props.item;
    categoryName.value = data.value.category.value;
    sourceName.value = data.value.linkeSource.source;
    data.value.date = publicationService.parsePublicationData(data.value.date)
  })

  const clickData = () => {
    store.updateLinkNews(data.value.link)
    provide("dynamicDialog",dynamicDialog)
        dynamicDialog.open(frameComponent, {
        props: {
            header: data.value.title,
            style: {
                width: '80vw',
                height: "80vh"
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true,
            
            onClose: () => {
            
            }
        },
    });
  }

</script>
<style>
  .news-author {
    font-style: italic;
    text-align: right;
  } 

  .news-info-item {
    display: flex;
    justify-content: space-between;
  }

  .news-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a{
    text-decoration: none;
  }

  a:visited{
    color: black;
  }

  a:link {
    color: black;
  }
</style>