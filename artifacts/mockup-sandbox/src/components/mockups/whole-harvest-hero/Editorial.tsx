import React from "react";
import "./_group.css";

export function Editorial() {
  return (
    <div className="min-h-screen bg-[#f9f8f4] text-[#1b3f2f] font-['DM_Sans'] flex flex-col relative overflow-hidden">
      {/* Refined Nav */}
      <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-[#1b3f2f]/10 z-10 relative bg-[#f9f8f4]">
        <div className="flex items-center gap-2">
          <img
            src="/__mockup/images/Whole-Harvest-Logo---No-Icon.svg"
            alt="Whole Harvest"
            className="h-8 brightness-0 opacity-90"
            style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(18%) saturate(1516%) hue-rotate(107deg) brightness(98%) contrast(92%)" }}
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-[#f47920] transition-colors">Home</a>
          <a href="#" className="hover:text-[#f47920] transition-colors">About</a>
          <a href="#" className="hover:text-[#f47920] transition-colors">Programs</a>
          <a href="#" className="hover:text-[#f47920] transition-colors">PLANT'D</a>
          <a href="https://givebutter.com/agud5E" target="_blank" rel="noreferrer" className="px-6 py-2 border border-[#1b3f2f] hover:bg-[#1b3f2f] hover:text-[#f9f8f4] transition-colors rounded-full">
            Donate
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center p-8 gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col max-w-2xl z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-[#1b3f2f] w-12 opacity-30"></div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#1b3f2f]/60">A 501(c)(3) Nonprofit · Est. 2020</span>
          </div>
          
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            Helping humans, <br />
            <span className="italic text-[#f47920]">help humanity.</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-10 text-[#1b3f2f]/80 font-light max-w-xl">
            We fight poverty through food and education. Our flagship program PLANT'D teaches kids and families how to grow their own food, fostering sustainable communities.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="https://givebutter.com/agud5E" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#1b3f2f] text-[#f9f8f4] px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:bg-[#1b3f2f]/90 transition-colors"
            >
              Donate Now
            </a>
            <a 
              href="#" 
              className="group flex items-center gap-3 text-[#1b3f2f] uppercase tracking-wider text-sm font-semibold hover:text-[#f47920] transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-[#f47920] transition-colors">Discover PLANT'D</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Asymmetric Photo Collage */}
        <div className="flex-1 relative w-full h-[600px] lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0">
          
          <div className="absolute top-[10%] left-[5%] w-[45%] h-[55%] z-20">
            <img 
              src="/__mockup/images/Whole-Harvest-6795-2.jpg" 
              alt="Volunteers harvesting" 
              className="w-full h-full object-cover rounded-sm shadow-xl"
            />
          </div>
          
          <div className="absolute bottom-[5%] right-[10%] w-[50%] h-[60%] z-10">
            <img 
              src="/__mockup/images/Whole-Harvest-8223.jpg" 
              alt="Community member" 
              className="w-full h-full object-cover rounded-sm shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="absolute top-[5%] right-[0%] w-[35%] h-[40%] z-30">
            <img 
              src="/__mockup/images/Whole-Harvest-7855.jpg" 
              alt="Fresh produce" 
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#cff07c] text-[#1b3f2f] px-4 py-2 text-xs uppercase tracking-widest font-bold rotate-[-3deg]">
              Fresh harvest
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[#1b3f2f]/10 -z-10 rounded-full"></div>
        </div>
      </main>
    </div>
  );
}
