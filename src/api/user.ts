import {request} from "@/api/core/request";

/**
 * 模拟 登录接口
 */
export function login(params: any): Promise<any> {
    return request.post("/xxx/user/login", params);
}
