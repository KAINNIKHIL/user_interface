import { useState } from "react";
import image from '../assets/vector.png'
import rectangle from '../assets/rectangle.png'

const tabs = ["About Me", "Experiences", "Recommended"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("About Me");

  const content = {
    "About Me": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    "Experiences": `I was born and raised in Albany, NY, and have been living in Santa 
    Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters.`,
    "Recommended": `My calendar is usually blocked between 9–10 AM. This is a...`
  };

  return (
    <div className="bg-[#363C43] text-gray-300 rounded-2xl p-5 shadow-[5px_5px_5px_rgba(0,0,0,1)] w-[725px] h-[330px] flex gap-6 ">
      <div className="flex-shrink-0 w-[24px] h-[160px] overflow-hidden ">
              <img src= {image}></img>
      </div>
            <div className="flex-1 flex flex-col">
      <div className="flex space-x-2 mb-4 bg-[#171717] rounded-[16px] p-1 ">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-[16px] text-sm font-medium transition-colors relative overflow-hidden tracking-wider leading-none group w-[195px] h-[49px] font-semibold text-[18px] font-poppins
              ${activeTab === tab ? "bg-[#28292F] shadow-[10px_10px_50px_20px_rgba(0,0,0,1)]   text-white " : ` text-[#A3ADB2]`}} `} type="button"
          >
            <span className={`${activeTab !== tab ? `absolute inset-0 bg-gradient-to-l from-[#96BEE7]/25 to-[#282728]/50 transform -translate-x-[101%] transition-transform duration-300 ease-in group-hover:translate-x-0`:""}`}></span>

  <span className="absolute inset-0 flex justify-center items-center font-bold z-10">
    {tab}
  </span>
          </button>
          
        ))}


      </div>
      <p className="text-sm leading-relaxed text-[20px] font-jakarta text-[#969696] whitespace-pre-line h-[175px] w-[611px]">{content[activeTab] }</p>
    </div>
    <div className="  flex items-center justify-center gap-2 ">
            <div className="flex-shrink-0  w-[15px] h-[64px] overflow-hidden">
              <img src= {rectangle}></img></div>
          
    </div></div>
  );
}
