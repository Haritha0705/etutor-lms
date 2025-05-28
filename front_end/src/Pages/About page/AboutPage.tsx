import React from "react";
import coverImg from "../../assets/image/About Cover.jpg"
import Logo1 from "../../assets/icons/Netfixsvg.svg";
import Logo2 from "../../assets/icons/Youtube.svg";
import Logo3 from "../../assets/icons/Google.svg";
import Logo4 from "../../assets/icons/Lenovo.svg";
import Logo5 from "../../assets/icons/Slack.svg";
import Logo6 from "../../assets/icons/Vesion.svg";
import Logo7 from "../../assets/icons/Lemark.svg";
import Logo8 from "../../assets/icons/Microsoft.svg";

import Icon4 from  "../../assets/icons/CircleWavyCheck.svg"
import Icon1 from  "../../assets/icons/Users.svg"
import Icon3 from  "../../assets/icons/Globel.svg"
import Icon2 from  "../../assets/icons/Notebook.svg"
import Icon5 from  "../../assets/icons/Stack.svg"

import img2 from "../../assets/image/about2.png"
import Button from "../../Components/Shared/Button.tsx";
import Arrow from "../../assets/icons/ArrowRightW.svg"

import Img1 from "../../assets/image/aboutImg1.jpg"
import Img2 from "../../assets/image/aboutImg2.jpg"
import Img3 from "../../assets/image/aboutImg3.jpg"
import Img4 from "../../assets/image/4.jpg"
import Img5 from "../../assets/image/aboutImg5.jpg"
import Img6 from "../../assets/image/aboutImg7.jpg"
import Img7 from "../../assets/image/aboutImg8.jpg"
import CommentCard from "../../Components/About Page/CommentCard.tsx";

const companyLogos = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8]
const companyList: React.JSX.Element[] = companyLogos.map(logo =>(
    <div className={'shadow bg-white py-5 px-10'}>
        <img src={logo}/>
    </div>
))

const logoData = [
    { icon: Icon1, value: '67.1k', label: 'Students' },
    { icon: Icon2, value: '26k', label: 'Certified Instructor' },
    { icon: Icon3, value: '72', label: 'Country Language' },
    { icon: Icon4, value: '99.9%', label: 'Success Rate' },
    { icon: Icon5, value: '57', label: 'Trusted Companies' },
];
const logoCard:React.JSX.Element[] = logoData.map(((item,index)=>(
    <div key={index} className={'flex gap-5 items-start'}>
        <img src={item.icon} alt={`Icon ${index + 1}`}/>
        <div>
            <p className={'text-2xl font-semibold'}>{item.value}</p>
            <span className={'text-gray-400 text-sm'}>{item.label}</span>
        </div>
    </div>
)))


const About:React.FC = ()=> {

    return (
        <section className={'w-full'}>
            <div className={'w-full h-30 bg-gray-300/20 flex flex-col items-center justify-center gap-3'}>
                <p className={'text-3xl'}>About</p>
                <p className={'text-sm'}><span className={'text-gray-400'}>Home /</span> About</p>
            </div>
            <div className={'flex flex-col py-20  justify-center'}>
                <div className={'relative flex items-center justify-between pb-10 px-56'}>
                    <div className={'absolute w-full  h-[0.01rem] bottom-0 left-0 right-0 bg-gray-400'}></div>
                    <div className={'max-w-md gap-5 flex flex-col'}>
                        <h1 className={'text-gray-400/30 text-6xl font-semibold'}>2007-2021</h1>
                        <h2 className={' text-4xl font-semibold'}>We share knowledge with the world</h2>
                        <p className={' text-lg font-light'}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla. </p>
                    </div>
                    <div>
                        <img src={coverImg} className={'w-[600px]'}/>
                    </div>
                </div>
                <div className={'w-full py-20  items-center px-56 flex flex-col gap-20'}>
                    <div className={'w-full  flex flex-row  justify-between items-center '}>
                        <div className={'flex flex-col gap-5'}>
                            <h3 className={'font-semibold text-2xl'}>6.3k trusted companies</h3>
                            <p className={'max-w-xs text-gray-500'}>Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </div>
                        <div className={'grid grid-cols-4 gap-8'}>
                            {companyList}
                        </div>
                    </div>
                    <div className={'flex w-full justify-between'}>
                        {logoCard}
                    </div>
                </div>
                <div className={'w-full bg-orange-300/30 h-72 flex items-center justify-center gap-40'}>
                    <img src={img2}/>
                    <div className={'max-w-sm gap-5 flex flex-col'}>
                        <p className={'text-sm text-orange-500'}>OUR ONE BILLION MISSION</p>
                        <h2 className={'text-3xl'}>Our one billion mission sounds bold, We agree.</h2>
                        <p className={'text-sm text-gray-600'}>"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</p>
                    </div>
                </div>
                <div className={'bg-gray-300/20 py-20 flex gap-20 px-56 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 max-w-xs'}>
                        <p className={'text-md text-orange-500'}>OUR GALLERY</p>
                        <h3 className={'text-4xl font-semibold'}>We’ve been here almost 17 years</h3>
                        <p className={'text-md font-light text-gray-600'}>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.</p>
                        <Button text={"Join our team"} icon={Arrow} className={" justify-center items-center"}/>
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
                <div className={'flex gap-5 pt-20 pb-10 px-56 '}>
                    <CommentCard commentText={"Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers."} name={"Sundar Pichai"} position={"Chief Chairman of"} companyName={"Google"}/>
                    <CommentCard commentText={"Edugaurd responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers."} name={"Satya Nadella"} position={"CEO of "} companyName={"Microsoft"}/>
                    <CommentCard commentText={"In total, it was a big success, I would get emails about what a fantastic resource it was."} name={"Ted Sarandos"} position={"Chief Executive Officer of"} companyName={"Netflix"}/>
                </div>
            </div>
        </section>
    );
}

export default About