import star from '../assets/icons/Star.svg';
import React from "react";

interface instructorCardprops {
    img:string;
    name:string;
    position:string;
    rating:string;
    studentCount:string;
}

const InstructorCard:React.FC<instructorCardprops> = ({img,name,position, rating, studentCount })=> {
    return (
        <div className="w-[244px] shadow-xl overflow-hidden bg-white relative" >
            <img src={img} alt="Course" className="w-full h-auto" />
            <div className="absolute bg-gray-300 h-[1px] w-[244px] right-0 left-0 mt-[75px]"></div>
            <div className="flex flex-col gap-4 px-4 pt-4 pb-3">
                <div className={'flex flex-col justify-center items-center gap-2'}>
                    <p className="text-xl font-medium leading-snug">{name}</p>
                    <p className={'text-xs text-gray-500'}>{position}</p>

                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <img src={star} alt="star" className="w-4 h-4" />
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
}

export default InstructorCard;

