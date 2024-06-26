import React from 'react'
import CommonBtn from './CommonBtn'
import ContactImg from '../../../public/assets/images/contact-img.webp'
import Image from 'next/image'
const ContactUs = () => {
    return (
        <div className='container'>
            <div className="grid lg:grid-cols-2">
                <div className='max-w-[478px] order-2 lg:order-1 max-lg:mx-auto'>
                    <h2 className=' text-2xl md:text-4xl lg:text-5xl leading-8 lg:leading-[57px] text-black font-semibold font-Outfit pt-4 lg:pt-0'>Contact <span className='font-light'>Us</span></h2>
                    <p className='text-sm sm:font-base font-Exo text-[#5A594D] max-w-[409px] pt-4 pb-[18px] '>Feel free to contact us any time . We will get back to you as soon as we can! </p>
                    <div className='flex max-sm:flex-col gap-3 pb-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-[#5A594D] pb-2 text-base fornt-normal font-Exo '>Name</label>
                            <input type="text" id='Name' className='border border-[#D0D0CC] rounded-lg h-12 w-full sm:w-[233px] sm:max-w-[233px] focus:outline-none px-2 text-[#5A594D] text-base font-Exo' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="LastName" className='text-[#5A594D] pb-2 text-base fornt-normal font-Exo '>Last Name</label>
                            <input type="text" id='LastName' className='border border-[#D0D0CC] rounded-lg h-12 w-full sm:w-[233px] sm:max-w-[233px] focus:outline-none px-2 text-[#5A594D] text-base font-Exo' />
                        </div>
                    </div>
                    <div className='flex flex-col pb-4'>
                        <label htmlFor="Email" className='text-[#5A594D] text-base fornt-normal font-Exo pb-2'>Email</label>
                        <input type="email" id='Email' className='border border-[#D0D0CC] rounded-lg h-12 focus:outline-none px-2 text-[#5A594D] text-base font-Exo' />
                    </div>
                    <div className='flex flex-col pb-6'>
                        <label htmlFor="Message" className='pb-2 text-[#5A594D] text-base fornt-normal font-Exo'>Message</label>
                        <textarea name="" id="" cols="30" rows="10" className='resize-none border border-[#D0D0CC] rounded-lg h-[135px] focus:outline-none p-2 text-[#5A594D] text-base font-Exo'></textarea>
                    </div>
                    <CommonBtn text='Submit' />
                </div>
                <div className='order-1 lg:order-2'>
                    <Image src={ContactImg} alt='Contact Img' width={598} height={572} className=' mx-auto sm:h-[572px] max-sm:rounded-[8px] max-sm:h-[250px] max-sm:object-cover' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
