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
        <h1 className="font-semibold text-lg md:text-base px-4">TRIALHUB</h1>
      </Link>

      <button
        onClick={clickHandler}
        type="button"
        className="flex items-end p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
      >
        <BurgerIcon />
      </button>
      <div
        className={`w-full md:shadow-none shadow-md h-fit p-4 ml-3 bg-white fixed top-[50px] right-0 items-center justify-between ${display} md:h-full md:flex md:static md:bg-white`}
      >
        <div className="md:hidden w-fit ml-auto" onClick={clickHandler}>
          <CloseIcon />
        </div>
          <div className="flex flex-col md:flex-row">
            <LinkTo linkTo="about" />
            <LinkTo linkTo="contact" />
          </div>
        {auth && <DropdownMenu />}

        {!auth ? (
          <div className="flex flex-row ml-auto">
            <Link
              href="/login"
              className="text-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-[#ffffff] bg-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
            >
              Signup
            </Link>
          </div>
        ) : (
          <a
            href="/login"
            onClick={logoutHandler}
            className="text-[#ffffff] bg-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
          >
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
