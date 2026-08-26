import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ContactForm from "../components/ContactForm";

export default function BekasiPage() {
  const WHATSAPP_NUMBER = "085715654183";

  return (
    <div id="mitra-bersih-bekasi-app" className="relative text-slate-800 bg-white">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section>
          <h1 className="text-4xl font-extrabold text-blue-950 mb-6">Jasa Sedot WC Bekasi Terpercaya</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Mitra Bersih hadir melayani kebutuhan sedot WC, pengurasan tangki septik, dan perbaikan saluran air mampet di seluruh wilayah Bekasi. Kami berkomitmen memberikan layanan terbaik dengan harga yang bersahabat dan hasil yang memuaskan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950 mb-4">✅ Layanan yang Kami Tawarkan</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Sedot WC dan pengurasan tangki septik</li>
            <li>Perbaikan saluran air dan pembuangan mampet</li>
            <li>Pembersihan saluran limbah dan selokan</li>
            <li>Perbaikan pipa bocor atau tersumbat</li>
            <li>Layanan darurat 24 jam setiap hari</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950 mb-4">📍 Wilayah Layanan di Bekasi</h2>
          <p className="text-gray-700 mb-2">Kami melayani seluruh kecamatan dan kelurahan di Bekasi, antara lain:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Bekasi Barat, Bekasi Timur, Bekasi Selatan, Bekasi Utara</li>
            <li>Jatiasih, Jatiwaringin, Pondok Gede, Pondok Melati</li>
            <li>Cikarang, Bantargebang, Mustika Jaya, Medan Satria</li>
            <li>Dan seluruh wilayah sekitarnya</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950 mb-4">💡 Kenapa Harus Memilih Kami?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>✔️ Tenaga kerja berpengalaman dan terlatih</li>
            <li>✔️ Peralatan lengkap dan modern</li>
            <li>✔️ Layanan cepat dan tepat waktu</li>
            <li>✔️ Harga transparan tanpa biaya tersembunyi</li>
            <li>✔️ Buka 24 jam, termasuk hari libur</li>
            <li>✔️ Garansi layanan</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950 mb-4">📞 Kontak Pemesanan</h2>
          <p className="text-gray-700">Untuk pemesanan atau konsultasi, silakan hubungi kami:</p>
          <p className="font-bold text-lg text-blue-950 mt-2">📱 WA/Telp: {WHATSAPP_NUMBER}</p>
          <p className="text-gray-700">🕒 Jam Operasional: 24 Jam Setiap Hari</p>
        </section>
      </main>

      <ContactForm whatsappNumber={WHATSAPP_NUMBER} />
      <Footer whatsappNumber={WHATSAPP_NUMBER} />
      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
