import type { QRCodeRenderersOptions } from 'qrcode'
import type { QrcodeProps } from './component'

// 对于内容少的QrCode，增大容错率
export function getErrorCorrectionLevel(content: string = '') {
    if (content.length > 36) {
        return 'M'
    } else if (content.length > 16) {
        return 'Q'
    } else {
        return 'H'
    }
}

export function getQrcodeOptions(options: QrcodeProps): Partial<QRCodeRenderersOptions> {
    let error_lever = options.errorCorrectionLevel
    if ( !error_lever )  {
        error_lever = getErrorCorrectionLevel(options.value)
    }

    const opts: Record<string, any> = {
        version             : options.version,
        errorCorrectionLevel: options.errorCorrectionLevel,
        maskPattern         : options.maskPattern,
        margin              : options.margin,
        scale               : options.scale,
        small               : options.small,
        width               : options.width,
        color               : {} as { dark: string; light: string },
    }

    if (options.colorDark ) opts.color.dark  = options.colorDark
    if (options.colorLight) opts.color.light = options.colorLight

    // 补充图片绘制参数
    if (options.tag === 'img') {
        if (options.toImageOptions?.type   ) opts.type    = options.toImageOptions.type
        if (options.toImageOptions?.quality) opts.quality = options.toImageOptions.quality
    }

    excludeUndefined(opts)
    return opts
}

function excludeUndefined(obj: Record<string, any>) {
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] === undefined) {
            delete obj[prop]
        }
    }
}
