import { Button } from "@/components/ui/button";
import { Menu, Instagram, Facebook, Mail, Phone, ArrowRight } from "lucide-react";
import "./_group.css";

const GREEN = "#1b3f2f";
const LIME = "#cff07c";
const ORANGE = "#f47920";
const CREAM = "#f9f7f1";

export function Kinetic() {
  return (
    <div className="w-full bg-[#f9f7f1] font-['DM_Sans'] text-[#1b3f2f]">
      <style>{`
        @keyframes bounce-wobble {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(-3deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-2px) rotate(3deg); }
        }
        .hover-wobble:hover { animation: bounce-wobble 0.5s ease-in-out infinite; }

        @keyframes drift-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        .drift { animation: drift-x 6s ease-in-out infinite; }

        @keyframes underline-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      {/* ============== HERO ============== */}
      <section id="home" className="relative w-full h-[900px] overflow-hidden bg-[#1b3f2f]">
        {/* Background video + tint */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay loop muted playsInline
            poster="/__mockup/videos/IMG-8227-poster-00001.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/__mockup/videos/IMG-8227-transcode.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1b3f2f]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b3f2f] via-transparent to-[#1b3f2f]/30" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full h-full flex flex-col">
          {/* Nav */}
          <header className="w-full px-8 py-6 flex justify-between items-center text-[#f9f7f1]">
            <img
              src="/__mockup/images/Whole-Harvest-Logo---No-Icon.svg"
              alt="Whole Harvest"
              className="h-10"
            />
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <a href="#home" className="hover:text-[#cff07c] transition-colors">Home</a>
              <a href="#mission" className="hover:text-[#cff07c] transition-colors">Mission</a>
              <a href="#services" className="hover:text-[#cff07c] transition-colors">Services</a>
              <a href="#contact" className="hover:text-[#cff07c] transition-colors">Contact</a>
              <a
                href="https://givebutter.com/agud5E"
                target="_blank" rel="noreferrer"
                className="px-5 py-2 rounded-full bg-[#cff07c] text-[#1b3f2f] font-bold hover:bg-white transition-colors"
              >
                Donate
              </a>
            </nav>
            <button className="md:hidden text-[#f9f7f1]"><Menu size={28} /></button>
          </header>

          {/* Hero main */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f9f7f1] tracking-tight leading-[1.1]">
                Helping humans, <br />
                help{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#cff07c]">humanity!</span>
                  <svg
                    className="absolute w-full h-4 -bottom-1 left-0 z-0 text-[#f47920]"
                    viewBox="0 0 100 20" preserveAspectRatio="none"
                  >
                    <path d="M0,10 Q50,20 100,5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#f9f7f1]/90 max-w-2xl mx-auto font-medium mb-8">
                Join our community-driven PLANT'D program to grow food, share knowledge, and build a sustainable future together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a href="https://givebutter.com/agud5E" target="_blank" rel="noreferrer">
                  <Button
                    size="lg"
                    className="hover-wobble bg-[#cff07c] text-[#1b3f2f] hover:bg-white text-lg font-bold px-10 py-6 rounded-full shadow-[0_0_40px_rgba(207,240,124,0.3)] border-2 border-transparent hover:border-[#cff07c] transition-all"
                  >
                    Donate Now
                  </Button>
                </a>
                <Button
                  variant="outline" size="lg"
                  className="bg-transparent border-2 border-[#f9f7f1] text-[#f9f7f1] hover:bg-[#f9f7f1] hover:text-[#1b3f2f] text-lg font-bold px-10 py-6 rounded-full transition-colors"
                >
                  Volunteer
                </Button>
              </div>
            </div>
          </main>

          {/* Bottom decorative bar */}
          <div className="h-4 w-full flex">
            <div className="h-full flex-1 bg-[#cff07c]" />
            <div className="h-full flex-1 bg-[#f47920]" />
            <div className="h-full flex-1 bg-[#f9f7f1]" />
          </div>
        </div>
      </section>

      {/* ============== OUR MEDIA ============== */}
      <section id="media" className="relative w-full bg-[#1b3f2f] text-[#f9f7f1] px-8 py-24 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#cff07c]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#f47920]/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Instagram */}
          <div className="relative">
            <div className="absolute -left-3 top-0 h-full w-1 bg-[#cff07c]" />
            <div className="pl-8">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#cff07c] font-bold mb-4">Follow Along</span>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                Our <span className="relative inline-block">
                  <span className="relative z-10">Media</span>
                  <span className="absolute left-0 right-0 -bottom-1 h-3 bg-[#f47920]/60 -z-0" />
                </span>
              </h2>
              <p className="text-lg text-[#f9f7f1]/85 mb-8 leading-relaxed">
                Stay connected with the heart of what's happening at Whole Harvest. From powerful testimonials and community outreach to behind-the-scenes moments at our latest events, you'll find it all on our Instagram. Follow along to see how lives are being impacted and how you can be a part of the story.
              </p>
              <a
                href="https://www.instagram.com/wholeharvest2025"
                target="_blank" rel="noreferrer"
                className="hover-wobble inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#cff07c] text-[#1b3f2f] font-bold hover:bg-white transition-colors"
              >
                <Instagram size={22} /> Instagram
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="relative">
            <div className="absolute -left-3 top-0 h-full w-1 bg-[#f47920]" />
            <div className="pl-8">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#f47920] font-bold mb-4">Articles & Resources</span>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                Articles <span className="text-[#cff07c]">&</span> Resources
              </h2>
              <p className="text-lg text-[#f9f7f1]/85 mb-8 leading-relaxed">
                Follow along on our Facebook page for helpful articles, thoughtful resources, and updates on what Whole Harvest is doing in the community. We'll also share photos and videos from events, conversations, and real moments along the way. It's a space to stay informed, encouraged, and connected to the heart of our mission.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-transparent border-2 border-[#f9f7f1]/40 text-[#f9f7f1]/70 font-bold cursor-not-allowed"
              >
                <Facebook size={22} /> Facebook — Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== OUR MISSION ============== */}
      <section id="mission" className="w-full bg-[#f9f7f1] text-[#1b3f2f] px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <h2 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Mission</span>
                <span
                  className="absolute left-0 right-0 -bottom-2 h-4 bg-[#cff07c] -z-0 origin-left"
                  style={{ animation: "underline-grow 1s ease-out forwards" }}
                />
              </span>
              <span className="text-[#f47920]">.</span>
            </h2>
            <span className="text-sm uppercase tracking-[0.25em] font-bold text-[#1b3f2f]/60">
              People · Food · Education
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <img
              src="/__mockup/images/Whole-Harvest-7864.jpg" alt=""
              className="w-full h-64 object-cover rounded-2xl shadow-lg drift"
              style={{ animationDelay: "0s" }}
            />
            <img
              src="/__mockup/images/Whole-Harvest-8039.jpg" alt=""
              className="w-full h-64 object-cover rounded-2xl shadow-lg drift md:translate-y-6"
              style={{ animationDelay: "1.5s" }}
            />
            <img
              src="/__mockup/images/Whole-Harvest-Image.jpg" alt=""
              className="w-full h-64 object-cover rounded-2xl shadow-lg drift"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-[#1b3f2f]/85 space-y-4 text-center">
            <p>
              In an ever-changing world, one thing has remained the same for centuries, poverty. In the same regard, there are always people to help bridge that gap. That is where Whole Harvest Company is introduced. We would like to provide quality food and educational opportunities to our fellow humans.
            </p>
            <p>
              By providing healthy natural foods, we hope to inspire people to want to begin growing their own, and then help someone else in the same way. There are families everywhere who need help, and it should be our honor as fellow humans to assist where we can.
            </p>
          </div>
        </div>
      </section>

      {/* ============== OUR SERVICES ============== */}
      <section id="services" className="w-full bg-[#cff07c] text-[#1b3f2f] px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black tracking-tight leading-none mb-12 text-center">
            Our <span className="italic">Services</span>
            <span className="text-[#f47920]">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Service cards */}
            <div className="space-y-6">
              <div className="bg-[#1b3f2f] text-[#f9f7f1] rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#cff07c] text-[#1b3f2f] flex items-center justify-center font-black">01</div>
                  <h3 className="text-2xl font-black uppercase tracking-wide">Produce Deliveries</h3>
                </div>
                <ul className="space-y-2 text-[#f9f7f1]/90 text-base leading-relaxed">
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#cff07c] shrink-0" /> Support food pantries</li>
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#cff07c] shrink-0" /> Support soup kitchens</li>
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#cff07c] shrink-0" /> Support outreach groups</li>
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#cff07c] shrink-0" /> Support locally identified individuals</li>
                </ul>
              </div>

              <div className="bg-[#f9f7f1] text-[#1b3f2f] rounded-3xl p-8 shadow-xl border-4 border-[#1b3f2f]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#f47920] text-[#f9f7f1] flex items-center justify-center font-black">02</div>
                  <h3 className="text-2xl font-black uppercase tracking-wide">Educational Assistance</h3>
                </div>
                <ul className="space-y-2 text-[#1b3f2f]/90 text-base leading-relaxed">
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#f47920] shrink-0" /> Identify possibilities</li>
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#f47920] shrink-0" /> Help create a plan</li>
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#f47920] shrink-0" /> How to maintain and build</li>
                  <li className="flex gap-3"><ArrowRight size={18} className="mt-1 text-[#f47920] shrink-0" /> How to help others</li>
                </ul>
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1b3f2f] rounded-3xl rotate-2" />
              <img
                src="/__mockup/images/Whole-Harvest-7855.jpg" alt=""
                className="relative w-full h-[520px] object-cover rounded-3xl shadow-2xl -rotate-1"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#f47920] text-[#f9f7f1] px-5 py-3 rounded-full font-black shadow-lg uppercase tracking-wide text-sm">
                In the field
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact" className="w-full bg-[#1b3f2f] text-[#f9f7f1] px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#cff07c] font-bold mb-4">Say Hello</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
              Contact <span className="text-[#cff07c]">Us</span>
              <span className="text-[#f47920]">.</span>
            </h2>
          </div>

          <form
            action="https://formsubmit.co/890a3166b21636896cfcda7d8cfffcfd"
            method="POST"
            className="bg-[#f9f7f1]/5 backdrop-blur rounded-3xl p-8 md:p-10 border border-[#f9f7f1]/15 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Name*" id="name" type="text" required />
              <Field label="Email*" id="email" type="email" required />
              <Field label="Phone" id="phone" type="tel" />
              <Field label="Company" id="company" type="text" />
            </div>
            <Field label="Message*" id="message" type="text" required textarea />

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="hover-wobble inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#cff07c] text-[#1b3f2f] font-bold text-lg hover:bg-white transition-colors shadow-[0_0_40px_rgba(207,240,124,0.25)]"
              >
                Submit <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="w-full bg-[#1b3f2f] text-[#f9f7f1] border-t border-[#f9f7f1]/10 px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <img
              src="/__mockup/images/Side-Logo.svg" alt="Whole Harvest"
              className="h-16 mb-4"
            />
            <p className="text-sm text-[#f9f7f1]/80">
              <span className="text-[#f47920]">©</span> {new Date().getFullYear()} Whole Harvest Company{" "}
              <span className="text-[#cff07c]">Non-Profit 501(c)(3)</span>
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#cff07c] font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#cff07c] transition-colors">Home</a></li>
              <li><a href="#mission" className="hover:text-[#cff07c] transition-colors">Mission</a></li>
              <li><a href="#services" className="hover:text-[#cff07c] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[#cff07c] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#f47920] font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="https://givebutter.com/agud5E" target="_blank" rel="noreferrer" className="hover:text-[#cff07c] transition-colors">Donate</a></li>
              <li><a href="https://mercyroadanderson.churchcenter.com/groups/outposts/plant-d" target="_blank" rel="noreferrer" className="hover:text-[#cff07c] transition-colors">PLANT'D</a></li>
              <li><a href="https://www.instagram.com/wholeharvest2025" target="_blank" rel="noreferrer" className="hover:text-[#cff07c] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[#f9f7f1]/50">Facebook</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label, id, type, required, textarea,
}: {
  label: string; id: string; type: string; required?: boolean; textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border-b-2 border-[#f9f7f1]/30 px-0 py-3 text-[#f9f7f1] placeholder:text-[#f9f7f1]/40 focus:outline-none focus:border-[#cff07c] transition-colors";
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.2em] font-bold text-[#f9f7f1]/70">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={id} required={required} rows={3} className={base} />
      ) : (
        <input id={id} name={id} type={type} required={required} className={base} />
      )}
    </div>
  );
}
