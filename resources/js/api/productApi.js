import axiosClient from './axiosClient'

const productApi = {
  getAll: () => {

    const url = 'api/product';
    return axiosClient.get(url);
  },




}

export default productApi;