import React from "react";

interface props{
        qnty:string,
        text:string,
        icon:string,
}

const WorkBox: React.FC<props> = ({qnty,text,icon}) => {
    return (
        <div className="bg-orange-100 my-4 md:my-0 p-4 rounded-md w-2/5 md:w-1/5">
            <div className="flex justify-between">
                <h2 className="text-[20px]">{qnty}</h2>
                <h3 className="text-[18px] md:text-[24px]">{icon}</h3>
            </div>
            <div>
                <p className="text-[14px]">{text}</p>
            </div>
        </div>
        // <div className = "flex justify-between items-center bg-orange-100 p-4 rounded-md w-2/5 md:w-1/5">
        //     <div className="w-3/5">
        //         <p className="text-[20px]">{qnty}</p>
        //         <p className="text-[14px]">{text}</p>
        //     </div>
        //     <div className = {`${color} h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-[18px] md:text-[24px]`}>
        //         {icon}
        //     </div>
        // </div>
    )
}

export default WorkBox;