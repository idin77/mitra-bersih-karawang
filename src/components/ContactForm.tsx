import { useState, FormEvent } from "react";
import { Calculator, Send, MessageSquare, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { StepCostEstimator } from "./StepCostEstimator";

interface ContactProps {
  whatsappNumber: string;
}

export default function ContactForm({ whatsappNumber, location = "Karawang" }: { whatsappNumber: string; location?: string }) {
  // Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    serviceType: "Sedot WC / Septic Tank",
    scheduleDate: "",
    scheduleTime: "Pagi (08:00 - 12:00)",
    additionalNotes: ""
  });


  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address) {
      alert("Mohon lengkapi Nama Lengkap dan Alamat Anda.");
      return;
    }

    const message = `Halo Jasa Sedot WC Mitra Bersih ${location},\n\nSaya ingin booking layanan pengerjaan secepatnya:\n` +
      `- Nama: ${formData.name}\n` +
      `- Alamat: ${formData.address}\n` +
      `- Layanan: ${formData.serviceType}\n` +
      `- Rencana Tanggal: ${formData.scheduleDate || "Secepatnya"}\n` +
      `- Waktu Kunjungan: ${formData.scheduleTime}\n` +
      `- Catatan Tambahan: ${formData.additionalNotes || "-"}\n\nMohon kabari segera jadwal pengerjaannya, terima kasih!`;

    const rawLink = `https://wa.me/62${whatsappNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    window.open(rawLink, "_blank");
  };

  const handleCalculatorSubmit = (data: { service: string; volume: string; location: string; price: string }) => {
    const message = `Halo Mitra Bersih ${location},\n\nSaya ingin menanyakan penawaran harga berdasarkan estimasi kalkulator:\n` +
      `- Jenis Jasa: ${data.service}\n` +
      `- Volume: ${data.volume}\n` +
      `- Wilayah: ${data.location}\n` +
      `- Estimasi Tarif: ${data.price}\n\nApakah jadwal terdekat tersedia untuk pengerjaan ke lokasi saya?`;

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
          <div className="lg:col-span-5">
            <StepCostEstimator onSendMessage={handleCalculatorSubmit} />
          </div>

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
