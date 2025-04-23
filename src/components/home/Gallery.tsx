import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Instagram, X, ChevronLeft, ChevronRight, ZoomIn, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Gallery images - real photos
  const galleryImages = useMemo(
    () => [
      'https://iili.io/3d6ZhfS.md.png',
      'https://iili.io/3dPCVXp.md.jpg',
      'https://iili.io/3dPoCAb.md.jpg',
      'https://iili.io/3dPo6Je.md.jpg',
      'https://iili.io/3dPzfTb.md.jpg',
      'https://iili.io/3dPIJov.md.jpg',
      'https://iili.io/3dPumH7.md.jpg',
      'https://iili.io/3dPuDSS.md.jpg',
    ],
    []
  );
  // TODO: Refactor galleryImages to be an array of objects with src and descriptive alt text.
  //       Update TranslationSchema and translations.ts accordingly to provide meaningful alt text.

  // For masonry-like layout
  const getSpanClass = (index: number) => {
    // Create a more interesting layout with different sized cards
    if (index % 8 === 0) return 'col-span-2 row-span-2';
    if (index % 5 === 0) return 'col-span-2';
    if (index % 7 === 0) return 'row-span-1'; // Changed from 'row-span-2' to 'row-span-1' to make it the same size
    return '';
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsAnimating(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 300);
  }, []);

  const navigateImage = useCallback(
    (direction: 'prev' | 'next') => {
      if (selectedImage === null) return;

      setIsAnimating(true);
      setTimeout(() => {
        setSelectedImage(prev => {
          if (prev === null) return null;
          if (direction === 'prev') {
            return prev === 0 ? galleryImages.length - 1 : prev - 1;
          } else {
            return prev === galleryImages.length - 1 ? 0 : prev + 1;
          }
        });
        setIsAnimating(false);
      }, 300);
    },
    [selectedImage, galleryImages]
  );

  const toggleZoom = useCallback(() => {
    setIsZoomed(!isZoomed);
  }, [isZoomed]);

  const toggleLike = (index: number) => {
    if (liked.includes(index)) {
      setLiked(liked.filter(i => i !== index));
    } else {
      setLiked([...liked, index]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'z') {
        toggleZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isZoomed, navigateImage, toggleZoom, closeLightbox]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="headline2 text-center mb-6 font-sour-gummy text-primary"
        >
          {t('gallery.title', 'Gallery')}
        </motion.h1>

        <motion.p
          className="body1 text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('gallery.description', 'Check out some moments from our furry friends!')}
        </motion.p>

        {/* Masonry-like grid - Usando gap-3 e gap-4 da escala do Tailwind */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`${getSpanClass(
                index
              )} overflow-hidden rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              variants={itemVariants}
            >
              <motion.div
                className="relative h-full w-full cursor-pointer bg-secondary-container"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                  <div className="self-end">
                    <motion.button
                      onClick={e => {
                        e.stopPropagation();
                        toggleLike(index);
                      }}
                      className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <Heart
                        size={16}
                        className={
                          liked.includes(index) ? 'fill-error text-error' : 'text-gray-700'
                        }
                      />
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{`#${index + 1}`}</span>
                    <motion.button
                      className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <ZoomIn size={16} className="text-gray-700" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="btn-primary shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('gallery.viewAll', 'View All Images')}
          </motion.button>

          <motion.a
            href="https://instagram.com/amanluxdogs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
          >
            <Instagram size={20} />
            {t('gallery.instagram', 'Follow us on Instagram')}
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 cursor-pointer hover:bg-black/75 transition-colors z-50"
              onClick={closeLightbox}
              aria-label={t('gallery.closeLightbox', 'Close image viewer')}
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation - Previous */}
            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 cursor-pointer hover:bg-black/75 transition-colors z-50"
              onClick={() => navigateImage('prev')}
              aria-label={t('gallery.prevImage', 'Previous image')}
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Main image container - Usando max-h-[85vh] para altura máxima relativa à viewport */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: isAnimating ? 0.9 : 1,
                opacity: isAnimating ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              onClick={toggleZoom}
            >
              <div className={`overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                <motion.img
                  src={galleryImages[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  className="max-w-full max-h-[85vh] object-contain"
                  animate={{ scale: isZoomed ? 1.5 : 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Image info bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 flex justify-between items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium">
                    {selectedImage + 1} / {galleryImages.length}
                  </span>
                  <motion.button
                    onClick={e => {
                      e.stopPropagation();
                      toggleLike(selectedImage);
                    }}
                    className="flex items-center gap-1 hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart
                      size={18}
                      className={liked.includes(selectedImage) ? 'fill-error text-error' : ''}
                    />
                    <span>{liked.includes(selectedImage) ? 'Liked' : 'Like'}</span>
                  </motion.button>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={e => {
                      e.stopPropagation();
                      toggleZoom();
                    }}
                    className="flex items-center gap-1 hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ZoomIn size={18} />
                    <span>{isZoomed ? 'Zoom Out' : 'Zoom In'}</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation - Next */}
            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 cursor-pointer hover:bg-black/75 transition-colors z-50"
              onClick={() => navigateImage('next')}
              aria-label={t('gallery.nextImage', 'Next image')}
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={28} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
