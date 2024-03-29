import api from "@/auth-axios";

export class PublicationService{
  async createPublication(newsBody,category,user){
    try {
      const news = await api.post('http://localhost:5000/news/create-news',newsBody,{maxBodyLength: 10000000,
      maxContentLength: 10000000})
      const obj = {
        "newsId" : (await news.data).id,
        "usersId": user,
        "categoryId": category
      }
      console.log(obj)
      
       const responce = api.post('http://localhost:5000/publication', obj);
       return responce.data
    }

     catch(error){
      throw new Error(error)
     }
  }

  async getAllPublication(){
    console.log('start')
    const responce = api.get('http://localhost:5000/publication');
    return (await responce).data;
  }

  async getPublicationByCategoryId(id) {
    const responce = api.get(`http://localhost:5000/publication/category/${id}`)
    return (await responce).data;
  }

  async getPublicationByNewsId(id) {
    const responce = api.get(`http://localhost:5000/publication/news/${id}`)
    return (await responce).data[0];
  }

  async getPublicationByUserId(id) {
    const responce = await api.get(`http://localhost:5000/publication/user/${id}`)
    return await responce.data
  }

  parsePublicationData(value) {
    const mounthArray = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    let date = value.split("T")[0].split('-').reverse();
    let newDate = date.reduce((preValue,item,index) =>{
      return index === 1? preValue+ mounthArray[parseInt(item) - 1]+" ": preValue+item+" "
    },"")
    return newDate;
  }

  async getPublicationIdByNewsId(id) {
    const responce = await api.get(`http://localhost:5000/publication/${id}`);
    return await responce.data
  }

  async getPublicationDate() {
    const responce = await api.get("http://localhost:5000/publication/date/date");
    return await responce.data
  }

  parsePopularPublicationDate(arr) {
    const obj = {
      "Jan": "Январь",
      "Feb": "Февраль",
      "Mar" : "Март",
      "Apr" : "Апрель",
      "May": "Май",
      "Jun": "Июнь",
      "Jul": "Июль",
      "Aug": "Август",
      "Sep" : "Сетябрь",
      "Oct": "Октябрь",
      "Nov": "Ноябрь",
      "Dec" : "Декабрь"
    }
    
    const newArr = arr.map(item => {
      const itemArr = item.split('-');
      return {name: obj[itemArr[0]] + "-" + itemArr[1], code: item} 
    });

    return newArr
  }

  async getPopularPublicByDate(date) {
    const responce = await api.get(`http://localhost:5000/publication/date/${date}`)
    return await responce.data
  }

  async getUsersViewsAmoung(date) {
    const responce = await api.post("http://localhost:5000/publication/views/count/date",{
      "date" :date
    })
    return await responce
  }

  async getTopPublicationViews(date) {
    const responce = await api.post("http://localhost:5000/publication/views/publicatoin/date",{
      "date" : date
    })

    return await responce.data
  }

  async deletePublication(newsId) {
    const responce = await api.delete(`http://localhost:5000/publication/delete/${newsId}`);
    return responce.data
  }

  async updatePublicationViews(publicationId){
    console.log(publicationId)
    const responce = await api.put(`http://localhost:5000/publication/update/views/${publicationId}`)
    return responce.data
  }
}