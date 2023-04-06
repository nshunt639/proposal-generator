import { useRouter } from 'next/router'
import React from 'react'
// import Image from 'next/image'
// import logo from 'public/logo.png'

export default function Footer() {
    const router = useRouter()

    return <div className='max-w-screen-md mx-auto text-center p-6'>
        <div className='flex items-center'>
            {/* <span className='w-8 h-8 mr-4'><Image src={logo} alt='Proposal Generator' /></span> */}
            <span className='text-sm text-gray-500'>©2023 Proposal Generator</span>
        </div>
    </div>
}
