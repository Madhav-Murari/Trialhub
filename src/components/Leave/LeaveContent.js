import React from "react";
import Image from "next/image";
import ProfilePic from "../../../public/proPic.webp";
import InformationCard from "./InformationCard";

import {useState, useEffect } from "react";

const LeaveContent = () => {
  const [user, setUser] = useState(false);
  const [load, setLoad] = useState([]);
  const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('userData'));
  if (items) {
   setItems(items);
  }
  setLoad(true);
    async function getData() {
      const get = await fetch(`https://trialhub-backend.onrender.com/api/v1/${items.clientId}/user/${items.userId}`);
      const res = await get.json();
      setUser(res);
      setLoad(false);
    }
    getData();
}, []);

  return (
    <>
    { load?" ":
    <div className="h-full w-ful">
      <div className="bg-orange-200 flex flex-wrap m-auto  p-4 justify-center">
        <div className="w-4/12 py-4">
          <Image
            className="w-48 rounded-full p-4 "
            src={ProfilePic}
            alt="ProfilePic m-auto"
          />
        </div>

        <div className="md:w-6/12 m-auto px-3">
          <div className="m-auto">
            <h1 className="font-semibold">WELCOME! {user.name}</h1>
            <div className="">
              <div className="">
                <span>Employee id : {user.clientId}</span>
              </div>
              <div className="">
                <span>Designation : {user.role}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto ">
          <button className="m-auto text-white bg-black w-32 rounded-md">
            Apply Leave
          </button>
        </div>
      </div>

      <div className="container2 bg-orange-100 flex flex-wrap p-3">
        <div className="bg-black w-1/5 m-auto p-1 text-white align-center text-center rounded-md">
          <div>Total Working Hours</div>
          <div>100</div>
        </div>
        <div className="bg-black w-2/12 m-auto p-1 text-white text-center rounded-md">
          <div>Total Leaves</div>
          <div>45</div>
        </div>
        <div className="bg-black w-2/12 m-auto p-1 text-white text-center rounded-md">
          <div>Balance Leaves</div>
          <div>38</div>
        </div>
        <div className="bg-black w-1/4 m-auto p-1 text-white text-center rounded-md hidden md:flex">
          <div>Calender</div>
        </div>
      </div>

      <div className="container3 bg-slate-100 content-box h-content overflow-auto">
        <div className="grid  px-4 py-2 ">
          <div className="grid grid-cols-2 bg-slate-400 text-center sm:max-w-4 ">
            <div className="grid grid-cols-3 text-center ">
              <div className="font-semibold">Start Date</div>
              <div className="font-semibold">End Date</div>
              <div className="font-semibold">Leave Type</div>
            </div>
            <div className="grid grid-cols-3 text-center">
              <div className="font-semibold">Duration</div>
              <div className="font-semibold">Status</div>
              <div className="font-semibold">Actions</div>
            </div>
          </div>
          <div className="">
            <InformationCard />
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default LeaveContent;
