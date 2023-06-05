import React from "react";

interface props{
    status:String,
}

const StatusTile: React.FC<props> = ({status}) => {
    var col = "blue"
    var statusText = "Notify"
    if(status === "Completed"){
        col = "bg-green-400";
        statusText = "Completed";
    }
    else if(status === "Upcoming"){
        col = "bg-yellow-400";
        statusText = "Upcoming"
    }
    else if(status === "Notify"){
        col = "bg-blue-400";
        statusText = "Notify";
    }
    else{
        col = "bg-red-400";
        statusText = "Cancelled";
    }

    return (
        <div className = {`w-20 text-sm mx-auto md:w-24 md:text-base ${col} text-white rounded-xl`}>{statusText}</div>
    );
}

export default StatusTile;