import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const logoUrl = "/src/assets/images/logo_mitra_bersih_1779896054697.png";

interface HeaderProps {
  whatsappNumber: string;
}

export default function Header({ whatsappNumber }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [demand, setDemand] = useState("Normal");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const levels = ["Low", "Normal", "High"];
    const interval = setInterval(() => {
      setDemand(levels[Math.floor(Math.random() * levels.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Layanan", href: "#layanan" },
    { name: "Galeri", href: "#galeri" },
    { name: "Edukasi", href: "#artikel-edu" },
    { name: "FAQ", href: "#faq" },
    { name: "Hubungi Kami", href: "#kontak" },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Halo Mitra Bersih Karawang, saya ingin berkonsultasi mengenai layanan Sedot WC / Saluran Mampet."
    );
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#beranda" className="flex items-center space-x-2.5 group">
              <div className="w-11 h-11 bg-zinc-950 p-0.5 rounded-full group-hover:scale-105 transition-transform shadow-md overflow-hidden flex items-center justify-center border border-zinc-900">
                <img 
                  src={logoUrl} 
                  alt="Logo Mitra Bersih" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display font-extrabold text-base sm:text-lg tracking-tight leading-none ${
                    isScrolled ? "text-zinc-950" : "text-white"
                  }`}
                >
                  MITRA BERSIH
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-bold font-sans tracking-widest ${
                      isScrolled ? "text-amber-500" : "text-amber-300"
                    }`}
                  >
                    KARAWANG
                  </span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                      demand === 'Low' ? 'bg-emerald-500/20 text-emerald-300' : 
                      demand === 'Normal' ? 'bg-sky-500/20 text-sky-300' : 
                      'bg-amber-500/20 text-amber-300'
                    }`}>
                    {demand}
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-7">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 after:transition-all hover:after:w-full ${
                    isScrolled
                      ? "text-zinc-700 hover:text-amber-500"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                id="btn-header-wa"
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-full shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white text-emerald-600" />
                <span>{whatsappNumber}</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu icon */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                id="btn-header-wa-mobile"
                onClick={handleWhatsAppClick}
                className="p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                title="Hubungi Via WhatsApp"
              >
                <Phone className="w-4 h-4 fill-white text-emerald-600" />
              </button>
              <button
                id="btn-hamburger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 w-full bg-white z-40 shadow-xl border-b border-slate-100 md:hidden overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-150">
                <button
                  id="btn-mobile-wa-expand"
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-white text-emerald-600" />
                  <span>WhatsApp: {whatsappNumber}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
