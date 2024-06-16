import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        port:6481,
        open: true,// 运行成功自动打开
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})
