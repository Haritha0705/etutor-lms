import React from "react";
import {Link} from "react-router-dom";
import instractorImg from "../../assets/image/Image Instracter 4.jpg"
import play from "../../assets/icons/PlayCircle.svg"
import user from "../../assets/icons/User.svg"
import star from "../../assets/icons/Star.svg"
import crown from "../../assets/icons/Crown.svg"
import facebook from "../../assets/icons/facebookGray.svg"
import twitter from "../../assets/icons/twitterGray.svg"
import instergram from "../../assets/icons/instagramGray.svg"
import youtube from "../../assets/icons/youtubeGray.svg"
import whatapp from "../../assets/icons/whatsappGray.svg"
import world from "../../assets/icons/Globe.svg"




const Instructor_Profile:React.FC = ()=> {

    return (
        <section className={'w-full'}>
            <div className={'relative w-full bg-orange-300/30 py-28 mb-20'}>
                <div className={'absolute bottom-[-100px] right-1/2 translate-x-1/2 w-3/4 bg-white p-10 border border-orange-500/30'}>
                    <div className={'flex justify-between'}>
                        <div className={'flex items-center gap-10'}>
                            <img src={instractorImg} className={'rounded-full w-48 h-48'}/>
                            <div className={'flex flex-col gap-5 items-start'}>
                                <div className={'flex items-center gap-10'}>
                                    <h4 className={'text-3xl font-semibold'}>Vako Shvili</h4>
                                    <div className={'flex bg-orange-300/30 py-1 px-3 gap-2'}>
                                        <img src={crown}/>
                                        <span className={'text-sm text-orange-500'}>Top Rated</span>
                                    </div>
                                </div>
                                <p className={'text-md text-gray-500'}>Web Designer & Best-Selling Instructor</p>
                                <div className={'flex gap-5'}>
                                    <div className={'flex items-center gap-3'}>
                                        <img src={star} className={'w-7'}/>
                                        <p>4.8<span className={'text-gray-400 pl-1'}> (134,633 review)</span></p>
                                    </div>
                                    <div className={'flex items-center gap-3'}>
                                        <img src={user} className={'w-7'}/>
                                        <p>430,117<span className={'text-gray-400 pl-1'}>students</span></p>
                                    </div>
                                    <div className={'flex items-center gap-3'}>
                                        <img src={play} className={'w-7'}/>
                                        <p>7<span className={'text-gray-400 pl-1'}>courses</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-end justify-center gap-2'}>
                            <div className={'flex items-center gap-2'}>
                                <img src={world}/>
                                <Link to={'https://www.vakoshvili.com'}>https://www.vakoshvili.com</Link>
                            </div>
                            <div>
                                <div className={'flex gap-2'}>
                                    <div className={'bg-gray-200 justify-center items-center p-3'}>
                                        <img src={facebook}/>
                                    </div>
                                    <div className={'bg-gray-200 justify-center items-center p-3'}>
                                        <img src={twitter}/>
                                    </div>
                                    <div className={'bg-gray-200 justify-center items-center p-3'}>
                                        <img src={instergram}/>
                                    </div>
                                    <div className={'bg-gray-200 justify-center items-center p-3'}>
                                        <img src={youtube}/>
                                    </div>
                                    <div className={'bg-gray-200 justify-center items-center p-3'}>
                                        <img src={whatapp}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-full bg-white pt-10 pb-20 px-[213px]'}>
                <div className={'border border-gray-400/30 p-5 w-fit'}>
                    <h4 className={'text-xl mb-2'}>About Me</h4>
                    <div className={'text-xs text-gray-600 max-w-xs flex flex-col gap-2'}>
                        <p>One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup.</p>
                        <p>He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and make a lot more money in the process. No more begging for vacation days and living from paycheck to paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when he started freelance design. Vako fell in love with the field that gives him the lifestyle of his dreams.</p>
                        <p>Vako realizes that people who take courses on Udemy want to transform their lives. Today with his courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Instructor_Profile