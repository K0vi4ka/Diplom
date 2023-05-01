import api from "@/auth-axios";

export default class ImportsService{
  async getBusinessNews(){
    const responce =  await api.get("https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=614c36adb5c048e8b642721eb7021369")
    return await responce.data
   }

   async getSportsNews() {
    const responce = await api.get("https://newsapi.org/v2/top-headlines?country=ru&category=sports&apiKey=614c36adb5c048e8b642721eb7021369")
    return await responce.data
   }

   async getScienceNews() {
    const responce = await api.get("https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=614c36adb5c048e8b642721eb7021369");
    return await responce.data
   }

}