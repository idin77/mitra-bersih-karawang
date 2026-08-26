import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FAQ from "../components/FAQ";
import RelatedArticles from "../components/RelatedArticles";
import SEOHead from "../components/SEOHead";
import { SEO_CONFIG } from "../lib/seo";
import { ShieldCheck, CheckSquare, HeartPulse, Award } from "lucide-react";
import { motion } from "motion/react";

export default function KarawangBaratPage() {
  const WHATSAPP_NUMBER = "085715654183";
  const HERO_IMAGE_SRC = "/src/assets/images/armada_karawang_asli_1779610538314.png";

  return (
    <div id="mitra-bersih-karawang-barat-app" className="relative text-slate-800">
      <SEOHead {...SEO_CONFIG.karawangBarat} />

      <Header whatsappNumber={WHATSAPP_NUMBER} />
      
      <Hero whatsappNumber={WHATSAPP_NUMBER} imageSrc={HERO_IMAGE_SRC} />

      <section className="bg-amber-400 py-6 border-y border-amber-300 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-blue-950">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 shrink-0 text-blue-950" />
              <div>
                <h4 className="font-display font-extrabold text-base sm:text-lg tracking-tight">Kredibilitas Bintang 5 di Karawang Barat</h4>
                <p className="text-xs font-semibold text-blue-900">Teknisi ahli, responsif 24 jam, harga transparan.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm font-bold">
              <div className="flex items-center space-x-1.5"><CheckSquare className="w-5 h-5 text-blue-950 fill-current" /><span>Tanpa Bongkar</span></div>
              <div className="flex items-center space-x-1.5"><HeartPulse className="w-5 h-5 text-blue-950" /><span>Anti Bau</span></div>
              <div className="flex items-center space-x-1.5"><Award className="w-5 h-5 text-blue-950" /><span>Garansi</span></div>
            </div>
          </div>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <About location="Karawang Barat" />
        <Services whatsappNumber={WHATSAPP_NUMBER} location="Karawang Barat" />
        <Features location="Karawang Barat" />
        <Gallery />
        <Testimonials />
        <RelatedArticles />
        <FAQ />
        <ContactForm whatsappNumber={WHATSAPP_NUMBER} location="Karawang Barat" />
      </motion.div>

      <Footer whatsappNumber={WHATSAPP_NUMBER} />
      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
