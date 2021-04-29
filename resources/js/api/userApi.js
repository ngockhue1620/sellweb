import axiosClient from './axiosClient'

const userApi = {
    login: (data) => {
     
      const url = 'api/customer/create';
      return axiosClient.get(url,data);
    },
  
   
  }
  
  export default userApi;