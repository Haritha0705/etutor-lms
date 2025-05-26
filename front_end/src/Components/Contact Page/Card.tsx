import React from "react";

interface CardProps {
    covImg:string;
    city:string;
    address:string;
}

const Card:React.FC<CardProps> = ({covImg,city,address}) =>{
    return(
        <div className="relative">
            <img src={covImg} alt="Branch Location" className="w-full h-auto" />

            <div className="absolute bottom-10 right-1/2 translate-x-1/2 bg-white bg-opacity-90 py-4 px-4 w-[250px] text-center rounded shadow-md flex flex-col items-center gap-2">
                <h4 className="text-xl font-semibold">{city}</h4>
                <div className="max-w-[220px] text-sm text-center">
                    <p className={'font-light'}>{address}</p>
                </div>
            </div>
        </div>

    )
}
export default Card