import React from "react";

interface CardProps {
    icon: string;
    title: string;
    bgColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, bgColor }) => {
    return (
        <div className={`${bgColor} flex pl-5 pr-30 py-5 flex-col justify-center items-start gap-3`}>
            <div className="bg-white w-12 h-12 flex items-center justify-center">
                <img src={icon} alt={title} />
            </div>
            <p className="text-md flex-row flex">{title}</p>
        </div>
    );
};

export default Card;
