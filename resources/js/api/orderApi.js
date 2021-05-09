import axiosClient from './axiosClient'

const orderApi = {
    postOrder: (data) => {
    
      const url = 'api/order';
      return axiosClient.post(url,data);
    },
    getHistoryOrders:(id)=>{
      const url=`api/history/${id}`
      return axiosClient.get(url);
    }
  
   
  }
  
  export default orderApi;