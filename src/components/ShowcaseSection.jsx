import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const variants = [
  {
    name: "Oglan",
    mood: "Calm · Deep · Mysterious",
    description: "Still on the surface. Deep underneath.",
    image: "/images/Showcase.png",
    shopeeUrl: "https://shopee.co.id/Extrait-de-parfume-Le'Purvo-parfume-30ml-i.1207563708.28320727652?extraParams=%7B%22display_model_id%22%3A168603747232%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Meetha",
    mood: "Warm · Grounding · Intimate",
    description: "Warm, steady, and always home for others.",
    image: "/images/Showcase.png",
    shopeeUrl: "https://shopee.co.id/Extrait-de-parfume-Le'Purvo-parfume-30ml-i.1207563708.28320727652?extraParams=%7B%22display_model_id%22%3A168603747232%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Blume",
    mood: "Fresh · Growing · Gentle",
    description: "Still growing. Still becoming.",
    image: "/images/Showcase.png",
    shopeeUrl: "https://shopee.co.id/Extrait-de-parfume-Le'Purvo-parfume-30ml-i.1207563708.28320727652?extraParams=%7B%22display_model_id%22%3A168603747232%2C%22model_selection_logic%22%3A3%7D",
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade up
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards staggered fade up
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="scents" className="bg-warm px-8 sm:px-16 md:px-24 py-20 sm:py-28">

      {/* Header */}
      <div ref={headerRef} className="text-center mb-16 opacity-0">
        <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1.2rem] tracking-[0.35em] text-brown uppercase mb-4 font-inter">
          Three Characters. One Question.
        </p>
        <h2 className="font-baskerville text-[2.8rem] sm:text-[5rem] md:text-[7rem] leading-[1] text-espresso mb-4">
          <em className="italic text-brown">Which One</em><br />
          are you today
        </h2>
        <p className="text-[0.6rem] sm:text-[0.8rem] md:text-[1.2rem] text-charcoal/50 font-inter leading-relaxed mx-auto">
          Each Purvo variant carries a different kind of stillness.<br />
          Find the one that feels like coming home.
        </p>
      </div>

      {/* Cards - Mobile: slider, Desktop: grid */}
      <div className="flex sm:grid sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth -mx-8 px-8 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
        {variants.map((v, i) => (
          <div
            key={v.name}
            ref={(el) => (cardsRef.current[i] = el)}
            className="flex flex-col items-center sm:items-start group opacity-0 min-w-[85vw] sm:min-w-0 snap-center text-center sm:text-left"
          >
            {/* Image */}
            <div className="w-full max-w-[300px] overflow-hidden mb-5">
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Mood */}
            <p className="text-[0.6rem] tracking-[0.2em] text-brown uppercase mb-2 font-inter font-light">
              {v.mood}
            </p>

            {/* Name */}
            <h3 className="font-baskerville text-[1.8rem] text-espresso mb-3">
              {v.name}
            </h3>

            {/* Description */}
            <p className="text-[0.8rem] leading-relaxed text-charcoal/60 font-inter font-light mb-6 flex-1">
              {v.description}
            </p>

            {/* CTA */}
            <a
              href={v.shopeeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[0.65rem] tracking-[0.15em] uppercase text-espresso border-b border-espresso pb-1 w-fit hover:text-brown hover:border-brown transition-all duration-300 font-inter font-light"
            >
              Get {v.name} →
            </a>
          </div>
        ))}
      </div>

      {/* Scroll indicator - mobile only */}
      <div className="flex sm:hidden justify-center gap-2 mt-6">
        {variants.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-espresso/30" />
        ))}
      </div>
    </section>
  );
}
