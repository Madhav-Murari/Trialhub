import React from "react";
import FilterIcon from "../icons/filterIcon";
import MeetingItem from "./meetingItem";

const meetingData = [
    {
        id:1,
        title:"Product Design Meet",
        status:4,
        purpose:"Meeting Page Design",
        date:"22-05-2023",
        time:"12:30 PM",
        place:"Google Meet",
        invite:[
            "https://www.w3schools.com/howto/img_avatar.png",
            "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
            "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
         ],
    },
    {
        id:2,
        title:"Web Dev Meet",
        status:4,
        purpose:"Meeting Page Development",
        date:"22-05-2023",
        time:"12:30 PM",
        place:"Google Meet",
        invite:[
            "https://www.w3schools.com/howto/img_avatar.png",
            "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
            "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
         ],
    },
    {
        id:3,
        title:"Product Design Meet",
        status:2,
        purpose:"Meeting Page Design",
        date:"22-05-2023",
        time:"12:30 PM",
        place:"Google Meet",
        invite:[],
    },
    {
        id:4,
        title:"Product Design Meet",
        status:3,
        purpose:"Meeting Page Design",
        date:"22-05-2023",
        time:"12:30 PM",
        place:"Google Meet",
        invite:[
            "https://www.w3schools.com/howto/img_avatar.png",
        ]
    },
]

function Meeting(){
    return (
        <>
        {/* <Navbar/> */}
            <div className='flex justify-between max-w-1280px py-1 px-4 border-b bg-white'>
            <h3 className='font-bold my-3'>Meeting</h3>
            <div className="hidden md:inline-flex items-center space-x-10 ">
                 <h3 className='my-3'>Search</h3>
                 <FilterIcon />
                 <h3>18-12-2022</h3>
            </div>
            </div>
            <div className = "m-4 py-2 overflow-x-auto">
                <table className="w-full">
                    <thead className = "bg-gray-200">
                        <tr className = "h-12">
                            <th>Title</th>
                            <th>Status</th>
                            <th>Purpose</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Place</th>
                            <th>Invite</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className = "bg-white">
                        {meetingData.map((mItem) => <MeetingItem key={mItem.id} item = {mItem}/> )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Meeting;