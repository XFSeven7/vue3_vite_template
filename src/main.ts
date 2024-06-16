import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style/global.less";
import {pinia} from "@/store";

let app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');

// let designWidth = 1920;// 电脑设计稿宽度
let designWidth = 375;// 手机设计稿宽度

// 设置 rem 函数
function setRem() {
    let windowWidth = document.documentElement.clientWidth;
    const scale = windowWidth / designWidth;
    document.documentElement.style.fontSize = scale.toFixed(2) + "px";
}

// 初始化
setRem();

// 改变窗口大小时重新设置 rem
window.onresize = function() {
    setRem();
};
