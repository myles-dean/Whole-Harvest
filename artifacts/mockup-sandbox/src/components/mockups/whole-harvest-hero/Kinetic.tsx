import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import "./_group.css";

export function Kinetic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const produceItems = [
    { emoji: "🍅", size: "text-5xl", duration: "12s", delay: "0s", left: "10%" },
    { emoji: "🥕", size: "text-6xl", duration: "15s", delay: "2s", left: "25%" },
    { emoji: "🥦", size: "text-4xl", duration: "10s", delay: "1s", left: "45%" },
    { emoji: "🧅", size: "text-5xl", duration: "14s", delay: "3s", left: "65%" },
    { emoji: "🫑", size: "text-6xl", duration: "18s", delay: "0.5s", left: "85%" },
    { emoji: "🌽", size: "text-5xl", duration: "13s", delay: "4s", left: "15%" },
    { emoji: "🥬", size: "text-6xl", duration: "16s", delay: "2.5s", left: "75%" },
    { emoji: "🍆", size: "text-4xl", duration: "11s", delay: "5s", left: "35%" },
    { emoji: "🍎", size: "text-5xl", duration: "17s", delay: "1.5s", left: "55%" },
    { emoji: "🍋", size: "text-4xl", duration: "14s", delay: "6s", left: "90%" },
  ];

  return (
    <div className="relative w-full h-[900px] overflow-hidden bg-[#1b3f2f] font-['DM_Sans']">
      <style>{`
        @keyframes float-up-wobble {
          0% {
            transform: translateY(100vh) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
        
        .animate-produce {
          animation-name: float-up-wobble;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-iteration-count: infinite;
        }

        @keyframes bounce-wobble {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(-3deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(-2px) rotate(3deg);
          }
        }

        .hover-wobble:hover {
          animation: bounce-wobble 0.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Video with Tint */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/__mockup/videos/IMG-8227-poster-00001.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/__mockup/videos/IMG-8227-transcode.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1b3f2f]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b3f2f] via-transparent to-[#1b3f2f]/30"></div>
      </div>

      {/* Animated Produce Overlay */}
      {mounted && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {produceItems.map((item, i) => (
            <div
              key={i}
              className={`absolute bottom-[-100px] animate-produce ${item.size}`}
              style={{
                left: item.left,
                animationDuration: item.duration,
                animationDelay: item.delay,
              }}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col">
        {/* Navigation */}
        <header className="w-full px-8 py-6 flex justify-between items-center text-[#f9f7f1]">
          <div className="flex items-center gap-4">
            <img 
              src="/__mockup/images/Whole-Harvest-Logo---No-Icon.svg" 
              alt="Whole Harvest" 
              className="h-10"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-[#cff07c] transition-colors">Home</a>
            <a href="#" className="hover:text-[#cff07c] transition-colors">About</a>
            <a href="#" className="hover:text-[#cff07c] transition-colors">Programs</a>
            <a href="#" className="hover:text-[#cff07c] transition-colors">PLANT'D</a>
            <a 
              href="https://givebutter.com/agud5E" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-[#cff07c] text-[#1b3f2f] font-bold hover:bg-white transition-colors"
            >
              Donate
            </a>
          </nav>
          
          <button className="md:hidden text-[#f9f7f1]">
            <Menu size={28} />
          </button>
        </header>

        {/* Hero Main */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f9f7f1] tracking-tight leading-[1.1]">
              Helping humans, <br />
              help <span className="relative inline-block">
                <span className="relative z-10 text-[#cff07c]">humanity!</span>
                <svg className="absolute w-full h-4 -bottom-1 left-0 z-0 text-[#f47920]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#f9f7f1]/90 max-w-2xl mx-auto font-medium mb-8">
              Join our community-driven PLANT'D program to grow food, share knowledge, and build a sustainable future together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="https://givebutter.com/agud5E" 
                target="_blank"
                rel="noreferrer"
              >
                <Button 
                  size="lg" 
                  className="hover-wobble bg-[#cff07c] text-[#1b3f2f] hover:bg-white text-lg font-bold px-10 py-6 rounded-full shadow-[0_0_40px_rgba(207,240,124,0.3)] border-2 border-transparent hover:border-[#cff07c] transition-all"
                >
                  Donate Now
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-[#f9f7f1] text-[#f9f7f1] hover:bg-[#f9f7f1] hover:text-[#1b3f2f] text-lg font-bold px-10 py-6 rounded-full transition-colors"
              >
                Volunteer
              </Button>
            </div>
          </div>
        </main>
        
        {/* Bottom decorative bar */}
        <div className="h-4 w-full flex bg-[#1b3f2f]">
          <div className="h-full flex-1 bg-[#cff07c]"></div>
          <div className="h-full flex-1 bg-[#f47920]"></div>
          <div className="h-full flex-1 bg-[#f9f7f1]"></div>
        </div>
      </div>
    </div>
  );
}