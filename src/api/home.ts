import {request} from "@/api/core/request";

/**
 * 模拟 获取数据 接口
 */
export function login(params: any): Promise<any> {
    return request.get("/xxx/xxx/getData", params);
}
