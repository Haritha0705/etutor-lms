import React from "react";
import Button from "../../Components/Shared/Button.tsx";
import coverImg from "../../assets/image/ImageInstracter.jpg";
import Icon1 from "../../assets/icons/Users.svg";
import Icon2 from "../../assets/icons/Notebook.svg";
import Icon3 from "../../assets/icons/Globel.svg";
import Icon4 from "../../assets/icons/CircleWavyCheck.svg";
import Icon5 from "../../assets/icons/Stack.svg";
import coverPC from "../../assets/image/Imageinstracter2.jpg";
import Tic from "../../assets/icons/Tic.svg";
import Card from "../../Components/Become an Instructor Page/Card.tsx";
import icon1 from "../../assets/icons/Newspaper.svg";
import icon2 from "../../assets/icons/IDCard.svg";
import icon4 from "../../assets/icons/Handshake.svg";
import icon3 from "../../assets/icons/play.svg";
import imgCov from "../../assets/image/UnionImg.jpg";
import imgCovPart1 from "../../assets/image/ImagePart1.jpg";
import imgCovPart2 from "../../assets/image/ImagePart2.jpg";
import Arrow from "../../assets/icons/ArrowRight.svg"
import Arrow1 from "../../assets/icons/ArrowRightW.svg"
import Arrow2 from "../../assets/icons/ArrowRight2.svg"
import Email from "../../assets/icons/Envelope.svg"
import Quotes from "../../assets/icons/Group2.svg"
import bgNew from "../../assets/image/Unionnew.png"


import Instcter1 from "../../assets/image/03.jpg"
import Instcter2 from "../../assets/image/06.jpg"
import Instcter3 from "../../assets/image/07.jpg"
import Instcter4 from "../../assets/image/08.jpg"
import Instcter5 from "../../assets/image/Image Instracter 1.jpg"
import Instcter6 from "../../assets/image/Image Instracter 2.jpg"
import Instcter7 from "../../assets/image/Image Instracter 3.jpg"
import Instcter8 from "../../assets/image/Image Instracter 4.jpg"

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

