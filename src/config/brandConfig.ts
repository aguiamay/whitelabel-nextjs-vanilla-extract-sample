type Brand = string

export const brandConfig: Record<
    Brand,
    {
        gtmId: string,
        logo: string
        title: string
        description: string
        links: { label: string; href: string }[]
        footerText: string
    }
> = {
    'brand-a': {
        gtmId: 'GTM-AAAAAA',
        logo: 'https://www.svgrepo.com/show/331705/cdn.svg',
        title: 'Brand A',
        description: 'Sua empresa de confiança',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Sobre', href: '/sobre' },
        ],
        footerText: '© 2025 Brand A - Todos os direitos reservados.',
    },
    'brand-b': {
        gtmId: 'GTM-BBBBBB',
        logo: 'https://www.svgrepo.com/show/331706/certificate.svg',
        title: 'Brand B',
        description: 'Qualidade e excelência em serviços',
        links: [
            { label: 'Início', href: '/' },
            { label: 'Contato', href: '/contato' },
        ],
        footerText: '© 2025 Brand B. Powered by SuaEmpresa.',
    },
}
