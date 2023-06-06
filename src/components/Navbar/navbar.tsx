import React, { useState, useEffect } from "react";
import Link from "next/link";
import LinkTo from "./LinkTo";
import BurgerIcon from "../icons/BurgerIcon";
import CloseIcon from "../icons/CloseIcon";
import { useRouter } from "next/router";
import DropdownMenu from "./dropdownmenu";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const [auth, setAuth] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      setAuth(JSON.parse(userDataString));
    }
  }, []);

  function clickHandler() {
    if (display == "hidden") setDisplay("block");
    else setDisplay("hidden");
  }

  function logoutHandler() {
    localStorage.removeItem("userData");
    setAuth(null);
    router.push("/login");
  }

  return (
    <div className="w-full h-[60px] border-b px-4 flex items-center justify-between bg-white">
      <Link href="/">
        <div className="font-bold font-semibold text-[1.5rem] px-4 text-left">
          <span className="text-primary">Trial</span>
          Hub
        </div>
      </Link>

      <button
        onClick={clickHandler}
        type="button"
        className="flex items-end p-2 ml-3 text-gray-500 rounded-lg md:hidden"
      >
        {display === "hidden" ? <div className="text-[1rem]">
          <BurgerIcon />
        </div> : <CloseIcon />}
      </button>
      <div
        className={`w-full md:shadow-none shadow-md h-fit p-4 ml-3 bg-white fixed top-[50px] right-0 items-center justify-between ${display} md:h-full md:flex md:static md:bg-white`}
      >
        <div className="flex flex-col md:flex-row">
          <LinkTo linkTo="about" />
          <LinkTo linkTo="contact" />
        </div>
        {auth && <DropdownMenu />}

        {!auth ? (
          <div className="flex flex-row ml-auto">
            <Link
              href="/login"
              className="text-gray-400 hover:text-gray-600 hover:border-gray-600 border-2 border-gray-400 rounded-full  px-6 py-1 mx-1 flex items-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-[#ffffff] bg-primary border-2 border-primary rounded-full  px-6 py-1 mx-1 flex items-center"
            >
              Signup
            </Link>
          </div>
        ) : (
          <Link
            href="/login"
            onClick={logoutHandler}
            className="text-[#ffffff] bg-primary border-2 border-primary rounded-full  px-6 py-1 mx-1 flex items-center justify-center"
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
