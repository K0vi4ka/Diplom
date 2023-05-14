<template>
  <div v-if="commentsValue.length !== 0">

    <div class="comments-conteiner" v-for="comment in commentsValue"  @change="changeData" :key="comment">
      <CommentItem  :comment="comment"  />
      <i class="pi pi-trash icons" style="font-size: 1.5rem; color:#FF0000" v-if="userRoles == 'admin' || userNickName === comment.user " @click="deleteComment"></i>
    </div>
  </div>

  <ConfirmDialog/>
  <Toast/>
</template>

<script setup>
  import {ref,defineProps,onMounted,watch} from "vue"
  import CommentItem from '@/components/CommentItem.vue'
  import ConfirmDialog from 'primevue/confirmdialog';
  import { useConfirm } from "primevue/useconfirm";
  import { useToast } from "primevue/usetoast";
  import Toast from 'primevue/toast';
  import CommentsService from '@/service/CommentsService';
  import UserService from "@/service/UserService";
  import { AuthStore } from "@/service/pinia-store";
  

  const userService = new UserService();
  const store = AuthStore();
  const confirm = useConfirm();
  const toast = useToast();
  const commentService = new CommentsService();

  const props = defineProps(["comments"])
  const commentsValue = ref([]);
  const userNickName= ref("");
  const userRoles = ref("");

  onMounted(async () => {
    commentsValue.value = await props.comments;
    userNickName.value = (await userService.getUserByID(store.userId)).nickname;
    userRoles.value = await  userService.getUserRoles(store.userId);
    console.log(userRoles.value)
  })

  watch(props,async () => {
    commentsValue.value = await props.comments;
    console.log(commentsValue.value)
  })

  const changeData = () => {
    console.log("work")
  }

  const deleteComment = (e) => {
    confirm.require({
        message: 'Вы уверены что хотите удалить данный комментарий',
        header: 'Подтверждение',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: "Да",
        rejectLabel: "Нет",
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        accept: async () => {
            await commentService.deleteComment(e.target.parentNode.children[0].getAttribute("data-id"));
            toast.add({ severity: 'info', summary: 'Уведомление', detail: 'Комментарий успешно удален', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Уведомление', detail: 'Комментарий не удален', life: 3000 });
        }
      });
  }


</script>

<style scoped>
  .comments-conteiner {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
</style>