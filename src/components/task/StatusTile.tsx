import React from "react";

type Props = { status: string };

export default function StatusTile({ status }: Props) {
    return (
        <>
            {status === "completed" && <div className="bg-green-400 px-2 py-1 rounded-md text-white">{status}</div>}
            {status === "pending" && <div className="bg-yellow-500 px-2 py-1 rounded-md text-white">{status}</div>}
            {status === "started" && <div className="bg-sky-500 px-2 py-1 rounded-md text-white">{status}</div>}
            {status === "incomplete" && <div className="bg-red-500 px-2 py-1 rounded-md text-white">{status}</div>}
        </>
    );
}
