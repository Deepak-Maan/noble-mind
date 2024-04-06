import Image from 'next/image'
import AboutImg from '../../../public/assets/images/about-us-img.webp'
import { AIlogo, Ellipse } from './Icons'
import CommonBtn from './CommonBtn'
const Aboutus = () => {
    return (
        <div className='relative'>
            <div className=' absolute top-0 left-0 animate-pulse'><Ellipse /></div>
            <div className=' absolute bottom-[20%] right-[20px]'><Ellipse /></div>
            <div id='aboutus' className='container mx-auto px-3 py-7 sm:py-10 md:py-20 lg:py-[150px]'>
                <div className="grid min-[1140px]:grid-cols-2 gap-1 sm:gap-7 md:gap-10 lg:gap-[75px]">
                    <div>
                        <Image src={AboutImg} alt={AboutImg} height={567} width={544} />
                    </div>
                    <div className=' pt-4'>
                        <p className='flex gap-[6px] items-center pb-2'><AIlogo />About Us</p>
                        <h2 className=' font-Outfit text-2xl md:text-4xl lg:text-5xl leading-8 lg:leading-[57px] font-light text-black'>Pioneering Vision & Mission-<span className=' font-semibold'>Driven Sectoral Innovation</span></h2>
                        <p className='text[#4D4D4D] text-sm sm:font-base font-Exo pb-[42px]'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                        <CommonBtn text='Read More' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
