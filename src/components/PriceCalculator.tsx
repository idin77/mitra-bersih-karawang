import { useState } from "react";
import { motion } from "motion/react";
import { pricingOptions } from "../data/pricing";

export default function PriceCalculator() {
    const [selectedOption, setSelectedOption] = useState(pricingOptions[0]);
    const [volume, setVolume] = useState(1);

    return (
        <motion.div 
            className="p-6 bg-white rounded-2xl shadow-xl border border-emerald-100 max-w-md mx-auto my-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-xl font-bold text-emerald-900 mb-4">Kalkulator Harga Layanan</h2>
            <label className="block text-sm font-medium text-slate-700 mb-1">Jenis Layanan</label>
            <select 
                className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg mb-4 text-sm"
                onChange={(e) => setSelectedOption(pricingOptions.find(o => o.name === e.target.value)!)}
            >
                {pricingOptions.map(o => <option key={o.name} value={o.name}>{o.name}</option>)}
            </select>
            <label className="block text-sm font-medium text-slate-700 mb-1">Volume (m³)</label>
            <input 
                type="number" 
                value={volume} 
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg mb-4 text-sm"
                min="1"
            />
            <div className="text-lg font-bold text-emerald-700 bg-emerald-50 p-3 rounded-lg text-center">
                Total Estimasi: Rp {(selectedOption.price * volume).toLocaleString()}
            </div>
        </motion.div>
    );
}
