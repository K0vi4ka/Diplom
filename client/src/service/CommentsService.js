import api from "@/auth-axios";

export default class CommentsService{
  async getCommentsByPublicationId(id){
  console.log(id)
   const responce =  await api.get(`http://localhost:5000/comment/publications/${id}`)
   console.log(await responce.data)
   return await responce.data
  }
}