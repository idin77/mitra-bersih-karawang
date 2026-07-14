import React, { useState } from 'react';

const BASE_PRICE = 50000;
const PRICE_PER_KM = 5000;

// Estimasi jarak rata-rata dari Kp. Benggol, Tegal Sawah ke masing-masing kecamatan
const KECAMATAN_DATA: Record<string, { distance: number, inArea: boolean }> = {
  "Karawang Timur": { distance: 3, inArea: true },
  "Karawang Barat": { distance: 7, inArea: true },
  "Telukjambe Timur": { distance: 10, inArea: true },
  "Telukjambe Barat": { distance: 15, inArea: true },
  "Klari": { distance: 8, inArea: true },
  "Majalaya": { distance: 6, inArea: true },
  "Purwasari": { distance: 12, inArea: true },
  "Lemahabang": { distance: 16, inArea: true },
  "Rawamerta": { distance: 14, inArea: true },
  "Cikampek": { distance: 18, inArea: false },
  "Kutawaluya": { distance: 20, inArea: false },
};

export default function PriceEstimator() {
  const [selectedKecamatan, setSelectedKecamatan] = useState<string>('');
  const [price, setPrice] = useState<number | null>(null);
  const [isOutOfArea, setIsOutOfArea] = useState<boolean>(false);

  const calculateEstimate = () => {
    const data = KECAMATAN_DATA[selectedKecamatan];
    if (data) {
      if (data.inArea) {
        setPrice(BASE_PRICE + (data.distance * PRICE_PER_KM));
        setIsOutOfArea(false);
      } else {
        setPrice(null);
        setIsOutOfArea(true);
      }
    } else {
      setPrice(null);
      setIsOutOfArea(false);
    }
  };

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-slate-800">Estimasi Biaya</h3>
      <p className="text-sm text-slate-600 mb-4">
        Pilih kecamatan lokasi Anda untuk mendapatkan estimasi harga yang lebih akurat.
      </p>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">Pilih Kecamatan:</label>
        <select 
          value={selectedKecamatan}
          onChange={(e) => {
            const val = e.target.value;
            setSelectedKecamatan(val);
            localStorage.setItem('selectedKecamatan', val);
          }}
          className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        >
          <option value="">-- Pilih Kecamatan --</option>
          {Object.keys(KECAMATAN_DATA).map((kec) => (
            <option key={kec} value={kec}>{kec}</option>
          ))}
        </select>
      </div>
      <button 
        onClick={calculateEstimate}
        disabled={!selectedKecamatan}
        className="w-full bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700 transition-colors disabled:bg-slate-400"
      >
        Hitung Estimasi
      </button>

      {price !== null && (
        <div className="mt-4 p-4 bg-emerald-50 rounded-md border border-emerald-100">
          <p className="text-emerald-800 font-medium">Estimasi Harga ke {selectedKecamatan}:</p>
          <p className="text-2xl font-bold text-emerald-900">Rp {price.toLocaleString('id-ID')}</p>
        </div>
      )}
      {isOutOfArea && (
        <div className="mt-4 p-4 bg-amber-50 rounded-md border border-amber-100">
          <p className="text-amber-800 font-medium">Hubungi Kami untuk Jangkauan Luar Area</p>
        </div>
      )}
    </div>
  );
}
