import { brandATheme } from './brands/brand-a.theme.css'
import { brandBTheme } from './brands/brand-b.theme.css'

export const themes: Record<string, string> = {
    'brand-a': brandATheme,
    'brand-b': brandBTheme,
}

export function resolveTheme(brand: string): string {
    return themes[brand] ?? brandATheme // fallback
}