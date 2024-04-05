import React from 'react'
import { Logo } from './Icons'

const Preloader = () => {
    return (
        <div>
            <div className="relative flex min-h-screen justify-center items-center">
                <div className="absolute animate-spin rounded-full h-[19rem] w-[19rem] border-t-4 border-b-4 border-purple-500"></div>
                <Logo />
            </div>
        </div>
    )
}

export default Preloader
