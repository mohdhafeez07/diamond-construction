import { useEffect, useRef, useState } from "react";
import { Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK =
  "https://wa.me/919742036696?text=Hi%20I%20am%20interested%20in%20Diamond%20Construction";
const TAB_WIDTH = 36;
const canDeviceHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover)").matches;

export default function FloatingQuote() {
  const [expanded, setExpanded] = useState(false);
  const [canHover, setCanHover] = useState(canDeviceHover);
  const hideTimer = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia("(hover: hover)");
    const handleChange = (event) => setCanHover(event.matches);

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(hideTimer.current);
    };
  }, []);

  const openPanel = () => {
    clearTimeout(hideTimer.current);
    setExpanded(true);
  };

  const scheduleCollapse = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setExpanded(false);
    }, 900);
  };

  return (
    <div
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
      onMouseEnter={canHover ? openPanel : undefined}
      onMouseLeave={canHover ? scheduleCollapse : undefined}
    >
      <div
        className="flex items-center gap-2 rounded-l-2xl border border-gold/25 bg-gradient-to-br from-[#060606]/95 via-[#0b0b0b]/92 to-gold/12 text-white shadow-[0_18px_46px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{
          width: "clamp(272px, 86vw, 348px)",
          transform: expanded
            ? "translateX(0)"
            : `translateX(calc(100% - ${TAB_WIDTH}px))`,
        }}
      >
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex h-24 shrink-0 items-center justify-center rounded-l-2xl border-r border-gold/20 bg-gradient-to-b from-gold/22 to-gold/10 px-1 text-gold transition hover:from-gold/32 hover:to-gold/16 sm:h-28"
          aria-label="Toggle contact panel"
          style={{ width: `${TAB_WIDTH}px` }}
        >
          <span className="block whitespace-nowrap text-[10px] font-semibold tracking-[0.18em] -rotate-90">
            CONTACT US
          </span>
        </button>

        <div className="flex-1 py-3 pr-3 sm:pr-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs leading-snug text-white/80 sm:text-sm">
                Quick replies on WhatsApp or call us directly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Minimize quote panel"
            >
              <X size={14} />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/45 bg-[#25D366]/22 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#d9ffe9] transition hover:bg-[#25D366]/32"
            >
              <FaWhatsapp size={14} />
              WhatsApp
            </a>
            <a
              href="tel:+917619319696"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/45 bg-[#d4af37]/18 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#f1d989] transition hover:bg-[#d4af37]/28"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
