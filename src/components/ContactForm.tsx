import { useState, FormEvent } from "react";
import { Calculator, Send, MessageSquare, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface ContactProps {
  whatsappNumber: string;
}

export default function ContactForm({ whatsappNumber }: ContactProps) {
  // Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    serviceType: "Sedot WC / Septic Tank",
    scheduleDate: "",
    scheduleTime: "Pagi (08:00 - 12:00)",
    additionalNotes: ""
  });

  // Calculator State
  const [calcService, setCalcService] = useState("Sedot WC / Septic Tank");
  const [calcProperty, setCalcProperty] = useState("Rumah Kecil / Sederhana");
  const [calcLocation, setCalcLocation] = useState("Karawang Kota");

  // Price ranges lookup
  const priceRanges: Record<string, Record<string, string>> = {
    "Sedot WC / Septic Tank": {
      "Rumah Kecil / Sederhana": "Rp 350.000 - Rp 450.000",
      "Kost / Rumah Mewah": "Rp 450.000 - Rp 650.000",
      "Ruko / Restoran / Rumah Makan": "Rp 650.000 - Rp 1.200.000",
      "Pabrik / Kawasan Industri": "Nego di Lokasi (Sesuai Kontrak)"
    },
    "WC Mampet": {
      "Rumah Kecil / Sederhana": "Rp 250.000 - Rp 350.000",
      "Kost / Rumah Mewah": "Rp 300.000 - Rp 450.000",
      "Ruko / Restoran / Rumah Makan": "Rp 450.000 - Rp 800.000",
      "Pabrik / Kawasan Industri": "Nego Hubungi Kami"
    },
    "Saluran Mampet": {
      "Rumah Kecil / Sederhana": "Rp 200.000 - Rp 300.000",
      "Kost / Rumah Mewah": "Rp 300.000 - Rp 400.000",
      "Ruko / Restoran / Rumah Makan": "Rp 400.000 - Rp 600.000",
      "Pabrik / Kawasan Industri": "Nego Hubungi Kami"
    },
    "Limbah Industri": {
      "Rumah Kecil / Sederhana": "Nego Hubungi Kami",
      "Kost / Rumah Mewah": "Nego Hubungi Kami",
      "Ruko / Restoran / Rumah Makan": "Nego (Sesuai Survei)",
      "Pabrik / Kawasan Industri": "Nego / Surat Perjanjian Kontrak (SPL)"
    }
  };

  const getEstimatedPrice = () => {
    try {
      return priceRanges[calcService][calcProperty] || "Hubungi Kami";
    } catch {
      return "Hubungi Kami";
    }
  };

  const servicesOpts = [
    "Sedot WC / Septic Tank",
    "WC Mampet",
    "Saluran Mampet",
    "Limbah Industri"
  ];

  const propertiesOpts = [
    "Rumah Kecil / Sederhana",
    "Kost / Rumah Mewah",
    "Ruko / Restoran / Rumah Makan",
    "Pabrik / Kawasan Industri"
  ];

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address) {
      alert("Mohon lengkapi Nama Lengkap dan Alamat Anda.");
      return;
    }

    const message = `Halo Jasa Sedot WC Mitra Bersih Karawang,\n\nSaya ingin booking layanan pengerjaan secepatnya:\n` +
      `- Nama: ${formData.name}\n` +
      `- Alamat: ${formData.address}\n` +
      `- Layanan: ${formData.serviceType}\n` +
      `- Rencana Tanggal: ${formData.scheduleDate || "Secepatnya"}\n` +
      `- Waktu Kunjungan: ${formData.scheduleTime}\n` +
      `- Catatan Tambahan: ${formData.additionalNotes || "-"}\n\nMohon kabari segera jadwal pengerjaannya, terima kasih!`;

    const rawLink = `https://wa.me/62${whatsappNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    window.open(rawLink, "_blank");
  };

  const handleCalculatorSubmit = () => {
    const message = `Halo Mitra Bersih Karawang,\n\nSaya ingin menanyakan penawaran harga berdasarkan estimasi kalkulator:\n` +
      `- Jenis Jasa: ${calcService}\n` +
      `- Tipe Properti: ${calcProperty}\n` +
      `- Wilayah: ${calcLocation}\n` +
      `- Estimasi Tarif: ${getEstimatedPrice()}\n\nApakah jadwal terdekat tersedia untuk pengerjaan ke lokasi saya?`;

    const rawLink = `https://wa.me/62${whatsappNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    window.open(rawLink, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
            HUBUNGI KAMI & ESTIMASI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Konsultasi Gratis & Booking Langsung
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Gunakan kalkulator estimasi tarif di bawah atau langsung kirimkan formulir pemesanan kunjungan tim teknisi kami di area Anda.
          </p>
        </motion.div>

        {/* Dynamic Widget Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Cost Estimator */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden border border-zinc-800"
          >
            {/* Visual glow element */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl"></div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-400 text-zinc-950 p-2 rounded-xl shadow-md">
                  <Calculator className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl">Kalkulator Estimasi Tarif</h3>
                  <p className="text-xs text-slate-300">Dapatkan transparansi prakiraan biaya rincian anda</p>
                </div>
              </div>

              <div className="h-px bg-zinc-800"></div>

              {/* Calculator Inputs */}
              <div className="space-y-4 pt-2">
                
                {/* 1. Service select */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wide">Pilih Jenis Jasa</label>
                  <select
                    className="w-full bg-zinc-900/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    value={calcService}
                    onChange={(e) => setCalcService(e.target.value)}
                  >
                    {servicesOpts.map((opt) => (
                      <option key={opt} value={opt} className="bg-zinc-950 text-white">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Property Type select */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wide">Tipe Properti / Bangunan</label>
                  <select
                    className="w-full bg-zinc-900/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    value={calcProperty}
                    onChange={(e) => setCalcProperty(e.target.value)}
                  >
                    {propertiesOpts.map((opt) => (
                      <option key={opt} value={opt} className="bg-zinc-950 text-white">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* 3. Location Input info */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wide">Pilih Wilayah Anda</label>
                  <select
                    className="w-full bg-zinc-900/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    value={calcLocation}
                    onChange={(e) => setCalcLocation(e.target.value)}
                  >
                    <option value="Karawang Kota" className="bg-zinc-950">Karawang Kota (Bebas Ongkir Selang)</option>
                    <option value="Telukjambe" className="bg-zinc-950">Telukjambe (Bebas Ongkir Selang)</option>
                    <option value="Klari" className="bg-zinc-950">Klari (Bebas Ongkir Selang)</option>
                    <option value="Cikampek" className="bg-zinc-950">Cikampek (Biaya Menyesuaikan)</option>
                    <option value="Purwakarta" className="bg-zinc-950">Purwakarta (Biaya Menyesuaikan)</option>
                    <option value="Lainnya" className="bg-zinc-950">Luar Wilayah Tertera</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Results output section */}
            <div className="mt-8 pt-6 border-t border-zinc-800 space-y-6">
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 text-center">
                <span className="text-xs text-slate-400 font-medium tracking-wide block">Estimasi Tarif Pengerjaan:</span>
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-300 mt-1 block">
                  {getEstimatedPrice()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-2 leading-snug">
                  *Ketentuan tarif final diputuskan oleh teknisi setelah mencermati panjang selang dan tingkat kesulitan di lokasi.
                </span>
              </div>

              <button
                id="btn-calc-wa"
                onClick={handleCalculatorSubmit}
                className="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-zinc-950 font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-zinc-950 text-amber-400" />
                <span>Konsultasi Tarif Ini Melalui WhatsApp</span>
              </button>
            </div>
            
          </motion.div>

          {/* Right Column: Reservation / Booking form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-400 p-2.5 rounded-xl text-zinc-950 font-extrabold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-zinc-950 text-xl">Formulir Booking / Jadwal</h3>
                <p className="text-xs text-slate-500">Pilih waktu kunjungan dan input detail alamat anda</p>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center">
                    Nama Lengkap <span className="text-rose-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Suwardi"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* 2. Service type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Nama Jasa Layanan
                  </label>
                  <select
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="Sedot WC / Septic Tank">Sedot WC / Septic Tank</option>
                    <option value="WC Mampet">WC Mampet (Tanpa Bongkar)</option>
                    <option value="Saluran Mampet">Saluran Air / Pipa Mampet</option>
                    <option value="Limbah Industri">Limbah Industri Non-B3 / Grease Trap</option>
                  </select>
                </div>
              </div>

              {/* 3. Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center">
                  Alamat Lengkap Lokasi <span className="text-rose-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3 text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Jl. Galuh Mas Raya No. 12, Kel. Sukaluyu, Telukjambe Timur"
                    className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 4. Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center">
                    Tanggal Rencana Kunjungan
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3 text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                      value={formData.scheduleDate}
                      onChange={(e) => setFormData({ ...formData, scheduleDate: e.target.value })}
                    />
                  </div>
                </div>

                {/* 5. Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center">
                    Rentang Waktu Pilihan
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3 text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                      value={formData.scheduleTime}
                      onChange={(e) => setFormData({ ...formData, scheduleTime: e.target.value })}
                    >
                      <option value="Pagi (08:00 - 12:00)">Pagi (08:00 - 12:00)</option>
                      <option value="Siang (12:00 - 16:00)">Siang (12:00 - 16:00)</option>
                      <option value="Sore (16:00 - 19:00)">Sore (16:00 - 19:00)</option>
                      <option value="Malam (19:00 - 24:00)">Malam / Darurat (19:00 - 24:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 6. Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Catatan Tambahan Keluhan (Opsional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Saluran toilet tersumbat benda kecil, septic tank sudah tidak dikuras 5 tahun, dll."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition resize-none"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="btn-booking-submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-600/15 transition-all flex items-center justify-center space-x-2 text-base cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Pesan Pengosongan / Kunjungan Sekarang</span>
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
