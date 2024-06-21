import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            rollupTypes: true,
        })
    ],
    build: {
        target: 'es2015',
        lib: {
            entry: 'src/index.ts',
            name: 'VueQrcode',
            fileName: 'vue-qrcode',
            formats: ['es', 'umd', 'iife']
        },
        rollupOptions: {
            external: ['vue', 'qrcode'],
            output: {
                globals: {
                    'vue': 'Vue',
                    'qrcode': 'Qrcode'
                },
                exports: 'named'
            }
        }
    },
})
