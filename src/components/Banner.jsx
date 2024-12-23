if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    input[type="radio"]:checked::before {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;
  document.head.appendChild(style);
}

import Upload from "../assets/images/upload.png";
import Plus from "../assets/images/plus.png";
import  { useState } from "react";

function Banner() {
  const [selectedOption, setSelectedOption] = useState("Discount Per product Page 1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-[25%] px-4 py-4 border-[2px] border-[#DEDEDE]">
      <h1 className="font-bold text-xl font-sans">Banner Slider</h1>
      <p className="font-sans text-sm text-[#616161] mt-2">Please upload your Banners to Sliders</p>
      <div className="flex justify-between mt-[25px]">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-16 h-12 bg-[#F5F4F4] rounded-lg flex justify-center items-center hover:border-[1px] hover:border-black ease-in-out duration-200"
            >
              <img src={Upload} alt={`Upload ${index + 1}`} className="w-6 h-6" />
            </div>
          ))}
        <div className="w-16 h-12 bg-[#F5F4F4] rounded-lg flex justify-center items-center hover:border-[1px] hover:border-black ease-in-out duration-200">
          <img src={Plus} alt="Add" className="w-6 h-6" />
        </div>
      </div>

      <div className="h-[220px] border-[2px] border-[#DEDEDE] rounded-xl mt-6 py-4 px-4">
        <h1 className="font-sans font-semibold text-base text-[#303030]">Image</h1>
        <div className="h-[138px] border-[2px] border-[#8A8A8A] border-dotted rounded-xl mt-4">
          <div className="flex justify-center mt-10">
            <button className="hover:border-[#303030] hover:border-[2px] text-[#616161] font-sans py-2 px-2 rounded-xl mx-auto text-xs shadow-inner ease-in-out duration-200">
              Add Image
            </button>
          </div>
          <p className="text-xs text-[#616161] text-center font-sans mt-2">Recommended size: 500x290 px.</p>
        </div>
      </div>

      <h1 className="mt-4 font-bold text-lg font-sans">Navigate to</h1>

      <div className="space-y-2 mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="page"
            value="Discount Per product Page 1"
            checked={selectedOption === "Discount Per product Page 1"}
            onChange={handleOptionChange}
            className="appearance-none h-4 w-4 rounded-full border-2 border-[#303030] focus:ring-2 focus:ring-[white] checked:bg-white checked:border-[#303030] relative"
          />
          <span className="text-[#616161] text-sm font-semibold">Discount Per product Page 1</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="page"
            value="Deal 2 Page"
            checked={selectedOption === "Deal 2 Page"}
            onChange={handleOptionChange}
            className="appearance-none h-4 w-4 rounded-full border-2 border-[#303030] focus:ring-2 focus:ring-[white] checked:bg-white checked:border-[#303030] relative"
          />
          <span className="text-[#616161] text-sm font-semibold">Deal 2 Page</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="page"
            value="Product Page"
            checked={selectedOption === "Product Page"}
            onChange={handleOptionChange}
            className="appearance-none h-4 w-4 rounded-full border-2 border-[#303030] focus:ring-2 focus:ring-[white] checked:bg-white checked:border-[#303030] relative"
          />
          <span className="text-[#616161] text-sm font-semibold">Product Page</span>
        </label>
      </div>
    </div>
  );
}

export default Banner;
