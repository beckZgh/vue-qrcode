// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import VueQrcode from '../../../src/index'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(VueQrcode)
    }
} satisfies Theme
