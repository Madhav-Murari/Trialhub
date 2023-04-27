import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";

function Profile() {
  return (
    <>
      <div className="flex w-full h-full pb-40 bg-[#E3D5CA] pr-100 overflow-x-hidden flex-col sm:flex-row ">
        <div className="sm:w-1/4  sm:mx-[64px] mx-[30px] mt-[43px] flex flex-row sm:flex-col">
          <div className="w-1/3 mx-4 sm:w-full sm:mx-0 ">
            <div>
              <img
                className="rounded"
                src="https://www.vayak.net/images/employee.jpg"
              />
            </div>
          </div>
          <div className="w-2/3 mx-4 sm:mx-0">
            <div className="exp lg:text-[40px] text-[28px] my-4 font-bold">
              experience
            </div>
            <div className="UI lg:text-[24px] text-[16px] my-3 font-bold">
              UI/UX Designer at trialshoppy
            </div>
            <div className="hidden sm:block">
              <div className=" lg:text-[40px] text-[28px] font-bold">
                Skills
              </div>
              <div className="flexflex-col text-[#5983D3]">
                <p>Figma</p>
                <p>AdobeXD</p>
                <p>Web Design</p>
                <p>UI Design</p>
                <p>UX Research</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-[#E3D5CA] sm:mx-3 mx-6">
          <div className=" mt-[43px] lg:text-[48px] text-[32px] font-bold flex flex-col lg:flex-row">
            <span>Mohit Kumar</span>
            <span>
              <span className="flex mx-8 text-[30px] lg:mt-[33px] text-[#747474] ">
                <HiLocationMarker />
                <span className="text-[20px] mx-3 ">Patna,India</span>
              </span>
            </span>
          </div>
          <div className="lg:text-[24px] text-[16px] text-[#3A86FF] my-3">
            UI/UX Designer
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold my-2">
            Start Date : 2-1-2023
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold">
            Role : Employee
          </div>
          <div className="lg:text-[24px] text-[16px] font-bold flex my-5 flex-col lg:flex-row ">
            <span className="flex my-3 lg:my-0">
              <span className=" mt-[12px] text-[#747474]">
                <FiMessageSquare />
              </span>
              <span className="mx-5 ">send message</span>
            </span>
            <span>
              <span className="lg:text-[32px] text-[22px]">
                <button className="bg-[#3A86FF] px-2 mx-3 rounded-sm">
                  Contact
                </button>
              </span>
              <span className="lg:text-[32px] text-[22px]">
                <button className="bg-[#4CAF50] lg:px-8 px-2 mx-2 rounded-sm">
                  manager
                </button>
              </span>
            </span>
          </div>
          <div className="text-[40px] text-[#747474] my-7">About</div>
          <div className="lg:text-[24px] text-[16px] text-[#747474] my-5">
            Contact Information
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold  my-2">
            Phone :<span className="text-[#3A86FF]">+91624579242</span>{" "}
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold my-2">
            Email : Mohitkr@gmail.com
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold my-2">
            Address : Ashok nagar , patna , Bihar, 800001
          </div>
          <div className="lg:text-[24px] text-[16px] font-bold my-2">
            Website : Mohitsite.com
          </div>
          <div className="lg:text-[40px] text-[28px]  my-4 text-[#747474]">
            Basic Information
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold my-2">
            Birthday : 30 JUNE
          </div>
          <div className="lg:text-[32px] text-[22px] font-bold  my-2">
            GENDER : MALE
          </div>
          <div className="block sm:hidden">
            <div className=" lg:text-[40px] text-[28px] font-bold">Skills</div>
            <div className="flexflex-col text-[#5983D3]">
              <p>Figma</p>
              <p>AdobeXD</p>
              <p>Web Design</p>
              <p>UI Design</p>
              <p>UX Research</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
