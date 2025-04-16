import { brandConfig } from '@/config/brandConfig'

interface Brand {
    brand: string
}

export default function Header({ brand }: Brand) {
    const { logo, links } = brandConfig[brand]

    return (
        <header>
            <img src={logo} alt={`${brand} logo`} />
            <nav>
                <ul>
                    {links.map((link: { href: string; label: string }) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}