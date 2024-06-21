<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import { qrcodeProps      } from './component'
import { getQrcodeOptions } from './utils'
import QRCode from 'qrcode'

export default defineComponent({
    name: 'VueQrcode',
    props: qrcodeProps,
    emits: ['done', 'error'],
    setup(props, { emit }) {
        const container_ref = ref<HTMLDivElement>()

        onMounted(renderQrcode)
        watch(() => props, renderQrcode, { deep: true })

        async function renderQrcode() {
            try {
                const $container = container_ref.value
                if ( !$container ) return

                const value = props.value
                if ( !value ) {
                    $container.innerHTML = ''
                    return
                }

                const qrcode_options = getQrcodeOptions(props)

                switch (props.tag) {
                    case 'canvas': {
                        const canvas = document.createElement('canvas')
                        await QRCode.toCanvas(canvas, value, qrcode_options)
                        $container.innerHTML = ''
                        $container.appendChild(canvas)
                        break
                    }
                    case 'svg': {
                        const svg = await QRCode.toString(value, qrcode_options)
                        $container.innerHTML = svg
                        break
                    }
                    case 'img': {
                        const img_data = await QRCode.toDataURL(value, {
                            errorCorrectionLevel: 'H',
                            ...qrcode_options,
                        })
                        const img = document.createElement('img')
                        img.src = img_data
                        $container.innerHTML = ''
                        $container.appendChild(img)
                        break
                    }
                }
                emit('done')
            } catch (error) {
                if (process.env.NODE_ENV === 'developmnent') {
                    console.error(`[SdQrcode]: ${ error }`)
                }
                emit('error', error)
            }
        }

        // 取得绘制图片内容
        async function toDataURL(options?: Record<string, any>) {
            const value = props.value
            if ( !value ) return null

            const qrcode_options = getQrcodeOptions({ ...(options || props), value })
            return QRCode.toDataURL(value, { errorCorrectionLevel: 'H', ...qrcode_options })
        }

        return {
            container_ref,
            toDataURL
        }
    },
})
</script>

<template>
    <div ref="container_ref" style="display: inline-block;" />
</template>
