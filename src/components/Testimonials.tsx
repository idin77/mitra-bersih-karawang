import { useState, useEffect } from "react";
import { Star, Quote, User } from "lucide-react";
import { motion } from "motion/react";
import { TestimonialSkeleton } from "./Skeletons";

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Ibu Rahmawati",
      location: "Telukjambe, Karawang",
      category: "Rumah Tangga",
      text: "Toilet di rumah mampet parah padahal ada acara keluarga besoknya. Untung tim Mitra Bersih Karawang merespos cepat. Pengerjaan cuma 35 menit, tanpa bongkar keramik, langsung lancar kembali. Sangat puas!",
      rating: 5,
      gender: "f"
    },
    {
      name: "Bpk. Hendra",
      location: "Klari, Karawang",
      category: "Pemilik Restoran",
      text: "Kami rutin berlangganan kuras Grease Trap (penjebak lemak) dapur restoran di sini. Pelayanan profesional, pengerjaan bersih pasca-sedot, harganya jujur transparan di awal tanpa ada biaya siluman.",
      rating: 5,
      gender: "m"
    },
    {
      name: "Ibu Siska",
      location: "Cikampek",
      category: "Pengelola Kost-Kosan",
      text: "Sudah langganan kuras septic tank besar kostan 20 kamar di Cikampek. Proses sedotan tangki vacumnya kencang sekali, selang panjang tanpa kendala. Teknisi bekerja sopan dan rapi.",
      rating: 5,
      gender: "f"
    },
    {
      name: "Bpk. Agus",
      location: "Karawang Barat",
      category: "Rumah Tangga",
      text: "Pelayanan 24 jam yang luar biasa tepercaya. Anak saya tidak sengaja membuang mainan kecil ke WC jam 10 malam sampai tersumbat. Teknisi datang 30 menit setelah dihubungi dan langsung melancarkannya. Mantap!",
      rating: 5,
      gender: "m"
    },
    {
      name: "Bpk. Mulyadi",
      location: "Kawasan KIIC Karawang",
      category: "Staff GA Perusahaan",
      text: "Kami menggunakan jasa sedot limbah cair industri non-B3 untuk pabrik kami. Perusahaan yang sangat profesional, teratur dalam penjadwalan, memiliki armada tangki vacuum yang layak jalan, dan laporan kerja lengkap.",
      rating: 5,
      gender: "m"
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
            TESTIMONI PELANGGAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Apa Kata Mereka Yang Telah Memilih Kami?
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Komentar jujur dari para pelanggan rumah tangga, bisnis, dan industri yang mengandalkan kebersihan sanitasinya kepada kami.
          </p>
        </motion.div>

        {/* Testimonials Grid Slider */}
        {isLoading ? (
          <TestimonialSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl relative flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                {/* Top Quote Icon */}
                <div className="absolute top-6 right-8 text-amber-400">
                  <Quote className="w-10 h-10 opacity-30 fill-current" />
                </div>

                <div className="space-y-4">
                  {/* Stars Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial body */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic z-10 relative">
                    "{testi.text}"
                  </p>
                </div>

                {/* User profile metadata */}
                <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-150">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-display shadow-sm ${
                    testi.gender === "f" 
                      ? "bg-rose-100 text-rose-700" 
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {testi.name.substring(0, 3)}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 text-sm sm:text-base">
                      {testi.name}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-xs text-slate-500 font-medium">
                      <span>{testi.location}</span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="text-amber-600 font-bold">{testi.category}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

        {/* Dynamic verified badge block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-emerald-50 border border-emerald-100 rounded-2xl px-6 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs font-bold border-2 border-white">R</div>
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white">H</div>
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white">S</div>
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white">A</div>
            </div>
            <p className="text-emerald-950 font-bold text-sm tracking-wide">
              Bergabung bersama 5.000+ pelanggan yang puas dengan layanan tangki sedot modern kami!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
