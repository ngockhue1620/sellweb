import axiosClient from './axiosClient'

const orderApi = {
    postOrder: (data) => {
    
      const url = 'api/order';
      return axiosClient.post(url,data);
    },
  
   
  }
  
  export default orderApi;