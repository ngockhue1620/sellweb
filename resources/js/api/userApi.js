import axiosClient from './axiosClient'

const userApi = {
    login: (data) => {     
      const url = 'api/login';
      return axiosClient.post(url,data);
    },
    signUp:(data)=>{
      const url = 'api/customer';
      const result= axiosClient.post(url,data);
      result.then(response=>console.log(response))
      return result;
    },
    getAll:()=>{
      const url = 'api/customer';
      return axiosClient.get(url);
    },
    putById:(data)=>{
      const url = `api/customer/${data.id}`;
      return axiosClient.put(url,data);
    }
  
   
  }
  
  export default userApi;