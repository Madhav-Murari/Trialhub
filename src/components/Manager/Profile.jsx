import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";

function Profile() {
  return (
    <>
      <div className="flex w-full h-full pb-40 bg-[#E3D5CA] pr-100 overflow-x-hidden flex-col sm:flex-row ">
        <div className="sm:w-1/5  sm:mx-[64px] mx-[30px] mt-[43px] flex flex-row sm:flex-col">
          <div className="w-1/3 mx-4 sm:w-full sm:mx-0 ">
            <div className="sm:flex sm:items-center sm:justify-center">
              <img
                src="https://www.vayak.net/images/employee.jpg"
                width="100%"
                className="rounded"
              />
            </div>
          </div>
          <div className="w-2/3 mx-4 sm:mx-0 ">
            <div className="exp lg:text-[32px] text-[28px] my-4  ">
              Experience
            </div>
            <div className="UI lg:text-[20px] text-[16px] my-3 ">
              UI/UX Designer at trialshoppy
            </div>
            <div className="hidden sm:block">
              <div className=" lg:text-[32px] text-[22px]  ">Skills</div>
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
        <div className="w-4/5 bg-[#E3D5CA] sm:mx-0 mx-6">
          <div className=" mt-[43px] lg:text-[40px] text-[30px] text-gray-900   flex flex-col lg:flex-row font-semibold">
            <span>Mohit Kumar</span>
            <span>
              <span className="flex mx-8 text-[30px] lg:mt-[33px] text-[#747474] ">
                <HiLocationMarker />
                <span className="text-[20px] mx-3 ">Patna,India</span>
              </span>
            </span>
          </div>
          <div className="lg:text-[20px] text-[16px] text-[#3A86FF] my-2">
            UI/UX Designer
          </div>
          <div className="lg:text-[26px] text-[22px]   my-2">
            Start Date : 2-1-2023
          </div>
          <div className="lg:text-[26px] text-[22px]  ">Role : Employee</div>
          <div className="lg:text-[20px] text-[16px]  flex my-4 flex-col lg:flex-row ">
            <span className="flex my-3 lg:my-0">
              <span className=" mt-[12px] text-[#747474]">
                <FiMessageSquare />
              </span>
              <span className="mx-5 ">send message</span>
            </span>
            <span>
              <span className="lg:text-[26px] text-[22px]">
                <button className="bg-[#3A86FF] px-2 mx-3 rounded-sm">
                  Contact
                </button>
              </span>
              <span className="lg:text-[26px] text-[22px]">
                <button className="bg-[#4CAF50] lg:px-8 px-2 mx-2 rounded-sm">
                  manager
                </button>
              </span>
            </span>
          </div>
          <div className="text-[32px] text-[#747474] my-2">About</div>
          <div className="lg:text-[20px] text-[16px] text-[#747474] my-3">
            Contact Information
          </div>
          <div className="lg:text-[26px] text-[22px]   my-2">
            Phone :<span className="text-[#3A86FF]">+91624579242</span>{" "}
          </div>
          <div className="lg:text-[26px] text-[22px]  my-2">
            Email : Mohitkr@gmail.com
          </div>
          <div className="lg:text-[26px] text-[22px]  my-2">
            Address : Ashok nagar , patna , Bihar, 800001
          </div>
          <div className="lg:text-[20px] text-[16px]  my-2">
            Website : Mohitsite.com
          </div>
          <div className="lg:text-[32px] text-[28px]  my-3 text-[#747474]">
            Basic Information
          </div>
          <div className="lg:text-[26px] text-[22px]  my-2">
            Birthday : 30 JUNE
          </div>
          <div className="lg:text-[26px] text-[22px]   my-2">GENDER : MALE</div>
          <div className="block sm:hidden">
            <div className=" lg:text-[32px] text-[28px] ">Skills</div>
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
