import React from "react";
import Button from "../Components/Button.tsx";
import Tic from "../assets/icons/Tic.svg";
import coverImg from "../assets/image/CareerMain.jpg"
import coverMain from "../assets/image/CarrerImg.jpg"

const Career:React.FC = ()=> {

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
            <div className={'flex justify-between items-start px-56 py-20 gap-40'}>
                <img src={coverMain} className={'w-[520px]'}/>
                <div className={'gap-5 flex flex-col'}>
                    <h3 className={'text-2xl font-semibold'}>Why you will join our team</h3>
                    <p className={'line-clamp-3 text-lg font-light'}>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
                    <div className={'bg-gray-300/20 p-5 flex gap-5 items-start'}>
                        <div className={'w-6 h-6 rounded-full bg-green-400 justify-center items-center flex'}>
                            <img src={Tic}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <p className={'text-lg font-semibold'}>Ut justo ligula, vehicula sed egestas vel.</p>
                            <p className={'line-clamp-3 max-w-md text-sm font-light '}>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
                        </div>
                    </div>
                    <div className={'bg-gray-300/20 p-5 flex gap-5 items-start'}>
                        <div className={'w-6 h-6 rounded-full bg-green-400 justify-center items-center flex'}>
                            <img src={Tic}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <p className={'text-lg font-semibold'}>Ut justo ligula, vehicula sed egestas vel.</p>
                            <p className={'line-clamp-3 max-w-md text-sm font-light '}>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
        )
}
export default Career