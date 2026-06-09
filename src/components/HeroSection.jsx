export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-18 sm:pt-32 pb-12 sm:pb-16 px-6 min-h-screen bg-warm">
      
      {/* Title */}
      <h1 className="font-baskerville text-[2.8rem] sm:text-[4rem] md:text-[4rem] leading-[0.95] tracking-[-0.02em] text-charcoal mb-10 sm:mb-14 uppercase">
        SPREAD<br />YOUR SCENT
      </h1>

      {/* Bottle Image */}
      <div className="mb-10 sm:mb-14">
        <img
          src="/images/purvo1.png"
          alt="Purvo Parfume Bottle"
          className="w-[10rem] sm:w-[13.75rem] md:w-[17.5rem] max-w-[90%] object-contain drop-shadow-sm"
        />
      </div>

      {/* CTA */}
      <button className="flex items-center gap-3 text-[0.65rem] sm:text-[0.75rem] tracking-[0.2em] uppercase text-espresso border-b border-espresso pb-1 hover:text-brown hover:border-brown transition-all duration-300 font-inter font-light group">
        <span>Find Your Scent</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

    </section>
  );
}
