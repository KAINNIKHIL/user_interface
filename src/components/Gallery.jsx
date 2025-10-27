import { useState, useRef } from "react";
import myImage from "../assets/image2.png";
import arrowImage from "../assets/arrow.png";
import arrowImage1 from "../assets/arrow1.png";
import image from "../assets/vector.png";

export default function Gallery() {
  const [images, setImages] = useState([myImage, myImage, myImage, myImage]);
  const fileInputRef = useRef(null);
  const galleryRef = useRef(null);

  const addImage = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageURL]);
    }
  };

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div
      className="bg-[#363C43] text-gray-300 rounded-2xl p-5 shadow-[5px_5px_5px_rgba(0,0,0,1)] border border-black
                 w-full max-w-[725px] flex flex-col md:flex-row gap-6 items-center justify-between"
    >
      {/* Left decorative line */}
      <div className="hidden md:flex flex-shrink-0 w-[24px] h-[160px] overflow-hidden">
        <img src={image} alt="vector" className="object-contain" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header row */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="bg-[#171717] rounded-[15px] w-[131px] h-[46px] text-lg font-semibold text-[20px] font-poppins text-center content-center">
            Gallery
          </h2>

          <div className="flex gap-2 items-center">
            {/* Add image button */}
            <button
              onClick={addImage}
              className="bg-white/10 hover:bg-white/20 rounded-[104px] w-[131px] h-[46px] 
                         shadow-[5px_10px_15px_rgba(0,0,0,0.4),_inset_2px_2px_5px_rgba(255,255,255,0.2)]
                         text-[12px] font-extrabold font-jakarta transition text-center"
            >
              + ADD IMAGE
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Arrows */}
            <button
              onClick={scrollLeft}
              className="bg-gradient-to-r from-[#303439] to-[#161718] w-[45px] h-[45px] 
                         rounded-full flex items-center justify-center mx-1 
                         shadow-[5px_10px_15px_rgba(0,0,0,0.4)] hover:scale-110 transition"
            >
              <img src={arrowImage} alt="Left" className="w-[14px] h-[14px]" />
            </button>

            <button
              onClick={scrollRight}
              className="bg-gradient-to-r from-[#303439] to-[#161718] w-[45px] h-[45px] 
                         rounded-full flex items-center justify-center 
                         shadow-[5px_10px_15px_rgba(0,0,0,0.4)] hover:scale-110 transition"
            >
              <img src={arrowImage1} alt="Right" className="w-[14px] h-[14px]" />
            </button>
          </div>
        </div>

        {/* Image scroll section */}
        <div
          ref={galleryRef}
          className="flex overflow-x-auto scroll-smooth gap-3 py-4 hide-scrollbar"
        >
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src={src}
                alt={`gallery-item-${i}`}
                className="w-[160px] h-[160px] object-cover rounded-xl border border-[#3D3E45]
                           transform transition duration-500 ease-in-out grayscale
                           hover:rotate-[-3deg] hover:scale-110 hover:shadow-[5px_10px_15px_rgba(0,0,0,0.4)] hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
