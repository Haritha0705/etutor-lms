import React from "react";
import coverImg from "../assets/image/ContactMain.jpg"
import Button from "../Components/Button.tsx";
import Email from "../assets/icons/email.svg";
import Card from "../Components/About Page/Contact Page/Card.tsx";
import Img1 from "../assets/image/ContactImage1.jpg"
import Img2 from "../assets/image/ContactImage2.jpg"
import Img3 from "../assets/image/ContactImage3.jpg"
import Img4 from "../assets/image/ContactImage4.jpg"
import Rocket from "../assets/icons/PaperPlaneRight.svg"
import Map from  "../assets/image/Mao.jpg"


const Contact:React.FC = ()=> {

    return (
        <section className={'w-full'}>
            <div className={'w-full h-30 bg-gray-300/20 flex flex-col items-center justify-center gap-3'}>
                <p className={'text-3xl'}>About</p>
                <p className={'text-sm'}><span className={'text-gray-400'}>Home /</span> About</p>
            </div>
            <div className={'flex flex-col pb-20  justify-center'}>
                <div className={'relative flex items-center justify-between px-56'}>
                    <div className={'absolute w-full  h-[0.01rem] bottom-0 left-0 right-0 bg-gray-400'}></div>
                    <div className={'max-w-md gap-5 flex flex-col'}>
                        <h1 className={' text-6xl font-semibold'}>Connect with us</h1>
                        <p className={' text-lg font-light'}>Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.</p>
                        <Button text={'Copy Email'} className={'flex  items-center justify-center'} icon={Email}/>
                    </div>
                    <div>
                        <img src={coverImg}/>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col items-center justify-center gap-5 pb-20 px-56'}>
                <h1 className={'text-4xl font-semibold text-center'}>Our branches all over the world.</h1>
                <div className={'max-w-sm'}>
                    <p className={'text-sm font-light text-center'}>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>
                </div>
                <div className={'flex gap-5 items-center'}>
                    <Card covImg={Img1} city={'Los Angeles, California'} address={'1702 Olympic Boulevard Santa Monica, CA 90404'}/>
                    <Card covImg={Img2} city={'Tokyo, Japan'} address={'901 N Pitt Str., Suite 170 Tokyo, VA 22314, Japan'}/>
                    <Card covImg={Img3} city={'Moscow, Russia'} address={'Anjeliersstraat 470H, 1015 NL Moscow, Russia'}/>
                    <Card covImg={Img4} city={'Mumbai, India'} address={'36 East 20th St, 6th Floor Mumbai, India'}/>
                </div>
            </div>
            <div className={'flex flex-col items-center justify-between gap-10 px-56 bg-gray-300/20 py-10'}>
                <h1 className={'text-4xl font-semibold text-center'}>Contact Us</h1>
                <div className={'flex gap-20'}>
                    <div className={'max-w-md flex flex-col gap-10'}>
                        <p className={'text-xl font-light'}>Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd love to meet.</p>
                        <div className={'flex justify-between items-center'}>
                            <label className={'text-orange-500'}>Address</label>
                            <p className={'max-w-52 text-gray-600'}>1702 Olympic Boulevard Santa Monica, CA 90404</p>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <label className={'text-orange-500'}>Phone Number</label>
                            <p className={'max-w-52 text-gray-600'}>1702 Olympic Boulevard Santa Monica, CA 90404</p>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <label className={'text-orange-500'}>Email address</label>
                            <p className={'max-w-52 text-gray-600'}>1702 Olympic Boulevard Santa Monica, CA 90404</p>
                        </div>
                    </div>
                    <div className={'bg-white p-7 flex flex-col gap-5'}>
                        <p className={'text-xl'}>Get In touch</p>
                        <p className={'text-gray-600'}>Feel free contact with us, we love to make new partners & friends</p>
                        <form className={'flex  flex-col gap-5'}>
                            <div className={'flex justify-between items-center'}>
                                <div  className={'flex flex-col gap-3'}>
                                    <label>First Name</label>
                                    <input  className={'border bottom-1 border-gray-500/30 px-2 py-1'} placeholder={'First name...'}/>
                                </div>
                                <div className={'flex flex-col gap-3'}>
                                    <label>Last Name</label>
                                    <input className={'border bottom-1 border-gray-500/30 px-2 py-1'} placeholder={'Last name...'}/>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <label>Subject</label>
                                <input className={'border bottom-1 border-gray-500/30 px-2 py-1'} placeholder={'Message Subject'}/>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <label>Email</label>
                                <input className={'border bottom-1 border-gray-500/30 px-2 py-1'} placeholder={'Email Address'}/>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <label>Message</label>
                                <textarea className={'border bottom-1 border-gray-500/30 px-2 py-1'}  placeholder={'Message Subject'}/>
                            </div>
                            <Button text={'Send Message'} icon={Rocket} className={'flex justify-center items-center'}/>
                        </form>
                    </div>
                </div>
            </div>
            <img className={'w-full'} src={Map}/>
        </section>
    );
}

export default Contact