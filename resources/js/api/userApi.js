import axiosClient from './axiosClient'

const userApi = {
    login: (data) => {
     
      const url = 'api/login';
      return axiosClient.post(url,data);
    },
    signUp:(data)=>{
      const url = 'api/customer';
      return axiosClient.post(url,data);
    },
    getAll:()=>{
      const url = 'api/customer';
      return axiosClient.get(url);
    }
  
   
  }
  
  export default userApi;