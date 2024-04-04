import React from 'react'
import { AIlogo } from './Icons'

const Hero = () => {
    return (
        <div id='home' className='flex min-h-[720px] items-center'>
            <div className=' container mx-auto px-3'>
                <p className='flex gap-[6px] items-center text-[#131200] text-base font-normal font-Exo'><AIlogo /> AI With Noble Mind</p>
                <h1 className=' font-Outfit text-black font-light text-[64px] max-w-[584px] leading-[76px] '>Inspiring Innovation, Elevating Solutions – <span className=' font-semibold font-Montserrat'>Noble Mind"</span></h1>
                <p className='font-base font-Exo font-normal text-[#4D4D4D] max-w-[584px]'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
            </div>
        </div>
    )
}

export default Hero
