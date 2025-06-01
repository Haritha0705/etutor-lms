import React from "react";
import {ChevronRight,Star,Dot,AlarmClock,Clock3,ChartNoAxesColumnIncreasing,Users,BookText,LucideNotepadText} from 'lucide-react';
import img1 from "../../assets/image/Image Instracter 4.jpg"
import img2 from "../../assets/image/Image Instracter 5.jpg"
import Button from "../../Components/Shared/Button.tsx";

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
                <div className={'absolute right-72 top-20 p-5 bg-white w-[500px]'}>
                    <div className={'relative'}>
                        <div className={'absolute w-full h-[0.01rem] bg-gray-200 bottom-0 left-0 right-0'}></div>
                        <div className={'flex'}>
                            <div className={'flex flex-col gap-5'}>
                                <div className={'flex items-center gap-2'}>
                                    <p className={'text-xl'}>$14.00</p>
                                    <p className={'text-gray-400 line-through'}>$26.00</p>
                                </div>
                                <div className={'flex'}>
                                    <AlarmClock  className={'text-red-600'}/>
                                    <p className={'text-red-600'}>2 days left at this price!</p>
                                </div>
                            </div>
                            <div>
                                <div className={'bg-orange-100 px-2 py-1'}>
                                    <p className={'text-orange-500'}>56% off</p>
                                </div>
                            </div>

                        </div>

                        <div className={'flex flex-col'}>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex gap-5'}>
                                    <Clock3/>
                                    <p>Course Duration</p>
                                </div>
                                <p className={'text-gray-400'}>6 Month</p>
                            </div>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex gap-5'}>
                                    <ChartNoAxesColumnIncreasing/>
                                    <p>Course Level</p>
                                </div>
                                <p className={'text-gray-400'}>Beginner and Intermediate</p>
                            </div>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex gap-5'}>
                                    <Users/>
                                    <p>Students Enrolled</p>
                                </div>
                                <p className={'text-gray-400'}>69,419,618</p>
                            </div>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex gap-5'}>
                                    <BookText/>
                                    <p>Language</p>
                                </div>
                                <p className={'text-gray-400'}>Mandarin</p>
                            </div>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex gap-5'}>
                                    <LucideNotepadText/>
                                    <p>Subtittle Language</p>
                                </div>
                                <p className={'text-gray-400'}>English</p>
                            </div>
                            <div className={'flex flex-col gap-y-5'}>
                                <Button className={'w-full justify-center'} text={'Add to Cart'} colours={'primary-primary'}/>
                                <Button className={'w-full py-4 justify-center'} text={'Buy now'} colours={'secondary-primary'}/>
                                <div className={'flex flex-row gap-5'}>
                                    <Button text={'Add to wishlist'} className={'w-full justify-center'}/>
                                    <Button text={'Gift Course'} className={'w-full justify-center'}/>
                                </div>
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