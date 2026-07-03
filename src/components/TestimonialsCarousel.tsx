import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-950">Apa Kata Pelanggan Kami</h2>
        </div>

        <div className="relative h-[350px] flex items-center justify-center">
          <button onClick={() => paginate(-1)} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-slate-50"><ChevronLeft /></button>
          
          <div className="relative w-full max-w-2xl h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: number) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute w-full h-full bg-slate-50 p-8 rounded-3xl border flex flex-col justify-center"
              >
                <Quote className="w-10 h-10 text-amber-400 mb-4 opacity-50" />
                <p className="text-lg italic text-slate-700 mb-6">"{testimonials[currentIndex].text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                    {testimonials[currentIndex].name.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-slate-500">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={() => paginate(1)} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-slate-50"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
