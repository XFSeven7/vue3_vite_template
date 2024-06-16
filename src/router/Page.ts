import router from "@/router/index";

/**
 * 页面跳转
 * @param page
 * @param paramsObj 页面跳转携带的参数
 */
export async function pageJump(page: string) {
    await router.push({name: page});
}
