import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const quoteRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line scale in
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Quote fade up
      gsap.fromTo(
        quoteRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Link fade up
      gsap.fromTo(
        linkRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#2C1F14] px-8 sm:px-16 md:px-24 py-20 sm:py-28 text-center">
      <div ref={lineRef} className="w-[16rem] h-[0.5rem] rounded-lg bg-warm mx-auto mb-8 origin-center" />
      <p ref={quoteRef} className="font-baskerville text-[2rem] sm:text-[4rem] md:text-[5rem] leading-snug text-warm max-w-7xl mx-auto opacity-0">
        "Not every scent is meant to impress. Some are meant to be remembered."
      </p>
      <a ref={linkRef} href="#scents" className="inline-block mt-8 text-[0.65rem] tracking-[0.2em] uppercase text-warm/50 hover:text-warm transition-colors duration-500 font-inter font-light opacity-0">
        Find yours →
      </a>
    </section>
  );
}
