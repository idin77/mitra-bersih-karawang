import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import HorizontalServicesCarousel from "../components/HorizontalServicesCarousel";
import Gallery from "../components/Gallery";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TestimonialForm from "../components/TestimonialForm";
import ServiceAreas from "../components/ServiceAreas";
import KeywordsSection from "../components/KeywordsSection";
import { StepCostEstimator } from "../components/StepCostEstimator";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import SEOArticles from "../components/SEOArticles";
import TipsGrid from "../components/TipsGrid";
import SEOHead from "../components/SEOHead";
import BlogSection from "../components/BlogSection";
import { SEO_CONFIG } from "../lib/seo";
import heroImage from "../assets/images/armada_karawang_asli_1779610538314.png";

import { CheckSquare, ShieldCheck, HeartPulse, Award } from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage() {
  const WHATSAPP_NUMBER = "085715654183";
  const HERO_IMAGE_SRC = heroImage;

  return (
    <div id="mitra-bersih-karawang-app" className="relative text-slate-800">
      <SEOHead {...SEO_CONFIG.default} />

      {/* 1. Navbar / Header */}
      <Header whatsappNumber={WHATSAPP_NUMBER} />

      {/* 2. Hero Section with dynamic image */}
      <Hero whatsappNumber={WHATSAPP_NUMBER} imageSrc={HERO_IMAGE_SRC} />

      {/* 3. Small trust banner */}
      <section className="bg-amber-400 py-6 border-y border-amber-300 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-blue-950">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 shrink-0 text-blue-950" />
              <div>
                <h4 className="font-display font-extrabold text-base sm:text-lg tracking-tight">
                  Kredibilitas Pelayanan Bintang 5
                </h4>
                <p className="text-xs font-semibold text-blue-900">
                  Armada bersih, teknisi jujur & ramah, transparansi harga 100%.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm font-bold">
              <div className="flex items-center space-x-1.5">
                <CheckSquare className="w-5 h-5 text-blue-950 fill-current" />
                <span>Tanpa Bongkar</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <HeartPulse className="w-5 h-5 text-blue-950" />
                <span>Anti Bau & Sumbat</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-5 h-5 text-blue-950" />
                <span>Garansi Berulang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tentang Kami (About Us) */}
      <motion.div                
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      {/* 5. Layanan Utama (Services) */}
      <motion.div                
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Services whatsappNumber={WHATSAPP_NUMBER} />
        <HorizontalServicesCarousel whatsappNumber={WHATSAPP_NUMBER} />
      </motion.div>

      {/* 6. Section Keunggulan (Features) */}
      <Features />

      {/* 6b. Galeri Dokumentasi (Gallery) */}
      <Gallery />

      {/* 6c. Tips & Artikel (TipsGrid) */}
      <TipsGrid />
      
      {/* 6c-2. Blog Section */}
      <BlogSection />

      {/* 6d. Artikel SEO & Solusi Edukasi Sanitasi */}
      <SEOArticles />

      {/* 7. Testimoni (Testimonials) */}
      <TestimonialsCarousel />
      <TestimonialForm />

      {/* 7b. Pertanyaan Umum / FAQ Terkait Sedot WC */}
      <FAQ />

      {/* 8. Area Layanan (Service Areas) */}
      <ServiceAreas />

      <KeywordsSection />

      {/* 8.5 Cost Estimator Tool */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 mb-16 relative z-10">
        <StepCostEstimator onSendMessage={(data) => {
          const message = `Halo Jasa Sedot WC Mitra Bersih, saya ingin menanyakan estimasi berikut:\n` +
            `- Layanan: ${data.service}\n` +
            `- Volume: ${data.volume}\n` +
            `- Wilayah: ${data.location}\n` +
            `- Estimasi Harga: ${data.price}\n\nMohon konfirmasi ketersediaan teknisi secepatnya, terima kasih!`;
          const rawLink = `https://wa.me/62${WHATSAPP_NUMBER.substring(1)}?text=${encodeURIComponent(message)}`;
          window.open(rawLink, "_blank");
        }} />
      </div>

      {/* 9. Kontak Kami (Contact) */}
      <ContactForm whatsappNumber={WHATSAPP_NUMBER} />

      {/* 10. Footer info */}
      <Footer whatsappNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
