import { defineStore } from 'pinia'

export const AuthStore = defineStore('authstore',{
  state: () => {{return { popup: false, userId: null, categoryName: "Главное" , currentPublication: 0, selectedUser: null,linkNews: null}}},
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
    },

    updateSelctedUser(user) {
      this.selectedUser = user;
    },

    updateLinkNews(news) {
      this.linkNews = news;
    },

    getUser(){
      return this.selectedUser;
    },

    getCurrentPublicationId() {
      return this.currentPublication
    }


  }
})