# API

## 主要 Props

| 属性 | 说明 | 类型 | 默认值 |
| --   | -- | -- | -- |
| tag | 渲染类型 | `canvas`、`svg`、`img` | `svg` |
| value | 二维码绑定值 | `string` | - |
| width | 二维码绘制大小 | `number` | - |
| margin | 四周空白间距 | `number` | 0 |
| colorDark | 二维码深色模块颜色 | `string`| - |
| colorLight | 二维码浅色模块颜色 | `string`| - |
| errorCorrectionLevel | 二维码容错率 | `L`、`M`、`Q`、`H` | - |

## 更多 Props

| 属性 | 说明 | 类型 | 默认值 |
| --   | -- | -- | -- |
| version | 二维码指定版本 | `number` | - |
| maskPattern | 遮罩图案 | `number` | - |
| scale  | 缩放比例因子 | `number` | - |
| small | 渲染为 svg 时是否输出较小的二维码 | `boolean` | - |
