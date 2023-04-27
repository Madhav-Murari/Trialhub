import React from "react";

export default function TeamCard(props) {
  return (
    <>
      <div className="flex flex-col items-center m-1 shadow p-1 rounded-md mx-2">
        <img
          src={props.photo}
          className="rounded w-[8rem] h-[10rem] md:w-[10rem]"
          alt="img"
          priority={false}
        />
        <div className="rounded">{props.name}</div>
        <div className="rounded text-[#00a3ff] text-sm">
          {props.designation}
        </div>
      </div>
    </>
  );
}
