import axios from "axios"
import { ElMessage } from 'element-plus'

let axiosurl = ""

if(process.env.NODE_ENV == "development") {
    axiosurl=process.env.VUE_APP_API
} else {
    axiosurl = process.env.VUE_APP_API
}

// 创建 axios 实例
const service = axios.create({
    baseURL:axiosurl
});
// 请求拦截和响应拦截
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    // 在接收到响应的时候先进行一些操作，在请求结果返回的时候，
    // 先不显示信息，先对响应状态码进行一些处理，给用户提示错误信息
    console.log(error.response.status);
    switch(error.response.status) {
        case 404:
            ElMessage.error("访问路径不存在");
            break;
        case 500:
            ElMessage.error("服务连接失败，请稍后再试");
            break;
        default:
            ElMessage.error("未知错误！")
    }
    return Promise.reject(error);
});

export default service;