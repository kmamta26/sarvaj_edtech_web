import { ArrowRight, Play, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* DOT PATTERN */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* MAIN CONTENT */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-500 ${scrolled ? "pt-24" : "pt-32"
          }`}
      >
        {/* MAIN GRID */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs px-4 py-1 rounded-full bg-white/10 mb-6">
              <Check size={14} />
              Digital Solutions Partner
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Digital <br /> Excellence
            </h1>

            <p className="text-gray-300 max-w-xl mb-10">
              Sarvaj specializes in delivering cutting-edge web development,
              mobile applications, and innovative digital solutions that
              transform businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2
               bg-white text-gray-900
               w-full sm:w-auto
               px-6 py-3
               rounded-full text-sm font-semibold
               shadow-md hover:shadow-xl
               hover:bg-gray-100
               hover:-translate-y-0.5
               active:translate-y-0
               transition-all duration-200"
              >
                View Our Work <ArrowRight size={16} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2
               border border-white/30 text-white
               w-full sm:w-auto
               px-6 py-3
               rounded-full text-sm font-medium
               hover:bg-white/10
               hover:border-white/60
               hover:-translate-y-0.5
               shadow-sm hover:shadow-lg
               active:translate-y-0
               transition-all duration-200"
              >
                <Play size={14} /> How We Work
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-6 left-6 bg-white text-gray-900 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <Check size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">100% Success Rate</p>
                <p className="text-xs text-gray-600">
                  On-time delivery guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          className={`transition-all duration-500 ${scrolled ? "mt-16" : "mt-24"
            }`}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-3 text-center">
            <AlignedStat value="150+" label={["Projects", "Delivered"]} />
            <AlignedStat value="50+" label={["Happy", "Clients"]} />
            <AlignedStat value="5+" label={["Years", "Experience"]} />
          </div>
        </div>
      </div>
      <br /><br />
      <br />
      <br />

      {/* MOUSE SCROLL */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"
          }`}
      >

        <MouseScroll />
      </div>
    </section>
  );
}

/* COMPONENTS */

function MouseScroll() {
  return (
    <div className="w-6 h-10 rounded-full border border-white/40 flex items-start justify-center p-1">
      <span className="w-1 h-2 bg-white rounded-full animate-scroll" />
    </div>
  );
}

function AlignedStat({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold leading-none">
        {value}
      </span>

      <span className="mt-3 text-sm text-gray-300 leading-tight">
        {label.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </div>
  );
}
