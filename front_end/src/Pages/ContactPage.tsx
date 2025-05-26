import React from "react";
import coverImg from "../assets/image/ContactMain.jpg"
import Button from "../Components/Button.tsx";
import Email from "../assets/icons/email.svg";
import Card from "../Components/About Page/Contact Page/Card.tsx";
import Img1 from "../assets/image/ContactImage1.jpg"
import Img2 from "../assets/image/ContactImage2.jpg"
import Img3 from "../assets/image/ContactImage3.jpg"
import Img4 from "../assets/image/ContactImage4.jpg"


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
            <div className={'flex flex-col items-center justify-center gap-5 px-56'}>
                <h1 className={'text-4xl font-semibold text-center'}>Our branches all over the world.</h1>
                <div className={'max-w-sm'}>
                    <p className={'text-sm font-light text-center'}>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>
                </div>
                <div>
                    <Card covImg={}/>
                </div>
            </div>
        </section>
    );
}

export default Contact