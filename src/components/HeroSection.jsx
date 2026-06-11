import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bottleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Title naik + fade in
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        0.3
      );

      // Bottle naik + fade in
      tl.fromTo(
        bottleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.6
      );

      // CTA naik + fade in
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.9
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center text-center pt-18 sm:pt-32 pb-12 sm:pb-16 px-6 min-h-screen bg-warm"
    >
      {/* Title */}
      <h1
        ref={titleRef}
        className="font-baskerville text-[2.8rem] sm:text-[4rem] md:text-[4rem] leading-[0.95] tracking-[-0.02em] text-charcoal mb-4 sm:mb-6 uppercase opacity-0"
      >
        SPREAD<br />YOUR SCENT
      </h1>
      <p className="text-[0.6rem] sm:text-[0.75rem] tracking-[0.25em] text-espresso/60 uppercase font-inter font-light mb-10 sm:mb-14">
        Extrait de Parfum Indonesia
      </p>

      {/* Bottle Image */}
      <div ref={bottleRef} className="mb-10 sm:mb-14 opacity-0">
        <img
          src="/images/purvo1.png"
          alt="Le'Purvo Parfume Bottle"
          className="w-[10rem] sm:w-[13.75rem] md:w-[17.5rem] max-w-[90%] object-contain drop-shadow-sm"
        />
      </div>

      {/* CTA */}
      <a
        ref={ctaRef}
        href="#scents"
        className="flex items-center gap-3 text-[0.65rem] sm:text-[0.75rem] tracking-[0.2em] uppercase text-espresso border-b border-espresso pb-1 hover:text-brown hover:border-brown transition-all duration-300 font-inter font-light group opacity-0"
      >
        <span>Find Your Scent</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </section>
  );
}
