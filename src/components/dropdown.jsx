import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home Screen");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-96 mx-auto mt-5">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-left flex items-center justify-between shadow-sm"
      >
        <span>{selectedOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.72-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              onClick={() => handleOptionClick("Home Screen")}
            >
              Home Screen
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              onClick={() => handleOptionClick("Get in Touch")}
            >
              Get in Touch
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              onClick={() => handleOptionClick("About Us")}
            >
              About Us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
