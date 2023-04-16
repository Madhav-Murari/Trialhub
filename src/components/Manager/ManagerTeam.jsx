import React from "react";
import Image from "next/image";

import { TiMessages } from "react-icons/ti";
import Suraj from "../../assets/Suraj.png";
import TeamCard from "./TeamCard";
import Deep from "../../assets/Deep.png";
import Priya from "../../assets/Priya.png";
import Mohit from "../../assets/Mohit.png";
import Shreya from "../../assets/Shreya.png";
import Prince from "../../assets/Prince.png";

export default function ManagerTeam() {
  return (
    <>
      <div className="flex flex-col bg-[#EEDCD1]">
        <div className="flex flex-col md:flex-row p-3">
          <div className="mx-auto px-1 md:px-6">
            <Image className="w-[15rem]" src={Suraj} alt="Suraj" />
          </div>
          <div className="w-full px-3">
            <div className="flex flex-row justify-between">
              <div
                className="text-3xl font-medium m-2"
                style={{ fontSize: "30px" }}
              >
                Suraj Verma
              </div>
              <div>
                <button className="bg-[#00a3ff] py-2 px-3 rounded text-white m-2">
                  Tasks
                </button>
                <button className="bg-[#18A558] py-2 px-3 rounded text-white m-2">
                  Meetings
                </button>
              </div>
            </div>

            <div className="p-2">
              <div className="font-medium mb-2" style={{ fontSize: "20px" }}>
                Description
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                id odit, ea mollitia totam commodi tempore voluptatibus
                veritatis, enim ullam omnis suscipit illum eos molestias sunt
                est praesentium fugit. Repudiandae nesciunt quae excepturi ea.
              </div>
            </div>

            <div className="flex flex-row">
              <button className="py-2 px-3 rounded flex flex-row items-center mx-2">
                <span className="mx-2">
                  <TiMessages />
                </span>
                Send Message
              </button>
              <button className="bg-[#00a3ff] py-2 px-3 rounded text-white mx-2">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* _______ */}

        <div style={{ fontSize: "30px" }} className="text-center">
          Team Members
        </div>
        <div className="flex flex-row md:flex-col my-8 mx-auto">
          <div className="flex flex-wrap">
            <TeamCard
              designation="Frontend Developer"
              name={Prince}
              username="Prince Rajan"
            />
            <TeamCard
              designation="Backend Developer"
              name={Priya}
              username="Priya Seth"
            />
            <TeamCard
              designation="UI/UX Designer"
              name={Deep}
              username="Deep Singh"
            />
            <TeamCard
              designation="Graphic Designer"
              name={Shreya}
              username="Shreya Verma"
            />
            <TeamCard
              designation="Content Writer"
              name={Mohit}
              username="Mohit Raj"
            />
          </div>
        </div>
      </div>
    </>
  );
}
