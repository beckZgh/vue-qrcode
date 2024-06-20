import type { QRCodeErrorCorrectionLevel, QRCodeMaskPattern } from 'qrcode'
import type { PropType, ExtractPublicPropTypes } from 'vue'

export const componentProps = {
    tag: {
        type   : String as PropType<'canvas' | 'svg' | 'img'>,
        default: 'svg',
        validator(value: string) {
            return ['canvas', 'svg', 'img'].includes(value)
        },
    },
    value               : { type: String                                                },
    version             : { type: Number                                                }, // 二维码版本
    errorCorrectionLevel: { type: String as PropType<QRCodeErrorCorrectionLevel>        }, // 容错率，无设置将根据内容长度自动计算：L, M, Q, H
    maskPattern         : { type: Number as PropType<QRCodeMaskPattern>                 }, // 遮罩图案：0, 1, 2, 3, 4, 5, 6, 7.
    margin              : { type: Number, default: 0                                    }, // 空白间距
    scale               : { type: Number                                                }, // 比例因子，值为 1 表示每个模块 1px（黑点）
    small               : { type: Boolean                                               }, // 是否输出较小的二维码
    width               : { type: Number                                                }, // 二维码大小
    colorDark           : { type: String, default: '#000000'                            }, // 二维码深色模块颜色自定义
    colorLight          : { type: String, default: '#ffffff'                            }, // 二维码浅色模块颜色自定义
    toImageOptions      : { type: Object as PropType<{ type: string, quality: number }> },
}

export type ComponentProps = ExtractPublicPropTypes<typeof componentProps>
