import { Phone, MapPin, CalendarClock, Mail, Instagram, Facebook } from "lucide-react";

import logoUrl from "../assets/images/logo_mitra_bersih_1779896054697.png";

interface FooterProps {
  whatsappNumber: string;
}

export default function Footer({ whatsappNumber }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const textEncoded = encodeURIComponent(
    "Halo Mitra Bersih Karawang, saya butuh bantuan mengenai masalah saluran WC mampet."
  );
  const waUrl = `https://wa.me/62${whatsappNumber.substring(1)}?text=${textEncoded}`;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-zinc-950 p-0.5 rounded-full shadow-md flex items-center justify-center border border-zinc-800">
                <img 
                  src={logoUrl} 
                  alt="Logo Mitra Bersih" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-base tracking-tight leading-none">
                  MITRA BERSIH
                </span>
                <span className="text-xs font-bold font-sans tracking-widest text-amber-300">
                  KARAWANG
                </span>
              </div>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              Jasa sedot WC profesional dan pelancaran saluran tersumbat nomor satu di Karawang. Cepat, bersih, murah dan bergaransi resmi.
            </p>
            
            <div className="flex items-center space-x-2 bg-slate-900 p-3 rounded-xl border border-slate-850 w-fit">
              <CalendarClock className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 font-bold tracking-wider">Layanan Darurat 24 Jam</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-base tracking-widest uppercase">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#layanan" className="hover:text-amber-300 transition-colors">
                  Sedot Septic Tank Penuh
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-300 transition-colors">
                  Pelancaran WC Mampet
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-300 transition-colors">
                  Pelancaran Wasfafel & Pipa
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-300 transition-colors">
                  Sedot Limbah Cair Restoran
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-300 transition-colors">
                  Kuras Bak Lemak Industri
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-base tracking-widest uppercase">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#beranda" className="hover:text-amber-300 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-amber-300 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-amber-300 transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-amber-300 transition-colors">
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <a href="#area-layanan" className="hover:text-amber-300 transition-colors">
                  Area Operasional
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Main Contacts Area */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-base tracking-widest uppercase">
              Kontak Kantor
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <span className="leading-relaxed text-xs block">
                    Kantor Pos Utama: Jl. Interchange Karawang Barat, Karawang, Jawa Barat - Indonesia
                  </span>
                  <a 
                    href="https://share.google/Ukg1n7VEVlpssqptX" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-amber-400 hover:text-black transition-colors bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Petunjuk Rute Google Maps</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 fill-current" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-semibold">
                  {whatsappNumber} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs">
                  info@mitrabersihkarawang.com
                </span>
              </li>
            </ul>

            {/* Google Maps Visual Interactive Embed Card */}
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900 group relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.9100782356!2d107.2800310!3d-6.3001890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977df76f4e157%3A0x6bd6c77f0951fa0!2sJl.%20Interchange%20Karawang%20Barat%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1716500000000!5m2!1sid!2sid"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-95 transition-opacity duration-300"
                title="Peta Lokasi Mitra Bersih Karawang"
              ></iframe>
              <div className="absolute inset-0 bg-zinc-950/30 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
            </div>

          </div>

        </div>

        {/* Outer bottom footer area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p className="text-center sm:text-left">
            © {currentYear} MITRA BERSIH KARAWANG. <a href="https://murah.sedotwckarawang.id" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Jasa Sedot WC Karawang</a>, <a href="https://mitrabersih24jam.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Mitra Bersih 24 Jam</a>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/mitrabersihkarawang/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591547755906" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <p className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide text-amber-400">
              Negara Kesatuan Republik Indonesia
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
