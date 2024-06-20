import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import fs from 'node:fs'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            rollupTypes: true,
            afterBuild: () => {
                const old_path = resolve(__dirname, 'dist/vue-qrcode.d.ts')
                const new_path = resolve(__dirname, 'dist/index.d.ts')
                fs.renameSync(old_path, new_path)
            }
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
