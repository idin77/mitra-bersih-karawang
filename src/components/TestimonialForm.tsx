import React, { useState } from 'react';
import { saveTestimonial } from '../lib/testimonialUtils';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialForm() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples([...ripples, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

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
      const result = await saveTestimonial(name, review, rating, imageUrl || undefined);
      if (result.success) {
        setSubmitted(true);
        setName('');
        setReview('');
        setRating(0);
        setImageUrl(null);
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
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Foto Bukti Kerja (Opsional)</label>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {imageUrl && (
          <div className="mt-2">
            <img src={imageUrl} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
            <button
              type="button"
              onClick={() => setImageUrl(null)}
              className="mt-1 text-sm text-red-600 hover:text-red-800"
            >
              Hapus Foto
            </button>
          </div>
        )}
      </div>
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
      <motion.button
        type="submit"
        disabled={isSubmitting}
        onClick={addRipple}
        whileTap={{ scale: 0.98 }}
        className="w-full p-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition relative overflow-hidden"
      >
        <AnimatePresence>
          {ripples.map(ripple => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                left: ripple.x,
                top: ripple.y,
              }}
              className="absolute bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 w-4 h-4"
            />
          ))}
        </AnimatePresence>
        {isSubmitting ? 'Mengirim...' : 'Kirim Testimoni'}
      </motion.button>
    </form>
  );
}
