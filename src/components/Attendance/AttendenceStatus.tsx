import React from 'react'

type Props = { status: string }

export default function AttendenceStatus({ status }: Props) {
    return (
        <>
            {status === "active" && <div className="w-fit bg-green-400 text-white rounded-[1rem] px-3 py-1"> {status} </div>}
            {status === "pending" && <div className="w-fit bg-yellow-400 text-white rounded-[1rem] px-3 py-1"> {status} </div>}
            {status === "doNotDisturb" && <div className="w-fit bg-red-400 text-white rounded-[1rem] px-3 py-1"> {status} </div>}
            {status === "" && <div className="w-fit bg-gray-200 text-white rounded-[1rem] px-3 py-1"> {status} </div>}
        </>
    )
}