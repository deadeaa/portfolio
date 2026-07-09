// src/components/project/ImageCarousel.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useThemeColors } from '../../hooks/useThemeColors';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  title?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, title = "Screenshots" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const themeColors = useThemeColors();

  if (!images.length) return null;

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  return (
    <>
      <div className="rounded-lg shadow-lg p-6 mb-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-xl font-semibold mb-3" style={{ color: themeColors.text.primary }}>
          {title}
        </h2>
        
        {/* Carousel Container - Lebih Kecil */}
        <div className="relative">
          {/* Main Image - Lebih Kecil */}
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={openFullscreen}
          >
            <img
              src={images[currentIndex]}
              alt={`${alt} - ${currentIndex + 1}`}
              className="w-full h-auto max-h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1 rounded-lg text-xs">
                Klik untuk perbesar
              </span>
            </div>
          </div>

          {/* Navigation Buttons - Lebih Kecil */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Image Counter - Lebih Kecil */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dots Indicator - Lebih Kecil */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`transition-all rounded-full ${
                    index === currentIndex 
                      ? 'bg-white w-2.5 h-2.5' 
                      : 'bg-white/50 w-2 h-2 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ❌ THUMBNAILS DIHAPUS - Tidak ada lagi gambar kecil di bawah */}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors p-2"
            aria-label="Close fullscreen"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-5xl w-full">
            <img
              src={images[currentIndex]}
              alt={`${alt} - ${currentIndex + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            
            {/* Fullscreen Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(e); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(e); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;