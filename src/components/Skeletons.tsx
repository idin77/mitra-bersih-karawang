
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-slate-100 rounded-3xl h-96 animate-pulse" />
      ))}
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-slate-100 rounded-3xl h-64 animate-pulse" />
      ))}
    </div>
  );
}
