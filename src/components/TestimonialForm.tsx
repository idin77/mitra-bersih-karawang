import React, { useState } from 'react';
import { saveTestimonial } from '../lib/testimonialUtils';
import { Star } from 'lucide-react';

export default function TestimonialForm() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim() === '') {
      setError('Nama harus diisi.');
      return;
    }
    if (review.trim() === '') {
      setError('Ulasan harus diisi.');
      return;
    }
    if (rating === 0) {
      setError('Mohon berikan rating bintang.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await saveTestimonial(name, review, rating);
      if (result.success) {
        setSubmitted(true);
        setName('');
        setReview('');
        setRating(0);
      } else {
        setError('Gagal mengirim testimoni. Silakan coba lagi.');
      }
    } catch (error) {
      setError('Terjadi kesalahan. Silakan coba lagi nanti.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <div className="p-4 bg-green-100 text-green-800 rounded-lg">Terima kasih atas ulasan Anda!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-lg border border-slate-100 mt-8">
      <h3 className="text-xl font-bold mb-4">Berikan Testimoni Anda</h3>
      <input
        type="text"
        placeholder="Nama Anda"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg border border-slate-300"
        required
      />
      <textarea
        placeholder="Bagaimana pengalaman Anda?"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg border border-slate-300"
        rows={4}
        required
      />
      <div className="flex items-center mb-4">
        <span className="mr-2">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`cursor-pointer ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition"
      >
        {isSubmitting ? 'Mengirim...' : 'Kirim Testimoni'}
      </button>
    </form>
  );
}
