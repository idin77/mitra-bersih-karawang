import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { Helmet } from "react-helmet-async";

export default function CikampekPage() {
  const WHATSAPP_NUMBER = "085882448632";

  return (
    <div id="mitra-bersih-karawang-app" className="relative text-slate-800">
      <Helmet>
        <title>Jasa Sedot WC Cikampek Murah & 24 Jam Terpercaya | Mitra Bersih</title>
        <meta name="description" content="Jasa sedot WC Cikampek profesional, murah, dan bergaransi. Layanan sedot septic tank, pelancaran saluran air mampet di Cikampek 24 jam." />
        <link rel="canonical" href="https://mitrabersih.sedotwckarawang.id/jasa-sedot-wc-cikampek" />
      </Helmet>

      <Header whatsappNumber={WHATSAPP_NUMBER} />

      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-zinc-950 mb-6">Jasa Sedot WC Cikampek</h1>
        <p className="text-lg text-slate-700 mb-8">
          Kami menyediakan layanan sedot WC dan septic tank profesional untuk wilayah Cikampek. 
          Teknisi kami siap datang dengan sigap, bersih, dan bergaransi 24 jam.
        </p>
        
        {/* Basic Content for now as per minimal requested */}
        <div className="bg-amber-100 p-6 rounded-2xl border border-amber-200">
            <h2 className="font-bold text-xl mb-4">Kenapa Memilih Kami di Cikampek?</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Respon cepat 24 jam di seluruh wilayah Cikampek.</li>
                <li>Teknisi berpengalaman dan jujur.</li>
                <li>Harga transparan tanpa biaya tersembunyi.</li>
                <li>Armada bersih dan modern.</li>
            </ul>
        </div>
      </main>

      <Footer whatsappNumber={WHATSAPP_NUMBER} />
      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
