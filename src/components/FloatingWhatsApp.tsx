import { useState, useEffect, useRef, MouseEvent } from "react";
import { MessageSquareCode, MessageCircle, X, Volume2, VolumeX, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ConfettiBurst } from "./ConfettiBurst";

interface FloatingProps {
  whatsappNumber: string;
}

export default function FloatingWhatsApp({ whatsappNumber }: FloatingProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const tooltipMessage = "Halo! Butuh layanan Sedot WC darurat sekarang? Kami online sigap 24 jam.";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [chattingCount, setChattingCount] = useState(12);

  useEffect(() => {
	  const interval = setInterval(() => {
		  setChattingCount((prev) => {
			  const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
			  return Math.max(8, prev + change);
		  });
	  }, 5000);
	  return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsVisible(!isAtBottom);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
      const interval = setInterval(() => {
          setIsShaking(true);
          setTimeout(() => setIsShaking(false), 600);
      }, 30000);
      return () => clearInterval(interval);
  }, []);

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
    // Play pop sound if not muted
    if (!isMuted) {
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
    }
    
    setShowConfetti(true);

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
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: isVisible ? 1 : 0, x: 0, y: isVisible ? 0 : 50, pointerEvents: isVisible ? 'auto' : 'none' }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none"
  >
      
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

      <div className="flex items-end gap-2">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white text-slate-600 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors pointer-events-auto"
            title="Kembali ke Atas"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}

        {/* Primary Floating WhatsApp Pulse-Button Container */}
        <div className="flex flex-col items-end space-y-2">
          <div className="bg-white text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full shadow-md border border-emerald-100 flex flex-col items-center shrink-0 pointer-events-auto">
             <div className="flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
               Online: 5+ staff
               <span className="bg-emerald-50 text-emerald-600 px-1 py-0.5 rounded text-[8px] border border-emerald-100 font-medium">Fast Reply (&lt;5min)</span>
               <button 
                 onClick={() => setIsMuted(!isMuted)}
                 className="ml-1 p-0.5 rounded-full hover:bg-emerald-50 text-emerald-600 transition-colors"
                 title={isMuted ? "Unmute Sound" : "Mute Sound"}
               >
                 {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
               </button>
             </div>
             <span className="text-[9px] text-emerald-600 font-semibold">{chattingCount} currently chatting</span>
             <span className="text-[9px] text-emerald-600/80 font-normal">{currentTime} WIB</span>
          </div>
           <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setPosition({ x: 0, y: 0 }); setIsHovered(false); }}
            onMouseEnter={() => setIsHovered(true)}
            animate={{
              x: position.x,
              y: position.y,
              scale: isHovered ? 1.1 : [1, 1.05, 1],
              rotate: isShaking ? [0, -10, 10, -10, 10, 0] : 0,
              boxShadow: isHovered 
                ? ["0 0 10px 2px rgba(5, 150, 105, 0.6)", "0 0 20px 10px rgba(5, 150, 105, 0.6)", "0 0 10px 2px rgba(5, 150, 105, 0.6)"]
                : "0 10px 15px -3px rgba(16, 185, 129, 0.5)",
              opacity: 1
            }}
            id="btn-floating-wa"
            onClick={handleWhatsAppAction}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleWhatsAppAction();
              }
            }}
            initial={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              rotate: { type: "tween", duration: 0.6 },
              scale: {
                  repeat: isHovered ? 0 : Infinity,
                  duration: 2,
                  ease: "easeInOut"
              },
              boxShadow: {
                  repeat: isHovered ? Infinity : 0,
                  duration: 1.5,
                  ease: "easeInOut"
              }
            }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/50 flex items-center justify-center relative select-none pointer-events-auto cursor-pointer"
            title="Hubungi Kami Melalui WhatsApp"
          >
            {showConfetti && <ConfettiBurst onComplete={() => setShowConfetti(false)} />}
            <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-pulse"></span>
            <MessageCircle className="w-8 h-8 fill-current" />
          </motion.button>
        </div>
      </div>
      
    </motion.div>
  );
}
