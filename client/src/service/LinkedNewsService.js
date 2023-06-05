import api from "@/auth-axios";

export default class LinkedNewsService{
  async createLinkedNews(obj) {
    const responce = await api.post("http://localhost:5000/linkednews/createLinkedNews",obj);
    return await responce.data;
  }

  async getAllLinkdeNews() {
    const responce = await api.get("http://localhost:5000/linkednews/all");
    console.log(responce)
    return await responce.data;
  }

  async getAllLinkdNewsById(id) {
    const responce = await api.get(`http://localhost:5000/linkednews/${id}`)
    console.log(responce.data)
    return await responce.data
  }

  async getContent(id) {
    const responce = await api.get(`http://localhost:5000/linkednews/id/${id}`);
    return await responce.data
  } 
}