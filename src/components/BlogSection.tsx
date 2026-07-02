import React from 'react';
import { articles } from '../data/articles';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Artikel Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{article.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{article.short}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{article.tag}</span>
                <span>{article.readTime}</span>
              </div>
              {article.externalLink ? (
                <a href={article.externalLink} target="_blank" rel="noopener noreferrer" className="block mt-4 text-emerald-600 font-semibold text-sm">
                  Baca Selengkapnya →
                </a>
              ) : (
                <Link to={`/tips/${article.slug || 'tips-mengatasi-wc-mampet-karawang'}`} className="block mt-4 text-emerald-600 font-semibold text-sm">
                  Baca Selengkapnya →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
