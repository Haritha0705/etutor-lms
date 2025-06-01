import React, { useState } from 'react';
import { Search, Filter, Star, Users, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface Course {
    id: number;
    title: string;
    instructor: string;
    rating: number;
    students: number;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    level: string;
    duration: string;
    tools: string[];
}

const CourseMarketplace: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
    const [selectedLevel, setSelectedLevel] = useState<string>('');
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
        category: true,
        tools: true,
        rating: true,
        level: true,
        price: true,
        duration: true
    });

    const courses: Course[] = [
        {
            id: 1,
            title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
            instructor: "GameDev.tv Team",
            rating: 4.6,
            students: 197237,
            price: 49,
            originalPrice: 89,
            image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=300&h=200&fit=crop",
            category: "Development",
            level: "Beginner",
            duration: "40+ Hours",
            tools: ["Blender"]
        },
        {
            id: 2,
            title: "Adobe Premiere Pro CC - Advanced Training Course",
            instructor: "Louay Zambarakji",
            rating: 4.6,
            students: 236588,
            price: 43,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
            category: "Design",
            level: "Advanced",
            duration: "15+ Hours",
            tools: ["Premiere Pro"]
        },
        {
            id: 3,
            title: "Ultimate AWS Certified Solutions Architect Associate 2023",
            instructor: "Stephane Maarek",
            rating: 4.7,
            students: 531823,
            price: 67,
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop",
            category: "IT & Software",
            level: "Intermediate",
            duration: "25+ Hours",
            tools: ["AWS"]
        },
        {
            id: 4,
            title: "Learn Ethical Hacking From Scratch",
            instructor: "Zaid Sabih",
            rating: 4.5,
            students: 451444,
            price: 89,
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
            category: "IT & Software",
            level: "Beginner",
            duration: "18+ Hours",
            tools: ["Kali Linux"]
        },
        {
            id: 5,
            title: "Angular - The Complete Guide (2023 Edition)",
            instructor: "Maximilian Schwarzmüller",
            rating: 4.3,
            students: 178937,
            price: 84,
            image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop",
            category: "Development",
            level: "Intermediate",
            duration: "35+ Hours",
            tools: ["Angular", "TypeScript"]
        },
        {
            id: 6,
            title: "How to get Diamond in solo/Q League of Legends | Season 11",
            instructor: "Jeremy Gaming",
            rating: 4.7,
            students: 45637,
            price: 29,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
            category: "Lifestyle",
            level: "Intermediate",
            duration: "8+ Hours",
            tools: ["League of Legends"]
        },
        {
            id: 7,
            title: "SQL for Data Analytics - Weekender Crash Course",
            instructor: "start-tech Academy",
            rating: 4.4,
            students: 451444,
            price: 32,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
            category: "Data Science",
            level: "Beginner",
            duration: "12+ Hours",
            tools: ["SQL", "MySQL"]
        },
        {
            id: 8,
            title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2023",
            instructor: "Stephane Maarek",
            rating: 4.6,
            students: 1398208,
            price: 54,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
            category: "IT & Software",
            level: "Beginner",
            duration: "14+ Hours",
            tools: ["AWS"]
        }
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

    const tools = [
        { name: "HTML 5", count: 1577 },
        { name: "CSS 3", count: 1278 },
        { name: "PHP", count: 967 },
        { name: "MySQL", count: 1344 },
        { name: "React", count: 892 },
        { name: "Laravel", count: 1285 },
        { name: "Java", count: 1456 },
        { name: "WordPress", count: 1891 }
    ];

    const levels = [
        { name: "All Level", count: 1891 },
        { name: "Beginner", count: 1567 },
        { name: "Intermediate", count: 1234 },
        { name: "Expert", count: 987 }
    ];

    const durations = [
        { name: "0-12 Months", count: 1567 },
        { name: "0-6 Months", count: 1234 },
        { name: "1-3 Months", count: 1344 },
        { name: "1-4 Weeks", count: 987 },
        { name: "1-7 Days", count: 654 }
    ];

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const filteredCourses = courses.filter(course => {
        if (selectedCategory && course.category !== selectedCategory) return false;
        if (selectedLevel && course.level !== selectedLevel) return false;
        if (course.price < priceRange[0] || course.price > priceRange[1]) return false;
        if (selectedRating && course.rating < selectedRating) return false;
        return true;
    });

    const formatStudents = (count: number) => {
        if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
        if (count >= 1000) return `${Math.floor(count / 1000)}k`;
        return count.toString();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-md">
                                <Filter size={16} />
                                <span>Filter</span>
                            </button>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="UX/UI Design"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">Sort by:</span>
                            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option>Trending</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Rating</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        Suggestion: <span className="text-orange-500">web interface</span>, <span className="text-orange-500">use interface</span>, <span className="text-orange-500">web design</span>, <span className="text-orange-500">interface</span>
                        <span className="float-right">2,540,068 results found for 'UX/UI Design'</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
                {/* Sidebar */}
                <div className="w-80 bg-white rounded-lg shadow-sm p-6">
                    {/* Category Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection('category')}
                        >
                            <h3 className="font-semibold text-gray-800">CATEGORY</h3>
                            {expandedSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.category && (
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <div key={category.name} className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category.name}
                                                checked={selectedCategory === category.name}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-600">{category.name}</span>
                                        </label>
                                        <span className="text-xs text-gray-400">{category.count}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tools Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection('tools')}
                        >
                            <h3 className="font-semibold text-gray-800">TOOLS</h3>
                            {expandedSections.tools ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.tools && (
                            <div className="space-y-2">
                                {tools.map((tool) => (
                                    <div key={tool.name} className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="text-orange-500 focus:ring-orange-500 rounded"
                                            />
                                            <span className="text-sm text-gray-600">{tool.name}</span>
                                        </label>
                                        <span className="text-xs text-gray-400">{tool.count}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Rating Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection('rating')}
                        >
                            <h3 className="font-semibold text-gray-800">RATING</h3>
                            {expandedSections.rating ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.rating && (
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={rating}
                                            checked={selectedRating === rating}
                                            onChange={(e) => setSelectedRating(Number(e.target.value))}
                                            className="text-orange-500 focus:ring-orange-500"
                                        />
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={12}
                                                    className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                            <span className="text-sm text-gray-600">& Up</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Level Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection('level')}
                        >
                            <h3 className="font-semibold text-gray-800">COURSE LEVEL</h3>
                            {expandedSections.level ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.level && (
                            <div className="space-y-2">
                                {levels.map((level) => (
                                    <div key={level.name} className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="level"
                                                value={level.name}
                                                checked={selectedLevel === level.name}
                                                onChange={(e) => setSelectedLevel(e.target.value)}
                                                className="text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-600">{level.name}</span>
                                        </label>
                                        <span className="text-xs text-gray-400">{level.count}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection('price')}
                        >
                            <h3 className="font-semibold text-gray-800">PRICE</h3>
                            {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.price && (
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="number"
                                        placeholder="MIN"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-400">-</span>
                                    <input
                                        type="number"
                                        placeholder="MAX"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="text-orange-500 focus:ring-orange-500 rounded" />
                                        <span className="text-sm text-gray-600">Paid</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="text-orange-500 focus:ring-orange-500 rounded" />
                                        <span className="text-sm text-gray-600">Free</span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Duration Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleSection('duration')}
                        >
                            <h3 className="font-semibold text-gray-800">DURATION</h3>
                            {expandedSections.duration ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                        {expandedSections.duration && (
                            <div className="space-y-2">
                                {durations.map((duration) => (
                                    <div key={duration.name} className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="text-orange-500 focus:ring-orange-500 rounded"
                                            />
                                            <span className="text-sm text-gray-600">{duration.name}</span>
                                        </label>
                                        <span className="text-xs text-gray-400">{duration.count}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <div className="relative">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    {course.originalPrice && (
                                        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                                            ${course.originalPrice - course.price} OFF
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="text-xs text-orange-500 font-medium mb-2">{course.category.toUpperCase()}</div>
                                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 h-12">{course.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>

                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-1">
                                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-gray-500">
                                            <Users size={14} />
                                            <span className="text-sm">{formatStudents(course.students)} Students</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-lg font-bold text-gray-800">${course.price}</span>
                                            {course.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-1 text-gray-500">
                                            <Clock size={14} />
                                            <span className="text-sm">{course.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex items-center justify-center space-x-2">
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">01</button>
                        <button className="p-2 px-4 bg-orange-500 text-white rounded-md">02</button>
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">03</button>
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">04</button>
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">05</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseMarketplace;

