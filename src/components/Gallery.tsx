import React, { useState, useEffect } from 'react';

interface Photo {
  id: number;
  url: string;
  caption: string;
  colSpan: string;
  aspect: string;
}

export const Gallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos: Photo[] = [
    { id: 1, url: '/ultah-ratu/images/img-1.jpeg', caption: 'Senyum manis di tangga Petak Enam, outfitmu selalu kece di mana pun berada.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 2, url: '/ultah-ratu/images/img-2.jpeg', caption: 'Selfie lucu saat jam kerja pakai headphone, bahkan di kantor pun kamu selalu bersinar.', colSpan: 'md:col-span-2', aspect: 'aspect-video' },
    { id: 3, url: '/ultah-ratu/images/img-3.jpeg', caption: 'Naik ke puncak bersama sahabat, momen penuh tawa dengan latar pemandangan yang memukau.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 4, url: '/ultah-ratu/images/img-4.jpeg', caption: 'Foto booth bersama rekan-rekan tersayang, kamu yang paling bersinar di tengah semua orang.', colSpan: 'md:col-span-2', aspect: 'aspect-[4/3]' },
    { id: 5, url: '/ultah-ratu/images/img-5.jpeg', caption: 'Selfie cantik sebelum mulai bekerja, tatapan polosmu selalu berhasil bikin jatuh hati.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 6, url: '/ultah-ratu/images/img-6.jpeg', caption: 'Merayakan wisuda teman sambil pelukan hangat, kamu selalu hadir di momen-momen terbaik.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 7, url: '/ultah-ratu/images/img-7.jpeg', caption: 'Buka bareng seru di event KapanLagi, tawa dan kebersamaan yang selalu kurindukan.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 8, url: '/ultah-ratu/images/img-8.jpeg', caption: 'Gaya monyong yang paling gemas di restoran KBBQ, makan bareng teman pun jadi kenangan manis.', colSpan: 'md:col-span-2', aspect: 'aspect-[4/3]' },
    { id: 9, url: '/ultah-ratu/images/img-9.jpeg', caption: 'Senyum tipis dengan headphone di kantor, bahkan di hari paling sibuk pun kamu tetap menawan.', colSpan: 'md:col-span-1', aspect: 'aspect-video' },
    { id: 10, url: '/ultah-ratu/images/img-10.jpeg', caption: 'Berdiri anggun di depan akuarium bundar yang memukau, bertualang ke tempat baru bersamamu selalu menyenangkan.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 11, url: '/ultah-ratu/images/img-11.jpeg', caption: 'Ekspresi paling menggemaskan di sela jam kerja, kamu adalah definisi bahagia yang nyata.', colSpan: 'md:col-span-1', aspect: 'aspect-[3/4]' },
    { id: 12, url: '/ultah-ratu/images/img-12.jpeg', caption: 'Menaklukkan Puncak Paniisan 846 MDPL dengan senyum paling bangga — selamat ulang tahun untuk jiwa petualang paling tangguh dan terindahku! 🎉', colSpan: 'md:col-span-3', aspect: 'aspect-[3/4] md:aspect-[16/9]' },
  ];

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto space-y-16">
      <div className="space-y-3 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-text/40 block">Captured Moments</span>
        <h2 className="text-3xl font-extralight text-brand-text tracking-wide">Lembaran Memori</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className={`${photo.colSpan} group overflow-hidden rounded-2xl bg-white p-3 shadow-[0_4px_20px_rgb(0,0,0,0.01)] border border-neutral-100 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] cursor-pointer`}
            onClick={() => openLightbox(index)}
          >
            <div className={`w-full ${photo.aspect} overflow-hidden rounded-xl bg-neutral-50 relative`}>
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover filter saturate-[85%] contrast-[95%] group-hover:scale-102 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-[10px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Lihat Foto
                </span>
              </div>
            </div>
            <p className="mt-3 text-[11px] font-light text-brand-text/60 text-center tracking-wide font-serif italic">
              "{photo.caption}"
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-50 cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Prev */}
          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-50 cursor-pointer"
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container with Caption */}
          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-[75vh] flex justify-center items-center">
              <img 
                src={photos[selectedPhotoIndex].url} 
                alt={photos[selectedPhotoIndex].caption} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
            <p className="text-white/80 font-serif italic text-sm md:text-base text-center max-w-xl px-4 transition-all duration-300">
              "{photos[selectedPhotoIndex].caption}"
            </p>
          </div>

          {/* Navigation - Next */}
          <button 
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-50 cursor-pointer"
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Index indicator */}
          <div className="absolute bottom-6 text-white/40 text-xs tracking-widest uppercase">
            {selectedPhotoIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
};