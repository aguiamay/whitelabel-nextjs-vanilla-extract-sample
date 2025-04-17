'use client'

import { createContext, useContext } from 'react'

const BrandContext = createContext<string | null>(null)

export const BrandProvider = ({
    brand,
    children,
}: {
    brand: string
    children: React.ReactNode
}) => {
    return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>
}

export const useBrand = () => {
    const context = useContext(BrandContext)
    if (!context) {
        throw new Error('useBrand must be used within a BrandProvider')
    }
    return context
}
