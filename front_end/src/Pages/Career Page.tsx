import React from "react";
import Button from "../Components/Shared/Button.tsx";
import Tic from "../assets/icons/Tic.svg";
import coverImg from "../assets/image/CareerMain.jpg"
import coverMain from "../assets/image/CarrerImg.jpg"
import Card from "../Components/Career Page/Card.tsx";
import icon1 from "../assets/icons/ForkKnifeOrg.svg"
import icon2 from "../assets/icons/ChartBarHorizontalPur.jpg"
import icon3 from "../assets/icons/ArmchairGre.svg"
import icon4 from "../assets/icons/GiftOrg.svg"
import icon5 from "../assets/icons/CreditCardGre.svg"
import icon6 from "../assets/icons/HandshakeOrg.svg"
import icon7 from "../assets/icons/Trophy.svg"
import icon8 from "../assets/icons/ForkKnifePur.svg"
import Img1 from "../assets/image/aboutImg1.jpg";
import Img2 from "../assets/image/aboutImg2.jpg";
import Img3 from "../assets/image/aboutImg3.jpg";
import Img4 from "../assets/image/4.jpg";
import Img5 from "../assets/image/aboutImg5.jpg";
import Img6 from "../assets/image/aboutImg7.jpg";
import Img7 from "../assets/image/aboutImg8.jpg";
import Logo1 from "../assets/icons/Netfixsvg.svg";
import Logo2 from "../assets/icons/Youtube.svg";
import Logo3 from "../assets/icons/Google.svg";
import Logo4 from "../assets/icons/Lenovo.svg";
import Logo5 from "../assets/icons/Slack.svg";
import Logo6 from "../assets/icons/Vesion.svg";
import Logo7 from "../assets/icons/Lemark.svg";
import Logo8 from "../assets/icons/Microsoft.svg";
import PositionCard from "../Components/Contact Page/PositionsCard.tsx";

const companyLogos = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8]
const companyList: React.JSX.Element[] = companyLogos.map(logo =>(
    <div className={'shadow bg-white py-5 px-10'}>
        <img src={logo}/>
    </div>
))

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
            <div className={'bg-gray-300/20 flex flex-col items-center justify-center gap-10 py-10 px-56'}>
                <h1 className={'text-4xl font-semibold text-center'}>Our Perks & Benefits</h1>
                <div className={'grid grid-cols-4 gap-5'}>
                    <Card icon={icon1} title={'Healthy Food & Snacks'} bgColor={'bg-orange-200/30'}/>
                    <Card icon={icon2} title={'Personal Career Growth'} bgColor={'bg-purple-200/30'}/>
                    <Card icon={icon3} title={'Vacation & Paid Time Off'} bgColor={'bg-green-200/30'}/>
                    <Card icon={icon4} title={'Special Allowance & Bonuse'} bgColor={'bg-orange-200/30'}/>
                    <Card icon={icon5} title={'Competitive Salary'} bgColor={'bg-green-200/30'}/>
                    <Card icon={icon6} title={'Well-being memberships'} bgColor={'bg-orange-200/30'}/>
                    <Card icon={icon7} title={'Maternity/Paternity Benefits'} bgColor={'bg-gray-200/30'}/>
                    <Card icon={icon8} title={'Eduguard Annual Events'} bgColor={'bg-purple-200/30'}/>
                </div>
            </div>
            <div className={'relative'}>
                <div className={'pt-20 pb-52 flex gap-20 px-56 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 max-w-xs'}>
                        <p className={'text-md text-orange-500'}>OUR GALLERY</p>
                        <h3 className={'text-4xl font-semibold'}>We’ve been here almost 17 years</h3>
                        <p className={'text-md font-light text-gray-600'}>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.</p>
                    </div>
                    <div className={'flex flex-col gap-3 items-center'}>
                        <div className={'flex gap-3 items-baseline'}>
                            <img src={Img1} className={'h-40'}/>
                            <img src={Img2}/>
                            <img src={Img3} className={'h-30'}/>
                        </div>
                        <div className={'flex gap-3'}>
                            <img src={Img4} className={'h-60'}/>
                            <img src={Img5}  className={'h-70'}/>

                            <div className={'flex flex-col gap-3'}>
                                <img src={Img6}/>
                                <img src={Img7} className={'h-25 w-26'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'absolute bottom-[-180px] right-1/2 translate-x-1/2  bg-white w-[1250px] py-20 flex flex-row justify-between items-center px-20'}>
                    <div className={'flex flex-col gap-5'}>
                        <h3 className={'font-semibold text-2xl'}>6.3k trusted companies</h3>
                        <p className={'max-w-xs text-gray-500'}>Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>
                    <div className={'grid grid-cols-4 gap-8'}>
                        {companyList}
                    </div>
                </div>
            </div>
            <div className={'bg-gray-300/20 flex flex-col items-center justify-center gap-10 pt-60 pb-20 px-56'}>
                <h1 className={'text-4xl font-semibold text-center'}>Our all open positions (04)</h1>
                <div className={'grid grid-cols-3 gap-5'}>
                    <PositionCard title={'Product Designer (UI/UX Designer)'} city={'Tokyo, Japan'} type={'Full-Time'} option={'01 Vacancy'} deadline={'30 June, 2021'}/>
                    <PositionCard title={'Social Media Manager'} city={'Moscow, Russia'} type={'Full-Time'} option={'01 Vacancy'} deadline={'30 June, 2021'}/>
                    <PositionCard title={'Director of Accounting'} city={'Mumbai, India'} type={'Full-Time'} option={'03 Vacancy'} deadline={'30 June, 2021'}/>
                    <PositionCard title={'Principal Software Engineer'} city={'Tokyo, Japan'} type={'Full-Time'} option={'01 Vacancy'} deadline={'30 June, 2021'}/>
                </div>

            </div>
        </section>
        )
}
export default Career