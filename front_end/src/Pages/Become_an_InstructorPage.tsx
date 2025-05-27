import React from "react";
import Button from "../Components/Shared/Button.tsx";
import coverImg from "../assets/image/CareerMain.jpg";

const Become_an_InstructorPage:React.FC = ()=> {
    return (
        <section className={'w-full'}>
            <div className={'w-full h-30 bg-gray-300/20 flex flex-col items-center justify-center gap-3'}>
                <p className={'text-3xl'}>Career</p>
                <p className={'text-sm'}><span className={'text-gray-400'}>Home /</span> Career</p>
            </div>
            <div className={'flex flex-col  justify-center'}>
                <div className={'relative flex items-center justify-between px-56'}>
                    <div className={'absolute w-full  h-[0.01rem] bottom-0 left-0 right-0 bg-gray-400'}></div>
                    <div className={'max-w-md gap-5 flex flex-col'}>
                        <h1 className={' text-4xl font-semibold'}>Join the most incredible & creative team.</h1>
                        <p className={'line-clamp-3 text-lg font-light'}>Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.</p>
                        <Button text={'View Open Positions'} className={'flex  items-center justify-center'} size={'lg'}/>
                    </div>
                    <div>
                        <img src={coverImg} className={'w-[600px] h-full'}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Become_an_InstructorPage;

