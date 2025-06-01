import React from "react";

import star from "../../assets/icons/Star.svg"

interface CommentCardProps {
    img:string;
    name:string;
    des:string;
    time:string;
}


const CommentCard: React.FC<CommentCardProps> = ({img,name,des,time}) => {
    return (
        <div className={'relative flex gap-5 items-start mb-[30px] mt-[60px]'}>
            <div className={'absolute w-full h-[0.04rem] bg-gray-400 left-0 right-0 bottom-[-30px]'}></div>
            <img src={img} className={'object-contain'}/>
            <div className={'flex flex-col gap-3'}>
                <div className={'flex items-center gap-2'}>
                    <p>{name}</p>
                    <div className={'w-1 h-1 bg-gray-600 rounded-full'}></div>
                    <p className={'text-gray-400'}>{time}</p>
                </div>
                <div className={'flex'}>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </div>
                <p className={'text-gray-500'}>{des}</p>

            </div>
        </div>
    );
};

export default CommentCard;
