# 基础使用


## 默认方式

给定 `value: string` 属性值即可渲染出二维码

<VueQrcode value="1234567890" :width="200" />

## 自定义大小

通过 `width: number` 可自定义二维码大小

<VueQrcode value="1234567890" :width="150"  />


## 自定义深色颜色

通过 `colorDark: string` 可自定义二维码深色颜色 (必须是十六进制格式)

<VueQrcode value="1234567890" :width="200" colorDark="#a64830" />
