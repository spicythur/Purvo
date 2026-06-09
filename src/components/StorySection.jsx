export default function StorySection() {
  return (
    <section className="relative w-full">

      {/* Full Width Image */}
      <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden">
        <img
          src="/images/purvo_moment.png"
          alt="A moment with Purvo"
          className="w-full h-full object-cover object-top"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-start pt-20 px-8 sm:px-16 md:px-24">
          
          {/* Label */}
          <p className="text-[0.6rem] sm:text-[1rem] md:text-[1.5rem]  tracking-[0.3em] text-white/60 uppercase mb-2 font-inter font-light">
            On Slowing Down
          </p>

          {/* Title */}
          <h2 className="font-baskerville text-[2.5rem] sm:text-[4rem] md:text-[7.2rem] leading-[1] text-[#D9CFC4] mb-4">
            We forgot<br />how to <em className="text-[#2C1F14] font-bold italic">stop.</em>
          </h2>

          {/* Body */}
          <div className="max-w-sm space-y-4">
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