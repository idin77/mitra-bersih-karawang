import { useState } from "react";
import { MapPin, CheckCircle, Navigation, Search, Check, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const primaryAreas = [
    {
      name: "Karawang Barat",
      category: "Kecamatan Utama",
      highlight: "Kantor Pusat / Respon < 1 Jam",
      suburbs: "Nagasari, Karangpawitan, Adiarsa Barat, Tanjungmekar, Tanjungpura, Tunggilis",
      delivery: "Gratis Ongkir Transportasi Serta Kunjungan",
      response: "15 - 30 Menit Layanan Kilat",
      link: "/karawang-barat",
      lat: -6.311, lng: 107.295
    },
    {
      name: "Karawang Timur",
      category: "Kecamatan Utama",
      highlight: "Respon Cepat < 1 Jam",
      suburbs: "Adiarsa Timur, Karawang Wetan, Plawad, Kondangjaya, Tegalsawah, Margasari",
      delivery: "Gratis Ongkir Transportasi Serta Kunjungan",
      response: "20 - 45 Menit",
      link: "/karawang-timur",
      lat: -6.321, lng: 107.310
    },
    {
      name: "Telukjambe Timur",
      category: "Kecamatan Utama",
      highlight: "Kawasan Siaga Utama",
      suburbs: "Galuh Mas, Sukaluyu, Sirnabakti, Sukaharja, Pinayungan, Wadas, Telukjambe",
      delivery: "Gratis Ongkir Transportasi Serta Kunjungan",
      response: "15 - 35 Menit",
      link: "/telukjambe-timur",
      lat: -6.322, lng: 107.288
    },
    {
      name: "Telukjambe Barat",
      category: "Kecamatan Utama",
      highlight: "Kawasan Industri Terintegrasi",
      suburbs: "KIIC, Wanamulya, Parungsari, Margamulya, Karangmulya, Karangligar",
      delivery: "Gratis Ongkir Transportasi / Khusus Industri & Pabrik",
      response: "30 - 50 Menit",
      link: "/telukjambe-barat",
      lat: -6.331, lng: 107.265
    },
    {
      name: "Klari",
      category: "Kecamatan Utama",
      highlight: "Armada Pos Siaga",
      suburbs: "Duren, Kosambi, Pancawati, Gintungkerta, Curug, Cimahi, Walahar, Majalaya",
      delivery: "Gratis Ongkir Transportasi Serta Kunjungan",
      response: "25 - 45 Menit",
      link: "/klari",
      lat: -6.345, lng: 107.350
    },
    {
      name: "Cikampek",
      category: "Kecamatan Utama",
      highlight: "Cabang Khusus Cikampek",
      suburbs: "Cikampek Kota, Cikampek Pusaka, Dawuan Barat, Dawuan Timur, Kamojing, Jatisari",
      delivery: "Gratis Ongkir Transportasi Serta Kunjungan",
      response: "30 - 55 Menit",
      link: "/cikampek",
      lat: -6.405, lng: 107.450
    },
    {
      name: "Purwakarta Kota",
      category: "Kecamatan Utama",
      highlight: "Pos Cabang Utama Purwakarta",
      suburbs: "Sadang, Nagrikaler, Nagriwetan, Cipaisan, Sindangkasih, Jatiluhur, Babakancikao",
      delivery: "Bebas Biaya Transportasi Wilayah Jangkauan",
      response: "35 - 55 Menit",
      lat: -6.550, lng: 107.445
    },
    {
      name: "Kotabaru & Purwasari",
      category: "Kecamatan Utama",
      highlight: "Jalur Penghubung Karawang - Cikampek",
      suburbs: "Pangulah, Purwasari, Sukasari, Tamelang, Sukaseuri, Jariwangi",
      delivery: "Bebas Biaya Kunjungan Tim Lapangan",
      response: "30 - 50 Menit",
      lat: -6.380, lng: 107.380
    },
    {
      name: "Kawasan Industri Karawang",
      category: "Industri",
      highlight: "Spesialis Limbah STP & Lemak",
      suburbs: "Kawasan KIIC, KIM, Suryacipta, Kujang Cikampek, Indotaisei, Artha Industrial",
      delivery: "Gratis Transportasi, Siap Kontrak Kerja Sama",
      response: "Sesuai Jadwal Booking / Prioritas Khusus",
      lat: -6.350, lng: 107.280
    },
    {
      name: "Surrounding Areas (Pesisir & Selatan)",
      category: "Umum",
      highlight: "Area Terjauh - Tetap Terlayani",
      suburbs: "Rengasdengklok, Tempuran, Cilamaya, Pangkalan, Kutawaluya, Rawamerta, Pedes, Batujaya, Pakisjaya",
      delivery: "Surcharge Jarak Terjangkau Maks. 50rb",
      response: "Sesuai Jadwal Booking (Pagi / Sore)",
      lat: -6.200, lng: 107.350
    }
  ];

export default function ServiceAreas() {
  const [searchQuery, setSearchQuery] = useState("");

  const benefits = [
    "Bebas Biaya Transportasi Tambahan untuk Seluruh Area Utama Karawang & Purwakarta Kota",
    "Armada Siaga disebar di 5 Posko Kecamatan Utama agar cepat sampai di lokasi rumah Anda",
    "Uji kelayakan penyedotan sebelum membongkar, ditarik bersih tuntas menggunakan mesin vacuum modern",
    "Pengerjaan higienis dengan sistem penutupan lubang yang rapat, anti bocor & bergaransi selama 1 bulan"
  ];

  // Search filter
  const filteredAreas = primaryAreas.filter((area) => {
    const term = searchQuery.toLowerCase();
    return (
      area.name.toLowerCase().includes(term) ||
      area.suburbs.toLowerCase().includes(term) ||
      area.highlight.toLowerCase().includes(term)
    );
  });

  return (
    <section id="area-layanan" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-100/10 rounded-full blur-[130px] -z-10"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-100/30 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm block">
            JANGKAUAN AREA LAYANAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
            Wilayah <a href="https://murah.sedotwckarawang.id" className="text-zinc-950 hover:text-amber-600 underline">Jasa Sedot WC Karawang</a> &amp; Purwakarta
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-base">
            Kami melayani daerah perumahan, perkampungan, kost-an, ruko, restoran, mall, gedung instansi pemerintah, hingga kawasan industri secara sigap 24 jam penuh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: General Info & Interactive Search Feature */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-12 lg:col-span-5 space-y-8"
          >
            {/* Header Description */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-zinc-950 text-2xl">
                Cek Ketersediaan Area Terdekat Anda
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Ketik nama kecamatan atau perumahan Anda di bawah ini untuk melihat perkiraan durasi perjalanan armada kami serta informasi jaminan bebas biaya transport.
              </p>
            </div>

            {/* Interactive Search Tool */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Ketik lokasi Anda (misal: Galuh Mas, Klari, Sadang...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                />
              </div>

              {/* Real-time search feedback status */}
              <div className="text-xs">
                {searchQuery === "" ? (
                  <p className="text-slate-450 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Menunjukkan semua 10 area layanan terdekat.
                  </p>
                ) : filteredAreas.length > 0 ? (
                  <p className="text-emerald-600 font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Ditemukan {filteredAreas.length} area terdaftar sebagai Zona Sigap Terlayani.
                  </p>
                ) : (
                  <p className="text-rose-500 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Area tidak spesifik dalam daftar, tetap hubungi CS untuk verifikasi manual.
                  </p>
                )}
              </div>
            </div>

            {/* Benefit Checkpoints list */}
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wider">
                Keutamaan Pelayanan Wilayah:
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-slate-600">
                    <div className="mt-0.5 text-emerald-600 shrink-0">
                      <CheckCircle className="w-4.5 h-4.5" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Call to action banner */}
            <div>
              <div className="bg-amber-400 text-zinc-950 p-6 rounded-3xl flex items-center space-x-4 shadow-lg border border-amber-300">
                <Navigation className="w-10 h-10 shrink-0 fill-current animate-bounce text-zinc-950" />
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base leading-snug">
                    Hubungi WhatsApp Support
                  </h4>
                  <p className="text-xs font-semibold text-zinc-900 mt-1 leading-snug">
                    Armada kami tersebar di lapangan. Tanya lokasi armada terdekat dari tempat Anda gratis!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Render dynamically filtered Area Cards */}
          <div className="lg:col-span-7 h-[680px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
            <AnimatePresence mode="popLayout">
              {filteredAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all group relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-zinc-100 text-amber-500 p-2.5 rounded-xl group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all shrink-0">
                        <MapPin className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-lg text-zinc-950">
                          {area.name}
                        </h3>
                        <span className="text-[10px] font-extrabold uppercase text-amber-600 tracking-wide">
                          {area.highlight}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-center border border-emerald-100 text-center">
                      ⏱ Est: {area.response}
                    </div>
                  </div>
                  
                  <div className="space-y-2 border-t border-slate-50 pt-3">
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-slate-700 font-semibold mb-1 block">Kelurahan/Sub-area Terlayani:</strong>
                      {area.suburbs}
                      {(area as any).link && (
                        <span className="block mt-2">
                          <a href={(area as any).link} className="text-amber-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                            Jasa Sedot WC Cikampek 24 Jam
                          </a>
                        </span>
                      )}
                    </p>
                    <div className="text-[11px] font-bold text-amber-600 bg-amber-50/70 inline-block px-2.5 py-1 rounded-lg">
                      🛡️ {area.delivery}
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredAreas.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 bg-white rounded-3xl border border-slate-100 p-8 space-y-4"
                >
                  <AlertCircle className="w-12 h-12 text-slate-400 mx-auto" />
                  <h4 className="font-display font-extrabold text-lg text-zinc-950">Area Tidak Ditemukan</h4>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Kecamatan atau wilayah tersebut tidak ada di daftar jangkauan utama. Tapi jangan khawatir! Kami menjangkau seluruh kelurahan di kawasan Karawang dan Purwakarta. Silakan komunikasikan lewat chat WhatsApp.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
