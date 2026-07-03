export default function KeywordsSection() {
  const keywords = [
    "jasa sedot wc karawang", "sedot wc karawang", "sedot septic tank karawang", "kuras septic tank karawang",
    "jasa septic tank karawang", "sedot wc murah karawang", "sedot wc 24 jam karawang", "sedot wc terdekat karawang",
    "jasa wc mampet karawang", "sedot limbah karawang", "sedot septic tank penuh", "sedot wc panggilan",
    "sedot limbah domestik", "sedot grease trap", "jasa saluran mampet", "wc mampet karawang",
    "perbaikan septic tank", "sedot limbah industri", "jasa sanitasi karawang", "sedot tinja karawang",
    "sedot wc karawang barat", "sedot wc karawang timur", "sedot wc telukjambe timur", "sedot wc telukjambe barat",
    "sedot wc klari", "sedot wc cikampek", "sedot wc rengasdengklok", "sedot wc ciampel", "sedot wc purwasari",
    "sedot wc kotabaru", "sedot wc jatisari", "sedot wc cilamaya wetan", "sedot wc cilamaya kulon",
    "sedot wc batujaya", "sedot wc pedes", "sedot wc pakisjaya", "sedot wc rawamerta", "sedot wc lemahabang",
    "sedot wc tempuran", "sedot wc tirtajaya", "sedot wc jayakerta", "sedot wc banyusari", "sedot wc majalaya",
    "sedot wc pangkalan", "sedot wc tegalwaru", "sedot wc kutawaluya", "sedot wc cilebar", "sedot wc tirta mulya",
    "sedot wc telagasari", "sedot wc cikampek utara", "jasa sedot wc terdekat", "sedot wc buka sekarang",
    "nomor sedot wc karawang", "harga sedot wc karawang", "biaya sedot septic tank karawang", "sedot wc cepat karawang",
    "sedot wc profesional karawang", "sedot wc bergaransi karawang"
  ];

  return (
    <section className="bg-slate-50 py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-widest text-center">Area Layanan & Spesialisasi</h4>
        <div className="flex flex-wrap gap-2 justify-center text-xs text-slate-400">
          {keywords.map((keyword, index) => (
            <span key={index} className="bg-white px-2 py-1 rounded border border-slate-200">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
