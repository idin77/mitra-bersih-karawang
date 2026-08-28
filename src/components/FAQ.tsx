import { useState } from "react";
import { HelpCircle, ChevronRight, MessageSquareCode, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Berapa harga sedot WC di Karawang?",
      answer: "Harga jasa sedot WC murah Karawang di Mitra Bersih sangat transparan dan kompetitif. Tarif bervariasi mulai dari Rp500.000 tergantung pada ukuran volume tangki septic tank, panjang selang penarikan di lokasi, serta tingkat keparahan sumbatan. Kami menjamin bebas biaya biaya tambahan tersembunyi (free ongkos kirim armada untuk area utama Karawang)."
    },
    {
      question: "Apakah tersedia layanan 25 jam / 24 jam penuh?",
      answer: "Ya, kami menyediakan Jasa Sedot WC 24 Jam Karawang non-stop sepanjang hari, termasuk hari libur nasional dan akhir pekan. Tim teknisi siaga kami tersebar di beberapa posko utama di Karawang Barat, Karawang Timur, Klari, dan Telukjambe untuk memberikan respon kilat darurat dalam waktu kurang dari 30 menit."
    },
    {
      question: "Berapa lama proses pengerjaan sedot septic tank?",
      answer: "Rata-rata estimasi pengerjaan kuras septic tank memakan waktu sekitar 45 hingga 90 menit. Durasi ini dipengaruhi oleh letak lubang septic tank, kemudahan akses selang hisap, serta tebal sisa kerak lumpur tinja yang mengendap di dalam septic tank Anda."
    },
    {
      question: "Apakah melayani perusahaan, pabrik, atau kawasan industri?",
      answer: "Tentu saja. Mitra Bersih Karawang tidak hanya melayani rumah tinggal pribadi, melainkan juga melayani industri besar, pabrik di kawasan industri KIIC, KIM, Suryacipta, pergudangan, restoran, hotel, SPBU, perkantoran, ruko, sekolah, dan tempat ibadah. Kami juga bersertifikat resmi dan siap memberikan penawaran kontrak kerja sama jangka panjang serta invoice pajak resmi."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* FAQ Schema Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-50/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <HelpCircle className="w-4.5 h-4.5" />
            PERTANYAAN UMUM (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
            FAQ Sedot WC Karawang Terpercaya
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-500 text-sm sm:text-base">
            Temukan jawaban langsung untuk pertanyaan yang paling sering diajukan mengenai layanan jasa sedot WC murah dan kuras septic tank Karawang di bawah ini.
          </p>
        </div>

        {/* FAQ Accordion List Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/90 border-amber-300 shadow-md"
                    : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/30"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-200 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display font-bold text-base sm:text-lg text-zinc-950 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`shrink-0 p-1.5 rounded-full border transition-all ${
                      isOpen
                        ? "bg-amber-400 text-zinc-950 border-amber-400 rotate-90"
                        : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-650 text-sm sm:text-base leading-relaxed border-t border-slate-100/50">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* High Conversion Footer CTA inside FAQ */}
        <div className="mt-12 p-6 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl"></div>
          <div className="flex items-center space-x-3 text-left">
            <MessageSquareCode className="w-8 h-8 text-amber-300 shrink-0" />
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base leading-snug text-white">
                Punya Kendala Saluran Air atau Septic Tank Penuh Lainnya?
              </h4>
              <p className="text-xs text-slate-350 mt-0.5 leading-snug">
                Jangan tunggu meluap dan menyebarkan bakteri! Konsultasikan masalah septic tank kotor Anda 100% gratis sekarang.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6285882448632?text=Halo%20Mitra%20Bersih,%20saya%20ingin%20konsultasikan%20biaya%20atau%20jadwal%20sedot%20WC."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 font-bold px-6 py-3 rounded-xl shadow-md text-sm cursor-pointer transition-all hover:-translate-y-0.5"
          >
            Hubungi Admin WA 24 Jam
          </a>
        </div>

      </div>
    </section>
  );
}