const Become_an_InstructorPage:React.FC = ()=> {
    return (
        <section className={'w-full'}>
            <div className={'w-full h-30 bg-gray-300/20 flex flex-col items-center justify-center gap-3'}>
                <p className={'text-3xl'}>Become an Instructor</p>
                <p className={'text-sm'}><span className={'text-gray-400'}>Home /</span> Become an instructor</p>
            </div>
            <div className={'flex flex-col  justify-center'}>
                <div className={'relative flex items-center justify-between px-56'}>
                    <div className={'max-w-md gap-5 flex flex-col'}>
                        <h1 className={' text-4xl font-semibold'}>Become an Instuctor</h1>
                        <p className={'line-clamp-3 text-lg font-light'}>Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
                        <Button text={'Get Started'} className={'flex  items-center justify-center'}/>
                    </div>
                    <div>
                        <img src={coverImg} className={'w-[600px] h-[600px]'}/>
                    </div>
                </div>
                <div className={'w-full py-10  items-center px-56 bottom-3 left-0 right-0 absolute flex flex-col gap-20 bg-orange-200/30'}>
                    <div className={'flex w-full justify-between'}>
                        {logoCard}
                    </div>
                </div>
            </div>

            <div className={'flex justify-between items-start px-56 py-30 gap-40'}>
                <img src={coverPC} className={'w-[600px]'}/>
                <div className={'gap-2 flex flex-col'}>
                    <h3 className={'text-2xl font-semibold'}>Why you’ll start teaching on Eduguard</h3>
                    <p className={'line-clamp-3 text-lg font-light'}>Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis. </p>
                    <div className={'bg-gray-300/20 p-5 flex gap-5 items-start'}>
                        <div className={'w-6 h-6 rounded-full bg-green-400 justify-center items-center flex'}>
                            <img src={Tic}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <p className={'text-lg font-semibold'}>Tech your students as you want.</p>
                            <p className={'line-clamp-3 max-w-md text-sm font-light '}>Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus. </p>
                        </div>
                    </div>
                    <div className={'bg-gray-300/20 p-5 flex gap-5 items-start'}>
                        <div className={'w-6 h-6 rounded-full bg-green-400 justify-center items-center flex'}>
                            <img src={Tic}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <p className={'text-lg font-semibold'}>Manage your course, payment in one place</p>
                            <p className={'line-clamp-3 max-w-md text-sm font-light '}>Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.</p>
                        </div>
                    </div>
                    <div className={'bg-gray-300/20 p-5 flex gap-5 items-start'}>
                        <div className={'w-6 h-6 rounded-full bg-green-400 justify-center items-center flex'}>
                            <img src={Tic}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <p className={'text-lg font-semibold'}>Chat with your students</p>
                            <p className={'line-clamp-3 max-w-md text-sm font-light '}>Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-gray-300/20 flex flex-col items-center justify-center gap-10 py-20 px-56'}>
                <h1 className={'text-4xl max-w-md font-semibold text-center'}>How you'll become successful instructor</h1>
                <div className={'grid grid-cols-4 gap-5'}>
                    <Card icon={icon1} title={'1. Apply to become instructor.'} subText={'Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.'} bgColor={'bg-purple-300/30'}/>
                    <Card icon={icon2} title={'2. Setup & edit your profile.'} subText={'Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.'} bgColor={'bg-red-300/30'}/>
                    <Card icon={icon3} title={'3. Create your new course'} subText={'Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. '} bgColor={'bg-orange-300/30'}/>
                    <Card icon={icon4} title={'4. Start teaching & earning'} subText={'Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. '} bgColor={'bg-green-300/30'}/>
                </div>
            </div>
            <div className={'w-full flex flex-row items-center justify-between  py-20 px-56'}>
                <div className={'flex flex-col gap-5 max-w-md'}>
                    <h3 className={'text-start text-4xl font-semibold'}>Instructor rules & regulations</h3>
                    <p className={'text-gray-600 text-lg'}>Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem. </p>
                    <ul className={'list-disc flex flex-col gap-2'}>
                        <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
                        <li>Nam leo tortor, tempus et felis non.</li>
                        <li>Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
                        <li>Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
                    </ul>
                </div>
                <img src={imgCov} className={'w-[500px] h-full'}/>
            </div>
            <div className={'bg-orange-200/30 w-full flex flex-row items-center justify-between  py-20 px-56'}>
                <div className={'flex flex-row items-end gap-5'}>
                    <img src={imgCovPart1} className={'w-[300px] h-full'}/>
                    <img src={imgCovPart2} className={'w-[300px] h-full'}/>
                </div>
                <div className={'flex flex-col gap-5 max-w-md'}>
                    <h3 className={'text-start text-4xl font-semibold'}>Don’t worry we’re always here to help you</h3>
                    <p className={'text-gray-600'}>Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim.</p>
                    <ul className={'flex flex-col gap-2'}>
                        <div className={'flex gap-2'}>
                            <img src={Arrow}/>
                            <li className={'text-sm'}>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.</li>
                        </div>
                        <div className={'flex gap-2'}>
                            <img src={Arrow}/>
                            <li className={'text-sm'}>Those who are looking to reboot their work life and try a new profession that.</li>
                        </div>
                        <div className={'flex gap-2'}>
                            <img src={Arrow}/>
                            <li className={'text-sm'}>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
                        </div>
                        <div className={'flex gap-2'}>
                            <img src={Arrow}/>
                            <li className={'text-sm'}>Duis ornare enim ullamcorper congue.</li>
                        </div>
                    </ul>
                    <div className={'flex gap-5'}>
                        <div className={'flex flex-row justify-center items-center p-3 rounded-full bg-white'}>
                            <img src={Email}/>
                        </div>
                        <div>
                            <p className={'text-gray-400 text-sm'}>Email us, anytime anywhere</p>
                            <p>help.eduguard@gamil.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-full flex flex-row items-center justify-between  py-20 px-56'}>
                <div className={'max-w-md gap-5 flex flex-col'}>
                    <h3 className={'text-start text-4xl font-semibold'}>20k+ Instructor created their success story with eduguard</h3>
                    <p className={'text-gray-600 text-lg'}>Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.</p>
                    <div className={'bg-orange-500/30 flex flex-col p-10 gap-5'}>
                        <img src={Quotes} className={'w-10'}/>
                        <p className={'text-lg'}>Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.</p>
                    </div>
                    <div className={'flex gap-3'}>
                        <button className={'flex flex-col justify-center items-center p-2 bg-gray-300/30 shadow-2xl'}><img src={Arrow2}/></button>
                        <button className={'flex flex-col justify-center items-center p-2 bg-orange-500 shadow-2xl'}><img src={Arrow1} className={'w-6'}/></button>
                    </div>
                </div>
                <div className={'flex gap-5'}>
                    <div className={'flex flex-col gap-5'}>
                        <div className={'flex justify-between items-end flex-row'}>
                            <img src={Instcter6} className={'w-48 h-48'}/>
                            <img src={Instcter7} className={'w-52 h-56'}/>
                        </div>
                        <div className={'flex'}>
                            <img src={Instcter3}/>
                        </div>
                        <div className={'flex justify-between items-start flex-row'}>
                            <img src={Instcter8} className={'w-48 h-48'}/>
                            <img src={Instcter1} className={'w-52 h-80'}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-5 justify-center'}>
                        <img src={Instcter4} className={'w-48'}/>
                        <img src={Instcter2} className={'w-72'}/>
                        <img src={Instcter5} className={'w-48'}/>
                    </div>
                </div>
            </div>
            <div className={'bg-gray-900 w-full flex flex-row items-center justify-between  py-20 px-56'}>
                <div className={'flex flex-col gap-7 max-w-md'}>
                    <h3 className={'text-start text-4xl text-white font-semibold'}>Start teaching with us and inspire others</h3>
                    <p className={'text-gray-400 text-lg'}>Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
                    <Button text={'Register now'} className={'justify-center'}/>
                </div>
                <img src={bgNew} className={'w-[500px] h-full'}/>
            </div>
        </section>
    );
}

export default Become_an_InstructorPage;

