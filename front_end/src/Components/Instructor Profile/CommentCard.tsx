import React from "react";
import Img1 from "../../assets/image/commentImg1.png"
import star from "../../assets/icons/Star.svg"

// interface CommentCardProps {
//
// }
// <CommentCardProps>

const CommentCard: React.FC = () => {
    return (
        <div className={'flex gap-5 items-start'}>
            <img src={Img1} className={'object-contain'}/>
            <div className={'flex flex-col gap-3'}>
                <div className={'flex items-center gap-2'}>
                    <p>Guy Hawkins</p>
                    <div className={'w-1 h-1 bg-gray-600 rounded-full'}></div>
                    <p className={'text-gray-400'}>1 week ago</p>
                </div>
                <div className={'flex'}>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </div>
                <p>I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.</p>

            </div>
        </div>
    );
};

export default CommentCard;
