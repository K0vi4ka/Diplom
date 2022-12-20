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
     })
  }

  async getAllPublication(){
    const responce = api.get('http://localhost:5000/publication')
    return (await responce).data;
  }

  async getPublicationByCategoryId(id) {
    const responce = api.get(`http://localhost:5000/publication/category/${id}`)
    return (await responce).data;
  }
}