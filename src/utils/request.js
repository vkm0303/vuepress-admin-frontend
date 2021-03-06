/*
 * @Description: 
 * @Author: AmsChen
 * @Date: 2021-04-04 09:30:36
 * @LastEditors: AmsChen
 * @LastEditTime: 2021-04-04 14:20:19
 * @FilePath: \hexo后台管理系统\Frontend\src\utils\request.js
 */
import axios from "axios";

const service = axios.create({
    // process.env.NODE_ENV === "development" 来判断是否开发环境
    baseURL: "http://localhost:3100/api",
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
