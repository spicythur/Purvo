import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const taglineRef = useRef(null);
  const linksRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [taglineRef, linksRef, bottomRef];

      elements.forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#E8DFD3] px-6 sm:px-16 md:px-24 pt-20 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">

      {/* Watermark Logo */}
      <img
        src="/images/logo.svg"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[40%] opacity-[0.06] select-none pointer-events-none"
      />

      {/* Big Tagline */}
      <div ref={taglineRef} className="relative z-10 text-center mb-12 sm:mb-20 opacity-0">
        <h2 className="font-baskerville italic text-[1.8rem] sm:text-[3.5rem] md:text-[5rem] leading-[1] text-espresso/30">
          Spread<br />Your Scent
        </h2>
      </div>

      {/* Links — grid on mobile, horizontal on desktop */}
      <div ref={linksRef} className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-x-8 gap-y-4 sm:gap-x-12 mb-12 sm:mb-16 text-center sm:text-left opacity-0">
        <a href="#story" className="text-[0.6rem] tracking-[0.25em] uppercase text-espresso hover:text-charcoal transition-colors duration-500 font-inter font-light">
          Our Story
        </a>
        <a href="#scents" className="text-[0.6rem] tracking-[0.25em] uppercase text-espresso hover:text-charcoal transition-colors duration-500 font-inter font-light">
          Scents
        </a>
        <a href="#why-purvo" className="text-[0.6rem] tracking-[0.25em] uppercase text-espresso hover:text-charcoal transition-colors duration-500 font-inter font-light">
          Why Purvo
        </a>
        <a
          href="https://shopee.co.id/purvoparfume?categoryId=100630&entryPoint=ShopByPDP&itemId=28320727652"
          target="_blank"
          rel="noreferrer"
          className="text-[0.6rem] tracking-[0.25em] uppercase text-espresso hover:text-charcoal transition-colors duration-500 font-inter font-light"
        >
          Shopee
        </a>
        <a
          href="https://tokopedia.link/shtQotQTHQb"
          target="_blank"
          rel="noreferrer"
          className="text-[0.6rem] tracking-[0.25em] uppercase text-espresso hover:text-charcoal transition-colors duration-500 font-inter font-light"
        >
          Tokopedia
        </a>
        <a
          href="https://www.instagram.com/lepurvoparfume/"
          target="_blank"
          rel="noreferrer"
          className="text-[0.6rem] tracking-[0.25em] uppercase text-espresso hover:text-charcoal transition-colors duration-500 font-inter font-light"
        >
          Instagram
        </a>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-espresso/20 mb-6 sm:mb-8" />

      {/* Bottom */}
      <div ref={bottomRef} className="relative z-10 flex flex-col items-center gap-2 opacity-0">
        <img src="/images/logo.svg" alt="Purvo" className="h-4 sm:h-5 opacity-60 mb-2" />
        <p className="text-[0.45rem] sm:text-[0.5rem] tracking-[0.15em] text-espresso/50 font-inter font-light">
          © 2025 Purvo Parfume. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
