import React from "react";

import Logo from '../assets/icons/GraduationCap.svg';
import Facebook from '../assets/icons/Facebook.svg';
import Instagram from '../assets/icons/Instragarm.svg'; // FIXED spelling
import LinkedIn from '../assets/icons/Linkedin.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Youtube from '../assets/icons/YoutubeIcon.svg';
import Apple from '../assets/icons/apple 1.svg';
import Android from '../assets/icons/google-play-5 1.svg';
import Arrow from '../assets/icons/ArrowRightW.svg';
import CartDown from '../assets/icons/CaretDown.svg';

const Footer: React.FC = () => {
    const logos = [Facebook, Instagram, LinkedIn, Twitter, Youtube];

    const logoList = logos.map((logo, index) => (
        <div key={index} className="bg-gray-300/30 w-10 h-10 flex items-center justify-center bg-orange-500">
            <img src={logo} alt={`social-icon-${index}`} />
        </div>
    ));

    return (
        <>
            <footer className="bg-gray-900 w-full relative flex px-16 py-12 items-start justify-between flex-wrap gap-10">
                <div className="w-full bg-gray-100/30 absolute h-[0.01rem] top-0 left-0 right-0"></div>
                <div className="w-full bg-gray-100/30 absolute h-[0.01rem] bottom-0 left-0 right-0"></div>

                {/* Left side - Logo and description */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="text-white flex items-center gap-5">
                        <img src={Logo} alt="E-tutor logo" className="w-12 h-12" />
                        <p className="text-3xl font-semibold">E-tutor</p>
                    </div>
                    <p className="text-gray-500 max-w-xs">
                        Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
                    </p>
                    <div className="flex gap-5">{logoList}</div>
                </div>

                {/* Right side - Links */}
                <div className="flex gap-16 flex-wrap">
                    <div>
                        <div className="text-white flex flex-col gap-3">
                            <h4>Top 4 Category</h4>
                            <p className="text-gray-500 text-sm">Development</p>
                            <p className="text-gray-500 text-sm">Finance & Accounting</p>
                            <p className="text-gray-500 text-sm">Design</p>
                            <p className="text-gray-500 text-sm">Business</p>
                        </div>
                    </div>

                    <div>
                        <div className="text-white flex flex-col gap-3">
                            <h4>Quick Links</h4>
                            <p className="text-gray-500 text-sm">About</p>
                            <p className="text-sm flex gap-1 items-center relative cursor-pointer">
                                Become Instructor
                                <img src={Arrow} alt="Arrow right" className="w-5 h-5" />
                                <div className="w-full absolute h-[0.1rem] bg-orange-500 right-0 left-0 bottom-[-5px]"></div>
                            </p>
                            <p className="text-gray-500 text-sm">Contact</p>
                            <p className="text-gray-500 text-sm">Career</p>
                        </div>
                    </div>

                    <div>
                        <div className="text-white flex flex-col gap-3">
                            <h4>Support</h4>
                            <p className="text-gray-500 text-sm">Help Center</p>
                            <p className="text-gray-500 text-sm">FAQs</p>
                            <p className="text-gray-500 text-sm">Terms & Condition</p>
                            <p className="text-gray-500 text-sm">Privacy Policy</p>
                        </div>
                    </div>

                    <div className="text-white flex flex-col gap-5 items-start">
                        <h5>Download Our App</h5>
                        <div className="bg-gray-600/30 flex gap-3 px-2 py-1 items-center">
                            <img src={Apple} alt="Download on Apple Store" className="w-6 h-6" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[10px] text-gray-300">Download now</p>
                                <p>App Store</p>
                            </div>
                        </div>
                        <div className="bg-gray-600/30 flex gap-3 px-2 py-1 items-center">
                            <img src={Android} alt="Download on Play Store" className="w-6 h-6" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[10px] text-gray-300">Download now</p>
                                <p>Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="py-5 px-16 bg-gray-900 flex flex-wrap gap-5 items-center justify-between">
                <p className="text-gray-400">
                    © 2021 - Eduflex. Designed by <span className="text-white">Templatecookie</span>. All rights reserved.
                </p>
                <div className="relative w-fit">
                    <input
                        placeholder="English"
                        className="text-white bg-gray-900 py-1 px-6 w-44 border border-gray-700"
                    />
                    <button className="bg-transparent">
                        <img src={CartDown} alt="Dropdown arrow" className="absolute right-4 top-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Footer;
