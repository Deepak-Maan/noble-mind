import Image from 'next/image'
import AboutImg from '../../../public/assets/images/about-us-img.png'
import { AIlogo } from './Icons'
import CommonBtn from './CommonBtn'
const Aboutus = () => {
    return (
        <div className='container mx-auto px-3 py-[150px]'>
            <div className="grid min-[1140px]:grid-cols-2 gap-[75px]">
                <div>
                    <Image src={AboutImg} alt={AboutImg} height={567} width={544} />
                </div>
                <div className=' pt-4'>
                    <p className='flex gap-[6px] items-center pb-2'><AIlogo />About Us</p>
                    <h2 className=' font-Outfit text-5xl leading-[57px] font-light text-black'>Pioneering Vision & Mission-<span className=' font-semibold'>Driven Sectoral Innovation</span></h2>
                    <p className='text[#4D4D4D] text-base font-Exo pb-[42px]'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                    <CommonBtn text='Read More' />
                </div>
            </div>
        </div>
    )
}

export default Aboutus
