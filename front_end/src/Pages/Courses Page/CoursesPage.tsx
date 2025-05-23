// import CoursesCards from "../../Components/CoursesCards.tsx";
// import c1Img from "../../assets/image/Course Images1.jpg";
// import c2Img from "../../assets/image/Course Images2.jpg";
// import c3Img from "../../assets/image/Course Images3.jpg";
// import c4Img from "../../assets/image/Course Images4.jpg";
// import c5Img from "../../assets/image/Course Images5.jpg";
// import c6Img from "../../assets/image/Course Images6.jpg";
// import c7Img from "../../assets/image/Course Images7.jpg";
// import c8Img from "../../assets/image/Course Images8.jpg";
// import c9Img from "../../assets/image/Course Images9.jpg";
// import c10Img from "../../assets/image/Course Images10.jpg";
//
// import filter from "../../assets/icons/filter.svg";
// import search from "../../assets/icons/MagnifyingGlass.svg";
// import down from "../../assets/icons/ChevronDown.svg";
//
import React from "react";
// import cpu from "../../assets/icons/Cpu.svg";
// import hand from "../../assets/icons/Handshake.svg";
// import card from "../../assets/icons/CreditCard.svg";
// import chart from "../../assets/icons/ChartBarHorizontal.svg";
// import bug from "../../assets/icons/BugDroid.svg";
// import receipt from "../../assets/icons/Receipt.svg";
// import pen from "../../assets/icons/PenNib.svg";
// import mega from "../../assets/icons/MegaphoneSimple.svg";
// import pkg from "../../assets/icons/Package.svg";
// import camera from "../../assets/icons/Camera.svg";
// import music from "../../assets/icons/Headphones.svg";
// import kit from "../../assets/icons/FirstAidKit.svg";
//
//
//
// const allData = [
//     {
//         name: "categories",
//         icon: "📚",
//         subCategories: [
//             {
//                 name: "Development",
//                 icon: <img src={cpu} alt="CPU icon" />,
//                 nestedCategories: [
//                     { name: "Web Development", count: 574 },
//                     { name: "Data Science", count: 568 },
//                     { name: "Mobile Development", count: 1345 },
//                     { name: "Software Testing", count: 317 },
//                     { name: "Software Engineering", count: 31 },
//                     { name: "Software Development Tools", count: 558 },
//                     { name: "No-Code Development", count: 37 },
//                 ],
//             },
//             {
//                 name: "Business",
//                 icon: <img src={hand} alt="Handshake icon" />,
//                 nestedCategories: [
//                     { name: "Entrepreneurship", count: 412 },
//                     { name: "Communication", count: 233 },
//                     { name: "Management", count: 342 },
//                     { name: "Sales", count: 153 },
//                     { name: "Business Strategy", count: 278 },
//                 ],
//             },
//             {
//                 name: "Finance & Accounting",
//                 icon: <img src={card} alt="Credit card icon" />,
//                 nestedCategories: [
//                     { name: "Accounting", count: 389 },
//                     { name: "Cryptocurrency", count: 204 },
//                     { name: "Investment & Trading", count: 542 },
//                     { name: "Taxes", count: 157 },
//                     { name: "Finance Fundamentals", count: 310 },
//                 ],
//             },
//             {
//                 name: "IT & Software",
//                 icon: <img src={chart} alt="Chart icon" />,
//                 nestedCategories: [
//                     { name: "Network & Security", count: 674 },
//                     { name: "Operating Systems", count: 220 },
//                     { name: "Hardware", count: 183 },
//                     { name: "IT Certifications", count: 597 },
//                     { name: "Tech Support", count: 147 },
//                 ],
//             },
//             {
//                 name: "Office Productivity",
//                 icon: <img src={bug} alt="Bug icon" />,
//                 nestedCategories: [
//                     { name: "Microsoft Office", count: 482 },
//                     { name: "Google Workspace", count: 265 },
//                     { name: "Productivity Apps", count: 123 },
//                     { name: "Time Management", count: 89 },
//                 ],
//             },
//             {
//                 name: "Personal Development",
//                 icon: <img src={receipt} alt="Receipt icon" />,
//                 nestedCategories: [
//                     { name: "Leadership", count: 271 },
//                     { name: "Personal Productivity", count: 198 },
//                     { name: "Career Development", count: 332 },
//                     { name: "Creativity", count: 104 },
//                 ],
//             },
//             {
//                 name: "Design",
//                 icon: <img src={pen} alt="Pen icon" />,
//                 nestedCategories: [
//                     { name: "Graphic Design", count: 752 },
//                     { name: "UX/UI Design", count: 361 },
//                     { name: "Design Thinking", count: 144 },
//                     { name: "3D Design", count: 203 },
//                 ],
//             },
//             {
//                 name: "Marketing",
//                 icon: <img src={mega} alt="Megaphone icon" />,
//                 nestedCategories: [
//                     { name: "Digital Marketing", count: 584 },
//                     { name: "Social Media Marketing", count: 431 },
//                     { name: "Content Marketing", count: 223 },
//                     { name: "SEO", count: 156 },
//                 ],
//             },
//             {
//                 name: "Lifestyle",
//                 icon: <img src={pkg} alt="Package icon" />,
//                 nestedCategories: [
//                     { name: "Arts & Crafts", count: 134 },
//                     { name: "Pet Care", count: 97 },
//                     { name: "Travel", count: 165 },
//                     { name: "Gaming", count: 204 },
//                 ],
//             },
//             {
//                 name: "Photography & Video",
//                 icon: <img src={camera} alt="Camera icon" />,
//                 nestedCategories: [
//                     { name: "Digital Photography", count: 305 },
//                     { name: "Photo Editing", count: 213 },
//                     { name: "Videography", count: 182 },
//                     { name: "Drone Photography", count: 88 },
//                 ],
//             },
//             {
//                 name: "Music",
//                 icon: <img src={music} alt="Music icon" />,
//                 nestedCategories: [
//                     { name: "Instruments", count: 274 },
//                     { name: "Music Production", count: 199 },
//                     { name: "Music Theory", count: 143 },
//                     { name: "Vocal Training", count: 121 },
//                 ],
//             },
//             {
//                 name: "Health & Fitness",
//                 icon: <img src={kit} alt="First aid kit icon" />,
//                 nestedCategories: [
//                     { name: "Fitness", count: 412 },
//                     { name: "Nutrition", count: 321 },
//                     { name: "Mental Health", count: 267 },
//                     { name: "Yoga", count: 203 },
//                 ],
//             },
//         ],
//     },
//     {
//         name: "Tools",
//         icon: "🔧",
//         subCategories: [
//             { name: "HTML 5", count: 574 },
//             { name: "CSS 3", count: 568 },
//             { name: "React", count: 1345 },
//             { name: "Webflow", count: 317 },
//             { name: "Node.js", count: 31 },
//             { name: "Laravel", count: 558 },
//             { name: "Saas", count: 37 },
//             { name: "Wordpress", count: 37 },
//         ]
//     },
//     {
//         name: "Rating",
//         icon: "⭐",
//         subCategories: [
//             { name: "5 Star", count: 574 },
//             { name: "4 Star & up", count: 568 },
//             { name: "3 Star & up", count: 1345 },
//             { name: "2 Star & up", count: 317 },
//             { name: "1 Star & up", count: 31 },
//         ]
//     },
//     {
//         name: "Course level",
//         icon: "📚",
//         subCategories: [
//             { name: "All Level", count: 574 },
//             { name: "Beginner", count: 568 },
//             { name: "Intermediate", count: 1345 },
//             { name: "Expert", count: 317 }
//         ]
//     },
//     {
//         name: "Price",
//         icon: "💰",
//         subCategories: [
//             { name: "Free", count: 574 },
//             { name: "Paid", count: 568 }
//         ]
//     },
//     {
//         name: "Duration",
//         icon: "⏱️",
//         subCategories: [
//             { name: "6-12 Months", count: 574 },
//             { name: "3-6 Months", count: 568 },
//             { name: "1-3 Months", count: 574 },
//             { name: "1-4 Weeks", count: 574 },
//             { name: "1-7 Days", count: 568 }
//         ]
//     }
// ];
//
// const coursesCards = [
//     [c1Img, "Design", "Machine Learning A-Z™: Hands-On Python & R In Data...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c2Img, "Developments", "The Complete 2021 Web Development Bootcamp", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c3Img, "Business", "Learn Python Programming Masterclass", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
//     [c4Img, "Marketing", "The Complete Digital Marketing Course - 12 Courses in 1", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c5Img, "IT & Software", "Reiki Level I, II and Master/Teacher Program", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c6Img, "Music", "The Complete Foundation Stock Trading Course", "bg-orange-200/30", "text-orange-700", "$57", "5.0", "265.7K"],
//     [c7Img, "Marketing", "Beginner to Pro in Excel: Financial", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c8Img, "Health & Fitness", "The Python Mega Course: Build 10 Real World Applications", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
//     [c9Img, "Design", "Copywriting - Become a Freelance Copywriter, your ow...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c10Img, "Lifestyle", "Google Analytics Certification - Learn How To Pass The Exam", "bg-orange-200/30", "text-orange-700", "$57", "5.0", "265.7K"],
//     [c1Img, "Design", "Machine Learning A-Z™: Hands-On Python & R In Data...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c2Img, "Developments", "The Complete 2021 Web Development Bootcamp", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c3Img, "Business", "Learn Python Programming Masterclass", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
//     [c4Img, "Marketing", "The Complete Digital Marketing Course - 12 Courses in 1", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c5Img, "IT & Software", "Reiki Level I, II and Master/Teacher Program", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c6Img, "Music", "The Complete Foundation Stock Trading Course", "bg-orange-200/30", "text-orange-700", "$57", "5.0", "265.7K"],
//     [c7Img, "Marketing", "Beginner to Pro in Excel: Financial", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c8Img, "Health & Fitness", "The Python Mega Course: Build 10 Real World Applications", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
//     [c9Img, "Design", "Copywriting - Become a Freelance Copywriter, your ow...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c10Img, "Lifestyle", "Google Analytics Certification - Learn How To Pass The Exam", "bg-orange-200/30", "text-orange-700", "$57", "5.0", "265.7K"],
//     [c1Img, "Design", "Machine Learning A-Z™: Hands-On Python & R In Data...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
//     [c2Img, "Developments", "The Complete 2021 Web Development Bootcamp", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
//     [c3Img, "Business", "Learn Python Programming Masterclass", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
//     [c4Img, "Marketing", "The Complete Digital Marketing Course - 12 Courses in 1", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
// ];
//
// type NestedCategory = {
//     name: string;
//     count: number;
// };
//
// type SubCategory = {
//     name: string;
//     icon: string;
//     nestedCategories?: NestedCategory[];
// };
//
// type Category = {
//     name: string;
//     icon: string ;
//     subCategories?: SubCategory[];
// };
// interface Props {
//     allData: Category[];
//     toggleSub: (index: number) => void;
// }

