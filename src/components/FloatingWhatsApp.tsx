import { useState, useEffect, useRef, MouseEvent } from "react";
import { MessageSquareCode, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingProps {
  whatsappNumber: string;
}

export default function FloatingWhatsApp({ whatsappNumber }: FloatingProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [typedText, setTypedText] = useState("");
  const tooltipMessage = "Halo! Butuh layanan Sedot WC darurat sekarang? Kami online sigap 24 jam.";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (showTooltip) {
      let currentIndex = 0;
      setTypedText("");
      const timer = setInterval(() => {
        if (currentIndex < tooltipMessage.length) {
          setTypedText((prev) => prev + tooltipMessage[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [showTooltip]);

  useEffect(() => {
    // Show tool tip after 4 seconds for friendly engagement
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Re-trigger every 60 seconds if currently closed
    const interval = setInterval(() => {
      setShowTooltip((prev) => {
        if (!prev) return true;
        return prev;
      });
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppAction = () => {
    // Play pop sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);

    const text = encodeURIComponent(
      "Halo Mitra Bersih Karawang, toilet saya bermasalah/penuh. Saya butuh respon cepat sekarang."
    );
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    if (distance < 50) {
       setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
    } else {
       setPosition({ x: 0, y: 0 });
    }
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
              <div className="max-h-24 overflow-y-auto pr-1">
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  {typedText}
                </p>
              </div>
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
      <div className="bg-white text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full shadow-md border border-emerald-100 flex items-center gap-1 shrink-0 pointer-events-auto">
         <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
         Online: 5+ staff
      </div>
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setPosition({ x: 0, y: 0 })}
        animate={{ x: position.x, y: position.y, scale: 1 }}
        id="btn-floating-wa"
        onClick={handleWhatsAppAction}
        initial={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/50 flex items-center justify-center relative select-none pointer-events-auto cursor-pointer"
        title="Hubungi Kami Melalui WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-pulse"></span>
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.button>
      
    </div>
  );
}
