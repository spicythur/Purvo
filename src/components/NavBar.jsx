import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Logo fade in dari atas
      tl.fromTo(
        logoRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.5
      );

      // Hamburger fade in dari atas
      tl.fromTo(
        burgerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { label: "Our Story", href: "#our-story" },
    { label: "Scents", href: "#scents" },
    { label: "Shop", href: "#shop" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Pinterest", href: "#" },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-10 py-5">
        {/* Logo */}
        <a ref={logoRef} href="/" className="relative z-[60] opacity-0">
          <img src="/images/logo.svg" alt="Purvo" className="h-6 sm:h-8 md:h-10" />
        </a>

        {/* Hamburger */}
        <button
          ref={burgerRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[60] w-12 h-5 flex flex-col justify-between cursor-pointer group opacity-0"
          aria-label="Menu"
        >
          <span
            className={`block border-2 border-[#2C1F14] rounded w-full h-px transition-all duration-500 origin-center ${
              menuOpen ? "rotate-45 translate-y-[9px]" : "group-hover:scale-x-75"
            }`}
          />
          <span
            className={`block border-2 border-[#2C1F14] rounded w-full h-px transition-all duration-500 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[9px]" : "group-hover:scale-x-75"
            }`}
          />
        </button>
      </nav>

      {/* Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-warm transition-all duration-700 ease-in-out ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-6 sm:px-10 pt-24 pb-10">
          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <div
                key={item.label}
                className="overflow-hidden"
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-baskerville text-3xl sm:text-5xl md:text-6xl text-charcoal hover:text-espresso transition-all duration-700 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${i * 80 + 200}ms` : "0ms",
                  }}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className={`flex flex-col sm:flex-row justify-between gap-8 transition-all duration-700 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? "600ms" : "0ms",
            }}
          >
            {/* Socials */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brown font-inter font-light mb-1">
                Follow Us
              </p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs tracking-[0.15em] uppercase text-espresso hover:text-charcoal transition-colors duration-300 font-inter font-light"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 justify-end">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brown font-inter font-light">
                Ready to find yours?
              </p>
              <a
                href="#shop"
                onClick={() => setMenuOpen(false)}
                className="inline-block text-xs tracking-[0.2em] uppercase text-warm bg-espresso px-8 py-3 hover:bg-charcoal transition-colors duration-300 font-inter font-light text-center"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