const Courses:React.FC = ()=> {


    // const [currentPage, setCurrentPage] = useState(1);
    // const CARDS_PER_PAGE = 12;
    // const totalPages = Math.ceil(coursesCards.length / CARDS_PER_PAGE);
    //
    // const handleClick = (page:number) => {
    //     if (page >= 1 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };
    //
    // const paginatedCourses = coursesCards.slice(
    //     (currentPage - 1) * CARDS_PER_PAGE,
    //     currentPage * CARDS_PER_PAGE
    // );
    //
    // const courseName = "ui/ux design";
    // const studentCount = 3145684;
    // const suggestions = "user interface";
    // const number_of_filter = 3;
    //
    // const [isVisible, setIsVisible] = useState(false);
    // const [openSub, setOpenSub] = useState<number|null>(null);
    // const [openNested, setOpenNested] = useState<number|null>(null);
    //
    // const toggleSub = (index:number|null) => {
    //     setOpenSub(openSub === index ? null : index);
    // };
    //
    // const toggleNested = (index:number|null) => {
    //     setOpenNested(openNested === index ? null : index);
    // };



    return (
        <h1>fg</h1>
        // <div className="pb-20 pt-5 px-20 w-full">
        //     <div className="relative">
        //         <div className="absolute w-full h-[0.1rem] bg-gray-400/30 bottom-5 left-0 right-0"></div>
        //         <div className="flex justify-between py-5">
        //             <div className="flex gap-x-6">
        //                 <button onClick={() => setIsVisible(!isVisible)} className="flex items-center justify-between px-6 border w-[160px] h-[40px] text-base border-orange-500/30 text-orange-500 hover:bg-orange-100">
        //                     <img src={filter} alt="Filter Icon" className="w-5 h-5 mr-2" />
        //                     <span className="flex-1 text-left">Filter</span>
        //                     <span className="ml-2 bg-orange-500 w-6 h-6 flex items-center justify-center text-white text-[10px]">{number_of_filter}</span>
        //                 </button>
        //                 <div className="relative flex items-center">
        //                     <input
        //                         className="border pr-4 pl-10 py-2 rounded w-64 text-sm border-gray-200"
        //                         placeholder="UI/UX Design"
        //                     />
        //                     <img
        //                         src={search}
        //                         alt="Search icon"
        //                         className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        //                     />
        //                 </div>
        //             </div>
        //
        //             <div className="flex items-center gap-x-3">
        //                 <span>Sort by:</span>
        //                 <div className="relative flex items-center">
        //                     <input
        //                         className="border px-4 py-2 rounded w-44 pr-10 text-sm border-gray-400"
        //                         placeholder="Trending"
        //                     />
        //                     <img
        //                         src={down}
        //                         alt="Down arrow"
        //                         className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //
        //         <div className="flex gap-x-3 justify-between items-center pb-10">
        //             <div className="flex gap-x-3">
        //                 <span className="text-gray-500">Suggestion:</span>
        //                 <p className="text-orange-500">{suggestions}</p>
        //             </div>
        //             <p className="text-gray-500">
        //                 <span className="text-black">{studentCount.toLocaleString()}</span> results found for{" "}
        //                 <span className="text-gray-500">{courseName}</span>
        //             </p>
        //         </div>
        //     </div>
        //
        //     <div className="flex">
        //         <div className="pr-10">
        //             {isVisible && (
        //                 <div className="w-64 p-4 shadow-xl">
        //                     {allData.map((category:any, index:number) => (
        //                         <div key={index} className="mb-2">
        //                             <button onClick={() => toggleSub(index)} className="w-full text-left flex items-center justify-between p-2 bg-white rounded hover:bg-gray-100 focus:outline-none">
        //                                 <span className="flex items-center text-xl">
        //                                     {typeof category.icon === "string" ? (
        //                                         <span className="mr-2">{category.icon}</span>
        //                                     ) : (
        //                                         <span className="mr-2">{category.icon}</span>
        //                                     )}
        //                                     <span className={index === 0 ? "text-orange-500" : "text-gray-700"}>
        //                                         {category.name}
        //                                     </span>
        //                                 </span>
        //                                 <svg className={`w-4 h-4 transform ${openSub === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        //                             </button>
        //                             {openSub === index && (
        //                                 <div className="pl-6">
        //                                     {category.subCategories.map((sub:any, subIndex:number) => (
        //                                         <div key={subIndex} className="mb-1">
        //                                             {sub.nestedCategories ? (
        //                                                 <>
        //                                                     <button onClick={() => toggleNested(subIndex)} className="w-full text-left flex items-center justify-between p-2 text-gray-600 hover:bg-gray-50 focus:outline-none">
        //                                                         <span className="flex items-center">
        //                                                             {sub.icon && <span className="mr-2">{sub.icon}</span>}
        //                                                             {sub.name}
        //                                                         </span>
        //                                                         <svg className={`w-3 h-3 transform ${openNested === subIndex ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        //                                                     </button>
        //                                                     {openNested === subIndex && (
        //                                                         <div className="pl-4">
        //                                                             {sub.nestedCategories.map((nested:any, nestedIndex:number) => (
        //                                                                 <div key={nestedIndex} className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50">
        //                                                                     <label className="flex items-center">
        //                                                                         <input type="checkbox" className="mr-2" />
        //                                                                         {nested.name}
        //                                                                     </label>
        //                                                                     <span className="text-sm">{nested.count}</span>
        //                                                                 </div>
        //                                                             ))}
        //                                                         </div>
        //                                                     )}
        //                                                 </>
        //                                             ) : (
        //                                                 <div className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50">
        //                                                     <label className="flex items-center">
        //                                                         <input type="checkbox" className="mr-2" />
        //                                                         {sub.name}
        //                                                     </label>
        //                                                     <span className="text-sm">{sub.count}</span>
        //                                                 </div>
        //                                             )}
        //                                         </div>
        //                                     ))}
        //                                 </div>
        //                             )}
        //                         </div>
        //                     ))}
        //                 </div>
        //             )}
        //         </div>
        //         <div className={`${isVisible ? "w-3/4" : "w-full"} grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
        //             {paginatedCourses.map(
        //                 ([img, category, text, categoryColour, categoryTextColour, price, rating, studentCount], i) => (
        //                     <CoursesCards key={i} img={img} category={category} text={text} categoryColour={categoryColour} categoryTextColour={categoryTextColour} price={price} rating={rating} studentCount={studentCount}/>)
        //             )}
        //         </div>
        //     </div>
        //
        //     <div className="flex justify-center items-center mt-10 space-x-2">
        //         <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 disabled:opacity-50 hover:bg-orange-300/30 hover:text-orange-500 rounded-full text-orange-600">←</button>
        //         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        //             <button
        //                 key={page}
        //                 onClick={() => handleClick(page)}
        //                 className={`px-3 py-2 rounded-full ${
        //                     currentPage === page ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-white hover:bg-orange-300/30 hover:text-orange-500"
        //                 }`}
        //             >
        //                 {String(page).padStart(2, "0")}
        //             </button>
        //         ))}
        //         <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 disabled:opacity-50 hover:bg-orange-300/30 hover:text-orange-500 rounded-full text-orange-600">→</button>
        //     </div>
        // </div>
    );
}

export default Courses;