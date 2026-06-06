import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ChevronRight, ChevronLeft, Phone } from "lucide-react";

interface StepEstimatorProps {
  onSendMessage: (data: { service: string; volume: string; location: string; price: string }) => void;
}

export function StepCostEstimator({ onSendMessage }: StepEstimatorProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("Sedot WC / Septic Tank");
  const [volume, setVolume] = useState("Kecil (< 2m3)");
  const [location, setLocation] = useState("Karawang Kota");

  const services = ["Sedot WC / Septic Tank", "WC Mampet", "Saluran Mampet", "Limbah Industri"];
  const volumes = ["Kecil (< 2m3)", "Sedang (2-4m3)", "Besar (> 4m3)"];

  const getPrice = () => {
    // Simplified price estimation logic based on Volume & Service
    if (service === "Sedot WC / Septic Tank") {
      if (volume === "Kecil (< 2m3)") return "Rp 350.000";
      if (volume === "Sedang (2-4m3)") return "Rp 500.000";
      return "Rp 750.000+";
    }
    return "Nego (Hubungi Kami)";
  };

  return (
    <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl p-8 shadow-2xl border border-zinc-800">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-amber-400 text-zinc-950 p-2 rounded-xl shadow-md">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display font-extrabold text-xl">Estimator Biaya</h3>
          <p className="text-xs text-slate-300">Langkah {step} / 4</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <label className="block text-sm font-bold text-slate-300">Jenis Jasa</label>
            {services.map(s => (
              <button key={s} onClick={() => { setService(s); setStep(2); }} className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 transition-colors">
                {s}
              </button>
            ))}
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <label className="block text-sm font-bold text-slate-300">Volume Septic Tank</label>
            {volumes.map(v => (
              <button key={v} onClick={() => { setVolume(v); setStep(3); }} className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 transition-colors">
                {v}
              </button>
            ))}
            <button onClick={() => setStep(1)} className="flex items-center text-xs text-slate-400"><ChevronLeft className="w-4 h-4"/> Kembali</button>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
             <label className="block text-sm font-bold text-slate-300">Wilayah</label>
             <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-zinc-800 p-4 rounded-xl">
               {["Karawang Kota", "Telukjambe", "Klari", "Cikampek"].map(loc => <option key={loc} value={loc}>{loc}</option>)}
             </select>
             <button onClick={() => setStep(4)} className="w-full bg-amber-400 text-zinc-950 p-4 rounded-xl font-bold">Lihat Estimasi</button>
             <button onClick={() => setStep(2)} className="flex items-center text-xs text-slate-400"><ChevronLeft className="w-4 h-4"/> Kembali</button>
          </motion.div>
        )}
        {step === 4 && (
          <motion.div key="s4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4">
            <h4 className="text-sm text-slate-400">Estimasi Tarif:</h4>
            <p className="text-3xl font-bold text-amber-400">{getPrice()}</p>
            <button onClick={() => onSendMessage({ service, volume, location, price: getPrice() })} className="w-full bg-emerald-600 p-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Konsultasi via WhatsApp
            </button>
            <button onClick={() => setStep(1)} className="text-xs text-slate-500 underline">Hitung Lagi</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
