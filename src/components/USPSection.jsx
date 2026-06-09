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
  return (
    <section className="bg-warm px-8 sm:px-16 md:px-24 py-20 sm:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left */}
        <div>
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
          {usps.map((usp) => (
            <div key={usp.title} className="flex gap-5 items-start pl-5">
              <div>
                <h3 className="font-inter font-bold text-[2rem] text-[#2C1F14] mb-2">
                  {usp.title}
                </h3>
                <p className="font-inter font text-[1.5rem] leading-relaxed text-brown">
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