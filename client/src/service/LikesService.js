import api from "@/auth-axios";

export default class LikesService{
  async createLike(publicId,userId) {
    const responce = await api.post("http://localhost:5000/likes/create", {
      "publicId": publicId,
      "userId": userId
    })
    return await responce.data;
  }

  async deleteLike(publicId,userId) {
    const responce = await api.post("http://localhost:5000/likes/destroy", {
      "publicId": publicId,
      "userId": userId
    })
    return await responce.data;
  }

  async getPublicationLikesCount(id){
   const responce =  await api.get(`http://localhost:5000/likes/public/${id}`)
   return await responce.data
  }

  async getUserLikes(userId) {
    const responce = await api.get(`http://localhost:5000/likes/users/${userId}`)
    return await responce.data
  }

  async isUserHaveLike(publicationID,userId){
    const responce = await api.post("http://localhost:5000/likes/havelike",{
      "publicId": publicationID,
      "userId":userId
    })
    return await responce.data
  }

  async getAllUsersLikeForDate(date) {
    const likes = await api.get(`http://localhost:5000/likes/statistics/${date}`);
    return await likes.data;
  }

  async getCategoryLikeCount(categoryId,date) {
    const obj = {
      "date" : date,
      "categoryId": categoryId
    };
    const likes = await api.post("http://localhost:5000/likes/statistics/likecount/count",obj)
    return await likes.data
  }

  async getActiveUsersForDate(date) {
    const responce = await api.post("http://localhost:5000/likes/statistics/active/users",{
      "date" : date
    })
    return await responce.data
  }

  async getActiveUsersStats(userId,date) {
    const responce = await api.post("http://localhost:5000/likes/statistics/active/users/counts", {
      "userId": userId,
      "date":date
    })
    return await responce.data
  }
}