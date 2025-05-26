import React from "react";
import Button from "../Components/Button.tsx";
import Email from "../assets/icons/email.svg";
import coverImg from "../assets/image/ContactMain.jpg";

const Career:React.FC = ()=> {

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
        </section>
        )
}
export default Career