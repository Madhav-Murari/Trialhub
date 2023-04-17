import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Menus = [
  {
    title: "Leave",
    href: "/",
  },
  {
    title: "Leaves Left ",
    href: "/",
  },
  {
    title: "Leave",
    href: "/",
  },
  {
    title: "Leave",
    href: "/",
  },
  {
    title: "Leave",
    href: "/",
  },
];

const LeaveLeftSide = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className=" h-screen  bg-black flex items-start justify-start ">
        <div className="  h-screen fixed duration-500  inline-block">
          {/* for hamburger and for display page; */}

          <div className=" fixed  text-white bg-black  hover:cursor-pointer opacity-80">
            <div className="lg:hidden grid grid-cols-2 w-screen ">
              <div className="p-2 m-auto">Leave</div>

              {/* button */}
              <div className="p-2 m-auto">
                <Hamburger toggled={open} toggle={setOpen} />
              </div>
            </div>

            <div
              className={` ${
                open ? "w-full px-2 z-40  " : "h-0 w-0 hidden"
              } h-full  duration-500  gap-4`}
            >
              <ul>
                {Menus.map(({ title, href }) => (
                  <li className="m-2" key={title}>
                    <Link
                      href={href}
                      className={`w-42 flex p-2 px-2 m-auto text-white hover:bg-blue-800 cursor-pointer`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveLeftSide;
