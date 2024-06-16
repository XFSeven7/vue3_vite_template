// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src'  // 可根据项目实际情况调整
        }
    },
    server: {
        port: 3000, // 可根据需要调整开发服务器端口
    }
})
