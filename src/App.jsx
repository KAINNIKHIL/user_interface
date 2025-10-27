import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] 
                    flex items-center justify-center gap-8 p-10">
      
      {/* Left section (you can add image later if needed) */}
      <div className="flex-shrink-0 w-[670px] overflow-hidden flex justify-center items-center">
        {/* You can place a photo, illustration, or animation here */}
      </div>

      {/* Right section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <Tabs />
        
        <div className="w-[612px] h-[4px] bg-white/10 shadow-[5px_5px_10px_rgba(0,0,0,1)]"></div>

        <Gallery />

        <div className="w-[612px] h-[4px] bg-white/10 shadow-[5px_5px_10px_rgba(0,0,0,1)]"></div>
      </div>
    </div>
  );
}
