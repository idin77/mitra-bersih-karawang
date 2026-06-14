import React from 'react';
import BlogArticle from '../components/BlogArticle';
import { Helmet } from 'react-helmet-async';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const BlogArticlePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tips Mengatasi WC Mampet di Karawang | Mitra Bersih Karawang</title>
        <meta name="description" content="Temukan cara efektif mengatasi WC mampet di Karawang dengan panduan dari Mitra Bersih. Solusi cepat, aman, dan profesional untuk hunian Anda." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50">
        <BlogArticle />
        <FloatingWhatsApp whatsappNumber="6281212345678" />
      </main>
    </>
  );
};

export default BlogArticlePage;
