import Button from "../../Components/Shared/Button.tsx";
import CategoryCard from "../../Components/Landing Page/CategoryCard.tsx";
import CoursesCards from "../../Components/Landing Page/CoursesCards.tsx";
import FeatureCoursesCard from "../../Components/Landing Page/FeatureCoursesCard.tsx";
import InstructorCard from "../../Components/Landing Page/InstructorCard.tsx";
import hero_main from "../../assets/image/HeroMain.png";
import hand from '../../assets/icons/Handshake.svg'
import camera from '../../assets/icons/Camera.svg'
import chart from '../../assets/icons/ChartBarHorizontal.svg'
import music from '../../assets/icons/Headphones.svg'
import pkg from '../../assets/icons/Package.svg'
import pen from '../../assets/icons/PenNib.svg'
import mega from '../../assets/icons/MegaphoneSimple.svg'
import cpu from '../../assets/icons/Cpu.svg'
import bug from '../../assets/icons/BugDroid.svg'
import receipt from '../../assets/icons/Receipt.svg'
import kit from '../../assets/icons/FirstAidKit.svg'
import card from '../../assets/icons/CreditCard.svg'
import arrow from '../../assets/icons/ArrowRight.svg'
import c1Img from '../../assets/image/Course Images1.jpg'
import c2Img from '../../assets/image/Course Images2.jpg'
import c3Img from '../../assets/image/Course Images3.jpg'
import c4Img from '../../assets/image/Course Images4.jpg'
import c5Img from '../../assets/image/Course Images5.jpg'
import c6Img from '../../assets/image/Course Images6.jpg'
import c7Img from '../../assets/image/Course Images7.jpg'
import c8Img from '../../assets/image/Course Images8.jpg'
import c9Img from '../../assets/image/Course Images9.jpg'
import c10Img from '../../assets/image/Course Images10.jpg'
import cF1 from '../../assets/image/Course F1.jpg'
import cF2 from '../../assets/image/Course F2.jpg'
import cF3 from '../../assets/image/Course F3.jpg'
import cF4 from '../../assets/image/Course F4.jpg'
import cFProfileImg from '../../assets/image/PhotoProfile1.jpg'
import Radd1 from '../../assets/image/Course Images Radd 1.jpg'
import Radd2 from '../../assets/image/Course Images Radd 2.jpg'
import Radd3 from '../../assets/image/Course Images Radd 3.jpg'
import coverImg from '../../assets/image/Become an Instructor Cover.jpg'

import InIMg1 from '../../assets/image/Image Instracter 1.jpg'
import InIMg2 from '../../assets/image/Image Instracter 2.jpg'
import InIMg3 from '../../assets/image/Image Instracter 3.jpg'
import InIMg4 from '../../assets/image/Image Instracter 4.jpg'
import InIMg5 from '../../assets/image/Image Instracter 5.jpg'

import Logo1 from '../../assets/icons/Netfixsvg.svg'
import Logo2 from '../../assets/icons/Youtube.svg'
import Logo3 from '../../assets/icons/Google.svg'
import Logo4 from '../../assets/icons/Lenovo.svg'
import Logo5 from '../../assets/icons/Slack.svg'
import Logo6 from '../../assets/icons/Vesion.svg'
import Logo7 from '../../assets/icons/Lemark.svg'
import Logo8 from '../../assets/icons/Microsoft.svg'
import React from "react";

