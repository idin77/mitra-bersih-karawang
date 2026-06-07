import { useState } from "react";
import { Droplet, Wrench, Settings, Factory, Check, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesProps {
  whatsappNumber: string;
}

export default function Services({ whatsappNumber, location = "Karawang" }: { whatsappNumber: string; location?: string }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Droplet className="w-8 h-8" />,
      title: "Sedot WC / Septic Tank",
      shortDesc: "Kuras septic tank penuh secara berkala guna mencegah pencemaran udara dan air tanah.",
      priceStart: "Harga Mulai Dari Rp 350RB-an",
      points: [
        "Pengosongan septic tank hingga bersih tuntas",
        "Pemberisihan lumpur mengendap (Kuras Lumpur)",
        "Penyemprotan disinfektan anti bakteri dan bau",
        "Pemeriksaan kualitas pipa masuk & ventilasi",
        "Ramah lingkungan - langsung dibuang ke IPLT resmi"
      ],
      whatsappText: `Halo Mitra Bersih ${location}, saya ingin memesan layanan Sedot WC / Septic Tank.`
    },
    {
      id: 1,
      icon: <Wrench className="w-8 h-8" />,
      title: "WC Mampet",
      shortDesc: "Pembersihan sumbatan toilet dengan cepat tanpa harus melakukan pembongkaran lantai / pipa.",
      priceStart: "Harga Mulai Dari Rp 250RB-an",
      points: [
        "Metode pengerjaan modern tanpa bongkar paksa",
        "Menghilangkan sumbatan tisu, mainan, pembalut, dll.",
        "Menggunakan mesin spiral/rifid khusus yang aman",
        "Waktu pengerjaan singkat (rata-rata 30-45 menit)",
        "Bergaransi lancar kembali sebelum teknisi pulang"
      ],
      whatsappText: `Halo Mitra Bersih ${location}, saya ingin memesan layanan pelancaran WC Mampet.`
    },
    {
      id: 2,
      icon: <Settings className="w-8 h-8" />,
      title: "Saluran Mampet",
      shortDesc: "Pelancaran wastafel, cuci pirang, pembuangan kamar mandi, talang air, dan pipa air kotor.",
      priceStart: "Harga Mulai Dari Rp 200RB-an",
      points: [
        "Pelancaran saluran wastafel dapur tersumbat lemak",
        "Mengatasi pipa kamar mandi mampet akibat rambut/sabun",
        "Pembersihan pipa paralon mampet dengan rotari mekanis",
        "Pembersihan kotoran kerak lemak dengan tekanan tinggi",
        "Menjamin aliran kembali lancar tanpa merusak paralon"
      ],
      whatsappText: `Halo Mitra Bersih ${location}, saya ingin memesan layanan pelancaran Saluran Mampet.`
    },
    {
      id: 3,
      icon: <Factory className="w-8 h-8" />,
      title: "Limbah Industri",
      shortDesc: "Pengangkutan dan pembuangan limbah cair non-B3 untuk restoran, hotel, perkantoran, dan pabrik.",
      priceStart: "Harga Hubungi Kami (Nego / Kontrak)",
      points: [
        "Kuras bak penampungan lemak (Grease Trap) restoran",
        "Kuras bak sedimentasi industri & limbah lumpur non-B3",
        "Dukungan armada tangki vacuum kapasitas besar premium",
        "Dokumentasi pembuangan resmi sesuai regulasi lingkungan",
        "Tersedia sistem kontrak kerja sama berkala (Bulanan/Tahunan)"
      ],
      whatsappText: `Halo Mitra Bersih ${location}, saya tertarik berkonsultasi mengenai pengolahan Limbah Industri.`
    }
  ];

  const handleServiceOrder = (encodedMsg: string) => {
    const text = encodeURIComponent(encodedMsg);
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
  };

  return (
    <section id="layanan" className="py-24 bg-slate-50/50 relative overflow-hidden">
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
            LAYANAN UTAMA KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Pelayanan Profesional dan Terpadu
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Kami melayani segala kendala kebersihan saluran pembuangan Anda dengan cepat, bersih tuntas, dan tanpa merusak instalasi.
          </p>
        </motion.div>

        {/* Tab Selection (Desktop) & Cards List (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Menu buttons column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col space-y-3 w-full"
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-4 p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeTab === index
                    ? "bg-zinc-950 border-zinc-950 shadow-lg shadow-zinc-900/15 text-white"
                    : "bg-white border-slate-100 hover:border-amber-300 text-slate-700 hover:bg-zinc-50/50"
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${
                  activeTab === index ? "bg-amber-400 text-zinc-950" : "bg-zinc-100 text-amber-600"
                }`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base sm:text-lg truncate leading-tight">
                    {service.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-1 ${
                    activeTab === index ? "text-slate-100/90" : "text-slate-400"
                  }`}>
                    {service.shortDesc}
                  </p>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Active Tab Content panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl relative min-h-[420px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Heading details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950">
                      {services[activeTab].title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm">
                      {services[activeTab].shortDesc}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-amber-100 text-amber-950 border border-amber-200 text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl">
                      {services[activeTab].priceStart}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm tracking-wide uppercase mb-4">
                    Apa Saja Yang Anda Dapatkan?
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[activeTab].points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-600">
                        <div className="mt-1 bg-emerald-500/10 text-emerald-600 p-0.5 rounded-full">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Info and CTA Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-slate-400 text-xs max-w-sm">
                    *) Estimasi harga pengerjaan dapat bervariasi tergantung volume, lokasi detail, dan tingkat kerumitan saluran di lapangan.
                  </p>
                  <button
                    onClick={() => handleServiceOrder(services[activeTab].whatsappText)}
                    className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-emerald-600/15 active:scale-95 transition-all text-sm cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Pesan Layanan Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
