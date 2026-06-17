import { useState } from "react";
import { BookOpen, AlertCircle, HeartPulse, Sparkles, AlertTriangle, ChevronRight, CornerDownRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SEOArticles() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const articles = [
    {
      title: "Jasa Sedot WC Karawang Profesional",
      short: "Panduan lengkap memilih layanan sanitasi terpercaya, bersih tuntas, dan bergaransi resmi di seluruh wilayah Karawang.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      tag: "Rekomendasi Utama",
      readTime: "10 Menit Baca",
      content: (
        <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
          {/* SEO Header Metadata (Untuk Transparansi & Kerapian) */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-500 space-y-1.5">
            <p><strong>🎯 Fokus SEO:</strong> Peringkat Pencarian Lokal Karawang, Google Maps & Optimasi Mobile</p>
            <p><strong>📝 Meta Description:</strong> Butuh jasa sedot WC Karawang? Hubungi MITRA BERSIH KARAWANG di 085882448632. Layanan profesional, sedot septic tank murah, atasi WC mampet bergaransi, 24 jam cepat tuntas!</p>
            <p><strong>⏱️ Estimasi Panjang:</strong> ~1150 Kata — Gaya Penulisan Natural, Informatif & Persuasif</p>
          </div>

          <h1 className="text-xl sm:text-2xl font-display font-extrabold text-zinc-950 mt-4 leading-tight">
            Panduan Lengkap Memilih Jasa Sedot WC Karawang Profesional, Murah & Terpercaya
          </h1>

          <p>
            Kabupaten Karawang telah tumbuh berkembang sangat pesat. Kawasan yang dahulu tersohor sebagai "Lumbung Padi Barat" ini kini sukses bertransformasi menjadi salah satu koridor megapolitan industri terbesar di wilayah Asia Tenggara. Pesatnya industrialisasi diiringi oleh menjamurnya pembangunan perumahan, perkantoran, ruko komersial, hingga pemukiman padat penduduk seperti di kawasan <em>Telukjambe Timur, Telukjambe Barat, Klari, Kosambi, Karawang Barat, Karawang Timur, ruko-ruko komersial Galuh Mas, hingga kompleks industri KIIC dan Suryacipta</em>. Maka dari itu, pentingnya mengimbangi pertumbuhan ini dengan sanitasi serta kesehatan lingkungan yang bersih, sehat, dan bebas penyakit demi kesejahteraan bersama seluruh elemen warga lokal.
          </p>

          <p>
            Sanitasi sehat rumah tangga bermula dari pemeliharaan sistem pembuangan limbah air kotor yang baik, khususnya toilet dan septic tank. Begitu toilet di rumah Anda tersumbat, mengeluarkan suara bergelembung (gurgling) yang berisik, air siraman menggenang, atau bahkan mulai mengeluarkan polusi aroma busuk tak tertahankan, itu adalah sinyal darurat sanitasi yang tidak boleh ditawar lagi. Menunda penanganan toilet bermasalah hanya akan memperburuk situasi dan meningkatkan risiko penyakit berbahaya. Di sinilah tim ahli dari penyedia <strong className="text-amber-600">Jasa Sedot WC Karawang</strong> profesional dan resmi seperti <strong>MITRA BERSIH KARAWANG</strong> hadir memberikan respon cepat siaga 24 jam guna menormalkan fungsi jamban bersih Anda secara instan dan tanpa ribet.
          </p>

          <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 pt-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-400 rounded-full inline-block"></span>
            Mengapa WC Mampet & Septic Tank Penuh Harus Segera Disedot?
          </h2>

          <p>
            Penampung septic tank di halaman rumah kita bekerja secara senyap di dalam tanah. Kloset menyalurkan kotoran lalu bakteri membusukkan zat organik menjadi bentuk zat cair bersahabat yang kemudian meresap secara bertahap kembali masuk ke liang pori filter tanah. Namun, tumpukan lumpur tinja yang tidak bisa terurai (sludge) secara alamiah semakin lama akan mengendap mengeras di bagian lantai dasar bak penampungan. Seiring bertambahnya tahun, lapisan kerak lumpur ini kian meninggi sehingga mereduksi daya tampung aktual septic tank Anda.
          </p>

          <p>
            Jika tangki penampung sudah melebihi kapasitas maksimumnya dan diabaikan begitu saja, bersiaplah untuk menghadapi ancaman serius berikut ini:
          </p>

          <ul className="space-y-3.5 pl-3 border-l-2 border-amber-300 py-1">
            <li className="flex items-start gap-2.5 text-sm sm:text-base">
              <span className="text-amber-500 mt-1 shrink-0 font-bold">✓</span>
              <span><strong>Pencemaran Air Tanah Konsumsi:</strong> Lumpur tinja yang over-kapasitas akan merembes liar keluar melalui dinding tangki yang retak atau lubang ventilasi atas tanah. Rembesan bakteri berbahaya seperti <em>Escherichia coli</em> (E-coli) dan Salmonella berisiko fatal mencemari kualitas sumur air bor jetpump milik Anda sendiri maupun tetangga di sekitarnya.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm sm:text-base">
              <span className="text-amber-505 mt-1 shrink-0 font-bold">✓</span>
              <span><strong>Polusi Aroma Amonia Beracun:</strong> Gas asam hidrogen sulfida beraroma menyengat akan merebak memenuhi seisi rumah Anda melalui sela-sela air leher kloset, merusak kenyamanan beristirahat seluruh anggota keluarga tercinta.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm sm:text-base">
              <span className="text-amber-500 mt-1 shrink-0 font-bold">✓</span>
              <span><strong>Ancaman Wabah Penyakit Menular:</strong> Toilet kotor penyumbat limbah merupakan surga pengembangbiakan lalat hijau, kecoa, dan cacing tambang pembawa kuman penyebab muntaber kronis, infeksi kulit sensitif, demam tifoid, hingga disentri yang sangat riskan bagi kesehatan anak kecil.</span>
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 pt-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-400 rounded-full inline-block"></span>
            Layanan Terpadu & Terpercaya dari MITRA BERSIH KARAWANG
          </h2>

          <p>
            Kami mendedikasikan jasa pelancaran sanitasi lingkungan terbaik dengan komitmen kepuasan pelanggan penuh di Kabupaten Karawang dan sekitarnya. Berikut rincian portofolio pengerjaan unggulan dari tim teknis kami:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-zinc-950 text-sm sm:text-base mb-2">🚽 Sedot Septic Tank Karawang</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pengosongan lumpur padat sisa penguraian menggunakan mesin kompresor hisap modern berkekuatan tinggi tanpa merusak konstruksi dinding cor tangki. Rekomendasi wajib disedot berkala demi merestorasi penyerapan filter tanah kembali normal.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-zinc-950 text-sm sm:text-base mb-2">⚡ Atasi WC Mampet Karawang Tanpa Bongkar</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Penyumbatan kloset leher angsa akibat kertas rokok, tisu non-biodegradable, sachet pembersih, maupun sachet sampo dapat kami atasi seketika tanpa membongkar lantai keramik mahal berkat alat spiral blower lentur (drain snake) & kompresor tekanan terkontrol.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-zinc-950 text-sm sm:text-base mb-2">💰 Sedot WC Murah Karawang Transparan</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kami melarang keras trik jebakan harga calo nakal. Seluruh biaya pengerjaan didasarkan pada penawaran kuantitatif transparan—baik per tangki ataupun hitungan borongan sesuai panjang penarikan selang—sejak awal konsultasi telepon.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-zinc-950 text-sm sm:text-base mb-2">💧 Sedot Wastafel Serta Saluran Got Tersumbat</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pembersihan jalur pipa dapur cuci piring yang dipenuhi tumpukan kerak lemak kotoran beku sisa dapur atau endapan sabun mandi yang menghalangi air pembuangan di luar rumah secara bersih menyeluruh tanpa bahan kimia perusak paralon PVC.
              </p>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 pt-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-400 rounded-full inline-block"></span>
            Mengapa Ribuan Pelanggan Karawang Memilih MITRA BERSIH?
          </h2>

          <p>
            Kami mengerti bahwa kepercayaan pelanggan dibangun dari ketepatan waktu, kejujuran teknisi, dan kebersihan hasil akhir. Inilah pilar utama keunggulan layanan kami:
          </p>

          <ol className="space-y-3.5 pl-4 list-decimal text-sm sm:text-base">
            <li>
              <strong>Armada & Mesin Vacuum Modern:</strong> Kami menginvestasikan armada truk tangki berkapasitas besar dengan performa hisapan tanpa celah, meminimalisir emisi bau menyebar selama aktivitas penyedotan berlangsung di lingkungan perumahan Anda.
            </li>
            <li>
              <strong>Jangkauan Selang Hingga 150 Meter:</strong> Lokasi septic tank rumah Anda terletak di lorong perkampungan sempit berbelok yang tidak muat dimasuki moncong truk besar? Tim kami siap menarik selang hisap ekstra panjang dengan rapi tanpa mengotori halaman depan rumah.
            </li>
            <li>
              <strong>Tim Teknisi Jujur dan Berpengalaman:</strong> Petugas lapangan kami merupakan SDM lokal profesional terlatih yang paham betul struktur sanitasi serta letak tumpukan sampah sumbatan saluran, bekerja sopan, ramah, dan tuntas di tempat kerja.
            </li>
            <li>
              <strong>Garansi Kelancaran Resmi:</strong> Demi ketenangan pikiran Anda, kami menyertakan program jaminan kepuasan jangka panjang. Jika kloset Anda mampet lagi dalam hitungan minggu setelah dibersihkan, tim kami siap datang menginspeksi ulang secara cuma-cuma.
            </li>
          </ol>

          <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 pt-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-400 rounded-full inline-block"></span>
            Tips Sederhana Merawat Kloset Kamar Mandi Tetap Sehat
          </h2>

          <p>
            Memiliki kebiasaan baik penanganan wastafel dan kloset di dalam rumah tangga mampu menghemat jutaan rupiah ongkos perbaikan darurat tak terduga. Ikuti kiat praktis berikut:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-emerald-50/70 p-4 border border-emerald-100 rounded-2xl space-y-1.5">
              <h4 className="font-bold text-emerald-950 text-xs sm:text-sm">✅ Perilaku Baik:</h4>
              <ul className="list-disc list-inside text-xs text-emerald-800 space-y-1">
                <li>Guyur dengan debit air yang cukup setelah buang hajat.</li>
                <li>Gunakan bakteri pengurai organik ragi mikroba berkala tiap 6 bulan sekali.</li>
                <li>Sediakan keranjang sampah kecil tertutup di samping wastafel kloset.</li>
              </ul>
            </div>
            <div className="bg-rose-50/70 p-4 border border-rose-100 rounded-2xl space-y-1.5">
              <h4 className="font-bold text-rose-950 text-xs sm:text-sm">❌ Larangan Keras:</h4>
              <ul className="list-disc list-inside text-xs text-rose-800 space-y-1">
                <li>Menyiram sisa minyak goreng jelantah bekas ke wastafel.</li>
                <li>Membuang puntung rokok, plastik sachet, atau pembalut ke lubang WC.</li>
                <li>Memakai cairan asam klorida pekat (soda api) secara bebas tak terkontrol.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 pt-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-400 rounded-full inline-block"></span>
            Pertanyaan Umum Pelanggan (FAQ SEO)
          </h2>

          <div className="space-y-4 pt-1 text-xs sm:text-sm">
            <div className="border-b border-slate-100 pb-3">
              <p className="font-extrabold text-zinc-950">Q: Berapa tarif rata-rata pengerjaan jasa sedot WC di Karawang?</p>
              <p className="text-slate-600 mt-1">
                A: Biaya jasa kami sangat terbuka mulai dari Rp350.000 saja. Harga final disesuaikan dengan volume tangki yang dikuras, jarak panjang selang yang ditarik dari parkiran truk ke septic tank, serta tingkat kompleksitas mampet di pipa toilet.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-3">
              <p className="font-extrabold text-zinc-950">Q: Apakah proses penyedotan kotoran memerlukan pembongkaran tegel?</p>
              <p className="text-slate-600 mt-1">
                A: Sedapat mungkin kami utamakan penanganan nir-bongkar menggunakan sistem vakum hidrolik. Bongkar tipis penutup hanya diperlukan di atas lubang instalasi septic tank utama jika memang belum dibuatkan pintu kontrol pemeliharaan sebelumnya.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-3">
              <p className="font-extrabold text-zinc-950">Q: Area pemukiman kecamatan mana saja yang masuk daerah cover layanan?</p>
              <p className="text-slate-600 mt-1">
                A: Armada Mitra Bersih menjangkau penuh wilayah Kabupaten Karawang. Mulai dari Karawang Barat, Karawang Timur, Telukjambe Timur, Telukjambe Barat, Klari, Kosambi, Cikampek, Kotabaru, Jatisari, Cilamaya, Rengasdengklok, Rawamerta, Tempuran, Pedes, Batujaya, hingga batasan wilayah perbatasan kota tetangga.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-3">
              <p className="font-extrabold text-zinc-950">Q: Bagaimana cara memprediksi kondisi septic tank murni penuh vs mampet?</p>
              <p className="text-slate-600 mt-1">
                A: Bila kloset disiram lambat mengalir tapi air lancar mengalir ke saluran luar saat diuji siram got lain, kemungkinan septic tank Anda terisi air penuh. Sementara jika toilet lain di rumah lain aman namun air toilet Anda menguap tumpah, bisa dipastikan itu mampet pipa. Tim kami siap menginspeksi gratis sebelum tindakan kuras!
              </p>
            </div>
          </div>



          <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-950 pt-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-400 rounded-full inline-block"></span>
            Saran Struktur Saling Taut Web (Internal Linking)
          </h2>
          <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 text-xs sm:text-sm space-y-2 text-zinc-950 font-medium">
            <p>🔗 <strong>Optimasi Hierarki Konten Crawling Robot:</strong></p>
            <ul className="list-disc list-inside pl-1 space-y-1.5 text-slate-700 text-xs font-normal">
              <li>Hubungkan halaman panduan ini langsung dengan komponen <a href="#estimasi-harga" className="text-amber-600 font-bold hover:underline">Kalkulator Estimasi Biaya</a> untuk memicu transaksi cepat pengerjaan di tempat.</li>
              <li>Arahkan poin-poin wilayah kelurahan yang dilayani ke menu navigasi dinamis beranda bagian <a href="#wilayah" className="text-amber-600 font-bold hover:underline">Area Layanan Utama</a>.</li>
              <li>Tautkan istilah teknis bakteri pengurai dengan komponen <a href="#faq" className="text-amber-600 font-bold hover:underline">Pertanyaan FAQ Utama</a> untuk memaksimalkan kepuasan navigasi pengunjung.</li>
            </ul>
          </div>

          {/* Banner Call-To-Action Terpadu */}
          <div className="p-6 bg-gradient-to-br from-zinc-950 to-zinc-900 rounded-3xl border border-zinc-800 text-white space-y-4 shadow-xl mt-6">
            <h4 className="font-display font-extrabold text-amber-300 text-sm sm:text-base uppercase tracking-wider">
              🚽 Toilet Bermasalah di Daerah Karawang? Masalah Selesai Hari Ini!
            </h4>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Jangan tunda masalah limbah rumah tangga atau kantor Anda sampai memicu luapan air kotor berbau busuk. Hubungi kami secara gratis untuk berdiskusi masalah wc tersumbat, tangki kepenuhan, atau sekadar bertanya kisaran biaya pengerjaan di perumahan Anda.
            </p>
            <p className="text-amber-300 font-extrabold italic text-xs sm:text-sm leading-relaxed">
              “Hubungi MITRA BERSIH KARAWANG sekarang untuk layanan cepat dan profesional.”
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://wa.me/6285882448632?text=Halo%20Mitra%20Bersih,%20saya%20membaca%20artikel%20SEO%20Karawang%20dan%20ingin%20memesan%20layanan%20sedot%20WC%20cepat."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl text-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 shrink-0 cursor-pointer"
              >
                📱 Chat WhatsApp: 085882448632
              </a>
              <span className="text-slate-400 text-[10px] font-semibold text-center sm:text-left">
                📞 Layanan Fast Response & Tanggap Darurat Siaga 24 Jam
              </span>
            </div>
          </div>
        </div>
      )
    },
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
              <CornerDownRight className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
              <span>
                <strong>Masuknya Air Hujan / Resapan Air Tanah:</strong> Bila dinding septic tank retak atau tidak disemen dengan kedap air (waterproofing), air dari dalam tanah atau rembesan got luar dapat merembes ke dalam tangki, membuat volume air penuh seketika.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
              <span>
                <strong>Hilangnya Bakteri Pengurai Alami:</strong> Bakteri pengurai berfungsi mengubah limbah padat menjadi cair agar mudah meresap ke dalam tanah. Kebiasaan membuang bahan kimia keras seperti pemutih, detergen pekat, atau pembersih karbol ke lubang kloset dapat mematikan bakteri menguntungkan ini.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CornerDownRight className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
              <span>
                <strong>Sumbatan Sampah Non-Organik:</strong> Menaruh tisu basah, pembalut, puntung rokok, atau sachet sampo ke dalam kloset akan menyumbat pipa penyalur dan tidak bisa diurai, mempercepat penumpukan limbah padat.
              </span>
            </li>
          </ul>
          <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-zinc-950 font-medium">
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
    },
    {
      title: "Mengenal Jenis-Jenis Septic Tank dan Perawatannya",
      short: "Pahami perbedaan septic tank konvensional dan modern untuk sistem sanitasi rumah yang lebih awet.",
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      tag: "Tips & Edukasi",
      readTime: "5 Menit Baca",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Banyak orang tidak menyadari bahwa sistem septic tank rumah mereka memiliki jenis yang berbeda-beda. Memahami jenis septic tank Anda sangat penting untuk melakukan perawatan yang tepat.
          </p>
          <ul className="space-y-3 pl-2">
            <li>
              <strong>Septic Tank Konvensional:</strong> Mengandalkan bak semen beton yang tertanam. Membutuhkan ruang luas untuk area resapan. Jika tidak dirawat, sering terjadi kebocoran yang mencemari lingkungan.
            </li>
            <li>
              <strong>Septic Tank Moderna (Bio-fil):</strong> Menggunakan sistem filterisasi biolgi yang lebih canggih. Lebih ramah lingkungan, limbah yang dihasilkan jauh lebih bersih dan relatif lebih aman dari pencemaran tanah.
            </li>
          </ul>
          <p>
            Apapun jenisnya, intinya adalah satu: septic tank harus dikosongkan secara berkala agar endapan lumpur tidak mengeras dan sumbatan tidak terjadi. Di Mitra Bersih Karawang, kami memiliki keahlian untuk menangani berbagai tipe septic tank dengan alat yang tepat.
          </p>
        </div>
      )
    }
  ];

  const categories = ["Semua", ...Array.from(new Set(articles.map(a => a.tag)))];
  const filteredArticles = selectedCategory === "Semua"
    ? articles
    : articles.filter(a => a.tag === selectedCategory);

  const activeArticleObj = filteredArticles[activeArticle] || filteredArticles[0];

  return (
    <section id="artikel-edu" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <BookOpen className="w-4.5 h-4.5" />
            ARTIKEL PENDUKUNG SEO &amp; SOLUSI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
            Edukasi Sanitasi Sehat Untuk Semua
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Pelajari panduan penting seputar pemeliharaan sistem pembuangan limbah rumah tangga untuk mewujudkan tempat tinggal yang sehat, bersih dari penyakit, dan ramah lingkungan.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveArticle(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === category
                  ? "bg-amber-400 text-zinc-950 shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Nav Tabs & Detail Reader layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* List of articles left column */}
          <div className="lg:col-span-5 space-y-4">
            {filteredArticles.map((article, index) => {
              const ixActive = index === activeArticle;
              return (
                <button
                  key={index}
                  onClick={() => setActiveArticle(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer flex gap-4 ${
                    ixActive
                      ? "bg-white border-amber-500/30 shadow-lg shadow-amber-500/5 translate-x-1"
                      : "bg-white/60 border-slate-150 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${ixActive ? "bg-amber-400 text-zinc-950 font-bold" : "bg-slate-100 text-slate-500"}`}>
                    {article.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">
                        {article.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">• {article.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 leading-snug group-hover:text-amber-600 text-sm sm:text-base">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {article.short}
                    </p>
                  </div>
                  
                  {ixActive && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-2 bg-amber-400 text-zinc-950 p-1 rounded-full shadow-md z-10 hidden lg:block">
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
                  <span className="bg-amber-100 text-amber-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeArticleObj.tag}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">• Diperbarui Hari Ini (Mei 2026)</span>
                </div>

                <h3 className="font-display font-extrabold text-zinc-950 text-2xl sm:text-3xl leading-snug">
                  {activeArticleObj.title}
                </h3>
                
                <div className="w-full h-px bg-slate-100"></div>

                {activeArticleObj.content}

              </motion.article>
            </AnimatePresence>

            {/* Micro Conversion CTA link inside article panel */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl">
              <div>
                <h4 className="font-display font-extrabold text-zinc-950 text-xs sm:text-sm uppercase tracking-wider">
                  WC MAMPET ATAU SEPTIC TANK PENUH?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dapatkan estimasi biaya transparan dan garansi kelancaran 100%.
                </p>
              </div>
              <a
                href="#estimasi-harga"
                className="bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-extrabold px-5 py-3 rounded-xl transition-all shadow-md shadow-amber-400/10 cursor-pointer"
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
