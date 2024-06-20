import type { ComponentProps } from './component'

import Qrcode from 'qrcode'
import { getQrcodeOptions } from './utils'

export async function genQrcodeImage(value: string, options?: Omit<ComponentProps, 'tag' | 'value'>) {
    try {
        if (!value) return null
        return await Qrcode.toDataURL(value, getQrcodeOptions({
            errorCorrectionLevel: 'H',
            margin              : 0,
            ...options,
            value,
        }))
    } catch (error) {
        return null
    }
}
