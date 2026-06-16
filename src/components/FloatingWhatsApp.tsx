import { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from "react";
import { MessageSquareCode, MessageCircle, X, Volume2, VolumeX, ArrowUp, Phone, MapPin, Mail, Battery } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ConfettiBurst } from "./ConfettiBurst";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

interface FloatingProps {
  whatsappNumber: string;
}

export default function FloatingWhatsApp({ whatsappNumber }: FloatingProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPinnedMessage, setShowPinnedMessage] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [typedText]);

  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("whatsapp_muted") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("whatsapp_muted", String(isMuted));
  }, [isMuted]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getTooltipMessage = (h: number) => {
      if (h >= 0 && h < 5) return "Selamat Malam! Butuh bantuan darurat untuk sedot WC? Tim kami tetap siaga.";
      if (h >= 5 && h < 12) return "Selamat Pagi! Siap melayani kebutuhan sedot WC Anda dengan cepat.";
      if (h >= 12 && h < 18) return "Selamat Siang/Sore! Layanan sedot WC Karawang profesional & bergaransi.";
      return "Selamat Malam! Sedot WC Karawang siap membantu masalah Anda kapan saja.";
  };
  const tooltipMessage = getTooltipMessage(hour);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const [chattingCount, setChattingCount] = useState(12);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<{id: number}[]>([]);

  const triggerParticles = () => {
    const id = Date.now();
    setParticles(prev => [...prev, { id }]);
    setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 600);
  };

  useEffect(() => {
	  // Play subtle "pop" on mount
      if (!isMuted) {
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.05);

          gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.05);
        } catch (e) {
            console.error("Audio initialization failed:", e);
        }
      }
  }, []);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardFocus(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsMenuOpen((prev) => !prev);
      }
    };
    const handleMouseDown = () => {
      setIsKeyboardFocus(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [holdProgress, setHoldProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const copyTooltipTimeoutRef = useRef<NodeJS.Timeout>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [randomDelay] = useState(() => Math.random() * 1 + 0.5);

  useEffect(() => {
    if (isMenuOpen) {
      setFocusedIndex(0);
      menuButtonsRef.current[0]?.focus();
    } else {
      setFocusedIndex(-1);
      buttonRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleMenuKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (focusedIndex + 1) % 4;
      setFocusedIndex(nextIndex);
      menuButtonsRef.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (focusedIndex - 1 + 4) % 4;
      setFocusedIndex(prevIndex);
      menuButtonsRef.current[prevIndex]?.focus();
    } else if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setIsIdle(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, 300000); // 300000ms = 5 minutes
    };

    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('mousedown', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);
    
    // Initial start
    resetIdleTimer();

    return () => {
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('mousedown', resetIdleTimer);
      window.removeEventListener('keypress', resetIdleTimer);
      window.removeEventListener('scroll', resetIdleTimer);
      clearTimeout(idleTimer);
    };
  }, []);

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
      const now = new Date();
      setHour(now.getHours());
      const time = now.toLocaleTimeString("id-ID", {
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
  }, [showTooltip, tooltipMessage]);

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
    if (typeof navigator !== 'undefined' && navigator.vibrate && isMobile) {
      navigator.vibrate(50);
    }
    if (isLongPress) {
      setIsLongPress(false);
      return;
    }
    setShowTooltip(false);
    setIsMenuOpen(!isMenuOpen);
  };

  const executeWhatsApp = (customMessage?: string) => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'floating_whatsapp_button'
      });
    }

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
      customMessage || "Halo Mitra Bersih Karawang, toilet saya bermasalah/penuh. Saya butuh respon cepat sekarang."
    );
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
    setIsMenuOpen(false);
  };

  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const handlePointerDown = () => {
    setIsLongPress(false);
    setHoldProgress(0);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    progressIntervalRef.current = setInterval(() => {
       setHoldProgress(prev => {
         const next = prev >= 100 ? 100 : prev + 2.5;
         
         // Vibrate on specific thresholds if not muted
         if (!isMuted && typeof navigator !== 'undefined' && navigator.vibrate && isMobile) {
            // Pulse thresholds: ~33%, ~66%, 100%
            if ((prev < 33 && next >= 33) || (prev < 66 && next >= 66) || (prev < 100 && next >= 100)) {
               navigator.vibrate(10); // Very subtle vibration
            }
         }

         return next;
       });
    }, 20);

    const timer = setTimeout(() => {
      setIsLongPress(true);
      handleCopyPhoneNumber();
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }, 800);
    setPressTimer(timer);
  };

  const handlePointerUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
    if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
    }
    setHoldProgress(0);
    setIsLongPress(false);
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
    
    // Magnetic snap effect
    const range = 100;
    if (distance < range) {
       // Gently snap towards cursor
       const strength = 0.8;
       setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
       setPosition({ x: 0, y: 0 });
    }
  };


  return (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ 
      opacity: isVisible ? 1 : 0, 
      y: isVisible ? 0 : 50, 
      pointerEvents: isVisible ? 'auto' : 'none' 
    }}
    transition={{ type: "spring", stiffness: 150, damping: 10, delay: randomDelay }}
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
              {showPinnedMessage && (
                <div className="bg-amber-50 border border-amber-100 p-2 rounded-lg flex items-center justify-between mb-2">
                  <p className="text-[10px] text-amber-800 font-bold leading-tight">🔥 Promo: Hemat Sedot WC 20% Hari Ini!</p>
                  <button onClick={() => setShowPinnedMessage(false)} className="text-amber-600 hover:text-amber-800 shrink-0 cursor-pointer ml-2">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              <h4 className="font-display font-extrabold text-xs sm:text-sm text-zinc-950">Customer Support</h4>
              <div className="max-h-24 overflow-y-auto pr-1" ref={chatContainerRef}>
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
        <div className="flex flex-col items-end space-y-2 relative">                
          {particles.map(p => (
             <motion.div
               key={p.id}
               className="absolute w-2 h-2 bg-emerald-400 rounded-full z-[60] pointer-events-none"
               initial={{ opacity: 1, scale: 0, bottom: 20, right: 20 }}
               animate={{ opacity: 0, scale: 2, bottom: 100, right: 100 }}
               transition={{ duration: 0.6 }}
             />
          ))}
          <AnimatePresence>
            {showCopyTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-12 right-0 bg-white text-emerald-800 text-xs px-3 py-1.5 rounded-lg shadow-xl border border-emerald-100 whitespace-nowrap pointer-events-none font-medium"
              >
                Click & Tahan untuk Salin No
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onKeyDown={handleMenuKeyDown}
                className="bg-white rounded-2xl shadow-xl p-2 flex flex-col gap-2 border border-slate-100 pointer-events-auto min-w-[160px]"
              >
                <motion.button 
                  variants={itemVariants}
                  ref={el => menuButtonsRef.current[0] = el}
                  onClick={() => { window.location.href = `tel:${whatsappNumber}`; setIsMenuOpen(false); }}
                  className="relative flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-700 font-medium text-sm transition-colors outline-none focus:bg-slate-100 border border-transparent focus:border-emerald-600"
                >
                  {focusedIndex === 0 && <span className="absolute left-1 w-1.5 h-1.5 bg-emerald-600 rounded-full" />}
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Telepon
                </motion.button>
                <motion.button 
                  variants={itemVariants}
                  ref={el => menuButtonsRef.current[1] = el}
                  onClick={() => { window.open('https://maps.google.com', '_blank'); setIsMenuOpen(false); }}
                  className="relative flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-700 font-medium text-sm transition-colors outline-none focus:bg-slate-100 border border-transparent focus:border-emerald-600"
                >
                  {focusedIndex === 1 && <span className="absolute left-1 w-1.5 h-1.5 bg-emerald-600 rounded-full" />}
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Lokasi
                </motion.button>
                <motion.button 
                  variants={itemVariants}
                  ref={el => menuButtonsRef.current[2] = el}
                  onClick={() => { window.location.href = 'mailto:info@mitrabersih.sedotwckarawang.id'; setIsMenuOpen(false); }}
                  className="relative flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-700 font-medium text-sm transition-colors outline-none focus:bg-slate-100 border border-transparent focus:border-emerald-600"
                >
                  {focusedIndex === 2 && <span className="absolute left-1 w-1.5 h-1.5 bg-emerald-600 rounded-full" />}
                  <Mail className="w-4 h-4 text-emerald-600" />
                  Email
                </motion.button>
                <motion.button 
                  variants={itemVariants}
                  ref={el => menuButtonsRef.current[3] = el}
                  onClick={() => executeWhatsApp()}
                  className="relative flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-700 font-medium text-sm transition-colors outline-none focus:bg-slate-100 border border-transparent focus:border-emerald-600"
                >
                  {focusedIndex === 3 && <span className="absolute left-1 w-1.5 h-1.5 bg-emerald-600 rounded-full" />}
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp
                </motion.button>
                <div className="px-2 py-2 border-t border-slate-100 mt-1">
                  <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">Pesan Cepat</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    <button onClick={() => executeWhatsApp("Halo, saya ingin tanya harga layanan sedot WC.")} className="text-left w-full hover:bg-emerald-50 rounded-lg text-emerald-800 font-medium text-[11px] transition-colors outline-none focus:bg-emerald-100 px-3 py-1.5 border border-emerald-100">Tanya Harga</button>
                    <button onClick={() => executeWhatsApp("Halo, saya ingin menjadwalkan layanan sedot WC.")} className="text-left w-full hover:bg-emerald-50 rounded-lg text-emerald-800 font-medium text-[11px] transition-colors outline-none focus:bg-emerald-100 px-3 py-1.5 border border-emerald-100">Jadwalkan Sedot</button>
                    <button onClick={() => executeWhatsApp("Halo, saya ingin konsultasi gratis mengenai masalah WC saya.")} className="text-left w-full hover:bg-emerald-50 rounded-lg text-emerald-800 font-medium text-[11px] transition-colors outline-none focus:bg-emerald-100 px-3 py-1.5 border border-emerald-100">Konsultasi Gratis</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-white text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full shadow-md border border-emerald-100 flex flex-col items-center shrink-0 pointer-events-auto">
             <div className="flex items-center gap-1">
               {isIdle ? (
                 <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                   <Battery className="w-3 h-3" />
                   <span className="text-[9px] font-bold">Low Power</span>
                 </div>
               ) : (
                 <>
                   <span className={`w-1.5 h-1.5 ${hour >= 0 && hour < 5 ? 'bg-amber-500' : 'bg-emerald-500'} rounded-full`}></span>
                   {hour >= 0 && hour < 5 ? 'Limited Support' : 'Available'}
                   {!(hour >= 0 && hour < 5) && <span className="bg-emerald-50 text-emerald-600 px-1 py-0.5 rounded text-[8px] border border-emerald-100 font-medium">Fast Reply (&lt;5min)</span>}
                 </>
               )}
               <button 
                 onClick={() => { setIsMuted(!isMuted); triggerParticles(); }}
                 className="ml-1 p-0.5 rounded-full hover:bg-emerald-50 text-emerald-600 transition-colors"
                 title={isMuted ? "Unmute Sound" : "Mute Sound"}
               >
                 <motion.div
                  animate={{ rotate: isMuted ? 360 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                </motion.div>
               </button>
             </div>
             <span className="text-[9px] text-emerald-600 font-semibold">{chattingCount} currently chatting</span>
             <span className="text-[9px] text-emerald-600/80 font-normal">{currentTime} WIB</span>
          </div>

          {/* Ghost element for trailing effect */}
          <motion.div
            className="absolute w-14 h-14 bg-emerald-600/30 rounded-full z-[40] pointer-events-none"
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
            }}
          />

           <motion.button
            ref={buttonRef}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            drag={isMobile}
            dragConstraints={{ left: -300, right: 0, top: -600, bottom: 0 }}
            dragElastic={0.1}
            onMouseLeave={(e) => { 
                handlePointerUp(); 
                setPosition({ x: 0, y: 0 }); 
                setIsHovered(false); 
                if (copyTooltipTimeoutRef.current) clearTimeout(copyTooltipTimeoutRef.current);
                setShowCopyTooltip(false);
            }}
            onMouseEnter={() => {
                setIsHovered(true);
                copyTooltipTimeoutRef.current = setTimeout(() => setShowCopyTooltip(true), 1500);
            }}
            onContextMenu={(e: MouseEvent) => { e.preventDefault(); handleCopyPhoneNumber(); }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            animate={{
              x: position.x,
              y: position.y,
              scale: isLongPress ? 1.15 : (isHovered ? [1.1, 1.15, 1.1] : [1, 1.05, 1]),
              rotate: isLongPress ? 0 : (isShaking ? [0, -10, 10, -10, 10, 0] : 0),
              boxShadow: isLongPress 
                ? "0 0 20px 10px rgba(255, 255, 255, 0.8)" 
                : (isHovered 
                    ? ["0 0 15px 5px rgba(16, 185, 129, 0.6)", "0 0 35px 20px rgba(16, 185, 129, 0.8)", "0 0 15px 5px rgba(16, 185, 129, 0.6)"]
                    : "0 10px 15px -3px rgba(16, 185, 129, 0.5)"),
              opacity: 1
            }}
            id="btn-floating-wa"
            onClick={handleWhatsAppAction}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleWhatsAppAction();
              }
            }}
            initial={isMobile ? { scale: 0, y: 50, opacity: 0 } : { scale: 0.3, borderRadius: "15px", opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1, borderRadius: "50%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: randomDelay,
              x: { type: "spring", stiffness: 100, damping: 5 },
              y: { type: "spring", stiffness: 100, damping: 5 },
              rotate: { type: "tween", duration: 0.6 },
              scale: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
              },
              borderRadius: { duration: 0.6, ease: "easeOut" },
              boxShadow: {
                  repeat: isHovered ? Infinity : 0,
                  duration: 1.5,
                  ease: "easeInOut"
              }
            }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-700/50 flex items-center justify-center relative select-none pointer-events-auto cursor-pointer focus:outline-none transition-shadow duration-300 ease-in-out"
            title="Hubungi Kami Melalui WhatsApp"
            aria-label="Buka WhatsApp untuk layanan Sedot WC"
          >
            {/* Ripple Animation */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white/30 pointer-events-none"
                initial={{ scale: 0.5, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}

            {/* Progress Ring */}
            <svg className="absolute -inset-1 w-[64px] h-[64px] -rotate-90 pointer-events-none">
              <circle
                cx="32" cy="32" r="28"
                className="text-white/30"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="32" cy="32" r="28"
                className="text-white transition-all duration-75"
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 28}
                strokeDashoffset={2 * Math.PI * 28 * (1 - holdProgress / 100)}
                style={{ opacity: holdProgress > 0 ? 1 : 0 }}
              />
            </svg>

            {(isFocused && isKeyboardFocus) && (
                <>
                <motion.span 
                    className="absolute inset-0 rounded-full border-4 border-emerald-900 pointer-events-none"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span 
                    className="absolute inset-0 rounded-full border-2 border-emerald-500 pointer-events-none"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.2, ease: "easeOut" }}
                />
                </>
            )}
            {showConfetti && <ConfettiBurst onComplete={() => setShowConfetti(false)} />}
            {/* Operational Availability Wave Effect */}
            {[0, 1.5].map((delay) => (
                <motion.span
                    key={delay}
                    className="absolute -inset-0.5 rounded-full border-2 border-emerald-400/60 pointer-events-none"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{
                        scale: [1, 1.4],
                        opacity: [0.6, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
            <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-pulse"></span>
            <motion.div
              animate={{ rotate: isHovered ? 15 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <MessageCircle className="w-8 h-8 fill-current" />
            </motion.div>
            
            {isMuted && (
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="absolute -top-1 -left-1 bg-rose-500 text-white rounded-full p-0.5 border border-white shadow-sm pointer-events-none"
              >
                <VolumeX className="w-3 h-3" />
              </motion.span>
            )}
            
            {copiedSuccess && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded-full border border-emerald-200 font-bold shadow-sm whitespace-nowrap"
              >
                Tersalin!
              </motion.div>
            )}
            
            {!copiedSuccess && isIdle && (
              <motion.div 
                initial={{ scale: 0.5, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute -top-1 -right-1 bg-white text-emerald-700 text-[8px] px-1.5 py-0.5 rounded-full border border-emerald-200 font-bold shadow-sm whitespace-nowrap"
              >
                Tanya Kami?
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>
      
    </motion.div>
  );
}
