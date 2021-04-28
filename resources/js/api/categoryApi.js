import axiosClient from './axiosClient'

const categoryApi = {
    getAll: () => {
    
      const url = 'api/category';
      return axiosClient.get(url);
    },
  
   
  }
  
  export default categoryApi;