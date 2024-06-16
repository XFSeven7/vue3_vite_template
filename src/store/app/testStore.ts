import {defineStore} from "pinia";
import {ref} from "vue";

/**
 * 内置pinia演示
 */
export const useTestStore = defineStore("test", () => {
    const navIndex = ref(0);
    return {
        navIndex
    }
})
