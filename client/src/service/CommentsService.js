import api from "@/auth-axios";

export default class CommentsService{
  async getCommentsByPublicationId(id){
  console.log(id)
   const responce =  await api.get(`http://localhost:5000/comment/publications/${id}`)
   return await responce.data
  }

  async createComment(commentBody, publicationID) {
    const responce = await api.post(`http://localhost:5000/comment/${publicationID}`,commentBody)
    return await responce.data
  }

  async deleteComment(commentId) {
    const responce = await api.delete(`http://localhost:5000/comment/delete/${commentId}`);
    return responce.data
  }
}