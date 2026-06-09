import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className: string;
  title?: string;
  width?: string;
  height?: string;
  referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
}

export function LazyImage({ src, alt, className, title, width, height, referrerPolicy }: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (divRef.current) observer.observe(divRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={divRef} className="w-full h-full">
      {isVisible ? (
        <img 
          src={src} 
          title={title || "jasa-sedot-karawang"} 
          alt={`jasa sedot wc karawang ${alt}`} 
          className={className} 
          referrerPolicy={referrerPolicy}
          loading="lazy"
          width={width}
          height={height}
        />
      ) : (
        <div className="w-full h-full bg-slate-200 animate-pulse" />
      )}
    </div>
  );
}
