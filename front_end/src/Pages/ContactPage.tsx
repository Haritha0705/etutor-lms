import React, { useState } from "react";

const Contact:React.FC = ()=> {

    const categories = [
        {
            name: "Development",
            icon: "💻",
            subcategories: [
                { name: "Web Development", count: 574 },
                { name: "Data Science", count: 568 },
                { name: "Mobile Development", count: 1345 },
                { name: "Software Testing", count: 317 },
                { name: "Software Engineering", count: 31 },
                { name: "Software Development Tools", count: 558 },
                { name: "No-Code Development", count: 37 },
            ],
        },
        { name: "Business", icon: "🤝", subcategories: [] },
        { name: "Finance & Accounting", icon: "💳", subcategories: [] },
        { name: "IT & Software", icon: "🖥️", subcategories: [] },
        { name: "Office Productivity", icon: "📅", subcategories: [] },
        { name: "Personal Development", icon: "📝", subcategories: [] },
        { name: "Design", icon: "✏️", subcategories: [] },
        { name: "Marketing", icon: "📣", subcategories: [] },
        { name: "Lifestyle", icon: "🌟", subcategories: [] },
        { name: "Photography & Video", icon: "📸", subcategories: [] },
    ];

    const [openCategory, setOpenCategory] = useState<number|null>(null);

    const toggleCategory = (index:number) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <div className="w-64 p-4">
            <h2 className="text-lg font-semibold mb-4">CATEGORY</h2>
            {categories.map((category, index) => (
                <div key={index} className="mb-2">
                    <button
                        onClick={() => toggleCategory(index)}
                        className="w-full text-left flex items-center justify-between p-2 bg-white rounded hover:bg-gray-100 focus:outline-none"
                    >
                        <span className="flex items-center">
                            <span className="mr-2">{category.icon}</span>
                            <span className={index === 0 ? "text-orange-500" : "text-gray-700"}>
                                {category.name}
                            </span>
                        </span>
                        <svg
                            className={`w-4 h-4 transform ${openCategory === index ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {openCategory === index && category.subcategories.length > 0 && (
                        <div className="pl-6">
                            {category.subcategories.map((sub, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50"
                                >
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        {sub.name}
                                    </label>
                                    <span className="text-sm">{sub.count}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Contact;
