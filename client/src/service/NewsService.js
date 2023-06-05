import api from "@/auth-axios";

export default class NewsService {
  async getNewsPathByName(name){
    const responce = await api.post('http://localhost:5000/news/file-name',{"fileName": name})
    return await responce.data
  }

  async getNewsContentByPath(path) {
    const responce = await api.post('http://localhost:5000/news/file-content', {"filePath":  "news-storage/"+path})
    return await responce.data
  }

  async getNewsIdByPath(path){
    const responce = await api.get(`http://localhost:5000/news/id/${path}`)
    return await responce.data;
  }

  async getNewsName(id) {
    const responce = await api.get(`http://localhost:5000/news/name/${id}`);
    return await responce.data
  }

  async getNewsId(name) {
    const responce = await api.get(`http://localhost:5000/news/newsname/${name}`);
    return responce.data
  }

  async deleteNews(id) {
    const responce = await api.delete(`http://localhost:5000/news/delete/${id}`)
    return responce.data
  }
}