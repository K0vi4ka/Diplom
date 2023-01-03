import { defineStore } from 'pinia'

export const AuthStore = defineStore('authstore',{
  state: () => {{return { popup: false, userId: null, categoryName: "Главное" , currentPublication: 0}}},
  actions: {
    updatePopup() {
      this.popup = !this.popup
    },

    updateUserId(value) {
      this.userId = value
    },

    updateCategoryName(category){
      this.categoryName = category
    },

    updateCurrentPublication(publicatoinId) {
      this.currentPublication = publicatoinId
    }
  }
})