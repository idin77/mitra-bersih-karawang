import { motion } from "motion/react";
import { services } from "../data/services";
import { ArrowRight } from "lucide-react";

interface HorizontalServicesCarouselProps {
  whatsappNumber: string;
}

export default function HorizontalServicesCarousel({ whatsappNumber }: HorizontalServicesCarouselProps) {
  const handleServiceOrder = (whatsappText: string) => {
    const message = `Halo Mitra Bersih Karawang, ${whatsappText}`;
    const url = `https://wa.me/62${whatsappNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-950 tracking-tight">
          Pilihan Layanan Kami
        </h2>
      </div>
      
      <motion.div 
        className="flex gap-6 px-4 sm:px-8 cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -1000 }}
      >
        {services.map((service) => {
          return (
            <motion.div
              key={service.id}
              className="min-w-[280px] sm:min-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 shadow-lg flex flex-col justify-between"
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.shortDesc}</p>
                <p className="text-amber-600 font-bold text-sm mb-6">{service.priceStart}</p>
              </div>
              <button
                onClick={() => handleServiceOrder(service.whatsappText)}
                className="w-full flex items-center justify-center gap-2 bg-zinc-950 text-white py-3 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-colors"
              >
                Pesan Sekarang
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
