
import { Zap, Droplets, ShieldCheck, ArrowRight } from "lucide-react";

export default function TipsGrid() {
  const tips = [
    {
      title: "Cara Menjaga Septic Tank agar Tidak Cepat Penuh",
      description: "Tips rutin agar penampungan limbah lebih awet, tidak sering tersumbat, dan menjaga resapan tanah tetap sehat.",
      icon: <Zap className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Pilih Bakteri Pengurai yang Tepat",
      description: "Gunakan bakteri pengurai organik secara berkala untuk membantu melarutkan lemak dan menghindari kerak di septic tank.",
      icon: <Droplets className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Hindari Membuang Bahan Kimia",
      description: "Jangan membuang cairan pembersih kimia keras atau minyak ke kloset karena dapat mematikan bakteri pengurai alami.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-zinc-950 mb-12">Tips & Artikel Sanitasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-zinc-950 mb-3">{tip.title}</h3>
              <p className="text-slate-600 mb-6">{tip.description}</p>
              <a href="#artikel-edu" className="inline-flex items-center text-amber-600 font-bold hover:underline">
                Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
