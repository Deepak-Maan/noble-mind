import React from "react";
import { Facebook, FooterLogo, Insta, LInkedin, Twiter } from "./Icons";


const Footer = () => {
    return (
        <div className=" bg-[#161507] overflow-hidden">
            <div className=" container mx-auto px-3 pt-[138px]">
                <div className=" grid lg:grid-cols-3">
                    <div className=" col-span-2">
                        <FooterLogo />
                        <p className=" font-normal text-base font-Exo text-white pt-[28px]">Follow Us</p>
                        <div className="flex pt-2 gap-4 pb-5 sm:pb-0">
                            <Facebook />
                            <Insta />
                            <Twiter />
                            <LInkedin />
                        </div>
                    </div>
                    <div>
                        <div className=" flex gap-[64px]">
                            <ul>
                                <li className="text-white font-semibold text-base font-Outfit">Maine</li>
                                <li className="pt-4"><a href="#home" className="font-normal text-base font-Exo text-[#B7B7B4]">Home</a></li>
                                <li className="pt-[14px]"><a href="#aboutus" className="font-normal text-base font-Exo text-[#B7B7B4]">About Us</a></li>
                                <li className="pt-[14px]"><a href="#" className="font-normal text-base font-Exo text-[#B7B7B4]">services</a></li>
                                <li className="pt-[14px]"><a href="#chooseUs" className="font-normal text-base font-Exo text-[#B7B7B4]"> Why Choose Us </a></li>
                            </ul>
                            <ul>
                                <li className="text-white font-semibold text-base font-Outfit">Legal</li>
                                <li className="pt-4"><a href="#" className=" font-normal text-base font-Exo text-[#B7B7B4]">Term & Conduction</a></li>
                                <li className="pt-[14px]"><a href="#" className=" font-normal text-base font-Exo text-[#B7B7B4]">Privacy Policy</a></li>
                                <li className="pt-[14px]"><a href="#" className=" font-normal text-base font-Exo text-[#B7B7B4]">Contact</a></li>
                                <li className="pt-[14px]"><a href="tel:(629)555-0129" className=" font-normal text-base font-Exo text-[#B7B7B4]">(629) 555-0129</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className=" w-[2345px]  relative left-[-20%] bg-[#B8B8B4] mt-[52px]" />
                <p className=" font-normal font-Exo text-[14px] leading-[21px text-[#B8B8B4] text-center pt-4 pb-[35px]">Â© Copyright 2023 Noble Mind | All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;