import React from 'react'

const NewsLetter = () => {
    return (
        <div className='container mx-auto  px-3 translate-y-[20%] '>
            <div className="  rounded-[20px] bg-newsImg h-[275px] sm:h-[318px]  flex flex-col justify-center px-2">
                <h2 className='font-light text-2xl md:text-4xl lg:text-5xl leading-8 lg:leading-[57px] text-center text-white'>Subscribe to our <span className='font-semibold'>Newsletter!</span></h2>
                <p className='text-center text-white text-sm sm:font-base font-normal font-Exo pb-4 md:pb-9 pt-2'>Be the first to get exclusive offers and the latest news.</p>
                <div className='mx-auto bg-[#FFFFFF0D] backdrop-blur-[30px] max-w-[448px] w-full border border-[#A37FE0] rounded-[6px] py-[10px] pr-[10px] pl-1 sm:pl-6 flex justify-between'>
                    <input type="email" name="email" id="email" className='bg-transparent placeholder:text-white placeholder:font-semibold placeholder:text-sm sm:placeholder:text-base placeholder:font-Outfit focus:outline-none border-none text-white font-semibold font-Outfit text-sm sm:text-base max-sm:w-full' placeholder='Enter your email' />
                    <button className='py-[14px] px-6 border border-white font-Outfit font-semibold text-base rounded hover:bg-white hover:text-[#9065EE] duration-500 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
