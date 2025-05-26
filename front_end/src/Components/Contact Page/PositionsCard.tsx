import React from "react";
import Icon1 from "../../assets/icons/MapPinLine.svg";
import Icon2 from "../../assets/icons/Briefcase.svg";
import Icon3 from "../../assets/icons/ClipboardText.svg";
import Arrow from "../../assets/icons/ArrowRight.svg";

interface CardProps {
    title: string;
    city: string;
    type: string;
    option: string;
    deadline: string;
}

const PositionCard: React.FC<CardProps> = ({ title, city, type, option, deadline }) => {
    return (
        <div className="relative bg-white px-6 py-4 gap-5 flex flex-col rounded-xl shadow hover:shadow-md transition">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300" />

            <h4 className="text-2xl font-semibold">{title}</h4>

            <div className="flex gap-5 pb-6 flex-wrap">
                <div className="flex items-center gap-2">
                    <img src={Icon1} alt="Location" className="w-5 h-5" />
                    <span className="text-gray-600 text-sm">{city}</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={Icon2} alt="Job Type" className="w-5 h-5" />
                    <span className="text-gray-600 text-sm">{type}</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={Icon3} alt="Option" className="w-5 h-5" />
                    <span className="text-gray-600 text-sm">{option}</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-red-400 text-sm">
                    Deadline: <span className="text-gray-600">{deadline}</span>
                </p>
                <button className="bg-orange-400/30 w-10 h-10 flex justify-center items-center hover:bg-orange-400/50 transition">
                    <img src={Arrow} alt="Arrow" className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default PositionCard;
