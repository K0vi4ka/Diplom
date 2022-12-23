<template>
  <div class="user-menu-wrapper">

      <button class="user-option-menu__btn" @click="menuHandler">
        &#9658;
      </button>
 

    <transition name="bounce">
      <div class="user-option-menu" v-if="showMenu">
        <a href="" class="user-option-menu__link">Ваш профиль</a>
        <a href="" class="user-option-menu__link">Выйти со страницы</a>
      </div>
    </transition>
    
  </div>
  
</template>

<script setup>
  import {ref} from 'vue'

  const showMenu = ref(false)

  const menuHandler = (e) =>{
    if(!e.target.classList.contains("btn_rotate-active") && !e.target.classList.contains("btn_rotate-unactive")){
      e.target.classList.add("btn_rotate-active")
    }
    else {
      e.target.classList.toggle("btn_rotate-active")
      e.target.classList.toggle("btn_rotate-unactive")
    }

    showMenu.value = !showMenu.value
  }

</script>

<style scoped>
.user-menu-wrapper {
    width: 100px;
    color:#FFFFFF
  }
  .user-option-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    transform: translateY(25px);
    right: 50px;
    background-color: #164a47;
    border-radius: 0 0 10px 10px;
    
    -webkit-box-shadow: 10px 8px 8px 0px rgba(34, 60, 80, 0.32);
    -moz-box-shadow: 10px 8px 8px 0px rgba(34, 60, 80, 0.32);
    box-shadow: 10px 8px 8px 0px rgba(34, 60, 80, 0.32);
  }

  .user-option-menu__link {
    color: #FFFFFF;
    text-decoration: none;
    padding: 5px;
  }

  .user-option-menu__link:hover {
    transform: scale(1.05);
    background-color: #047650;
  }

  .user-option-menu__btn {
    background-color: transparent;
    border: 0px;
    color: #FFFFFF;
  }

  .btn_rotate-active {
    animation: btn_rotate-active 0.2s forwards ease-in-out;
  }

  .btn_rotate-unactive {
    animation: btn_rotate-unactive 0.2s forwards ease-in-out;
  }

.bounce-enter-active {
	transition: all 0.2s ease;
}
.bounce-leave-active {
	transition: all  0.2s ease;
}

.bounce-enter-from,
.bounce-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@keyframes btn_rotate-active{
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}

@keyframes btn_rotate-unactive{
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}

</style>