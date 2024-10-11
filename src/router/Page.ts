import router from "@/router/index";

/**
 * 页面跳转
 * @param page
 * @param paramsObj 页面跳转携带的参数
 */
export async function pageJump(page: string) {
    await router.push({name: page});
}

/**
 * 路由跳转页面
 */
export namespace Page {

    /**
     * 首页 {@link import("@/views/home/index.vue")}
     */
    export const home = "home";

    /**
     * 关于页面 {@link import("@/views/about/index.vue")}
     */
    export const about = "loading";

    /**
     * 我的页面 {@link import("@/views/mine/index.vue")}
     */
    export const mine = "mine";

}
