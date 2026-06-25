export const createServiceSEO = (location: string, slug: string) => ({
  title: `Jasa Sedot WC ${location} Murah & 24 Jam Terpercaya | Mitra Bersih`,
  description: `Jasa sedot WC ${location} profesional, murah, dan bergaransi. Layanan sedot septic tank, pelancaran saluran air mampet di ${location} 24 jam siap siaga.`,
  canonical: `https://mitrabersih.sedotwckarawang.id/${slug}`
});

export const SEO_CONFIG = {
  default: {
    title: "Jasa Sedot WC Karawang Murah & Profesional - Mitra Bersih",
    description: "Butuh jasa sedot WC Karawang berpengalaman? Mitra Bersih melayani sedot septic tank, pelancaran saluran air mampet di Karawang dengan harga murah, bergaransi & 24 jam.",
    canonical: "https://mitrabersih.sedotwckarawang.id/"
  },
  cikampek: createServiceSEO("Cikampek", "cikampek"),
  karawangBarat: createServiceSEO("Karawang Barat", "jasa-sedot-wc-karawang-barat")
};
