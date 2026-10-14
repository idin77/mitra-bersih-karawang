import { BookOpen, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const articles = [
  { title: "Cara Menjaga Septic Tank agar Tidak Cepat Penuh", time: "5 min", summary: "Tips praktis untuk memperpanjang usia septic tank Anda.", content: "Jaga keawetan septic tank dengan tidak membuang sampah non-organik ke dalam toilet." },
  { title: "Pilih Bakteri Pengurai yang Tepat", time: "4 min", summary: "Memahami bakteri pengurai untuk efisiensi septic tank.", content: "Bakteri pengurai membantu mengurai limbah padat secara biologis, menjaga septic tank lebih awet." },
  { title: "Hindari Membuang Bahan Kimia", time: "3 min", summary: "Dampak buruk bahan kimia pada ekosistem septic tank.", content: "Bahan kimia keras dapat membunuh bakteri pengurai alami dan merusak struktur septic tank." },
  { title: "Bahaya Septic Tank Penuh bagi Kesehatan Keluarga", time: "6 min", summary: "Mengapa septic tank penuh harus segera diatasi.", content: "Septic tank penuh dapat menyebabkan pencemaran air tanah, bau tidak sedap, dan penyebaran penyakit." },
  { title: "Ciri-Ciri Septic Tank Penuh yang Perlu Anda Waspadai", time: "4 min", summary: "Kenali tanda-tanda septic tank Anda bermasalah.", content: "Ciri utamanya adalah air toilet lambat surut, bau menyengat di sekitar area pembuangan, dan suara gemuruh di pipa." },
  { title: "Manfaat Melakukan Sedot WC Secara Rutin di Karawang", time: "5 min", summary: "Keuntungan perawatan rutin untuk sanitasi rumah.", content: "Perawatan rutin mencegah penyumbatan dan menjaga kesehatan lingkungan rumah Anda di Karawang." },
  { title: "Jasa Sedot WC Karawang Profesional", time: "7 min", summary: "Panduan memilih layanan sanitasi terpercaya di Karawang.", content: "Pilihlah jasa sedot WC profesional dengan armada terawat dan teknisi berpengalaman." },
  { title: "Penyebab Septic Tank Cepat Penuh & Solusinya", time: "6 min", summary: "Analisis penyebab dan langkah solutifnya.", content: "Seringkali disebabkan oleh konstruksi yang salah, kapasitas terlalu kecil, atau membuang benda padat." },
  { title: "4 Tanda WC Harus Segera Disedot", time: "3 min", summary: "Tanda-tanda darurat septic tank perlu disedot.", content: "1. Air toilet meluap. 2. Bau tak sedap. 3. Air toilet lambat surut. 4. Pertumbuhan rumput subur di atas septic tank." },
  { title: "Cara Efektif Merawat Septic Tank Agar Awet", time: "5 min", summary: "Panduan lengkap perawatan septic tank.", content: "Gunakan bakteri pengurai secara berkala dan pastikan ventilasi udara septic tank tidak tersumbat." },
  { title: "Dampak Buruk Mengabaikan Septic Tank Penuh", time: "5 min", summary: "Risiko mengabaikan kondisi sanitasi.", content: "Selain bau, septic tank penuh dapat menyebabkan luapan limbah yang sangat berbahaya bagi kesehatan." },
  { title: "Mengenal Jenis-Jenis Septic Tank dan Perawatannya", time: "8 min", summary: "Edukasi jenis septic tank modern dan lama.", content: "Perawatan septic tank konvensional dan modern (seperti Bio-Septic Tank) memiliki teknik berbeda." },
  { title: "Tips Menjaga Kebersihan Rumah Selama Musim Hujan", time: "4 min", summary: "Menjaga kebersihan di tengah curah hujan tinggi.", content: "Pastikan sistem drainase lancar dan septic tank terlindungi dari rembesan air hujan." },
  { title: "Pentingnya Jasa Cuci Sofa Profesional untuk Kesehatan", time: "5 min", summary: "Mengapa cuci sofa penting bagi kesehatan.", content: "Cuci sofa secara berkala menghilangkan tungau, debu, dan bakteri penyebab alergi." },
  { title: "5 Tanda Septic Tank Penuh yang Harus Anda Ketahui", time: "4 min", summary: "Ringkasan tanda septic tank penuh.", content: "Penyumbatan total, bau yang menyebar, air limbah balik ke rumah, dll." },
  { title: "Jasa Sedot WC Karawang Murah dan Bergaransi", time: "6 min", summary: "Solusi sanitasi tuntas dengan harga bersaing.", content: "Kami menyediakan layanan sedot WC tuntas dengan jaminan garansi kepuasan." },
  { title: "Mengapa Harus Memilih Jasa Sedot WC Karawang Kami?", time: "5 min", summary: "Keunggulan layanan profesional kami.", content: "Kami memiliki tim terlatih, peralatan canggih, dan komitmen layanan pelanggan terbaik." },
  { title: "Daftar Harga Jasa Sedot WC Karawang Terbaru", time: "4 min", summary: "Transparansi harga layanan kami.", content: "Harga layanan kami transparan dan disesuaikan dengan volume serta jenis pekerjaan." },
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
