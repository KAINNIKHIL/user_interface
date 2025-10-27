import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div
      className="relative w-full min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F]
                 flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-10"
    >
      {/* Full background overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10 w-full h-full"></div>

      {/* Left section */}
      <div className="w-full md:max-w-[670px] flex justify-center items-center overflow-hidden">
        {/* Add image/animation here if needed */}
        {/* <img src="/hero.jpg" alt="Visual" className="object-cover w-full h-auto rounded-2xl" /> */}
      </div>

      {/* Right section */}
      <div className="w-full md:max-w-[612px] flex flex-col items-center justify-center gap-6 text-white">
        <Tabs />

        <div className="w-full h-[3px] bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)] rounded-full"></div>

        <Gallery />

        <div className="w-full h-[3px] bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)] rounded-full"></div>
      </div>
    </div>
  );
}
