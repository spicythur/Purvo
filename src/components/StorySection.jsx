import { useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const { t } = useTranslation();
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
          alt={t("story.imageAlt")}
          className="w-full h-full object-cover object-center"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start sm:justify-center sm:items-start text-start sm:text-left pt-15 px-8 sm:px-16 md:px-24">

          {/* Label */}
          <p
            ref={labelRef}
            className="text-[0.6rem] sm:text-[1rem] md:text-[1.5rem] tracking-[0.3em] text-white/60 uppercase mb-2 font-inter font-light opacity-0"
          >
            {t("story.label")}
          </p>

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-baskerville text-[2.5rem] sm:text-[4rem] md:text-[7.2rem] leading-[1] text-[#D9CFC4] mb-4 opacity-0"
          >
            <Trans i18nKey="story.title" components={{ 1: <em className="text-[#2C1F14] font-bold italic" /> }} />
          </h2>

          {/* Body */}
          <div ref={bodyRef} className="max-w-sm space-y-4 opacity-0">
            <p className="text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] leading-relaxed text-white/80 font-inter">
              {t("story.body1")}
            </p>
            <p className="text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] leading-relaxed text-white/80 font-inter">
              {t("story.body2")}{" "}
              <a href="#scents" className="underline underline-offset-4 hover:text-white transition-colors duration-300">
                {t("story.discoverLink")}
              </a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
