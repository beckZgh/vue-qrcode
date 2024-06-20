# VueQrcode

二维码图形组件，支持 Vue3

## 安装

```bash
pnpm install @sumdoo/vue-qrcode
```

## 使用

```vue
<script stgeup lang="ts">
import { VueQrcode } from '@sumdoo/vue-qrcode'
import { ref } from 'vue'

const qrcode_value = ref('1234567890')
</script>

<template>
    <VueQrcode :value="qrcode_value" :width="200" />
</template>
```
