import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const InformationCard = () => {
  return (
    <>
      <div className="grid grid-cols-2  text-center py-4">
        <div className="grid grid-cols-3 text-center py-2">
          <div>05-01-23</div>
          <div>05-01-23</div>
          <div>Annual leave</div>
        </div>
        <div className="grid grid-cols-3 text-center py-2">
          <div>16 hours</div>
          <div className="bg-green-600 rounded w-20 text-white m-auto">
            Approved
          </div>
          <div className="flex m-auto">
            <span className="">
              <IoMdCreate />
            </span>
            <span>
              <IoMdTrash />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
