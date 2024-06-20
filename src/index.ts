import type { App } from 'vue'
import VueQrcode from './component.vue'

export * from './component'
export * from './helper'

const install = (app: App) => {
    app.component('VueQrcode', VueQrcode)
}

export default { install }
