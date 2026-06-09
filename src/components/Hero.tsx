import { CheckCircle2, PhoneCall, CalendarClock, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  whatsappNumber: string;
  imageSrc: string;
}

export default function Hero({ whatsappNumber, imageSrc }: HeroProps) {
  const handleWhatsAppCTA = () => {
    const text = encodeURIComponent(
      "Halo Mitra Bersih Karawang, saya ingin memesan layanan Sedot WC / Saluran Mampet sekarang."
    );
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
  };

  const checklistItems = [
    "Sedot WC / Septic Tank",
    "WC Mampet",
    "Saluran Mampet",
    "Limbah Industri",
  ];

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Image with optimized dark overlay to guarantee typography compliance and contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          title="jasa-sedot-karawang"
          alt="jasa sedot wc karawang - armada profesional mitra bersih karawang"
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info Columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-amber-400 text-zinc-950 px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase shadow-md shadow-amber-400/20"
            >
              <CalendarClock className="w-4 h-4 animate-pulse" />
              <span>Layanan 24 Jam Non-Stop</span>
            </motion.div>

            {/* Huge Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Sedot WC Karawang{" "}
                <span className="text-amber-300 block">
                  Jasa Sedot WC Murah &amp; 24 Jam
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl"
              >
                Butuh layanan <strong className="text-white font-extrabold">Sedot Septic Tank Karawang</strong> cepat? Mitra Bersih Karawang adalah solusi sigap, bersih tuntas, dan tanpa bongkar paksa. Kami siap siaga meluncur 24 jam dengan tim profesional berpengalaman dan peralatan vacuum mutakhir.
              </motion.p>
            </div>

            {/* Checklist items in 2 columns */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"
            >
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base tracking-wide text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="btn-hero-wa"
                onClick={handleWhatsAppCTA}
                className="flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-emerald-600/20 active:scale-95 transition-all text-base cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 animate-bounce" />
                <span>Hubungi WhatsApp (0858-8244-8632)</span>
              </button>

              <a
                href="#kontak"
                className="flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl border-2 border-slate-700 hover:border-white active:scale-95 transition-all text-base"
              >
                <span>Hitung Estimasi &amp; Pesan</span>
              </a>
            </motion.div>
          </div>

          {/* Dynamic Badge Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative relative-card bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center space-y-6"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-amber-400 text-zinc-950 p-3 rounded-full shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div className="pt-4">
                <h3 className="text-white font-display font-bold text-2xl">
                  Armada Siaga 24 Jam
                </h3>
                <p className="text-slate-300 text-sm mt-2">
                  Mengalami toilet penuh atau mampet tengah malam? Team kami siap meluncur kapanpun Anda butuhkan!
                </p>
              </div>

              <div className="h-px bg-zinc-800/60"></div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-extrabold text-amber-300 font-display">
                    100%
                  </div>
                  <div className="text-slate-400 text-xs uppercase font-bold tracking-wider mt-1">
                    Garansi
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-300 font-display">
                    30 Mnt
                  </div>
                  <div className="text-slate-400 text-xs uppercase font-bold tracking-wider mt-1">
                    Respon Cepat
                  </div>
                </div>
              </div>

              <a
                href="#tentang-kami"
                className="text-amber-400 hover:text-amber-300 text-sm font-semibold inline-flex items-center space-x-1 transition-colors"
              >
                <span>Pelajari Selengkapnya</span>
                <span>&rarr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-white fill-current"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
