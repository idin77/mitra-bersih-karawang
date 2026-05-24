import { Clock, Briefcase, Sparkles, HeartHandshake, Zap, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const keunggulanItems = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Layanan 24 Jam",
      description: "Kami siap melayani Anda kapan pun, siang maupun malam, 7 hari seminggu tanpa libur.",
      badge: "NON-STOP"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Profesional",
      description: "Didukung oleh tenaga ahli berpengalaman bertahun-tahun dengan standar kerja tinggi.",
      badge: "AHLI"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Aman & Bersih",
      description: "Pekerjaan dilakukan rapi, bersih, tanpa kotoran tercecer, serta aman bagi lingkungan.",
      badge: "HIGIENIS"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
      title: "Harga Terjangkau",
      description: "Harga bersahabat, transparan di awal tanpa biaya siluman. Sangat tepercaya.",
      badge: "HEMAT"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Respon Cepat",
      description: "Armada siaga tersebar di area Karawang demi menjamin respon kilat ke tempat Anda.",
      badge: "FAST"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Bergaransi",
      description: "Kami memberikan garansi jaminan penuh atas kelancaran toilet dan saluran air Anda.",
      badge: "100% PUAS"
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 dark:bg-blue-900/10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl -z-10 dark:bg-yellow-900/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            MENGAPA MEMILIH KAMI?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-950 tracking-tight">
            Keunggulan Layanan Mitra Bersih Karawang
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Kami mendedikasikan kualitas layanan terbaik dengan peralatan mutakhir demi kepuasan penuh setiap pelanggan.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keunggulanItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card top badge */}
              <span className="absolute top-4 right-4 bg-blue-50 text-blue-700 font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full group-hover:bg-amber-400 group-hover:text-blue-950 transition-colors">
                {item.badge}
              </span>

              {/* Icon */}
              <div className="mb-6 p-4 bg-blue-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <div className="group-hover:scale-110 group-hover:text-white transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-blue-950 mb-3 group-hover:text-blue-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
