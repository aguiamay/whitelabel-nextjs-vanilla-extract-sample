import { brandConfig } from '@/config/brandConfig'

interface Brand {
    brand: string
}

export default function Footer({ brand }: Brand) {
    const { footerText } = brandConfig[brand]

    return (
        <footer>
            <p>{footerText}</p>
        </footer>
    )
}
