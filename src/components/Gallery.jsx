import { useState, useRef } from "react";
import myImage from'../assets/image2.png'
import arrowImage from'../assets/arrow.png'
import arrowImage1 from'../assets/arrow1.png'
import image from '../assets/vector.png'


export default function Gallery() {
  const [images, setImages] = useState([
    myImage, myImage, myImage, myImage
  ]);


  
  const fileInputRef = useRef(null);

  const addImage = () => {
    fileInputRef.current.click(); // trigger file input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageURL]);
    }
  };
  const scrollLeft = () => {
    document.getElementById("gallery").scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("gallery").scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="bg-[#363C43] text-gray-300 rounded-2xl p-5 shadow-[5px_5px_5px_rgba(0,0,0,1)] flex gap-6 w-[725px] h-[330px]">
      <div className="flex-shrink-0 w-[24px] h-[160px] overflow-hidden ">
        <img src= {image}></img>
      </div>
      <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-3 ">
        <h2 className="bg-[#171717] rounded-[15px] w-[131.32px] h-[46px] text-lg font-semibold text-[20px] font-poppins text-center content-center">Gallery</h2>
        <div className="flex gap-2">
           <button
        onClick={addImage}
        className="bg-[#ffffff]/3 rounded-[104px] w-[131.32px] h-[46px] shadow-[5px_10px_15px_rgba(0,0,0,0.4),_inset_2px_2px_5px_rgba(255,255,255,0.2)]
                   text-[12px] font-extrabold font-jakarta  transition mx-6 text-center " 
      >
        + ADD IMAGE
      </button>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
          
          <button onClick={scrollLeft} className="bg-gradient-to-r from-[#303439] to-[#161718] px-4 w-[45px] h-[45px] rounded-full mx-1 shadow-[5px_10px_15px_rgba(0,0,0,0.4)]">
            <img
    src={arrowImage} // replace with your arrow image path
    className="w-[14.19px] h-[14px]" // adjust size as needed
  />
   
          </button>
         <button onClick={scrollRight} className="bg-gradient-to-r from-[#303439] to-[#161718] px-4 w-[45px] h-[45px] rounded-full shadow-[5px_10px_15px_rgba(0,0,0,0.4)]
]">
            <img
    src={arrowImage1} // replace with your arrow image path
    className="w-[14.19px] h-[14px]" // adjust size as needed
  />
   
          </button>
        </div>
      </div>


      <div
  id="gallery"
  className="flex overflow-x-auto scroll-smooth gap-1 py-4 hide-scrollbar"
>
  {images.map((src, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 flex justify-center"
    >
      <img
        src={src}
        alt={`gallery-item-${i}`}
        className="w-[180px] h-[179px] object-cover rounded-xl border border-[#3D3E45]
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
