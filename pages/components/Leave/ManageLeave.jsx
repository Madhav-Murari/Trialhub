import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

function ManageLeave() {
  return (
    <>
      <div className=" p-4 ">
        <div className="py-2 bg-white sm:px-6 sm:h-5/7 ml-4 h-[96vh] my-6 sm:my-2">
          <div className="grid px-8 py-2  pb-10  sm:bg-white bg-[#E3D5CA] sm:mx-8 sm:px-10 pb-auto h-5/8">
            <div className="py-4 text-2xl font-bold text-center sm:py-8 sm:text-4xl md:text-left">
              Leaves you applied
            </div>
            <div className="flex ">
              <span className="pr-4 text-xl sm:text-2xl md:text-3xl ">
                <FaCalendarAlt />
              </span>
              <span className="text-xl font-bold sm:text-3xl">
                Tuesday,june 25 to Friday june 28 (3 days)
              </span>
            </div>

            <div className="py-8 pl-12 text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              architecto dolore corporis similique officia enim quo consequuntur
              cumque quis laboriosam veritatis optio itaque dolorem,
              exercitationem atque, laborum qui veniam natus.
            </div>
            <div className="flex flex-col-reverse justify-start py-2 md:flex-row">
              <button className="px-4 py-3 mb-2 text-white bg-black rounded sm:px-12 md:mr-10">
                Cancel leave
              </button>
              <button className="sm:px-12  px-4 py-3 mb-2 text-white bg-[#5983D3] rounded ">
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManageLeave;
