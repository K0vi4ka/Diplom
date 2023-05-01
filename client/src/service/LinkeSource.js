import api from "@/auth-axios";

export default class LinkeSourceService {
  async createLinkeSource(value) {
    const responce = await api.get(`http://localhost:5000/linkesource/${value}`)
    return await responce.data
  }
}