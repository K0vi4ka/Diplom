import api from "@/auth-axios";

export class PublicationService{
  async createPublication(newsBody,category,user){
     await api.post('http://localhost:5000/news/create-news',newsBody,{maxBodyLength: 10000000,
     maxContentLength: 10000000}).then(news =>{
      const obj = {
        "newsId": news.data.id,
        "usersId": user,
        "categoryId": category
      }
      const responce = api.post('http://localhost:5000/publication', obj);
      return responce.data
     }).catch(error=>{
      throw new Error(error)
     })
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
    return (await responce).data
  }

  parsePublicationData(value) {
    const mounthArray = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    let date = value.split("T")[0].split('-').reverse()
    let newDate = date.reduce((preValue,item,index) =>{
      return index === 1? preValue+ mounthArray[index]+" ": preValue+item+" "
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
}