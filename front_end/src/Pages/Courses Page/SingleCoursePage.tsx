import React from "react";
import {ChevronRight,Star,Dot,AlarmClock} from 'lucide-react';
import img1 from "../../assets/image/Image Instracter 4.jpg"
import img2 from "../../assets/image/Image Instracter 5.jpg"

const SingleCoursePage:React.FC = ()=> {

    return (
        <section className={'w-full'}>
            <div className={'relative bg-gray-300/20 pt-20 px-72 pb-10 justify-start'}>
                <div className={'flex text-gray-400'}>
                    <p>Home</p>
                    <ChevronRight/>
                    <p>Development</p>
                    <ChevronRight/>
                    <p>Web Development</p>
                    <ChevronRight/>
                    <p>Webflow</p>
                </div>
                <div className={'max-w-3xl pb-8'}>
                    <h1 className={'text-3xl pb-5'}>Complete Website Responsive Design: from Figma to Webflow to Website Design</h1>
                    <p className={'text-lg text-gray-600'}>3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.</p>
                </div>
                <div className={'flex items-center justify-between max-w-3xl'}>
                    <div className={'flex'}>
                        <div className={'flex relative pr-10'}>
                            <img src={img1} className={'w-12 h-12 rounded-full'}/>
                            <img src={img2} className={'absolute w-12 h-12 rounded-full bottom-0 left-7 border border-white'}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <p>Created by:</p>
                            <div className={'flex'}>
                                <p>Dianne Russell</p>
                                <Dot/>
                                <p>Kristin Watson</p>
                            </div>
                        </div>
                    </div>
                    <div className={'flex gap-5'}>
                        <div className={'flex'}>
                            <Star className={'fill-orange-400 text-orange-400'}/>
                            <Star className={'fill-orange-400 text-orange-400'}/>
                            <Star className={'fill-orange-400 text-orange-400'}/>
                            <Star className={'fill-orange-400 text-orange-400'}/>
                            <Star className={'fill-orange-400 text-orange-400'}/>
                        </div>
                        <p>4.8<span> (451,444 Rating)</span></p>
                    </div>
                </div>
                <div className={'absolute w-[500px] right-72 top-20 p-10 bg-white'}>
                    <div className={'flex '}>
                        <div>
                            <div className={'flex'}>
                                <p>$14.00</p>
                                <p>$26.00</p>
                            </div>
                            <div className={'flex'}>
                                <AlarmClock  className={'text-red-600'}/>
                                <p className={'text-red-600'}>2 days left at this price!</p>
                            </div>
                        </div>
                        <div>
                            <div className={'bg-orange-200'}>
                                <p>56% off</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className={'bg-white h-screen'}>

            </div>
        </section>
    );
}

export default SingleCoursePage