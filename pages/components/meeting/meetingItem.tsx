import React , { useState } from "react";
import StatusTile from "./status_tile";

interface props{
    item:{
        id:number,
        title:string,
        status:number,
        purpose:string,
        date:string,
        time:string,
        place:string,
        invite:string[],
    }
}

const MeetingItem: React.FC<props> = ({item}) => {
    const [isClicked,setIsClicked] = useState(false);
    function clickHandler(){
        setIsClicked((prevState) => !prevState);
    }

    function leaveHandler(){
        setIsClicked(false);
    }

    return (
        <>
        <tr className="h-10">
            <td>{item.title && item.title}</td>
            <td><StatusTile status = {item.status}/></td>
            <td>{item.purpose && item.purpose}</td>
            <td>{item.date && item.date}</td>
            <td>{item.time && item.time}</td>
            <td>{item.place && item.place}</td>
            <td className="items-center relative">
                <div className="w-14 h-10 mx-auto relative">
                {item.invite[1] && <img src = {item.invite[1]} className = "rounded-full w-10 h-10 border-2 border-white object-cover absolute left-0" alt = "invited"/>}
                {item.invite[0] && <img src = {item.invite[0]} className = "rounded-full w-10 h-10 border-2 border-white object-cover absolute left-3" alt = "invited"/>}
                <div className="bg-gray-300 w-10 h-10 flex justify-center items-center object-cover border-2 border-white rounded-full text-stone-600 text-[24px] absolute left-6">+</div>
                </div>
            </td>
            <td className="text-[30px] cursor-pointer relative" onClick = {clickHandler} onMouseLeave = {leaveHandler}>
                ···
                { isClicked && <div className="w-24 text-base bg-gray-100 z-10 absolute top-8 right-2">
                    <div className="w-full hover:bg-gray-400">View</div>
                    <div className="w-full hover:bg-gray-400">Edit</div>
                    <div className="w-full hover:bg-gray-400">Delete</div>
                </div>
                }
            </td>
        </tr>
        </>
    )
}

export default MeetingItem;