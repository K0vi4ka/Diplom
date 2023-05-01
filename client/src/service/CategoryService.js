import api from "@/auth-axios";

export default class CategoryService{
  async getAllCategory(){
   const responce =  await api.get('http://localhost:5000/category')
   return await responce.data
  }

  async getCaegoryValue(value){
    const responce = await api.get(`http://localhost:5000/category/${value}`)
    return responce.data.id
  }

  async getFullCategoryData() {
    const responce = await api.get('http://localhost:5000/category/categoryname/full')
    return await responce.data
  }

  async getCategoryName(id) {
    const responce = await api.get(`http://localhost:5000/category/categoryId/${id}`)
    return await responce.data;
  }

}