import api from "@/auth-axios";

export default class LikesService{
  async getPublicationLikesCount(id){
   const responce =  await api.get(`http://localhost:5000/likes/public/${id}`)
   return await responce.data
  }

  async getUserLikes(userId) {
    const responce = await api.get(`http://localhost:5000/likes/users/${userId}`)
    return await responce.data
  }

  async isUserHaveLike(userId,publicationID){
    const responce = await api.post("http://localhost:5000/likes/havelike",{
      "publicId": publicationID,
      "userId":userId
    })
    return await responce.data
  }
}