import React, { useState } from "react";
import CoursesCards from "../../Components/Landing Page/CoursesCards.tsx";

import c1Img from "../../assets/image/Course Images1.jpg";
import c2Img from "../../assets/image/Course Images2.jpg";
import c3Img from "../../assets/image/Course Images3.jpg";
import c4Img from "../../assets/image/Course Images4.jpg";
import c5Img from "../../assets/image/Course Images5.jpg";
import c6Img from "../../assets/image/Course Images6.jpg";
import c7Img from "../../assets/image/Course Images7.jpg";
import c8Img from "../../assets/image/Course Images8.jpg";
import c9Img from "../../assets/image/Course Images9.jpg";
import c10Img from "../../assets/image/Course Images10.jpg";

import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/MagnifyingGlass.svg";
import down from "../../assets/icons/ChevronDown.svg";

import { ChevronDown, ChevronUp } from "lucide-react";

// Type definitions
interface Category {
    icon: string | React.ReactNode;
    name: string;
    subCategories: SubCategory[];
}

interface SubCategory {
    name: string;
    count?: number;
    icon?: string | React.ReactNode;
    nestedCategories?: NestedCategory[];
}

interface NestedCategory {
    name: string;
    count: number;
}

const coursesCards = [
    [c1Img, "Design", "Machine Learning A-Z™: Hands-On Python & R In Data...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
    [c2Img, "Developments", "The Complete 2021 Web Development Bootcamp", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
    [c3Img, "Business", "Learn Python Programming Masterclass", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
    [c4Img, "Marketing", "The Complete Digital Marketing Course - 12 Courses in 1", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
    [c5Img, "IT & Software", "Reiki Level I, II and Master/Teacher Program", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
    [c6Img, "Music", "The Complete Foundation Stock Trading Course", "bg-orange-200/30", "text-orange-700", "$57", "5.0", "265.7K"],
    [c7Img, "Marketing", "Beginner to Pro in Excel: Financial", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
    [c8Img, "Health & Fitness", "The Python Mega Course: Build 10 Real World Applications", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
    [c9Img, "Design", "Copywriting - Become a Freelance Copywriter, your ow...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
    [c10Img, "Lifestyle", "Google Analytics Certification - Learn How To Pass The Exam", "bg-orange-200/30", "text-orange-700", "$57", "5.0", "265.7K"],
    [c1Img, "Design", "Machine Learning A-Z™: Hands-On Python & R In Data...", "bg-red-200/30", "text-red-700", "$57", "5.0", "265.7K"],
    [c2Img, "Developments", "The Complete 2021 Web Development Bootcamp", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"],
    [c3Img, "Business", "Learn Python Programming Masterclass", "bg-green-200/30", "text-green-700", "$57", "5.0", "265.7K"],
    [c4Img, "Marketing", "The Complete Digital Marketing Course - 12 Courses in 1", "bg-purple-300/30", "text-purple-700", "$57", "5.0", "265.7K"]
];

const categories = [
    { name: "Development", count: 1244 },
    { name: "Business", count: 2847 },
    { name: "Finance & Accounting", count: 1653 },
    { name: "IT & Software", count: 1847 },
    { name: "Office Productivity", count: 967 },
    { name: "Personal Development", count: 1234 },
    { name: "Design", count: 1456 },
    { name: "Marketing", count: 987 },
    { name: "Lifestyle", count: 654 },
    { name: "Photography & Video", count: 789 },
    { name: "Music", count: 432 },
    { name: "Health & Fitness", count: 876 }
];

// Sample data for the filter section (you'll need to replace this with your actual data)
const dataToUse: Category[] = [
    {
        icon: "📚",
        name: "Development",
        subCategories: [
            {
                name: "Web Development",
                count: 500,
                nestedCategories: [
                    { name: "React", count: 150 },
                    { name: "Vue.js", count: 100 },
                    { name: "Angular", count: 80 }
                ]
            },
            { name: "Mobile Development", count: 300 },
            { name: "Game Development", count: 200 }
        ]
    },
    {
        icon: "💼",
        name: "Business",
        subCategories: [
            { name: "Entrepreneurship", count: 400 },
            { name: "Management", count: 350 },
            { name: "Sales", count: 250 }
        ]
    }
];

const Courses: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
        category: true
    });
    const [openSub, setOpenSub] = useState<number | null>(null);
    const [openNested, setOpenNested] = useState<number | null>(null);

    const CARDS_PER_PAGE = 12;
    const totalPages = Math.ceil(coursesCards.length / CARDS_PER_PAGE);

    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleSub = (index: number) => {
        setOpenSub(openSub === index ? null : index);
        setOpenNested(null); // Close nested when switching sub categories
    };

    const toggleNested = (index: number) => {
        setOpenNested(openNested === index ? null : index);
    };

    const paginatedCourses = coursesCards.slice(
        (currentPage - 1) * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE
    );

    const courseName = "ui/ux design";
    const studentCount = 3145684;
    const suggestions = "user interface";
    const number_of_filter = 3;

    return (
        <div className="pb-20 px-20 w-full">
            {/* Top Filters */}
            <div className="relative">
                <div className="absolute w-full h-[0.1rem] bg-gray-400/30 bottom-5 left-0 right-0"></div>
                <div className="flex justify-between py-5">
                    <div className="flex gap-x-6">
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className="flex items-center justify-between px-6 border w-[160px] h-[40px] text-base border-orange-500/30 text-orange-500 hover:bg-orange-100"
                        >
                            <img src={filter} alt="Filter Icon" className="w-5 h-5 mr-2" />
                            <span className="flex-1 text-left">Filter</span>
                            <span className="ml-2 bg-orange-500 w-6 h-6 flex items-center justify-center text-white text-[10px]">
                                {number_of_filter}
                            </span>
                        </button>
                        <div className="relative flex items-center">
                            <input
                                className="border pr-4 pl-10 py-2 rounded w-64 text-sm border-gray-200"
                                placeholder="UI/UX Design"
                            />
                            <img
                                src={search}
                                alt="Search icon"
                                className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <span>Sort by:</span>
                        <div className="relative flex items-center">
                            <input
                                className="border px-4 py-2 rounded w-44 pr-10 text-sm border-gray-400"
                                placeholder="Trending"
                            />
                            <img
                                src={down}
                                alt="Down arrow"
                                className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-3 justify-between items-center pb-10">
                    <div className="flex gap-x-3">
                        <span className="text-gray-500">Suggestion:</span>
                        <p className="text-orange-500">{suggestions}</p>
                    </div>
                    <p className="text-gray-500">
                        <span className="text-black">{studentCount.toLocaleString()}</span> results found for{" "}
                        <span className="text-gray-500">{courseName}</span>
                    </p>
                </div>
            </div>

            <div className="flex">
                {/* Filter Sidebar */}
                <div className="pr-10">
                    {isVisible && (
                        <div className="w-64 p-4 shadow-xl">
                            {dataToUse.map((category: Category, index: number) => (
                                <div key={index} className="mb-2">
                                    <button
                                        onClick={() => toggleSub(index)}
                                        className="w-full text-left flex items-center justify-between p-2 bg-white rounded hover:bg-gray-100 focus:outline-none"
                                    >
                                        <span className="flex items-center text-xl">
                                            {typeof category.icon === "string" ? (
                                                <span className="mr-2">{category.icon}</span>
                                            ) : (
                                                <span className="mr-2">{category.icon}</span>
                                            )}
                                            <span className={index === 0 ? "text-orange-500" : "text-gray-700"}>
                                                {category.name}
                                            </span>
                                        </span>
                                        <svg
                                            className={`w-4 h-4 transform ${openSub === index ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openSub === index && (
                                        <div className="pl-6">
                                            {category.subCategories.map((sub: SubCategory, subIndex: number) => (
                                                <div key={subIndex} className="mb-1">
                                                    {sub.nestedCategories ? (
                                                        <>
                                                            <button
                                                                onClick={() => toggleNested(subIndex)}
                                                                className="w-full text-left flex items-center justify-between p-2 text-gray-600 hover:bg-gray-50 focus:outline-none"
                                                            >
                                                                <span className="flex items-center">
                                                                    {sub.icon && <span className="mr-2">{sub.icon}</span>}
                                                                    {sub.name}
                                                                </span>
                                                                <svg
                                                                    className={`w-3 h-3 transform ${openNested === subIndex ? "rotate-180" : ""}`}
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                            {openNested === subIndex && (
                                                                <div className="pl-4">
                                                                    {sub.nestedCategories.map((nested: NestedCategory, nestedIndex: number) => (
                                                                        <div key={nestedIndex} className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50">
                                                                            <label className="flex items-center">
                                                                                <input type="checkbox" className="mr-2" />
                                                                                {nested.name}
                                                                            </label>
                                                                            <span className="text-sm">{nested.count}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <div className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50">
                                                            <label className="flex items-center">
                                                                <input type="checkbox" className="mr-2" />
                                                                {sub.name}
                                                            </label>
                                                            <span className="text-sm">{sub.count}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Course Cards Grid */}
                <div className={`${isVisible ? "w-3/4" : "w-full"} grid grid-cols-6 gap-8`}>
                    {paginatedCourses.map(
                        ([img, category, text, categoryColour, categoryTextColour, price, rating, studentCount], i) => (
                            <CoursesCards
                                key={i}
                                img={img}
                                category={category}
                                text={text}
                                categoryColour={categoryColour}
                                categoryTextColour={categoryTextColour}
                                price={price}
                                rating={rating}
                                studentCount={studentCount}
                            />
                        )
                    )}
                </div>
            </div>

            {/* Additional Filter Section (Categories) */}
            {isVisible && (
                <div className="w-80 bg-white rounded-lg shadow-sm p-6 mt-10">
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection("category")}
                        >
                            <h3 className="font-semibold text-gray-800">CATEGORY</h3>
                            {expandedSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.category && (
                            <div className="space-y-2">
                                {categories.map((cat, idx) => (
                                    <div key={idx} className="flex justify-between text-sm text-gray-700">
                                        <span>{cat.name}</span>
                                        <span className="text-gray-400">{cat.count}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Pagination (if needed) */}
            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handleClick(page)}
                        className={`px-3 py-2 rounded ${
                            currentPage === page
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Courses;