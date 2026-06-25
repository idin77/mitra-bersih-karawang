import { articles } from "../data/articles";
import { ChevronRight } from "lucide-react";

export default function RelatedArticles() {
  // Take first 3 for preview
  const related = articles.slice(0, 3);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-zinc-950 mb-6">Baca Juga:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((article, index) => (
            <a 
              key={index} 
              href="/#artikel-edu" 
              className="group p-6 rounded-2xl border border-slate-100 hover:border-amber-300 transition-all bg-slate-50 hover:bg-white shadow-sm hover:shadow-md"
            >
              <div className="text-amber-500 mb-3">{article.icon}</div>
              <h4 className="font-bold text-zinc-900 group-hover:text-amber-600 transition-colors mb-2">
                {article.title}
              </h4>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4">{article.short}</p>
              <span className="flex items-center text-xs font-bold text-amber-600">
                Baca Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
