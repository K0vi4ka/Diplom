import api from "@/auth-axios";

export default class CommentsService{
  async getCommentsByPublicationId(id){
   const responce =  await api.get(`http://localhost:5000/comment/publications/${id}`)
   console.log(await responce.data)
   return await responce.data
  }

  async createComment(commentBody, publicationID) {
    const responce = await api.post(`http://localhost:5000/comment/${publicationID}`,commentBody)
    return responce
  }
}