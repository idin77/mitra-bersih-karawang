import { useState } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { articles } from "../data/articles";

export default function SEOArticles() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", ...Array.from(new Set(articles.map(a => a.tag)))];
  const filteredArticles = selectedCategory === "Semua"
    ? articles
    : articles.filter(a => a.tag === selectedCategory);

  const activeArticleObj = filteredArticles[activeArticle] || filteredArticles[0];

  return (
    <section id="artikel-edu" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <BookOpen className="w-4.5 h-4.5" />
            ARTIKEL PENDUKUNG SEO &amp; SOLUSI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
            Edukasi Sanitasi Sehat Untuk Semua
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Pelajari panduan penting seputar pemeliharaan sistem pembuangan limbah rumah tangga untuk mewujudkan tempat tinggal yang sehat, bersih dari penyakit, dan ramah lingkungan.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveArticle(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === category
                  ? "bg-amber-400 text-zinc-950 shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Nav Tabs & Detail Reader layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* List of articles left column */}
          <div className="lg:col-span-5 space-y-4">
            {filteredArticles.map((article, index) => {
              const ixActive = index === activeArticle;
              return (
                <button
                  key={index}
                  onClick={() => setActiveArticle(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer flex gap-4 ${
                    ixActive
                      ? "bg-white border-amber-500/30 shadow-lg shadow-amber-500/5 translate-x-1"
                      : "bg-white/60 border-slate-150 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${ixActive ? "bg-amber-400 text-zinc-950 font-bold" : "bg-slate-100 text-slate-500"}`}>
                    {article.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">
                        {article.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">• {article.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 leading-snug group-hover:text-amber-600 text-sm sm:text-base">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {article.short}
                    </p>
                  </div>
                  
                  {ixActive && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-2 bg-amber-400 text-zinc-950 p-1 rounded-full shadow-md z-10 hidden lg:block">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Article Viewer - Right column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeArticle}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-amber-100 text-amber-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeArticleObj.tag}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">• Diperbarui Hari Ini (Mei 2026)</span>
                </div>

                <h3 className="font-display font-extrabold text-zinc-950 text-2xl sm:text-3xl leading-snug">
                  {activeArticleObj.title}
                </h3>
                
                <div className="w-full h-px bg-slate-100"></div>

                {activeArticleObj.content}

              </motion.article>
            </AnimatePresence>

            {/* Micro Conversion CTA link inside article panel */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl">
              <div>
                <h4 className="font-display font-extrabold text-zinc-950 text-xs sm:text-sm uppercase tracking-wider">
                  WC MAMPET ATAU SEPTIC TANK PENUH?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dapatkan estimasi biaya transparan dan garansi kelancaran 100%.
                </p>
              </div>
              <a
                href="#estimasi-harga"
                className="bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-extrabold px-5 py-3 rounded-xl transition-all shadow-md shadow-amber-400/10 cursor-pointer"
              >
                Hitung Estimasi &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
