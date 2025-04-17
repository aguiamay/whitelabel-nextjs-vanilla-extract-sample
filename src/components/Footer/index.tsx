'use client'

import { useBrand } from '@/context/brand'
import { getBrandConfig } from '@/utils/getBrandConfig'

export default function Footer() {
    const brand = useBrand()
    const config = getBrandConfig(brand)
    const { footerText } = config

    return (
        <footer>
            <p>{footerText}</p>
        </footer>
    )
}
