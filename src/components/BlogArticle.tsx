import React from 'react';
import { Link } from 'react-router-dom';

const BlogArticle: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-slate-800">
      <h1 className="text-4xl font-bold mb-6 text-emerald-900 tracking-tight">Tips Mengatasi WC Mampet di Karawang: Panduan Praktis dan Cepat</h1>
      
      <p className="text-lg mb-6 leading-relaxed">
        Masalah WC mampet tentu sangat mengganggu kenyamanan rumah tangga, apalagi jika terjadi tiba-tiba. Bagi warga di wilayah Karawang dan sekitarnya, tidak perlu panik. Berikut adalah panduan komprehensif mengenai penyebab dan cara mengatasi WC mampet, serta kapan Anda harus menghubungi jasa sedot WC profesional.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Penyebab Umum WC Mampet</h2>
      <p className="mb-4 leading-relaxed">
        Sebelum mengambil tindakan, penting untuk memahami mengapa WC bisa mampet. Umumnya, masalah ini disebabkan oleh penumpukan sampah non-organik di pipa, saluran septictank yang penuh, atau adanya sumbatan benda keras.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-emerald-700">1. Penggunaan Tisu Berlebihan</h3>
      <p className="mb-4 leading-relaxed">
        Banyak orang tidak tahu bahwa meski tisu terasa lembut, tisu tidak mudah hancur didalam air pipa, yang sering menyebabkan sumbatan serius seiring waktu.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-emerald-700">2. Septic Tank Penuh</h3>
      <p className="mb-4 leading-relaxed">
        Jika pemakaian sudah bertahun-tahun, besar kemungkinan septic tank Anda sudah penuh dan memerlukan pengosongan untuk kembali berfungsi normal.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Cara Mengatasi WC Mampet Mandiri</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 leading-relaxed">
        <li><strong>Gunakan Cup Plunger:</strong> Alat penghisap ini adalah pertolongan pertama paling efektif untuk sumbatan ringan.</li>
        <li><strong>Air Panas dan Sabun Cuci Piring:</strong> Campuran ini dapat membantu melunakkan lemak atau kotoran yang menempel di dinding pipa.</li>
        <li><strong>Cuka dan Baking Soda:</strong> Reaksi kimianya dapat membantu memecah sumbatan organik ringan.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Butuh Bantuan Profesional di Karawang?</h2>
      <p className="mb-6 leading-relaxed">
        Jika cara-cara di atas tidak membuahkan hasil, kemungkinan besar masalahnya terletak pada endapan kotoran yang keras atau septic tank yang sudah penuh. Jangan memaksakan diri agar tidak merusak pipa.
      </p>

      <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 text-center">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Mitra Bersih Karawang - Solusi Cepat & Tuntas</h3>
        <p className="mb-6 text-slate-700">
          Untuk penanganan <Link to="/" className="text-emerald-700 font-bold underline">Sedot WC profesional</Link> di wilayah Karawang dengan harga terjangkau dan peralatan lengkap, hubungi Mitrabersih!
        </p>
        <button 
          onClick={() => window.open('https://wa.me/6281212345678', '_blank')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          Hubungi WhatsApp Sekarang
        </button>
      </div>
    </div>
  );
};

export default BlogArticle;
