import { Toilet, Wrench, ShowerHead, Factory } from "lucide-react";

export const services = [
  {
    id: 0,
    icon: <Toilet className="w-8 h-8" />,
    title: "Sedot WC / Septic Tank",
    shortDesc: "Kuras septic tank penuh secara berkala guna mencegah pencemaran udara dan air tanah.",
    priceStart: "Harga Mulai Dari Rp 550RB-an",
    points: [
      "Pengosongan septic tank hingga bersih tuntas",
      "Pemberisihan lumpur mengendap (Kuras Lumpur)",
      "Penyemprotan disinfektan anti bakteri dan bau",
      "Pemeriksaan kualitas pipa masuk & ventilasi",
      "Ramah lingkungan - langsung dibuang ke IPLT resmi"
    ],
    whatsappText: "saya ingin memesan layanan Sedot WC / Septic Tank."
  },
  {
    id: 1,
    icon: <Wrench className="w-8 h-8" />,
    title: "WC Mampet",
    shortDesc: "Pembersihan sumbatan toilet dengan cepat tanpa harus melakukan pembongkaran lantai / pipa.",
    priceStart: "Harga Mulai Dari Rp 450RB-an",
    points: [
      "Metode pengerjaan modern tanpa bongkar paksa",
      "Menghilangkan sumbatan tisu, mainan, pembalut, dll.",
      "Menggunakan mesin spiral/rifid khusus yang aman",
      "Waktu pengerjaan singkat (rata-rata 30-45 menit)",
      "Bergaransi lancar kembali sebelum teknisi pulang"
    ],
    whatsappText: "saya ingin memesan layanan pelancaran WC Mampet."
  },
  {
    id: 2,
    icon: <ShowerHead className="w-8 h-8" />,
    title: "Saluran Mampet",
    shortDesc: "Pelancaran wastafel, cuci piring, pembuangan kamar mandi, talang air, dan pipa air kotor.",
    priceStart: "Harga Mulai Dari Rp 400RB-an",
    points: [
      "Pelancaran saluran wastafel dapur tersumbat lemak",
      "Mengatasi pipa kamar mandi mampet akibat rambut/sabun",
      "Pembersihan pipa paralon mampet dengan rotari mekanis",
      "Pembersihan kotoran kerak lemak dengan tekanan tinggi",
      "Menjamin aliran kembali lancar tanpa merusak paralon"
    ],
    whatsappText: "saya ingin memesan layanan pelancaran Saluran Mampet."
  },
  {
    id: 3,
    icon: <Factory className="w-8 h-8" />,
    title: "Limbah Industri",
    shortDesc: "Pengangkutan dan pembuangan limbah cair non-B3 untuk restoran, hotel, perkantoran, dan pabrik.",
    priceStart: "Harga Hubungi Kami (Nego / Kontrak)",
    points: [
      "Kuras bak penampungan lemak (Grease Trap) restoran",
      "Kuras bak sedimentasi industri & limbah lumpur non-B3",
      "Dukungan armada tangki vacuum kapasitas besar premium",
      "Dokumentasi pembuangan resmi sesuai regulasi lingkungan",
      "Tersedia sistem kontrak kerja sama berkala (Bulanan/Tahunan)"
    ],
    whatsappText: "saya tertarik berkonsultasi mengenai pengolahan Limbah Industri."
  }
];
