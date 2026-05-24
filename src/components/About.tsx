import { Home, Users, Building2, Factory, ShieldAlert, Award } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const sectors = [
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: "Rumah Tangga",
      desc: "Menjaga kebersihan sanitasi perumahan dan perkampungan agar nyaman bagi keluarga."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Perkantoran",
      desc: "Layanan terjadwal berkala untuk memastikan operasional bisnis berjalan tanpa hambatan toilet."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Perusahaan & Restoran",
      desc: "Solusi higienis untuk restoran, ruko, sekolah, tempat ibadah, dan fasilitas umum."
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      title: "Industri / Pabrik",
      desc: "Penanganan limbah cair non-B3 pabrik skala besar dengan standar kepatuhan lingkungan."
    }
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block">
              TENTANG KAMI
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-950 tracking-tight leading-tight">
              Solusi Sanitasi Terpercaya di Karawang
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 rounded-full"></div>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              <strong className="text-blue-900 font-semibold">Mitra Bersih Karawang</strong> merupakan jasa sedot WC profesional yang melayani rumah tangga, perusahaan, perkantoran, dan industri dengan pelayanan cepat, aman, dan terpercaya.
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dengan berbekal pengalaman bertahun-tahun serta dukungan armada tangki vacuum modern berkapasitas besar, kami berkomitmen memberikan pelayanan prima tanpa merusak pipa atau struktur bangunan Anda. Kami selalu mengedepankan kebersihan pasca-pengerjaan agar lingkungan Anda tetap sehat dan terbebas dari bau tak sedap.
            </p>

            {/* Quick trust indicator badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-xl border border-blue-100 text-sm font-semibold">
                <Award className="w-5 h-5 text-blue-600" />
                <span>Teknisi Berlisensi</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-50 text-amber-800 px-4 py-2 rounded-xl border border-yellow-100 text-sm font-semibold">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                <span>Tanpa Bongkar Paksa</span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards/Sectors Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm w-fit mb-4 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {sector.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-blue-950 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {sector.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Micro stats banner below grid inside right column */}
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-850 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -z-10"></div>
              <div className="flex justify-between items-center text-center gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">10+</div>
                  <div className="text-xs text-slate-300 font-medium tracking-wide">Tahun Pengalaman</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">5K+</div>
                  <div className="text-xs text-slate-300 font-medium tracking-wide">Pelanggan Puas</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">15+</div>
                  <div className="text-xs text-slate-300 font-medium tracking-wide">Armada Siaga</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
