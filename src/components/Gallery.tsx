import { useState, useEffect } from "react";
import { Camera, Eye, HelpCircle, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GallerySkeleton } from "./Skeletons";
import { LazyImage } from "./LazyImage";
import armadaTangki from "../assets/images/armada_karawang_asli_1779610538314.png";
import prosesSedot1 from "../assets/images/galeri_sedot_wc_1_1779611152423.png";
import trukVacuum from "../assets/images/galeri_sedot_wc_2_1779611175502.png";
import teknisiLapangan from "../assets/images/armada_sedot_wc_1779609893526.png";

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Armada Tangki Siaga Karawang",
      category: "Armada",
      image: armadaTangki,
      description: "Tangki vacuum Mitsubishi Fuso berkapasitas besar berpadu dengan selang hisap premium."
    },
    {
      id: 2,
      title: "Proses Penyedotan Septic Tank",
      category: "Proses Kerja",
      image: prosesSedot1,
      description: "Teknisi profesional kami sedang mengoperasikan selang hisap ke lubang septic tank secara steril."
    },
    {
      id: 3,
      title: "Barisan Truk Vacuum Siap Meluncur",
      category: "Armada",
      image: trukVacuum,
      description: "Dukungan armada tangki kuning dan orange modern milik Mitra Bersih Karawang."
    },
    {
      id: 4,
      title: "Teknisi Lapangan Berpengalaman",
      category: "Proses Kerja",
      image: teknisiLapangan,
      description: "Uji kelayakan peralatan berkala sebelum dikirim langsung menuju pemukiman warga."
    },
    {
      id: 5,
      title: "Pelancaran Saluran Industri",
      category: "Industri",
      image: prosesSedot1, // reusing high-quality realistic image
      description: "Pembersihan kerak lemak membandel untuk grease trap restoran besar & pabrik industri."
    },
    {
      id: 6,
      title: "Pembersihan Septic Tank Tuntas",
      category: "Proses Kerja",
      image: armadaTangki, // reusing high-quality core truck image
      description: "Pekerjaan rapi tanpa kotoran tercecer dan disemprot disinfektan pembasmi kuman pasca sedot."
    }
  ];

  const categories = ["Semua", "Armada", "Proses Kerja", "Industri"];

  const filteredItems = activeFilter === "Semua"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="galeri" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            GALERI DOKUMENTASI KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Dokumentasi Kerja Nyata Di Lapangan
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Kami menampilkan dokumentasi asli armada tangki vacuum dan proses pekerjaan nyata dari teknisi kami demi membuktikan transparansi dan profesionalitas.
          </p>
        </motion.div>

        {/* Filters Selectors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-zinc-950 text-white shadow-lg shadow-zinc-950/15"
                  : "bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        {isLoading ? (
          <GallerySkeleton />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group relative bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Photo container */}
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                      {/* Category Pill Tag */}
                    <span className="absolute top-4 left-4 bg-amber-400 text-zinc-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                      {item.category}
                    </span>
                    
                    {/* Hover action button */}
                    <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedPhoto(index)}
                        className="bg-white text-zinc-950 p-3.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                        title="Perbesar Gambar"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Info Content Box */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-zinc-950 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Action buttons Top right */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-colors z-20 cursor-pointer"
                  title="Tutup Preview"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero image preview */}
                <div className="relative aspect-video max-h-[60vh] bg-black flex items-center justify-center">
                  <img
                    src={filteredItems[selectedPhoto].image}
                    alt={filteredItems[selectedPhoto].title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Footer preview metatags */}
                <div className="p-6 bg-slate-900 border-t border-slate-850">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-amber-400/10 px-2.5 py-0.5 rounded-full">
                          {filteredItems[selectedPhoto].category}
                        </span>
                        <span className="text-xs text-slate-500">• Foto Asli Lapangan</span>
                      </div>
                      <h3 className="font-display font-extrabold text-white text-xl">
                        {filteredItems[selectedPhoto].title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        {filteredItems[selectedPhoto].description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0 bg-zinc-800/40 border border-zinc-700/20 px-4 py-3 rounded-2xl">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div className="text-left">
                        <h4 className="text-white text-xs font-bold leading-none">Mitra Bersih</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5 leading-none">Garansi Profesional</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
