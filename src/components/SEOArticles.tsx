import { useState } from "react";
import { BookOpen, AlertCircle, HeartPulse, Sparkles, AlertTriangle, ChevronRight, CornerDownRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SEOArticles() {
  const [activeArticle, setActiveArticle] = useState(0);

  const articles = [
    {
      title: "Penyebab Septic Tank Cepat Penuh & Solusinya",
      short: "Mengapa pembuangan kotoran sering penuh meski baru disedot? Pahami penyebab dasarnya di sini.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      tag: "Tips & Edukasi",
      readTime: "4 Menit Baca",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Banyak pemilik rumah mengeluhkan septic tank yang cepat penuh dalam hitungan bulan, padahal kapasitasnya tergolong besar. Hal ini biasanya tidak disebabkan oleh volume penggunaan saja, melainkan beberapa faktor teknis berikut:
          </p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span>
                <strong>Masuknya Air Hujan / Resapan Air Tanah:</strong> Bila dinding septic tank retak atau tidak disemen dengan kedap air (waterproofing), air dari dalam tanah atau rembesan got luar dapat merembes ke dalam tangki, membuat volume air penuh seketika.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span>
                <strong>Hilangnya Bakteri Pengurai Alami:</strong> Bakteri pengurai berfungsi mengubah limbah padat menjadi cair agar mudah meresap ke dalam tanah. Kebiasaan membuang bahan kimia keras seperti pemutih, detergen pekat, atau pembersih karbol ke lubang kloset dapat mematikan bakteri menguntungkan ini.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span>
                <strong>Sumbatan Sampah Non-Organik:</strong> Menaruh tisu basah, pembalut, puntung rokok, atau sachet sampo ke dalam kloset akan menyumbat pipa penyalur dan tidak bisa diurai, mempercepat penumpukan limbah padat.
              </span>
            </li>
          </ul>
          <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl text-blue-950 font-medium">
            💡 <strong>Solusi Jitu:</strong> Lakukan penyedotan lumpur tinja secara berkala setiap 1-2 tahun sekali menggunakan teknologi vacuum modern dari Mitra Bersih Karawang untuk merestorasi fungsi resapan saringan air kotor Anda secara optimal!
          </p>
        </div>
      )
    },
    {
      title: "4 Tanda WC Harus Segera Disedot",
      short: "Jangan tunggu WC tersumbat total dan meluber! Kenali tanda-tanda awal septic tank penuh di rumah Anda.",
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />,
      tag: "Panduan Cepat",
      readTime: "3 Menit Baca",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Mengetahui kapan septic tank harus disedot dapat menyelamatkan Anda dari pengeluaran tidak terduga akibat pembongkaran pipa saluran atau kecelakaan sanitasi higienis di kamar mandi. Berikut tanda utamanya:
          </p>
          <ol className="space-y-3.5 pl-2 list-decimal list-inside">
            <li>
              <strong className="text-slate-800">Aliran Air Kloset Lambat (Slow Flush):</strong> Setelah menekan tombol siram atau mengguyur kloset, air tidak langsung turun melainkan menggenang terlebih dahulu dalam waktu yang lama. Ini pertanda udara pembuangan terhalang air yang sudah penuh.
            </li>
            <li>
              <strong className="text-slate-800">Muncul Aroma Busuk Menyengat:</strong> Bau tidak sedap gas amonia dan hidrogen sulfida mulai menguar dari area lubang kloset atau sekitar halaman tempat septic tank berlokasi, mencemari kesegaran udara rumah Anda.
            </li>
            <li>
              <strong className="text-slate-800">Adanya Suara Gurgling (Glebek-Glebek):</strong> Ketika Anda menggunakan keran air kotor atau menyiram toilet, terdengar suara tarikan gelembung udara berisik dari dalam kloset karena pipa ventilasi tersumbat limbah.
            </li>
            <li>
              <strong className="text-slate-800">Tanaman di Atas Septic Tank Tumbuh Subur secara Ekstrim:</strong> Jika halaman di atas lubang pembuangan ditumbuhi rumput atau tanaman yang luar biasa hijau dibanding area sekitarnya, itu tanda limbah cair kaya nitrogen sudah merembes keluar dari celah atas penutup tangki.
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Cara Efektif Merawat Septic Tank Agar Awet",
      short: "Tips praktis menjaga daya tampung septic tank bertahan bertahun-tahun tanpa mampet berkelanjutan.",
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      tag: "Solusi Mandiri",
      readTime: "5 Menit Baca",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Melakukan perawatan sederhana sehari-hari akan memperpanjang umur septic tank dan menjaga kinerja kebersihan lingkungan pemukiman dengan sehat. Terapkan cara berikut:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
              <h4 className="font-bold text-slate-850 text-sm mb-1">✅ Yang Boleh Dilakukan:</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                <li>Siram air yang cukup setelah buang hajat</li>
                <li>Tambahkan serbuk mikroba pengurai alami secara rutin 6 bulan sekali</li>
                <li>Gunakan sabun pembersih kloset ramah lingkungan</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50/70 border border-rose-100 rounded-2xl">
              <h4 className="font-bold text-rose-950 text-sm mb-1">❌ Yang Harus Dihindari:</h4>
              <ul className="space-y-1.5 text-xs text-rose-800 list-disc list-inside">
                <li>Membuang minyak sisa masakan (lemak makanan)</li>
                <li>Membuang sampah kemasan atau sampah pembalut</li>
                <li>Menuangkan cairan asam pekat, thinner, atau soda api</li>
              </ul>
            </div>
          </div>
          <p>
            Minyak bekas menggoreng atau minyak lemak dapur tidak boleh masuk ke lubang toilet karena dapat membeku, menutupi liang-liang pori pori tanah resapan, dan membuat kerak keras yang sulit dihancurkan.
          </p>
        </div>
      )
    },
    {
      title: "Dampak Buruk Mengabaikan Septic Tank Penuh",
      short: "Mengapa membiarkan septic tank kepenuhan sangat berbahaya untuk kesehatan keluarga dan fondasi bangunan.",
      icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
      tag: "Bahaya Sanitasi",
      readTime: "4 Menit Baca",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Mengabaikan septic tank yang mendesak untuk disedot tidak hanya mengganggu kenyamanan indra penciuman, tetapi juga mengundang berbagai ancaman serius bagi keselamatan:
          </p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
              <span>
                <strong>Pencemaran Air Bersih Sumur:</strong> Bakteri berbahaya seperti <em>Escherichia coli</em> (E. coli) dan Salmonella dari tinja yang merembes berlebih dapat masuk ke dalam urat air tanah dan mencemari sumur bor terdekat dalam jarak kuras kurang dari 10 meter.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
              <span>
                <strong>Penyebaran Wabah Penyakit:</strong> Toilet meluap sangat rawan memicu penularan diare kronis, disentri, kolera, gatal-gatal kulit, serta tipes, terutama bagi anak-anak kecil yang sistem imunitas tubuhnya masih sensitif.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
              <span>
                <strong>Memicu Korosi Kerusakan Lantai:</strong> Kandungan gas dalam septic tank yang tertahan dapat merembes ke celah nat keramik bawah toilet, membuat lantai rapuh, berlumut hitam, bahkan mengeluarkan noda kuning berkarat.
              </span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="artikel-edu" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <BookOpen className="w-4.5 h-4.5" />
            ARTIKEL PENDUKUNG SEO &amp; SOLUSI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-950 tracking-tight leading-tight">
            Edukasi Sanitasi Sehat Untuk Semua
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Pelajari panduan penting seputar pemeliharaan sistem pembuangan limbah rumah tangga untuk mewujudkan tempat tinggal yang sehat, bersih dari penyakit, dan ramah lingkungan.
          </p>
        </div>

        {/* Dynamic Nav Tabs & Detail Reader layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* List of articles left column */}
          <div className="lg:col-span-5 space-y-4">
            {articles.map((article, index) => {
              const ixActive = index === activeArticle;
              return (
                <button
                  key={index}
                  onClick={() => setActiveArticle(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer flex gap-4 ${
                    ixActive
                      ? "bg-white border-blue-500/30 shadow-lg shadow-blue-500/5 translate-x-1"
                      : "bg-white/60 border-slate-150 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${ixActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {article.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">
                        {article.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">• {article.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 leading-snug group-hover:text-blue-600 text-sm sm:text-base">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {article.short}
                    </p>
                  </div>
                  
                  {ixActive && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-2 bg-blue-600 text-white p-1 rounded-full shadow-md z-10 hidden lg:block">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Article Viewer - Right column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeArticle}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {articles[activeArticle].tag}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">• Diperbarui Hari Ini (Mei 2026)</span>
                </div>

                <h3 className="font-display font-extrabold text-blue-950 text-2xl sm:text-3xl leading-snug">
                  {articles[activeArticle].title}
                </h3>
                
                <div className="w-full h-px bg-slate-100"></div>

                {articles[activeArticle].content}

              </motion.article>
            </AnimatePresence>

            {/* Micro Conversion CTA link inside article panel */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl">
              <div>
                <h4 className="font-display font-extrabold text-blue-950 text-xs sm:text-sm uppercase tracking-wider">
                  WC MAMPET ATAU SEPTIC TANK PENUH?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dapatkan estimasi biaya transparan dan garut kelancaran 100%.
                </p>
              </div>
              <a
                href="#estimasi-harga"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold px-5 py-3 rounded-xl transition-all shadow-md shadow-blue-600/10 cursor-pointer"
              >
                Hitung Estimasi &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
