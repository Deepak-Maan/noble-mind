import React from 'react'

const NewsLetter = () => {
    return (
        <div className='container mx-auto  px-3 translate-y-[20%] '>
            <div className="  rounded-[20px] bg-newsImg h-[318px]  flex flex-col justify-center">
                <h2 className='font-light text-5xl text-center leading-[57px] text-white'>Subscribe to our <span className='font-semibold'>Newsletter!</span></h2>
                <p className='text-center text-white text-base font-normal font-Exo pb-9 pt-2'>Be the first to get exclusive offers and the latest news.</p>
                <div className='mx-auto bg-[#FFFFFF0D] backdrop-blur-[30px] max-w-[448px] w-full border border-[#A37FE0] rounded-[6px] py-[10px] pr-[10px] pl-6 flex justify-between'>
                    <input type="email" name="email" id="email" className='bg-transparent placeholder:text-white placeholder:font-semibold placeholder:text-base placeholder:font-Outfit focus:outline-none border-none text-white font-semibold font-Outfit text-base' placeholder='Enter your email' />
                    <button className='py-[14px] px-6 border border-white font-Outfit font-semibold text-base rounded text-white'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
