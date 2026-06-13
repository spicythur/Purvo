import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const burgerRef = useRef(null);
  const switcherRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        logoRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.5
      );

      tl.fromTo(
        burgerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      );

      tl.fromTo(
        switcherRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.65
      );

      // Hide/show on scroll
      const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll.current && currentScroll > 100) {
          // Scroll down → hide
          gsap.to(navRef.current, {
            y: "-100%",
            duration: 0.4,
            ease: "power2.in",
          });
        } else {
          // Scroll up → show
          gsap.to(navRef.current, {
            y: "0%",
            duration: 0.4,
            ease: "power2.out",
          });
        }

        lastScroll.current = currentScroll;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, navRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { label: t("nav.ourStory"), href: "#story" },
    { label: t("nav.scents"), href: "#scents" },
    { label: t("nav.whyPurvo"), href: "#why-purvo" },
    { label: t("nav.shop"), href: "https://shopee.co.id/purvoparfume?categoryId=100630&entryPoint=ShopByPDP&itemId=28320727652", external: true },
  ];

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/lepurvoparfume/" },
    { label: "Shopee", href: "https://shopee.co.id/purvoparfume?categoryId=100630&entryPoint=ShopByPDP&itemId=28320727652" },
    { label: "Tokopedia", href: "https://tokopedia.link/shtQotQTHQb" },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-10 py-5">
        <a ref={logoRef} href="/" className="relative z-[60] opacity-0">
          <img src="/images/logo.svg" alt="Le'Purvo" className="h-6 sm:h-8 md:h-10" />
        </a>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div ref={switcherRef} className="relative z-[60] flex items-center gap-1.5 text-[0.7rem] sm:text-[0.75rem] tracking-[0.15em] uppercase font-inter opacity-0">
            <button
              onClick={() => i18n.changeLanguage("id")}
              className={`transition-colors duration-300 px-1 ${
                i18n.language.startsWith("id")
                  ? "text-charcoal font-semibold"
                  : "text-espresso/60 hover:text-espresso"
              }`}
            >
              ID
            </button>
            <span className="text-espresso/25">|</span>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`transition-colors duration-300 px-1 ${
                i18n.language.startsWith("en")
                  ? "text-charcoal font-semibold"
                  : "text-espresso/60 hover:text-espresso"
              }`}
            >
              EN
            </button>
          </div>

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
        </div>
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
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={() => !item.external && setMenuOpen(false)}
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
                {t("nav.followUs")}
              </p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs tracking-[0.15em] uppercase text-espresso hover:text-charcoal transition-colors duration-300 font-inter font-light"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 justify-end">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brown font-inter font-light">
                {t("nav.readyToFind")}
              </p>
              <a
                href="https://shopee.co.id/purvoparfume?categoryId=100630&entryPoint=ShopByPDP&itemId=28320727652"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs tracking-[0.2em] uppercase text-warm bg-espresso px-8 py-3 hover:bg-charcoal transition-colors duration-300 font-inter font-light text-center"
              >
                {t("nav.shopNow")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
