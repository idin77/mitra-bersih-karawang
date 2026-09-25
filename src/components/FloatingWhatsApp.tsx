import { useState, useEffect, useRef, MouseEvent, KeyboardEvent, useMemo } from "react";
import { MessageSquareCode, MessageCircle, X, Volume2, VolumeX, ArrowUp, Phone, MapPin, Mail, Battery, BatteryCharging, BatteryLow, Magnet, Copy, Calculator, ArrowLeft, ChevronDown, Calendar, Clock, GripHorizontal, Plus, Moon, Sun } from "lucide-react";
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

const modalSlideVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 200 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } }
};

interface FloatingProps {
  whatsappNumber: string;
}

import CoverageMap from './CoverageMap';
import { primaryAreas } from './ServiceAreas';

// Haversine formula
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const EtaDisplay = ({ minutes }: { minutes: number }) => {
    const [displayMinutes, setDisplayMinutes] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const frameRate = 30;
        const totalSteps = duration / frameRate;
        const increment = minutes / totalSteps;
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= minutes) {
                setDisplayMinutes(minutes);
                clearInterval(timer);
            } else {
                setDisplayMinutes(Math.floor(start));
            }
        }, frameRate);
        
        return () => clearInterval(timer);
    }, [minutes]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl mt-2 overflow-hidden relative"
        >
            <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider mb-1">Estimasi Kedatangan</p>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-emerald-600">{displayMinutes}</span>
                <span className="text-xs font-bold text-emerald-700">menit</span>
            </div>
            
            {/* Progress Bar with Vehicle Animation */}
            <div className="h-1.5 w-full bg-emerald-100 rounded-full mt-2 relative">
                <motion.div
                    className="h-full bg-emerald-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 -mt-2 -ml-2 text-emerald-600"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function FloatingWhatsApp({ whatsappNumber }: FloatingProps) {
  const [dragRipples, setDragRipples] = useState<{id: number, x: number, y: number}[]>([]);
  const [currentAlert, setCurrentAlert] = useState<string | null>(null);
  
  useEffect(() => {
    const names = ["Budi", "Siti", "Andi", "Dewi", "Rian", "Putri", "Dedi", "Fajar", "Lina"];
    const areas = ["Karawang", "Bekasi", "Cikarang", "Tambun", "Klari"];
    const actions = ["baru saja memesan jasa", "sedang menanyakan harga", "berhasil dibantu masalah WC-nya", "baru saja memberikan testimoni", "telah memesan layanan"];
    
    const interval = setInterval(() => {
      if (Math.random() > 0.4) { // 60% chance to show an alert
        const name = names[Math.floor(Math.random() * names.length)];
        const area = areas[Math.floor(Math.random() * areas.length)];
        const action = actions[Math.floor(Math.random() * actions.length)];
        setCurrentAlert(`${name} di ${area} ${action}`);
        setTimeout(() => setCurrentAlert(null), 4000);
      }
    }, 12000); // Trigger every 12 seconds
    return () => clearInterval(interval);
  }, []);

  const [testimonials, setTestimonials] = useState([
    { text: "Pengerjaan cuma 35 menit, langsung lancar kembali. Sangat puas!", name: "Ibu Rahmawati" },
    { text: "Pelayanan profesional, harganya jujur transparan di awal.", name: "Bpk. Hendra" },
    { text: "Sedotan tangki vacumnya kencang sekali, teknisi rapi.", name: "Ibu Siska" },
    { text: "Teknisi datang 30 menit setelah dihubungi. Mantap!", name: "Bpk. Agus" },
  ]);
  const [faqs] = useState([
    { question: "Mengapa pilih jasa sedot WC Karawang kami?", answer: "Kami menyediakan tenaga profesional, peralatan modern, pengerjaan cepat, dan harga yang transparan untuk semua masalah sanitasi di Karawang." },
    { question: "Berapa harga jasa sedot WC Karawang?", answer: "Harga jasa sedot WC Karawang kami sangat kompetitif, mulai dari Rp700.000 tergantung pada volume tangki dan lokasi Anda. Kami menjamin tidak ada biaya tambahan tersembunyi." },
  ]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [newTestimonial, setNewTestimonial] = useState({ text: "", name: "" });
  const [isTestimonialFormOpen, setIsTestimonialFormOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isCoverageMapOpen, setIsCoverageMapOpen] = useState(false);
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const pricingData = [
    { service: "Sedot WC" },
    { service: "Saluran Mampet" },
    { service: "Service Tangki" },
  ];
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPinnedMessage, setShowPinnedMessage] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [mouseDist, setMouseDist] = useState(100);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number }[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUiSoundEnabled, setIsUiSoundEnabled] = useState(true);

  const addRipple = () => {
    const id = Date.now();
    setRipples((prev) => [...prev, { id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };
  
  const addMagneticWave = (v: number) => {
    const id = Date.now();
    setMagneticWaves(prev => [...prev, { id, velocity: v }]);
    setTimeout(() => setMagneticWaves(prev => prev.filter(w => w.id !== id)), 1000);
  };
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [hour, setHour] = useState(0);
  const [showAllCoverage, setShowAllCoverage] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const isMouseInRangeRef = useRef(false); // Add ref to track proximity
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [helpCount, setHelpCount] = useState(() => {
    if (typeof window !== 'undefined') {
        return parseInt(localStorage.getItem("whatsapp_help_count") || "2450", 10);
    }
    return 2450;
  });

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const [chattingCount, setChattingCount] = useState(12);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [serviceStatus, setServiceStatus] = useState<'Active' | 'Busy'>('Active');
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isNearEdge, setIsNearEdge] = useState(false);
  const [isNearProximity, setIsNearProximity] = useState(false);
  const [polarity, setPolarity] = useState<'attract' | 'repel'>('attract');
  const [wobble, setWobble] = useState(0);
  const [isSlamming, setIsSlamming] = useState(false);
  const [isRepelling, setIsRepelling] = useState(false);
  const [particles, setParticles] = useState<{id: number, x: number, y: number}[]>([]);
  const [trail, setTrail] = useState<{id: number, x: number, y: number}[]>([]);
  const [magneticWaves, setMagneticWaves] = useState<{id: number, velocity: number}[]>([]);
  const [velocity, setVelocity] = useState(0);
  const [isOrbital, setIsOrbital] = useState(false);
  const [magneticRange, setMagneticRange] = useState(150);
  const [polarityFlash, setPolarityFlash] = useState(false);
  const momentumRef = useRef({ vx: 0, vy: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const stationaryTimer = useRef<NodeJS.Timeout | null>(null);
  const dockingTimer = useRef<NodeJS.Timeout | null>(null);

  // Shake animation trigger
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1200); // 2 cycles of 0.6s
    }, 15000);

    return () => clearInterval(shakeInterval);
  }, []);

  // Auto-docking effect
  useEffect(() => {
    if (isDragging) {
      if (dockingTimer.current) clearTimeout(dockingTimer.current);
      return;
    }

    if (dockingTimer.current) clearTimeout(dockingTimer.current);
    dockingTimer.current = setTimeout(() => {
      const btnRect = buttonRef.current?.getBoundingClientRect();
      if (!btnRect) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Find closest edge
      const distToLeft = btnRect.left;
      const distToRight = viewportWidth - btnRect.right;
      const distToTop = btnRect.top;
      const distToBottom = viewportHeight - btnRect.bottom;

      const minEdge = Math.min(distToLeft, distToRight, distToTop, distToBottom);

      // Snap to closest edge
      if (minEdge === distToLeft) {
          setPosition(prev => ({ x: prev.x - distToLeft, y: prev.y }));
      } else if (minEdge === distToRight) {
          setPosition(prev => ({ x: prev.x + distToRight, y: prev.y }));
      } else if (minEdge === distToTop) {
          setPosition(prev => ({ x: prev.x, y: prev.y - distToTop }));
      } else {
          setPosition(prev => ({ x: prev.x, y: prev.y + distToBottom }));
      }
    }, 5000);

    return () => {
      if (dockingTimer.current) clearTimeout(dockingTimer.current);
    };
  }, [position, isDragging]);

  // Particle management for orbiting effect
  useEffect(() => {
    if (!isNearProximity) {
      setParticles([]);
      return;
    }
    
    const interval = setInterval(() => {
        const id = Date.now();
        const angle = Math.random() * Math.PI * 2;
        const radius = 40;
        setParticles(prev => [...prev.slice(-15), { 
            id, 
            x: Math.cos(angle) * radius, 
            y: Math.sin(angle) * radius 
        }]);
    }, 100);
    return () => clearInterval(interval);
  }, [isNearProximity]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Cycle every 7 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkOperatingHours = () => {
      const now = new Date();
      // Set to Jakarta time
      const jakartaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
      const hour = jakartaTime.getHours();
      
      // Jam operasional: 00:00 - 21:00 (Active), 21:00 - 23:59 (Busy)
      if (hour >= 21) {
        setServiceStatus('Busy');
      } else {
        setServiceStatus('Active');
      }
    };
    
    checkOperatingHours();
    const interval = setInterval(checkOperatingHours, 60000); // Cek setiap menit
    return () => clearInterval(interval);
  }, []);

  const triggerParticles = (x: number = 0, y: number = 0) => {
    const id = Date.now();
    setParticles(prev => [...prev, { id, x, y }]);
    setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 600);
  };

  useEffect(() => {
	  // Play subtle "pop" on mount
      if (!isMuted && isUiSoundEnabled) {
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
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const copyTooltipTimeoutRef = useRef<NodeJS.Timeout>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coverageSearch, setCoverageSearch] = useState("");
  const tooltipMessage = useMemo(() => {
    const h = hour;
    const isKarawang = coverageSearch.toLowerCase().includes('karawang');
    const isBekasi = coverageSearch.toLowerCase().includes('bekasi');
    
    const greetings = {
      nightEarly: [
        "Selamat Malam! Butuh bantuan darurat untuk sedot WC? Tim kami tetap siaga.",
        "Malam-malam septic tank penuh? Kami siap membantu!"
      ],
      morning: [
        "Selamat Pagi! Siap melayani kebutuhan sedot WC Anda dengan cepat.",
        "Pagi! Sedot WC Karawang melayani Anda hari ini dengan penuh semangat."
      ],
      day: [
        "Selamat Siang! Layanan sedot WC Karawang profesional & bergaransi. Ada yang bisa dibantu?",
        "Halo! Sedot WC Karawang hadir untuk solusi saluran mampet Anda."
      ],
      nightLate: [
        "Selamat Malam! Sedot WC Karawang siap membantu masalah Anda kapan saja.",
        "Butuh bantuan sedot WC di malam hari? Silakan klik tombol ini."
      ]
    };

    const areaSpecific = {
        karawang: [
            "Halo warga Karawang! Butuh solusi WC mampet cepat & bersih?",
            "Sedang di Karawang? Jasa sedot WC profesional siap meluncur."
        ],
        bekasi: [
            "Halo warga Bekasi! Siap melayani sedot WC mampet di area Bekasi.",
            "Area Bekasi butuh sedot WC? Kami ahlinya!"
        ],
        default: [
            "Halo! Ada masalah sedot WC yang perlu dibantu hari ini?",
            "Layanan sedot WC profesional, cepat, dan bergaransi untuk Anda."
        ]
    };

    let options: string[] = [];
    if (h >= 0 && h < 5) options = greetings.nightEarly;
    else if (h >= 5 && h < 12) options = greetings.morning;
    else if (h >= 12 && h < 18) options = greetings.day;
    else options = greetings.nightLate;

    // Mix in area specific if relevant
    if (isKarawang) options = [...options, ...areaSpecific.karawang];
    if (isBekasi) options = [...options, ...areaSpecific.bekasi];
    if (!isKarawang && !isBekasi) options = [...options, ...areaSpecific.default];

    return options[Math.floor(Math.random() * options.length)];
  }, [coverageSearch, hour]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [isSortedAZ, setIsSortedAZ] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState<{lat: number, lng: number} | null>(null);
  const [eta, setEta] = useState<number | null>(null);
  const [hasUnread, setHasUnread] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [isAskAdminModalOpen, setIsAskAdminModalOpen] = useState(false);
  const [askAdminQuestion, setAskAdminQuestion] = useState("");
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [isFeedbackActive, setIsFeedbackActive] = useState(false);
  const [lastContacted, setLastContacted] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("whatsapp_last_contacted");
    }
    return null;
  });
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
      const nextIndex = (focusedIndex + 1) % 10;
      setFocusedIndex(nextIndex);
      menuButtonsRef.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (focusedIndex - 1 + 10) % 10;
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
        setIsMenuOpen(true);
      }, 10000); // 10s
    };

    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('mousedown', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);
    
    // Initial start
    resetIdleTimer();

    return () => {
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('mousedown', resetIdleTimer);
      window.removeEventListener('keypress', resetIdleTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPolarity(currentScrollY > lastScrollY ? 'repel' : 'attract');
      lastScrollY = currentScrollY;
      resetIdleTimer();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      const jakartaDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
      setHour(jakartaDate.getHours());
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
    // Simulate incoming message
    const timer = setTimeout(() => {
        setHasUnread(true);
    }, 5000);
    return () => clearTimeout(timer);
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
    executeWhatsApp();
  };

  const detectLocation = async (): Promise<string | null> => {
    return new Promise((resolve) => {
      if (typeof navigator === 'undefined' || !navigator.geolocation) {
        resolve(null);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
             const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
             const data = await response.json();
             const city = data.address.city || data.address.town || data.address.municipality || data.address.village;
             resolve(city);
          } catch(e) {
             console.error("Geocoding failed:", e);
             resolve(null);
          }
        },
        () => resolve(null),
        { timeout: 5000 }
      );
    });
  };

  const executeWhatsApp = async (customMessage?: string) => {
    if (!isMuted && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'floating_whatsapp_button'
      });
    }

    let message = customMessage || "Halo Mitra Bersih Karawang, toilet saya bermasalah/penuh. Saya butuh respon cepat sekarang.";
    
    let location = localStorage.getItem('selectedKecamatan');
    if (!location) {
      location = await detectLocation();
    }
    
    if (location) {
      message = `*Info Lokasi: ${location}*\n\n${message}`;
    }

    const text = encodeURIComponent(message);
    window.open(`https://wa.me/62${whatsappNumber.substring(1)}?text=${text}`, "_blank");
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const timestamp = `${dd}/${mm} ${hh}:${min}`;
    setLastContacted(timestamp);
    localStorage.setItem("whatsapp_last_contacted", timestamp);
  };

  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedSuccess(true);
    setIsFeedbackActive(true);
    setTimeout(() => {
        setCopiedSuccess(false);
        setIsFeedbackActive(false);
    }, 2000);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
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

  const startMomentumDrift = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      
      const animate = () => {
          momentumRef.current.vx *= 0.95; // Friction
          momentumRef.current.vy *= 0.95; // Friction
          
          if (Math.abs(momentumRef.current.vx) < 0.1 && Math.abs(momentumRef.current.vy) < 0.1) {
              animationFrameRef.current = null;
              checkDocking();
              return;
          }
          
          setPosition(prev => ({ 
              x: prev.x + momentumRef.current.vx * 10, 
              y: prev.y + momentumRef.current.vy * 10 
          }));
          animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
  };

  const checkDocking = () => {
    // Magnetic Docking logic
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Check if within 50px of bottom-right corner
    const btnRect = buttonRef.current?.getBoundingClientRect();
    if (!btnRect) return;

    const distToCornerX = Math.abs(viewportWidth - btnRect.right);
    const distToCornerY = Math.abs(viewportHeight - btnRect.bottom);
    
    if (distToCornerX < 50 && distToCornerY < 50) {
      setPosition({ x: 0, y: 0 }); // Docking state
      setIsNearEdge(false);
    } else {
      setIsNearEdge(false);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    
    startMomentumDrift();
    
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
    
    // Trigger multi-stage vibration if displaced (dragged)
    if (!isMuted && typeof navigator !== 'undefined' && navigator.vibrate && isMobile) {
        if (Math.abs(position.x) > 5 || Math.abs(position.y) > 5) {
             navigator.vibrate([50, 30, 100]); // Multi-stage vibration pattern
        }
    }
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
    
    setMouseDist(distance);
    
    // Suction effect
    if (isDragging && distance < 50) {
      setPosition({ x: 0, y: 0 });
    }
    
    // Proximity check for border and ripple
    setIsNearProximity(distance < magneticRange);
    
    if (distance < magneticRange && !isMouseInRangeRef.current) {
      addRipple();
      isMouseInRangeRef.current = true;
    } else if (distance >= magneticRange) {
      isMouseInRangeRef.current = false;
    }
    
    // Magnetic spring-based attraction/repulsion effect
    if (distance < 100 && !isDragging) {
      // Calculate variable friction: higher friction near the center
      const friction = 1 - (distance / 100); 
      const strength = (polarity === 'repel' ? 0.5 : -0.5) * (1 + friction * 2); // Apply friction/weight
      const forceX = (distanceX / distance) * (100 - distance) * strength;
      const forceY = (distanceY / distance) * (100 - distance) * strength;
      
      setPosition((prev) => ({
        x: prev.x - forceX,
        y: prev.y - forceY,
      }));
    } else if (!isDragging && !isOrbital) {
      // Gentle return to origin with momentum-based overshoot when just exiting
      if (isMouseInRangeRef.current) {
        // Calculate velocity based on last position
        const velX = (position.x) * 0.2; 
        const velY = (position.y) * 0.2;
        
        // Add overshoot momentum
        setPosition((prev) => ({
            x: (prev.x * 0.9) + (velX * 0.5),
            y: (prev.y * 0.9) + (velY * 0.5),
        }));
        isMouseInRangeRef.current = false;
      } else {
        // Gentle return to origin
        setPosition((prev) => ({
            x: prev.x * 0.9,
            y: prev.y * 0.9,
        }));
      }
    }

    // Orbit proximity check
    if (distance < 100) {
      setIsOrbital(false);
      if (stationaryTimer.current) clearTimeout(stationaryTimer.current);
      stationaryTimer.current = setTimeout(() => setIsOrbital(true), 2000);
    } else {
      setIsOrbital(false);
      if (stationaryTimer.current) clearTimeout(stationaryTimer.current);
    }
    
    // Tilt calculation
    const relativeX = (clientX - left) / width - 0.5;
    const relativeY = (clientY - top) / height - 0.5;
    setTilt({ x: relativeY * 20, y: relativeX * -20 });

    // Calculate velocity
    const currentTime = Date.now();
    
    // Reset orbit on significant movement
    if (Math.sqrt((clientX - lastMousePos.current.x) ** 2 + (clientY - lastMousePos.current.y) ** 2) > 5) {
       setIsOrbital(false);
       if (stationaryTimer.current) clearTimeout(stationaryTimer.current);
       stationaryTimer.current = setTimeout(() => setIsOrbital(true), 2000);
    }
    
    const deltaTime = Math.max(currentTime - lastTime.current, 1);
    const vx = (clientX - lastMousePos.current.x) / deltaTime;
    const vy = (clientY - lastMousePos.current.y) / deltaTime;
    momentumRef.current = { vx, vy };
    
    const deltaDist = Math.sqrt((clientX - lastMousePos.current.x) ** 2 + (clientY - lastMousePos.current.y) ** 2);
    const velocity = deltaDist / deltaTime; // pixels per ms
    setVelocity(velocity);
    
    if (velocity > 0.5) {
      setTrail((prev) => [...prev, { id: Date.now(), x: clientX, y: clientY }]);
    }
    
    lastMousePos.current = { x: clientX, y: clientY };
    lastTime.current = currentTime;
    
    // Apply Orbit if active
    if (isOrbital) {
        orbitAngle.current += 0.05;
        const radius = 50;
        const orbitX = Math.cos(orbitAngle.current) * radius;
        const orbitY = Math.sin(orbitAngle.current) * radius;
        setPosition({ x: orbitX, y: orbitY });
    }
    
    lastMousePos.current = { x: clientX, y: clientY };
    lastTime.current = currentTime;

    // Magnetic snap effect
    const range = magneticRange; // Dynamic range
    if (distance < range) {
       // Repel force when very close
       const repelRange = 50; // Increased from 30 to 50 (30 + 20)
       let repelX = 0;
       let repelY = 0;
       if (distance < repelRange) {
         if (!isRepelling) {
           setIsRepelling(true);
           setTimeout(() => setIsRepelling(false), 500);
         }
         const repelStrength = 0.5;
         repelX = -distanceX * repelStrength;
         repelY = -distanceY * repelStrength;
       }

       // Elastic resistance: friction increases (movement decreases) as distance from anchor increases
       const baseFriction = serviceStatus === 'Busy' ? 0.08 : 0.2;
       const currentDistFromCenter = Math.sqrt(position.x ** 2 + position.y ** 2);
       const friction = baseFriction * (1 - Math.min(0.7, currentDistFromCenter / range));
       
       // Acceleration pull/push factor based on distance
       const factor = Math.pow(1 - distance / range, 2); 
       const forceMultiplier = polarity === 'attract' ? 0.5 : -0.5;
       
       const targetPos = { 
         x: (distanceX * forceMultiplier + repelX) * (1 + factor), 
         y: (distanceY * forceMultiplier + repelY) * (1 + factor) 
       };
       
       const newPos = { 
          x: position.x + (targetPos.x - position.x) * friction, 
          y: position.y + (targetPos.y - position.y) * friction 
       };
       setPosition(newPos);
       if (Math.random() > 0.6) {
          triggerParticles(newPos.x, newPos.y);
       }
    } else {
       // Return to center with friction
       setPosition(prev => ({
          x: prev.x * 0.9,
          y: prev.y * 0.9
       }));
       setTilt({ x: 0, y: 0 });
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
            className={`${isDarkMode ? 'bg-slate-900 text-slate-100 border-slate-700' : 'bg-white text-slate-850 border-slate-100'} px-4 py-3 rounded-2xl shadow-2xl border flex items-start space-x-3 max-w-xs relative pointer-events-auto`}
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
              <div className="flex items-center justify-between">
                <h4 className="font-display font-extrabold text-xs sm:text-sm text-zinc-950">Customer Support</h4>
                <div className="flex gap-1">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-1 rounded-full hover:bg-slate-200 transition-colors"
                    title="Toggle Dark Mode"
                  >
                    {isDarkMode ? <Sun className="w-4 h-4 text-slate-600" /> : <Moon className="w-4 h-4 text-slate-600" />}
                  </button>
                  <button
                    onClick={() => setIsUiSoundEnabled(!isUiSoundEnabled)}
                    className="p-1 rounded-full hover:bg-slate-200 transition-colors"
                    title="Toggle UI Sound"
                  >
                    {isUiSoundEnabled ? <Volume2 className="w-4 h-4 text-slate-600" /> : <VolumeX className="w-4 h-4 text-slate-600" />}
                  </button>
                </div>
              </div>
              
              {/* Testimonial Carousel */}
              <div className="relative h-24 overflow-hidden bg-emerald-50 rounded-lg p-2 mb-2 border border-emerald-100 touch-pan-x">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -50) {
                      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
                    } else if (offset.x > 50) {
                      setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                    }
                  }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="absolute inset-0 p-2 flex flex-col justify-center"
                    >
                      <p className="text-[10px] font-bold text-emerald-800 italic leading-snug">"{testimonials[testimonialIndex].text}"</p>
                      <p className="text-[9px] text-emerald-600 font-bold mt-1">— {testimonials[testimonialIndex].name}</p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                
                {/* Indicators */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
                  {testimonials.map((_, idx) => (
                    <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === testimonialIndex ? 'bg-emerald-600' : 'bg-emerald-300'}`} />
                  ))}
                </div>
              </div>

              <div className="max-h-24 overflow-y-auto pr-1" ref={chatContainerRef}>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  {typedText}
                </p>
              </div>

              {/* Quick Questions */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Berapa harga?', 'Bisa malam ini?', 'Area mana saja?'].map((q) => (
                  <button
                    key={q}
                    onClick={() => executeWhatsApp(q)}
                    className={`text-[10px] px-2 py-1 rounded-full transition-colors font-medium ${
                      isDarkMode
                        ? 'bg-emerald-900/50 text-emerald-200 hover:bg-emerald-800'
                        : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                    }`}
                  >
                    {q}
                  </button>
                ))}
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
          <AnimatePresence>
            {currentAlert && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-20 right-0 bg-white p-3 rounded-lg shadow-xl border border-emerald-100 z-[60] flex items-center gap-2 pointer-events-auto w-max mb-2"
              >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-[10px] text-zinc-800 font-bold">{currentAlert}</p>
              </motion.div>
            )}
          </AnimatePresence>
          {particles.map(p => (
              <motion.div
                key={p.id}
                className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full z-[55] pointer-events-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x: p.x, y: p.y }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
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

          <div className="bg-white text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full shadow-md border border-emerald-100 flex flex-col items-center shrink-0 pointer-events-auto gap-1">
             <div className="flex items-center gap-1.5">
                <span className={`flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full border ${serviceStatus === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${serviceStatus === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                    {serviceStatus}
                </span>

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
             {lastContacted && (
               <motion.span 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ type: "spring", stiffness: 300, damping: 15 }}
                 className="text-[8px] text-emerald-500/70 italic block mt-0.5"
               >
                 Last: {lastContacted}
               </motion.span>
             )}
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

          <AnimatePresence>
            {isPricingModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute -top-[400px] right-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-emerald-100 z-[55] flex flex-col gap-4 pointer-events-auto w-80"
              >
                  <div className="flex justify-between items-center">
                      <h4 className="text-lg font-bold text-slate-800">Pricing List</h4>
                      <button onClick={() => setIsPricingModalOpen(false)} className="text-slate-500 hover:text-slate-700">
                        <X className="w-5 h-5" />
                      </button>
                  </div>
                  {pricingData.map((p, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-emerald-50">
                          <span className="text-sm font-medium text-slate-700">{p.service}</span>
                      </div>
                  ))}
                  <button onClick={() => setIsPricingModalOpen(false)} className="w-full mt-2 bg-emerald-600 text-white p-2 rounded-lg text-sm font-bold">Close</button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isCoverageMapOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-[500px] right-0 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border border-emerald-100 z-[55] flex flex-col gap-2 pointer-events-auto w-80 h-96"
              >
                <div className="flex justify-between items-center px-1 mb-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coverage Map</h4>
                    <button onClick={() => setIsCoverageMapOpen(false)} className="text-slate-500 hover:text-slate-700">
                      <X className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex-1 w-full h-full">
                  <CoverageMap />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isActionsOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute -top-60 right-0 bg-white p-3 rounded-2xl shadow-2xl border border-emerald-100 z-[55] flex flex-col gap-2 pointer-events-auto w-48"
              >
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">Quick Actions</h4>
                  <button onClick={() => { window.open('tel:+6281234567890'); setIsActionsOpen(false); }} className="flex items-center gap-3 w-full p-2 hover:bg-emerald-50 rounded-lg text-sm font-bold text-slate-700">
                    <Phone className="w-4 h-4 text-emerald-600" /> Call Us
                  </button>
                  <button onClick={() => { executeWhatsApp(); setIsActionsOpen(false); }} className="flex items-center gap-3 w-full p-2 hover:bg-emerald-50 rounded-lg text-sm font-bold text-slate-700">
                    <MessageCircle className="w-4 h-4 text-emerald-600" /> Chat WhatsApp
                  </button>
                  <button onClick={() => { setIsPricingModalOpen(true); setIsActionsOpen(false); }} className="flex items-center gap-3 w-full p-2 hover:bg-emerald-50 rounded-lg text-sm font-bold text-slate-700">
                    <Calculator className="w-4 h-4 text-emerald-600" /> See Pricing
                  </button>
                  <button onClick={() => { setIsSchedulingModalOpen(true); setIsActionsOpen(false); }} className="flex items-center gap-3 w-full p-2 hover:bg-emerald-50 rounded-lg text-sm font-bold text-slate-700">
                    <Calendar className="w-4 h-4 text-emerald-600" /> Schedule Appointment
                  </button>
                  <button onClick={() => { setIsCoverageMapOpen(true); setIsActionsOpen(false); }} className="flex items-center gap-3 w-full p-2 hover:bg-emerald-50 rounded-lg text-sm font-bold text-slate-700">
                    <MapPin className="w-4 h-4 text-emerald-600" /> Check Coverage
                  </button>
                  <div className="flex flex-col gap-2 p-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Magnetic Strength</label>
                    <input
                        type="range"
                        min="50"
                        max="300"
                        value={magneticRange}
                        onChange={(e) => setMagneticRange(Number(e.target.value))}
                        className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isSchedulingModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-[350px] right-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-emerald-100 z-[55] flex flex-col gap-4 pointer-events-auto w-80"
              >
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold text-slate-800">Schedule Appointment</h4>
                    <button onClick={() => setIsSchedulingModalOpen(false)} className="text-slate-500 hover:text-slate-700">
                      <X className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Date</label>
                    <input type="date" className="p-2 border border-slate-200 rounded-lg" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Time</label>
                    <input type="time" className="p-2 border border-slate-200 rounded-lg" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
                </div>
                
                <button 
                  onClick={() => {
                    const message = `Halo, saya ingin menjadwalkan layanan pada tanggal ${scheduleDate} jam ${scheduleTime}.`;
                    executeWhatsApp(message);
                    setIsSchedulingModalOpen(false);
                  }}
                  className="w-full bg-emerald-600 text-white p-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
                >
                  Confirm & Chat
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            className="absolute -top-20 right-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg z-[60] pointer-events-auto"
            onClick={() => setIsActionsOpen(!isActionsOpen)}
            whileTap={{ scale: 0.9 }}
          >
              {isActionsOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </motion.button>

          {isMobile && !isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-10 right-0 flex items-center justify-center p-1 bg-white/20 backdrop-blur-sm rounded-full text-white pointer-events-none"
            >
              <GripHorizontal className="w-4 h-4" />
            </motion.div>
          )}

          <motion.button
            ref={buttonRef}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            style={{ filter: "url(#distortionFilter)" }}
            drag={isMobile}
            dragSnapToOrigin={true}
            dragConstraints={{ left: -300, right: 0, top: -600, bottom: 0 }}
            onDrag={(e, info) => {
                const { x, y } = info.offset;
                const { x: vx, y: vy } = info.velocity;
                const speed = Math.sqrt(vx * vx + vy * vy);
                
                // Add ripple if moving fast enough
                if (speed > 500) {
                    const id = Date.now();
                    setDragRipples(prev => [...prev.slice(-4), { id, x, y }]);
                }

                const constraints = { left: -300, right: 0, top: -600, bottom: 0 };
                const isNear = 
                    (x < constraints.left + 50) || 
                    (x > constraints.right - 50) || 
                    (y < constraints.top + 50) || 
                    (y > constraints.bottom - 50);
                if (isNear !== isNearEdge) setIsNearEdge(isNear);
            }}
            onDragEnd={() => {
                setWobble(prev => prev + 1);
                setIsSlamming(true);
                addMagneticWave(velocity);
                setTimeout(() => setIsSlamming(false), 500);
                setDragRipples([]); // Clear ripples on end
            }}
            dragElastic={isNearEdge ? 0.05 : 0.2}
            dragTransition={{
              power: 0.1,
              timeConstant: 250,
              bounceStiffness: 150,
              bounceDamping: 15
            }}
            onMouseLeave={(e) => { 
                handlePointerUp(); 
                setPosition({ x: 0, y: 0 }); 
                setTilt({ x: 0, y: 0 });
                setIsHovered(false); 
                if (copyTooltipTimeoutRef.current) clearTimeout(copyTooltipTimeoutRef.current);
                setShowCopyTooltip(false);
            }}
            onMouseEnter={() => {
                setIsHovered(true);
                copyTooltipTimeoutRef.current = setTimeout(() => setShowCopyTooltip(true), 1500);
                
                if (!isMuted && isUiSoundEnabled) {
                  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                  const now = audioContext.currentTime;
                  const duration = 0.03;

                  // Base and Harmonic oscillators
                  const osc1 = audioContext.createOscillator();
                  const osc2 = audioContext.createOscillator();
                  const gainNode = audioContext.createGain();

                  osc1.type = 'sine';
                  osc1.frequency.setValueAtTime(1800, now);
                  
                  osc2.type = 'sine';
                  osc2.frequency.setValueAtTime(3600, now); // Harmonic

                  osc1.connect(gainNode);
                  osc2.connect(gainNode);
                  gainNode.connect(audioContext.destination);

                  gainNode.gain.setValueAtTime(0.01, now);
                  gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

                  osc1.start(now);
                  osc2.start(now);
                  osc1.stop(now + duration);
                  osc2.stop(now + duration);
                }
            }}
            onContextMenu={(e: MouseEvent) => { e.preventDefault(); handleCopyPhoneNumber(); }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            animate={{
              x: isDragging ? position.x + (Math.random() - 0.5) * 5 : position.x,
              y: isDragging ? position.y + (Math.random() - 0.5) * 5 : (isSlamming ? [position.y - 10, position.y + 5, position.y] : position.y),
              rotateX: tilt.x,
              rotateY: tilt.y,
              skewX: velocity * 2,
              skewY: velocity * 2,
              scale: isDragging ? [1, 1.05, 0.95, 1] : (isSlamming ? [1, 0.8, 1.2, 1] : (isLongPress ? 1.15 : (isHovered ? [1.1, 1.15, 1.1] : [1, 1.05, 1]))),
              y: isSlamming ? [position.y - 10, position.y + 5, position.y] : position.y,
              skewX: mouseDist < 100 ? (position.x / 10) : (velocity * 2),
              skewY: mouseDist < 100 ? (position.y / 10) : (velocity * 2),
              rotate: wobble ? [0, -10, 10, -5, 5, 0] : (isLongPress ? 0 : (isShaking ? [0, -10, 10, -10, 10, 0] : 0)),
              boxShadow: isLongPress 
                ? "0 0 20px 10px rgba(255, 255, 255, 0.8)" 
                : [
                    `0 0 ${10 + (100 - Math.min(mouseDist, 100)) * 0.3}px ${2 + (100 - Math.min(mouseDist, 100)) * 0.1}px rgba(${serviceStatus === 'Active' ? '16, 185, 129' : '245, 158, 11'}, ${0.4 + (100 - Math.min(mouseDist, 100)) * 0.005 + Math.min(0.5, Math.sqrt(position.x ** 2 + position.y ** 2) * 0.01)})`,
                    `0 0 ${15 + (100 - Math.min(mouseDist, 100)) * 0.4}px ${5 + (100 - Math.min(mouseDist, 100)) * 0.2}px rgba(${serviceStatus === 'Active' ? '16, 185, 129' : '245, 158, 11'}, ${0.2 + (100 - Math.min(mouseDist, 100)) * 0.005 + Math.min(0.5, Math.sqrt(position.x ** 2 + position.y ** 2) * 0.01)})`,
                    `0 0 ${10 + (100 - Math.min(mouseDist, 100)) * 0.3}px ${2 + (100 - Math.min(mouseDist, 100)) * 0.1}px rgba(${serviceStatus === 'Active' ? '16, 185, 129' : '245, 158, 11'}, ${0.4 + (100 - Math.min(mouseDist, 100)) * 0.005 + Math.min(0.5, Math.sqrt(position.x ** 2 + position.y ** 2) * 0.01)})`
                  ],
              opacity: 1,
              backgroundColor: isFeedbackActive ? "#34d399" : "#059669"
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15 + Math.min(30, Math.sqrt(position.x ** 2 + position.y ** 2) / 5),
            }}
            style={{ 
                perspective: 500,
                boxShadow: `${-position.x * 0.2}px ${-position.y * 0.2}px ${20 + (1 - Math.min(1, mouseDist / 200)) * 40}px rgba(${serviceStatus === 'Active' ? '16, 185, 129' : '245, 158, 11'}, ${0.3 + (1 - Math.min(1, mouseDist / 200)) * 0.4})`,
            }}
            className="relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 w-14 h-14 text-white rounded-full flex items-center justify-center relative select-none pointer-events-auto cursor-pointer focus:outline-none transition-shadow duration-300 ease-in-out"
            id="btn-floating-wa"
            data-nosnippet
            onClick={() => {
              addRipple();
              handleWhatsAppAction();
              setHasUnread(false);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleWhatsAppAction();
              }
            }}
            initial={isMobile ? { scale: 0, y: 50, opacity: 0 } : { scale: 0.3, borderRadius: "15px", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: randomDelay,
              x: { type: "spring", stiffness: 100, damping: 20 },
              y: { type: "spring", stiffness: 100, damping: 20 },
              rotate: { type: "tween", duration: 0.6 },
              scale: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
              },
              borderRadius: { duration: 0.6, ease: "easeOut" },
              boxShadow: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut"
              },
              backgroundColor: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            title="Hubungi Kami Melalui WhatsApp"
            aria-label="Buka WhatsApp untuk layanan Sedot WC"
          >
            <motion.div 
               className="absolute inset-0 rounded-full pointer-events-none"
               animate={{ 
                 background: `radial-gradient(circle, rgba(255,255,255,${Math.max(0, 0.4 - mouseDist/150)}) 0%, rgba(255,255,255,0) 70%)` 
               }}
            />
            {/* High-Energy Magnetic Snap Bloom */}
            <motion.div
              className="absolute -inset-4 bg-white rounded-full pointer-events-none z-10 blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isSlamming ? [0, 0.8, 0] : 0,
                scale: isSlamming ? [0.8, 1.5, 0.8] : 0.8
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            {/* Magnetic Range Indicator */}
            <svg className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none" viewBox="0 0 100 100">
              {/* Existing Range Indicator */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={polarity === 'attract' ? '#3b82f6' : '#f43f5e'}
                strokeWidth="2"
                strokeDasharray="283"
                animate={{
                    strokeDashoffset: 283 - (magneticRange / 200) * 283,
                    opacity: isNearProximity ? 0.8 : 0
                }}
                className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              />
              
              {/* Pulsating Concentric Circles (Attract Mode Only) */}
              {polarity === 'attract' && isNearProximity && [1, 2].map((i) => (
                <motion.circle
                  key={i}
                  cx="50"
                  cy="50"
                  r={30 + i * 10}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  initial={{ opacity: 0.5, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.5, 0, 0.5], 
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut" 
                  }}
                />
              ))}
            </svg>
            {hasUnread && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-50"
              >
                <motion.div 
                  className="w-full h-full bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </motion.div>
            )}
            
            {/* Repel Zone Indicators */}
            <AnimatePresence>
                {isNearProximity && (
                    <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className={`absolute w-2 h-2 ${polarity === 'repel' ? 'bg-rose-400' : 'bg-emerald-400'} rounded-full`}
                                style={{ transform: `rotate(${i * 45}deg) translateY(-40px)` }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Battery/Status Indicator */}
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`absolute bottom-0 -left-1 w-6 h-6 bg-white ${serviceStatus === 'Active' ? 'text-emerald-600' : 'text-amber-500'} rounded-full border ${serviceStatus === 'Active' ? 'border-emerald-200' : 'border-amber-200'} flex items-center justify-center z-50 shadow-sm`}
            >
                <motion.div
                    animate={{ 
                        scale: serviceStatus === 'Active' ? [1, 1.2, 1] : [1, 0.8, 1],
                        rotate: serviceStatus === 'Active' ? 0 : [0, -10, 10, -10, 0]
                    }}
                    transition={{ repeat: Infinity, duration: serviceStatus === 'Active' ? 2 : 0.5 }}
                >
                    {serviceStatus === 'Active' ? <Battery className="w-3.5 h-3.5" /> : <BatteryLow className="w-3.5 h-3.5" />}
                </motion.div>
            </motion.div>

            {/* Dynamic Radial Aura */}
            <motion.div
                className="absolute -inset-8 rounded-full pointer-events-none z-10"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: 1 + (isNearEdge ? 0.2 : 0)
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{
                    background: `radial-gradient(circle, ${polarity === 'attract' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(225, 29, 72, 0.4)'} 0%, transparent 70%)`
                }}
            />

            {/* Magnetic Needle Indicator */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-16 flex justify-center items-center pointer-events-none">
                <svg viewBox="0 0 20 60" className="w-full h-full">
                    <line x1="10" y1="50" x2="10" y2="10" stroke="#94a3b8" strokeWidth="2" />
                    <motion.line
                        x1="10" y1="50" x2="10" y2="15"
                        stroke={polarity === 'attract' ? "#3b82f6" : "#e11d48"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        animate={{
                            rotate: (polarity === 'attract' ? 1 : -1) * Math.min(60, Math.abs(position.x) + Math.abs(position.y)),
                        }}
                        style={{ originX: "10px", originY: "50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    />
                </svg>
            </div>

            {/* Subtle Polarity Status Labels */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-2 text-[7px] font-bold text-gray-400">
                <motion.span
                    animate={{
                        opacity: polarity === 'attract' ? [0.4, 0.8, 0.4] : 0.2,
                        scale: polarity === 'attract' ? 1.05 : 1
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={polarity === 'attract' ? 'text-blue-500' : 'text-gray-400'}
                >
                    ATTR
                </motion.span>
                <motion.span
                    animate={{
                        opacity: polarity === 'repel' ? [0.4, 0.8, 0.4] : 0.2,
                        scale: polarity === 'repel' ? 1.05 : 1
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={polarity === 'repel' ? 'text-rose-500' : 'text-gray-400'}
                >
                    REPL
                </motion.span>
            </div>

            {/* Physical-style Toggle Switch */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-1">
                <div className="flex flex-col items-center gap-0.5">
                    <Magnet className={`w-4 h-4 rotate-180 transition-colors duration-300 ${polarity === 'attract' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <motion.span 
                        className="text-[8px] font-bold text-gray-500"
                        animate={{ opacity: polarity === 'attract' ? [0.5, 1, 0.5] : 0.5 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >ATTRACT</motion.span>
                </div>
                <motion.div 
                    className={`w-14 h-7 ${polarity === 'attract' ? 'bg-blue-600' : 'bg-rose-600'} rounded-full p-1 cursor-pointer shadow-md flex items-center ${polarity === 'attract' ? 'justify-start' : 'justify-end'} transition-colors duration-300`}
                    onClick={(e) => {
                        e.stopPropagation();
                        // Trigger Sound
                        if (!isMuted && isUiSoundEnabled) {
                            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                            const osc = audioContext.createOscillator();
                            const gain = audioContext.createGain();
                            osc.type = 'square';
                            osc.frequency.setValueAtTime(polarity === 'attract' ? 600 : 400, audioContext.currentTime);
                            gain.gain.setValueAtTime(0.1, audioContext.currentTime);
                            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
                            osc.connect(gain);
                            gain.connect(audioContext.destination);
                            osc.start();
                            osc.stop(audioContext.currentTime + 0.05);
                        }
                        setPolarityFlash(true);
                        setTimeout(() => setPolarityFlash(false), 300);
                        setPolarity(prev => prev === 'attract' ? 'repel' : 'attract');
                    }}
                    whileHover={{ scale: 1.05 }}
                    title={`Magnetic Mode: ${polarity.toUpperCase()}`}
                >
                    <motion.div 
                        className="w-5 h-5 bg-white rounded-full shadow-sm"
                        layout
                        transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    />
                </motion.div>
                <div className="flex flex-col items-center gap-0.5">
                    <Magnet className={`w-4 h-4 transition-colors duration-300 ${polarity === 'repel' ? 'text-rose-600' : 'text-gray-400'}`} />
                    <motion.span 
                        className="text-[8px] font-bold text-gray-500"
                        animate={{ opacity: polarity === 'repel' ? [0.5, 1, 0.5] : 0.5 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >REPEL</motion.span>
                </div>
            </div>
            {/* Color-shifting Glow */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-0"
              animate={{
                boxShadow: polarity === 'attract' 
                  ? '0 0 20px 5px rgba(59, 130, 246, 0.3)' 
                  : '0 0 20px 5px rgba(225, 29, 72, 0.3)'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            {/* Polarity Flash */}
            <motion.div
              className={`absolute -inset-1 border-4 rounded-full pointer-events-none z-20 ${polarity === 'attract' ? 'border-blue-500' : 'border-rose-500'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: polarityFlash ? [0, 1, 0] : 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Ripple Animation */}
            {ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                className={`absolute inset-0 rounded-full border-2 ${polarity === 'attract' ? 'border-blue-300' : 'border-rose-300'} pointer-events-none`}
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
            
            {/* Secondary High-Frequency Ripple Effect */}
            {mouseDist < 50 && (
              <motion.div
                className={`absolute inset-0 rounded-full border ${polarity === 'attract' ? 'border-blue-400' : 'border-rose-400'} pointer-events-none`}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
              />
            )}
            
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
                    className={`absolute -inset-0.5 rounded-full border-2 ${serviceStatus === 'Active' ? 'border-emerald-400/60' : 'border-amber-400/60'} pointer-events-none`}
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
            {/* SVG Path Trail */}
            <svg className="fixed inset-0 w-full h-full pointer-events-none z-0">
              <path
                d={trail.length > 1 ? `M ${trail.map(t => `${t.x} ${t.y}`).join(" L ")}` : ""}
                stroke="white"
                strokeOpacity="0.3"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Magnetic Waves */}
              {magneticWaves.map((wave) => (
                <motion.circle
                  key={wave.id}
                  cx="50%"
                  cy="50%"
                  initial={{ r: 20, opacity: 0.8 }}
                  animate={{ r: 20 + wave.velocity * 50, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              ))}
            </svg>
            
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-white rounded-full pointer-events-none"
              />
            ))}
            <motion.div
              animate={{ 
                rotate: isHovered ? 15 : 0,
                x: tilt.y * -0.2,
                y: tilt.x * 0.2
              }}
              transition={{ duration: 0.1, ease: "linear" }}
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
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -bottom-7 right-0 bg-emerald-100 text-emerald-800 text-[8px] px-2 py-0.5 rounded-full font-bold shadow-sm whitespace-nowrap border border-emerald-200"
            >
              {helpCount}+ terbantu
            </motion.div>
          </motion.button>
        </div>
      </div>
      
    </motion.div>
  );
}
