import React from "react";
import star from '../assets/icons/Star.svg';

interface CoursesCardsProps {
    img: string;
    category: string;
    text: string;
    categoryColour: string;
    categoryTextColour: string;
    price: string;
    rating: string; // Consider changing to number if possible
    studentCount: string;
}

const CoursesCards: React.FC<CoursesCardsProps> = ({img, category, text, categoryColour, categoryTextColour, price, rating, studentCount}) => {
    return (
        <div className="w-[444px] shadow-xl overflow-hidden bg-white relative lg:w-[244px] md:w-[300px]">
            <img src={img} alt={`${text} course image`} className="w-full h-auto" />
            <div className="flex flex-col gap-4 px-4 pt-4 pb-3">
                <div className="flex items-center justify-between">
                    <p className={`px-3 py-1 text-xs rounded ${categoryColour} ${categoryTextColour}`}>
                        {category}
                    </p>
                    <p className="text-orange-500 font-semibold">{price}</p>
                </div>
                <div>
                    <p className="text-[18px] font-medium leading-snug lg:text-sm md:text-[15px]">
                        {text}
                    </p>
                    <div className="bg-gray-300 h-[1px] w-full mt-3"></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <img src={star} alt="Rating star" className="w-4 h-4" />
                        <p>{rating}</p>
                    </div>
                    <div className="flex gap-1">
                        <p>{studentCount}</p>
                        <span className="text-gray-500">students</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCards;
