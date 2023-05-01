<template>
  <div class="auth-menu" v-if="!AuthPerson">
    <button class="auth-menu__btn" @click="showModal">Войти</button>
    <button class="auth-menu__btn" @click="showRegModal">Регистрация</button>
  </div>

  <transition name="nested">
      <RegistrationModal v-if="authStore.popup && regFlag" v-model="regFlag"></RegistrationModal>
  </transition>

    <DynamicDialog />
</template>
<script setup>
  import { ref,defineAsyncComponent,provide} from 'vue'
  import { AuthStore } from '@/service/pinia-store';
  import { useDialog } from 'primevue/usedialog';
  import DynamicDialog from 'primevue/dynamicdialog';

  const LoginModal = defineAsyncComponent(() => import('./LoginModal.vue'));
  const RegistrationModal = defineAsyncComponent(() => import('./RegistrationModal.vue'))

  let AuthPerson = ref(false);
  const authStore = AuthStore();
  const regFlag = ref(false);
  const dynamicDialog = useDialog();


  const showModal = () => {
    provide("dynamicDialog",dynamicDialog)
        dynamicDialog.open(LoginModal, {
        props: {
            header: 'Ваши данные',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            data: {

            },

            modal: true,
            
            onClose: () => {
            
            }
        },
    });
  }

  const showRegModal = () => {
    provide("dynamicDialog",dynamicDialog)
    console.log('click')
        dynamicDialog.open(RegistrationModal, {
        props: {
            header: 'Ваши данные',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            data: {

            },

            modal: true,
            
            onClose: () => {
            
            }
        },
    });
  }



</script>
<style scoped>

  .auth-menu {
    display: flex;
    justify-content: space-around;
    width: 250px;
  }
  .auth-menu__btn {
    height: 50px;
    width: 100px;
    background-color: #4169E1;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #708090;
  }

  .auth-menu__btn:hover {
    transform: scale(1.2);
  }

  .nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>