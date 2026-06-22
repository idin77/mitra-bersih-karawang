import React from 'react';
import BlogArticle from '../components/BlogArticle';
import { Helmet } from 'react-helmet-async';
import ArticleFAQ from '../components/ArticleFAQ';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const articleFAQs = [
  {
    question: "Apakah WC mampet bisa diatasi sendiri?",
    answer: "Ya, sumbatan ringan bisa diatasi dengan plunger atau campuran air panas dan sabun cuci piring. Namun, jika masalah berlanjut atau septic tank sudah penuh, diperlukan jasa profesional."
  },
  {
    question: "Kapan saya harus menggunakan jasa sedot WC?",
    answer: "Anda harus menggunakan jasa sedot WC jika kloset air lambat turun secara permanen, tercium bau tak sedap yang menyengat dari septic tank, atau sudah lebih dari 2-3 tahun septic tank tidak dikuras."
  }
];

const BlogArticlePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tips Mengatasi WC Mampet di Karawang | Mitra Bersih Karawang</title>
        <meta name="description" content="Temukan cara efektif mengatasi WC mampet di Karawang dengan panduan dari Mitra Bersih. Solusi cepat, aman, dan profesional untuk hunian Anda." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50">
        <BlogArticle />
        <ArticleFAQ faqs={articleFAQs} />
        <FloatingWhatsApp whatsappNumber="6281212345678" />
      </main>
    </>
  );
};

export default BlogArticlePage;
