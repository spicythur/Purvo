import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade up on scroll
      const elements = [labelRef.current, titleRef.current, bodyRef.current];

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
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
    <section ref={sectionRef} id="story" className="relative w-full h-full">

      {/* Full Width Image */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/images/purvo_moment.png"
          alt="A moment with Purvo"
          className="w-full h-full object-cover object-center"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start sm:justify-center sm:items-start text-start sm:text-left pt-15 px-8 sm:px-16 md:px-24">

          {/* Label */}
          <p
            ref={labelRef}
            className="text-[0.6rem] sm:text-[1rem] md:text-[1.5rem] tracking-[0.3em] text-white/60 uppercase mb-2 font-inter font-light opacity-0"
          >
            On Slowing Down
          </p>

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-baskerville text-[2.5rem] sm:text-[4rem] md:text-[7.2rem] leading-[1] text-[#D9CFC4] mb-4 opacity-0"
          >
            We forgot<br />how to <em className="text-[#2C1F14] font-bold italic">stop.</em>
          </h2>

          {/* Body */}
          <div ref={bodyRef} className="max-w-sm space-y-4 opacity-0">
            <p className="text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] leading-relaxed text-white/80 font-inter">
              Somewhere between the morning alarm and the last scroll before sleep, we stopped checking in with ourselves. Not because we didn't want to but because nothing around us asked us to.
            </p>
            <p className="text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] leading-relaxed text-white/80 font-inter">
              Purvo was born in that overlooked space. The space between one thing and the next. The space that, when given attention, becomes the most honest place you'll visit all day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
