import axios, {AxiosInstance} from "axios";

export function createAxiosByinterceptors(): AxiosInstance {
    const instance = axios.create({
        timeout: 30 * 1000, // 超时配置
        withCredentials: false, // 跨域携带cookie
    });

    // 请求拦截器
    instance.interceptors.request.use(
        function (config: any) {
            // 模拟添加请求头
            config.headers["token"] = "token";
            return config;
        },
        function (error) {
            // TODO 处理异常情况
            return Promise.reject(error);
        }
    );

    // 响应拦截器
    instance.interceptors.response.use(
        function (response) {
            // TODO 拦截操作
            return response
        }, function (error) {
            // TODO 处理异常情况
            return Promise.reject(error);
        }
    );

    return instance;

}

export const request = createAxiosByinterceptors();
