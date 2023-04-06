import { useRouter } from 'next/router'
import React, {
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'

interface LayoutContext {}

const LayoutContext: React.Context<LayoutContext> =
    React.createContext<LayoutContext>({})

interface LayoutProvider {
    children: ReactNode
}

export function LayoutProvider({ children }: LayoutProvider) {
    return (
        <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>
    )
}

export const useLayout = (): LayoutContext => {
    const context = useContext<LayoutContext>(LayoutContext)
    return context
}