const Hero:React.FC = ()=> {
    const categoryCards = [
        ['bg-purple-300/30', 'bg-white', 'Label', '63,476', cpu],
        ['bg-green-200/30', 'bg-white', 'Business', '52,822', hand],
        ['bg-orange-200/30', 'bg-white', 'Finance & Accounting', '33,841 ', card],
        ['bg-red-200/30', 'bg-white', 'IT & Software', '22,649', chart],
        ['bg-white', 'bg-orange-500', 'Personal Development', '20,126', bug],
        ['bg-gray-300/30', 'bg-white', 'Office Productivity', '13,932', receipt],
        ['bg-purple-300/30', 'bg-white', 'Marketing', '12,068', mega],
        ['bg-gray-300/30', 'bg-white', 'Photography & Video', '6,196', camera],
        ['bg-orange-200/30', 'bg-white', 'Lifestyle', '2,736', pkg],
        ['bg-red-200/30', 'bg-white', 'Design', '2,600 ', pen],
        ['bg-green-200/30', 'bg-white', 'Health & Fitness', '1,678', kit],
        ['bg-orange-200/30', 'bg-white', 'Music', '959', music],
    ];
    //img={img} category={category} text={text} categoryColour={categoryColour} categoryTextColour={categoryTextColour} price={price} rating={rating} studentCount={studentCount}
    const coursesCards =[
        [c1Img,'Design','Machine Learning A-Z™: Hands-On Python & R In Data...','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
        [c2Img,'Developments','The Complete 2021 Web Development Bootcamp','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
        [c3Img,'Business','Learn Python Programming Masterclass','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
        [c4Img,'Marketing','The Complete Digital Marketing Course - 12 Courses in 1','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
        [c5Img,'IT & Software','Reiki Level I, II and Master/Teacher Program','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
        [c6Img,'Music','The Complete Foundation Stock Trading Course','bg-orange-200/30','text-red-700','$57','5.0','265.7K'],
        [c7Img,'Marketing','Beginner to Pro in Excel: Financial','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
        [c8Img,'Health & Fitness','The Python Mega Course: Build 10 Real World Applications','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
        [c9Img,'Design','Copywriting - Become a Freelance Copywriter, your ow...','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
        [c10Img,'Lifestyle','Google Analytics Certification - Learn How To Pass The Exam','bg-orange-200/30','text-orange-700','$57','5.0','265.7K']
    ]

    const featureCoursesCard = [
        [cF1,'bg-green-200/30','text-green-700','Health & Fitness','$14.00','$26.00','Investing In Stocks The Complete Course! (13 H...',cFProfileImg,'Kevin Gilbert','5.0','357,914','265.7K','Beginner','6 hour'],
        [cF2,'bg-red-200/30','text-red-700','Personal Development','$14.00','$26.00','Google Analytics Certification - Learn How To...',cFProfileImg,'Kevin Gilbert','5.0','357,914','265.7K','Beginner','6 hour'],
        [cF3,'bg-gray-200/30','text-gray-700','Productivity','$14.00','$26.00','Adobe XD for Web Design: Essential Principles',cFProfileImg,'Kevin Gilbert','5.0','357,914','265.7K','Beginner','6 hour'],
        [cF4,'bg-orange-200/30','text-orange-700','Music','$14.00','$26.00','The Python Mega Course: Build 10 Real World ...',cFProfileImg,'Kevin Gilbert','5.0','357,914','265.7K','Beginner','6 hour']
    ]

    const recentlyAddedCourses = [
        [Radd1,'Design','The Python Mega Course: Build 10 Real World Applications','bg-orange-200/30','text-orange-700','$57','5.0','265.7K'],
        [Radd2,'IT & Software','Facebook Ads & Facebook Marketing','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
        [c8Img,'Health & Fitness','The Python Mega Course: Build 10 Real World Applications','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
        [Radd3,'Developments','2021 Complete Python Bootcamp','bg-purple-300/30','text-purple-700','$57','5.0','265.7K']
    ]

    const instructorCard = [
        [InIMg1,'Devon Lane','Senior Developer','4.6','854'],
        [InIMg2,'Darrell Steward','Digital Product Designer','4.9','451,444'],
        [InIMg3,'Jane Cooper','UI/UX Designer','4.8','435,671'],
        [InIMg4,'Albert Flores','Adobe Instructor','4.7','511,123'],
        [InIMg5,'Kathryn Murphy','Lead Developer','4.2','2,711']
    ]

    const companyLogos = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8]
    const companyList: React.JSX.Element[] = companyLogos.map(logo =>(
        <div className={'shadow bg-white py-5 px-10'}>
            <img src={logo}/>
        </div>
    ))

    return (
        <>

            <section className="flex flex-row items-center justify-between pl-56 w-full bg-gray-300/30">
                <div className="flex flex-row gap-7 max-w-3xl pl-10 lg:flex-col">
                    <h1 className="text-2xl font-semibold leading-tight max-w-xl lg:text-6xl">
                        Learn with experts anytime, anywhere
                    </h1>
                    <p className="text-gray-600 text-xl max-w-md">
                        Our mission is to help people find the best courses online and learn from experts wherever they are.
                    </p>
                    <Button text="Create Account" className={'justify-center'} colours="primary-primary" size='md'  />
                </div>
                <div>
                    <img src={hero_main} alt="Hero" className="w-full" />
                </div>
            </section>

            <section className="flex flex-col items-center justify-between w-full">
                <div>
                    <p className='text-4xl font-semibold py-10'>Browse top category</p>
                </div>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                    {categoryCards.map(([bg, imgBg, text, count, img]: string[], i: number) => (
                        <CategoryCard key={i} bgColour={bg} imgBgColour={imgBg} text={text} courseCount={count} img={img}/>))}
                </div>

                <div className='flex gap-5 py-10'>
                    <p className='text-gray-700'>We have more category & subcategory</p>
                    <p className='text-orange-500'>Browse All</p>
                    <img src={arrow} className='fill-indigo-200 '/>
                </div>
            </section>

            <section className='relative w-full flex flex-col items-center justify-between bg-gray-300/30 "'>
                <h1 className='text-4xl font-semibold py-10'>Best selling courses</h1>
                <div className='grid grid-cols-1 gap-5 pb-90 lg:grid-cols-5 md:grid-cols-3'>
                    {coursesCards.map(([img,category,text,categoryColour,categoryTextColour,price,rating,studentCount],i)=>(
                        <CoursesCards key={i} img={img} category={category} text={text} categoryColour={categoryColour} categoryTextColour={categoryTextColour} price={price} rating={rating} studentCount={studentCount}/>
                    ))}
                </div>
                <section className='absolute  w-[87%] bg-white bottom-[-300px] shadow flex flex-col'>
                    <h1 className='text-4xl font-semibold py-10 pl-35'>Our feature courses</h1>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='grid grid-cols-1 gap-6 pb-20 lg:grid-cols-2'>
                            {featureCoursesCard.map(([cardImg,categoryColour,categoryTextColour,categoryText,price,cutPrice,discription,profileImg,profileName,rating,ratingCount,studentCount,level,timeLength],i)=>(
                                <FeatureCoursesCard key={i} cardImg={cardImg} categoryColour={categoryColour} categoryTextColour={categoryTextColour} categoryText={categoryText} price={price} cutPrice={cutPrice} discription={discription} profileImg={profileImg} profileName={profileName} rating={rating} ratingCount={ratingCount} studentCount={studentCount} level={level} timeLength={timeLength}/>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

            <section className='w-full pt-80 flex flex-col justify-center items-center pb-20'>
                    <h1 className='text-4xl font-semibold py-10'>Recently added courses</h1>
                    <div className='grid grid-cols-4 gap-5 pb-20'>
                        {recentlyAddedCourses.map(([img,category,text,categoryColour,categoryTextColour,price,rating,studentCount],i)=>(
                            <CoursesCards key={i} img={img} category={category} text={text} categoryColour={categoryColour} categoryTextColour={categoryTextColour} price={price} rating={rating} studentCount={studentCount}/>
                        ))}
                    </div>
                    <Button className={'justify-between py-1 px-4'} text='Browse all Course' size='lg' colours={'secondary-primary'} icon={arrow}/>
            </section>

            <section className='relative w-full flex flex-col items-center justify-between bg-gray-300/30 px-44 pt-15 pb-90'>
                <div className={' grid grid-cols-2 gap-10'}>
                    <img src={coverImg} className={'relative object-cover w-full'}/>
                    <div className={'absolute px-6 py-10'}>
                        <div className={'flex flex-col gap-6 justify-between '}>
                            <div className={'flex flex-col gap-2 pb-30'}>
                                <h3 className={'text-white text-3xl font-semibold'}>Become an instructor</h3>
                                <p className={'text-white max-w-xs'}>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            </div>
                                <Button className={'justify-between py-1 px-4 bg-white'} text='Start teaching' size='md' colours={'secondary-primary'} icon={arrow}/>
                        </div>
                    </div>
                    <div className={'bg-white flex flex-col justify-center px-20 py-5 gap-10'}>
                        <h3 className={'text-3xl font-semibold'}>Your teaching & earning steps</h3>
                        <div className={'grid grid-cols-1 gap-5 font-light'}>
                            <div className={'flex gap-5 items-center'}>
                                <span className={'bg-purple-300/30 text-purple-700 w-8 h-8 justify-center  text-center rounded-full flex flex-col'}>1</span>
                                <p>Apply to become instructor</p>
                            </div>
                            <div className={'flex gap-5 items-center'}>
                                <span className={'bg-orange-200/30 text-orange-700 w-8 h-8 justify-center  text-center rounded-full flex flex-col'}>2</span>
                                <p>Build & edit your profile</p>
                            </div>
                            <div className={'flex gap-5 items-center'}>
                                <span className={'bg-red-200/30 text-red-700 w-8 h-8 justify-center  text-center rounded-full flex flex-col'}>3</span>
                                <p>Create your new course</p>
                            </div>
                            <div className={'flex gap-5 items-center'}>
                                <span className={'bg-green-200/30 text-green-700 w-8 h-8 justify-center  text-center rounded-full flex flex-col'}>4</span>
                                <p>Start teaching & earning</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={'flex flex-col items-center justify-between absolute  w-[87%] bg-white bottom-[-300px] shadow '}>
                    <h1 className='text-4xl font-semibold py-10 pl-35'>Top instructor of the month</h1>
                    <div className='grid grid-cols-5 gap-5 pb-10'>
                        {instructorCard.map(([img,name,position, rating, studentCount],i)=>(
                            <InstructorCard key={i} img={img} name={name} position={position} rating={rating} studentCount={studentCount}/>
                        ))}
                    </div>
                    <div className={'flex gap-5 pb-10 items-center'}>
                        <p className={'text-gray-500 text-md'}>Thousands of students waiting for a instructor. Start teaching & earning now!</p>
                        <div className={'flex gap-2 items-center'}>
                            <a className={'text-orange-500 text-md'}>Become Instructor</a>
                            <img src={arrow} className={'w-5 h-5'}/>
                        </div>
                    </div>
                </section>
            </section>
            <section className={'bg-white w-full pb-15 flex flex-row justify-between items-center pt-90 px-60'}>
                <div className={'flex flex-col gap-5'}>
                    <h3 className={'font-semibold text-2xl'}>6.3k trusted companies</h3>
                    <p className={'max-w-xs text-gray-500'}>Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </div>
                <div className={'grid grid-cols-4 gap-8'}>
                    {companyList}
                </div>
            </section>
            <section className={'bg-gray-900 flex flex-row gap-5 items-center justify-between  py-15 w-full  px-58'}>
                <div className={'text-white flex flex-col gap-10'}>
                    <h1 className={'text-4xl max-w-120  font-semibold'}>Start learning with 67.1k students around the world.</h1>
                    <div className={'flex gap-5'}>
                        <Button text={'Join the Family'} className={'justify-center'}/>
                        <Button text={'Browse all courses'} colours={'tertiary-primary'} className={'text-white justify-center'}/>
                    </div>
                </div>
                <div className={'text-white flex gap-5'}>
                    <div className={'flex flex-col gap-5'}>
                        <span className={'text-4xl font-semibold'}>6.3k</span>
                        <p className={'text-sm text-gray-500'}>Online courses</p>
                    </div>
                    <div className={'flex flex-col gap-5'}>
                        <span  className={'text-4xl font-semibold'}>26k</span>
                        <p className={'text-sm text-gray-500'}>Certified Instructor</p>
                    </div>
                    <div className={'flex flex-col gap-5'}>
                        <span  className={'text-4xl font-semibold'}>99.9%</span>
                        <p className={'text-sm text-gray-500'}>Sucess Rate</p>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Hero;
