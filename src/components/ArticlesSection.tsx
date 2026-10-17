import { BookOpen, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const articles = [
  { title: "Cara Menjaga Septic Tank agar Tidak Cepat Penuh", time: "5 min", summary: "Tips praktis untuk memperpanjang usia septic tank Anda." },
  { title: "Pilih Bakteri Pengurai yang Tepat", time: "4 min", summary: "Memahami bakteri pengurai untuk efisiensi septic tank." },
  { title: "Hindari Membuang Bahan Kimia", time: "3 min", summary: "Dampak buruk bahan kimia pada ekosistem septic tank." },
  { title: "Bahaya Septic Tank Penuh bagi Kesehatan Keluarga", time: "6 min", summary: "Mengapa septic tank penuh harus segera diatasi." },
  { title: "Ciri-Ciri Septic Tank Penuh yang Perlu Anda Waspadai", time: "4 min", summary: "Kenali tanda-tanda septic tank Anda bermasalah." },
  { title: "Manfaat Melakukan Sedot WC Secara Rutin di Karawang", time: "5 min", summary: "Keuntungan perawatan rutin untuk sanitasi rumah." },
  { title: "Jasa Sedot WC Karawang Profesional", time: "7 min", summary: "Panduan memilih layanan sanitasi terpercaya di Karawang." },
  { title: "Penyebab Septic Tank Cepat Penuh & Solusinya", time: "6 min", summary: "Analisis penyebab dan langkah solutifnya." },
  { title: "4 Tanda WC Harus Segera Disedot", time: "3 min", summary: "Tanda-tanda darurat septic tank perlu disedot." },
  { title: "Cara Efektif Merawat Septic Tank Agar Awet", time: "5 min", summary: "Panduan lengkap perawatan septic tank." },
  { title: "Dampak Buruk Mengabaikan Septic Tank Penuh", time: "5 min", summary: "Risiko mengabaikan kondisi sanitasi." },
  { title: "Mengenal Jenis-Jenis Septic Tank dan Perawatannya", time: "8 min", summary: "Edukasi jenis septic tank modern dan lama." },
  { title: "Tips Menjaga Kebersihan Rumah Selama Musim Hujan", time: "4 min", summary: "Menjaga kebersihan di tengah curah hujan tinggi." },
  { title: "Pentingnya Jasa Cuci Sofa Profesional untuk Kesehatan", time: "5 min", summary: "Mengapa cuci sofa penting bagi kesehatan." },
  { title: "5 Tanda Septic Tank Penuh yang Harus Anda Ketahui", time: "4 min", summary: "Ringkasan tanda septic tank penuh." },
  { title: "Jasa Sedot WC Karawang Murah dan Bergaransi", time: "6 min", summary: "Solusi sanitasi tuntas dengan harga bersaing." },
  { title: "Mengapa Harus Memilih Jasa Sedot WC Karawang Kami?", time: "5 min", summary: "Keunggulan layanan profesional kami." },
  { title: "Daftar Harga Jasa Sedot WC Karawang Terbaru", time: "4 min", summary: "Transparansi harga layanan kami." },
];

export default function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Tips & Artikel Sanitasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
            >
              <div className="text-emerald-500 mb-3"><BookOpen size={24} /></div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{article.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{article.summary}</p>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {article.time} read</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(article)}
                className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:underline"
              >
                Baca Selengkapnya <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedArticle(null)}>
            <motion.div 
                className="bg-white rounded-3xl p-8 max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
            >
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
                >
                    <X size={20} />
                </button>
                <h2 className="text-2xl font-bold mb-4 pr-8">{selectedArticle.title}</h2>
                <p className="text-slate-600 mb-8">{selectedArticle.content}</p>
                <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600">
                    <MessageCircle size={20} /> Konsultasi via WhatsApp
                </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
