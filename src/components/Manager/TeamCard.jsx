import React from "react";
import Image from "next/image";

export default function TeamCard(props) {
  return (
    <>
      <div className="flex flex-col items-center m-1 shadow p-1 rounded-md mx-2">
        <Image
          src={props.name}
          className="rounded w-[8rem] md:w-[10rem]"
          alt="img"
          priority={false}
        />
        <div className="rounded">{props.username}</div>
        <div className="rounded text-[#00a3ff] text-sm">
          {props.designation}
        </div>
      </div>
    </>
  );
}
