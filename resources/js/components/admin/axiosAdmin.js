import axios from "axios";
import queryString from "query-string";

const axiosAdmin = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (param) => queryString.stringify(param),
});

axiosAdmin.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = "";
    return config;
});

axiosAdmin.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            localStorage.clear("token");
        }
        return Promise.reject(error.response?.data?.message);
    }
);

export default axiosAdmin;
