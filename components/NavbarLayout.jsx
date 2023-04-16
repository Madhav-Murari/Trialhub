import Link from "next/link";
import React from "react";

import Navbar from "../src/components/Navbar/navbar";


const NavbarLayout = () => {
  return (
    <Navbar/>
  )
}

// const Navbar = () => {
//   return (
//     <div className="flex text-light-grey font-semibold text-xl justify-between items-center sticky top-0 px-4 py-2 my-4">
//       <div>
//         <Link href="/">Trialshoppy</Link>
//       </div>

//       <div className="flex flex-row ">
//         <div className="mx-3 my-auto">
//           <Link href="/employee">Employee</Link>
//         </div>
//         <div className="mx-3 my-auto">
//           <Link href={"/task"}>Task</Link>
//         </div>
        
//         <div className="mx-3 my-auto">
//           <Link href={"/meeting"}>Meetings</Link>
//         </div>


   
//         <div className="mx-3 my-auto">
//           <Link href={"/attendence"}>Attendence</Link>
//         </div>

//         <Link
//           href="/login"
//           className="text-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
//         >
//           Login
//         </Link>
//         <Link
//           href="/signup"
//           className="text-[#ffffff] bg-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
//         >
//           Signup
//         </Link>
//       </div>
//     </div>
//   );
// };

export default NavbarLayout;
