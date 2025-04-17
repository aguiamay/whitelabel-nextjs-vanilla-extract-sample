import { brandConfig } from '@/config/brandConfig'

export const getBrandConfig = (brand: string) => {
    const config = brandConfig[brand]

    if (!config) {
        return {
            gtmId: '',
            logo: 'https://www.svgrepo.com/show/331705/cdn.svg',
            title: '',
            description: '',
            links: [],
            footerText: '',
        }
    }

    return config
}