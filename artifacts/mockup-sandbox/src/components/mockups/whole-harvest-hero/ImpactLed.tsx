import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, HeartHandshake } from "lucide-react";
import "./_group.css";

export function ImpactLed() {
  return (
    <div className="w-[1280px] h-[900px] bg-[#1b3f2f] text-[#f9f7f1] font-['DM_Sans'] overflow-hidden flex flex-col relative impact-led">
      {/* Navigation */}
      <header className="flex items-center justify-between px-12 py-8 relative z-20">
        <div className="flex items-center gap-2">
          <img 
            src="/__mockup/images/Whole-Harvest-Logo---No-Icon.svg" 
            alt="Whole Harvest" 
            className="h-10 opacity-90"
          />
        </div>
        <nav className="flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-[#cff07c] transition-colors">Home</a>
          <a href="#" className="hover:text-[#cff07c] transition-colors">About</a>
          <a href="#" className="hover:text-[#cff07c] transition-colors">Programs</a>
          <a href="#" className="hover:text-[#cff07c] transition-colors">PLANT'D</a>
          <Button 
            className="bg-[#cff07c] text-[#1b3f2f] hover:bg-[#b5d666] font-bold rounded-full px-6 py-5 text-sm"
            onClick={() => window.open('https://givebutter.com/agud5E', '_blank')}
          >
            Donate Now
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex px-12 pb-12 relative z-10 gap-16">
        {/* Left Column: Copy & CTAs */}
        <div className="flex-1 flex flex-col justify-center pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b3f2f]/50 border border-[#cff07c]/30 text-[#cff07c] text-xs font-bold tracking-wider uppercase mb-8 self-start">
            <HeartHandshake className="w-4 h-4" />
            <span>Real Impact</span>
          </div>
          
          <h1 className="text-7xl font-['Cormorant_Garamond'] leading-[1.05] font-semibold mb-6">
            Poverty ends where <br/>
            <span className="text-[#cff07c] italic">community grows.</span>
          </h1>
          
          <p className="text-xl leading-relaxed text-[#f9f7f1]/80 max-w-lg mb-10 font-light">
            We don't just provide meals—we teach families how to grow their own food. 
            Through our PLANT'D program, we're building sustainable independence 
            one garden at a time.
          </p>

          <div className="flex items-center gap-5 mb-16">
            <Button 
              className="bg-[#cff07c] text-[#1b3f2f] hover:bg-[#b5d666] font-bold rounded-full px-8 py-6 text-lg h-auto shadow-[0_0_40px_rgba(207,240,124,0.15)]"
              onClick={() => window.open('https://givebutter.com/agud5E', '_blank')}
            >
              Fund a Garden
            </Button>
            <Button 
              variant="outline" 
              className="border-[#f9f7f1]/30 text-[#f9f7f1] hover:bg-[#f9f7f1]/10 rounded-full px-8 py-6 text-lg h-auto font-medium"
            >
              See Our Programs
            </Button>
          </div>

          {/* Testimonial Pull-quote */}
          <div className="relative pl-6 border-l-2 border-[#f47920] mt-auto mb-8">
            <p className="font-['Merriweather'] italic text-lg text-[#f9f7f1]/90 leading-relaxed">
              "Before PLANT'D, we worried about groceries every week. Now, my kids pick tomatoes from our own backyard."
            </p>
            <p className="mt-2 text-sm font-semibold tracking-wide text-[#f47920] uppercase">— Maria T., Program Graduate</p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 relative flex items-center justify-end">
          <div className="absolute inset-0 bg-[#cff07c]/5 rounded-[40px] transform rotate-3 translate-x-4"></div>
          <div className="relative w-[90%] h-[100%] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/__mockup/images/Whole-Harvest-8223.jpg" 
              alt="Community member smiling with fresh produce" 
              className="w-full h-full object-cover"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3f2f]/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </main>

      {/* Bottom Stats Row */}
      <div className="relative z-20 border-t border-[#f9f7f1]/10 bg-[#1b3f2f]/95 backdrop-blur-md">
        <div className="px-12 py-8 flex justify-between items-center max-w-6xl mx-auto w-full">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#f47920] mb-1 font-['DM_Sans'] tracking-tight">12,400+</span>
            <span className="text-sm text-[#f9f7f1]/70 uppercase tracking-wider font-semibold">Meals Served</span>
          </div>
          
          <div className="w-px h-12 bg-[#f9f7f1]/10"></div>
          
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#f47920] mb-1 font-['DM_Sans'] tracking-tight">326</span>
            <span className="text-sm text-[#f9f7f1]/70 uppercase tracking-wider font-semibold">Kids in PLANT'D</span>
          </div>

          <div className="w-px h-12 bg-[#f9f7f1]/10"></div>

          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#f47920] mb-1 font-['DM_Sans'] tracking-tight">48</span>
            <span className="text-sm text-[#f9f7f1]/70 uppercase tracking-wider font-semibold">Community Gardens</span>
          </div>

          <div className="w-px h-12 bg-[#f9f7f1]/10"></div>

          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#f47920] mb-1 font-['DM_Sans'] tracking-tight">100%</span>
            <span className="text-sm text-[#f9f7f1]/70 uppercase tracking-wider font-semibold">To Programs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
