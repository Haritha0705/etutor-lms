import React from "react";
interface CardProps {
    icon: string;
    title: string;
    subText:string;
    bgColor:string;
}

const Card: React.FC<CardProps> = ({ icon, title , subText , bgColor }) => {
    return (
        <div className={`bg-white  flex px-10 py-7 flex-col justify-center items-center gap-3`}>
            <div className={`${bgColor} w-20 h-20 flex items-center justify-center`}>
                <img src={icon} alt={title} />
            </div>
            <p className="text-md flex-row flex ">{title}</p>
            <p className="text-sm text-center flex-row flex text-gray-600">{subText}</p>
        </div>
    );
};

export default Card;
