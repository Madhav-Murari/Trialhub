import React, { useState } from "react";
import LinkTo from "./LinkTo";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ml-auto">
      <button
        className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        My Account
        <svg
          className={`w-4 h-4 ml-1 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute top-[35px] left-0 md:right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded shadow"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <LinkTo linkTo="dashboard" />
          <LinkTo linkTo="employee" />
          <LinkTo linkTo="attendence" />
          <LinkTo linkTo="tasks" />
          <LinkTo linkTo="meeting" />
          <LinkTo linkTo="leave" />
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
