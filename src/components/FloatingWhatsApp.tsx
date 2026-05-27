import { useState, useEffect } from "react";
import { MessageSquareCode, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingProps {
  whatsappNumber: string;
}

export default function FloatingWhatsApp({ whatsappNumber }: FloatingProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tool tip after 3 seconds for friendly engagement
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppAction = () => {
    const text = encodeURIComponent(
      "Halo Mitra Bersih Karawang, toilet saya bermasalah/penuh. Saya butuh respon cepat sekarang."
    );
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none">
      
      {/* Friendly Notification Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="bg-white text-slate-850 px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 flex items-start space-x-3 max-w-xs relative pointer-events-auto"
          >
            {/* Small Green Online dot */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
            
            <div className="pt-1">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
            </div>
            
            <div className="flex-1 space-y-1">
              <h4 className="font-display font-extrabold text-xs sm:text-sm text-zinc-950">Customer Support</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                Halo! Butuh layanan Sedot WC darurat sekarang? Kami online sigap 24 jam.
              </p>
            </div>

            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-450 hover:text-slate-600 transition-colors p-0.5 rounded-full hover:bg-slate-50 shrink-0 cursor-pointer"
              title="Tutup Pesan"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating WhatsApp Pulse-Button */}
      <motion.button
        id="btn-floating-wa"
        onClick={handleWhatsAppAction}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center relative select-none pointer-events-auto cursor-pointer"
        title="Hubungi Kami Melalui WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping"></span>
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.button>
      
    </div>
  );
}
