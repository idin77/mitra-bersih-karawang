import { MapPin, CheckCircle, Navigation } from "lucide-react";
import { motion } from "motion/react";

export default function ServiceAreas() {
  const primaryAreas = [
    {
      name: "Karawang Kota",
      suburbs: "Karawang Barat, Karawang Timur, Adiarsa, Nagasari, Galuh Mas, Johar",
      highlight: "Hub Utama"
    },
    {
      name: "Telukjambe",
      suburbs: "Telukjambe Timur, Telukjambe Barat, KIIC, Perumnas, WADAS, Sukaluyu",
      highlight: "Siaga Armada"
    },
    {
      name: "Klari",
      suburbs: "Klari, Kosambi, Majalaya, Curug, Pancawati, Gintungkerta",
      highlight: "Respon Kilat"
    },
    {
      name: "Cikampek",
      suburbs: "Cikampek Kota, Kotabaru, Dawuan, Jatisari, Purwasari, Cikampek Pusaka",
      highlight: "Siaga Armada"
    },
    {
      name: "Purwakarta",
      suburbs: "Purwakarta Kota, Campaka, Sadang, Jatiluhur, Babakancikao, Cibatu",
      highlight: "Cabang Siaga"
    },
    {
      name: "Surrounding Areas",
      suburbs: "Rengasdengklok, Tempuran, Cilamaya, Pangkalan, Kutawaluya, Rawamerta",
      highlight: "Batas Layanan"
    }
  ];

  const benefits = [
    "Bebas Biaya Transportasi Tambahan untuk Area Utama",
    "Armada Siaga Tersebar di Masing-Masing Pos Cabang",
    "Kunjungan Survey Pelokasian Tangki atau Saluran Gratis",
    "Est. Tim Sampai di Lokasi Sesuai Jadwal Janji Temu"
  ];

  return (
    <section id="area-layanan" className="py-24 bg-brand-blue-50/50 relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block">
              JANGKAUAN LAYANAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-950 tracking-tight leading-tight">
              Melayani Seluruh Area Karawang & Purwakarta
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 rounded-full"></div>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Kami berkomitmen menjangkau setiap wilayah dengan cepat dan efisien. Di setiap pos kecamatan utama, telah bersiaga armada tangki vacuum kami untuk mempercepat pengerjaan sesaat setelah pesanan terkonfirmasi.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wider">
                Ketentuan Layanan Wilayah:
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-slate-600">
                    <div className="mt-0.5 text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <div className="bg-amber-400 text-blue-950 p-5 rounded-2xl flex items-center space-x-4 shadow-lg border border-amber-300">
                <Navigation className="w-10 h-10 shrink-0 fill-current animate-bounce" />
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base">Mencari area spesifik Anda?</h4>
                  <p className="text-xs font-semibold text-blue-900 mt-0.5">Hubungi customer service kami jika wilayah Anda belum tertera</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Areas Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {primaryAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-950 px-2.5 py-1 rounded-full border border-amber-200">
                      {area.highlight}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-extrabold text-lg text-blue-950 mb-2">
                    {area.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {area.suburbs}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
