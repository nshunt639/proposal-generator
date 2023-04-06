import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import logo from 'public/logo.png'

export default function Header() {
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>()

    const toggleMobileMenu = useCallback(
        () =>
            setMobileMenuVisible && setMobileMenuVisible((visible) => !visible),
        []
    )

    return (
        <header className='max-w-screen-md mx-auto text-center p-6 relative'>
            <div className='flex justify-center items-center'>
            <Image src={logo} alt='Proposal Generator' height={48} className='mr-2' /><h1 className='text-2xl font-bold italic text-purple-600'>Proposal Generator</h1>
            </div>
        </header>
    )
}
