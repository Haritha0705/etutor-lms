import Coma1 from "../../assets/icons/Group1.svg"
import Coma2 from "../../assets/icons/Group2.svg"
import Trangle from "../../assets/icons/trangele.svg"

interface CardProps {
    commentText : string;
    name : string;
    position : string;
    companyName : string;

}


const CommentCard:React.FC<CardProps> = ({commentText,name,position,companyName})=>{
    return(
        <div className={'flex flex-col gap-7'}>
            <div className={"relative px-6 py-4 bg-gray-300/20 flex flex-col gap-5"}>
                <img src={Trangle} className={'absolute bottom-[-16px] left-1/2'}/>
                <div className={'flex flex-col items-start'}>
                    <img src={Coma1}/>
                </div>
                <div className={'flex flex-col text-center'}>
                    <p className={'text-md font-light text-gray-600'}>{commentText}</p>
                </div>
                <div className={'flex flex-col items-end'}>
                    <img src={Coma2}/>
                </div>
            </div>
            <div className={' text-center'}>
                <p>{name}</p>
                <p className={'text-gray-400 text-sm'}>{position}<span className={'text-blue-600 text-sm'}>{companyName}</span></p>
            </div>
        </div>

    )
}
export default CommentCard