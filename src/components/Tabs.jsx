import { useState } from "react";
import image from "../assets/vector.png";
import rectangle from "../assets/rectangle.png";

const tabs = ["About Me", "Experiences", "Recommended"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("About Me");

  const content = {
    "About Me": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,

    "Experiences": `I was born and raised in Albany, NY, and have been living in Santa 
Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters.`,

    "Recommended": `My calendar is usually blocked between 9–10 AM. This is a...`,
  };

  return (
    <div
      className="bg-[#363C43] text-gray-300 rounded-2xl p-5 shadow-[5px_5px_5px_rgba(0,0,0,1)] border border-black
                 w-full max-w-[725px] flex flex-col md:flex-row gap-6 items-center justify-between"
    >
      {/* Left decorative bar */}
      <div className="flex-shrink-0 w-[24px] h-[160px] hidden md:flex justify-center">
        <img src={image} alt="vector" className="object-contain" />
      </div>

      {/* Tabs + content */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        {/* Tab buttons */}
        <div className="flex flex-wrap md:flex-nowrap space-x-2 mb-4 bg-[#171717] rounded-[16px] p-1 justify-center md:justify-start w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`flex-1 py-2 rounded-[16px] text-sm font-medium transition-all duration-300 relative overflow-hidden tracking-wider leading-none group 
                md:w-[150px] md:h-[49px] font-semibold text-[16px] sm:text-[18px] font-poppins
                ${
                  activeTab === tab
                    ? "bg-[#28292F] shadow-[0_0_40px_10px_rgba(0,0,0,0.7)] text-white"
                    : "text-[#A3ADB2]"
                }`}
            >
              {/* Gradient hover background */}
              {activeTab !== tab && (
                <span className="absolute inset-0 bg-gradient-to-l from-[#96BEE7]/25 to-[#282728]/50 transform -translate-x-[101%] transition-transform duration-300 ease-in group-hover:translate-x-0" />
              )}

              <span className="absolute inset-0 flex justify-center items-center font-bold z-10">
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-relaxed font-jakarta text-[#969696] whitespace-pre-line w-full">
          {content[activeTab]}
        </p>
      </div>

      {/* Right decorative rectangle */}
      <div className="hidden md:flex items-center justify-center w-[15px] h-[64px]">
        <img src={rectangle} alt="rectangle" className="object-contain" />
      </div>
    </div>
  );
}
