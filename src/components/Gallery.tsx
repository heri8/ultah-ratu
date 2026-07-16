import React from 'react';

interface Photo {
  id: number;
  url: string;
  caption: string;
  size: string; 
}

export const Gallery: React.FC = () => {
  const photos: Photo[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', caption: 'Tawa yang selalu kurindukan.', size: 'md:col-span-2 aspect-[16/10]' },
    { id: 2, url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600', caption: 'Setiap sudut kenangan bersamamu.', size: 'aspect-square' },
    { id: 3, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600', caption: 'Alasan di balik bahagiaku hari ini.', size: 'md:col-span-3 aspect-[21/9]' },
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto space-y-16">
      <div className="space-y-3 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-text/40 block">Captured Moments</span>
        <h2 className="text-3xl font-extralight text-brand-text tracking-wide">Lembaran Memori</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className={`${photo.size} group overflow-hidden rounded-2xl bg-white p-3 shadow-[0_4px_20px_rgb(0,0,0,0.01)] border border-neutral-100 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)]`}>
            <div className="w-full h-full overflow-hidden rounded-xl bg-neutral-50 relative">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover filter saturate-[85%] contrast-[95%] group-hover:scale-102 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="mt-3 text-[11px] font-light text-brand-text/60 text-center tracking-wide font-serif italic">
              "{photo.caption}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};