type Brand = string

export const brandConfig: Record<
    Brand,
    {
        logo: string
        links: { label: string; href: string }[]
        footerText: string
    }
> = {
    'brand-a': {
        logo: 'https://www.svgrepo.com/show/331705/cdn.svg',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Sobre', href: '/sobre' },
        ],
        footerText: '© 2025 Brand A - Todos os direitos reservados.',
    },
    'brand-b': {
        logo: 'https://www.svgrepo.com/show/331706/certificate.svg',
        links: [
            { label: 'Início', href: '/' },
            { label: 'Contato', href: '/contato' },
        ],
        footerText: '© 2025 Brand B. Powered by SuaEmpresa.',
    },
}
