import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClosingSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [labelRef, lineRef, titleRef, subRef, ctaRef];

      elements.forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#2E1F11] px-8 sm:px-16 md:px-24 py-28 sm:py-36 flex flex-col items-center justify-center text-center overflow-hidden min-h-screen">

      {/* Watermark SVG */}
      <img
        src="/images/closingbg.svg"
        alt=""
        className="absolute w-[100%] sm:w-[120%] opacity-[1] select-none pointer-events-none"
      />

      {/* Label */}
      <p ref={labelRef} className="teks-[1rem] sm:text-[1.2rem] tracking-[0.4em] text-brown uppercase mb-6 font-inter relative z-10 opacity-0">
        Spread Your Scent
      </p>

      {/* Line */}
      <div ref={lineRef} className="w-20 sm:w-32 h-px bg-brown mb-10 relative z-10 opacity-0" />

      {/* Title */}
      <h2 ref={titleRef} className="font-baskerville italic text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] leading-[1.1] text-warm max-w-3xl mb-8 relative z-10 opacity-0">
        You don't have to<br />be strong<br />all the time.
      </h2>

      {/* Subtext */}
      <div ref={subRef} className="font-inter font-light text-[0.8rem] sm:text-[1.2rem] text-warm/40 leading-relaxed mb-12 relative z-10 opacity-0">
        <p>
          And you don't have to figure everything out today.
        </p>
        <p>
          Le'Purvo will still be here — quiet, slow, present.
        </p>
        <p className="mt-4 text-warm/30">
          <a href="#story" className="hover:text-warm transition-colors duration-300 underline underline-offset-4">Our Story</a>
          {" · "}
          <a href="#scents" className="hover:text-warm transition-colors duration-300 underline underline-offset-4">Scents</a>
          {" · "}
          <a href="#why-purvo" className="hover:text-warm transition-colors duration-300 underline underline-offset-4">Why Le'Purvo</a>
        </p>
      </div>

      {/* CTA */}
      <a
        ref={ctaRef}
        href="https://shopee.co.id/Extrait-de-parfume-Le'Purvo-parfume-30ml-i.1207563708.28320727652?extraParams=%7B%22display_model_id%22%3A168603747232%2C%22model_selection_logic%22%3A3%7D"
        target="_blank"
        rel="noreferrer"
        className="relative z-10 flex items-center gap-4 px-10 py-4 border border-warm/30 text-[0.7rem] tracking-[0.2em] uppercase text-warm font-inter font-light hover:bg-warm hover:text-espresso transition-all duration-500 group opacity-0"
      >
        <span>Spread Your Scent</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>

    </section>
  );
}
