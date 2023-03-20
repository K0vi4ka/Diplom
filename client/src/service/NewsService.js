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
}