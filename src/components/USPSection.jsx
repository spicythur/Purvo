import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const usps = [
  {
    title: "Lasts Up to 8 Hours",
    description: "An extrait concentration that stays — not to make an impression, but to accompany the day.",
  },
  {
    title: "Packaging That Returns to the Earth",
    description: "Recyclable cardboard, because every small choice is a form of care.",
  },
  {
    title: "Every Scent Has a Story",
    description: "We don't design fragrances. We design moments small, personal, and entirely yours.",
  },
];

export default function USPSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade up
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // USP cards staggered fade up
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.2 + 0.3,
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
    <section ref={sectionRef} id="why-purvo" className="bg-warm px-8 sm:px-16 md:px-24 py-20 sm:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left */}
        <div ref={headingRef} className="opacity-0">
          <p className="text-[0.8rem] sm:text-[1.5rem] tracking-[1rem] text-brown uppercase mb-6 font-inter">
            Why Purvo
          </p>
          <h2 className="font-baskerville text-[4rem] sm:text-[6rem] md:text-[7.5rem] leading-[0.95] text-brown">
            Made<br />slowly.<br />
            <em className="italic text-espresso">Meant to<br />last.</em>
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-10 pt-2">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="flex gap-5 items-start pl-5 opacity-0"
            >
              <div>
                <h3 className="font-inter font-bold text-[1.2rem] sm:text-[2rem] text-[#2C1F14] mb-2">
                  {usp.title}
                </h3>
                <p className="font-inter font text-[1rem] sm:text-[1.5rem] leading-relaxed text-brown">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
