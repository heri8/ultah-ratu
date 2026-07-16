import React from 'react';

interface HeroProps {
  name: string;
}

export const Hero: React.FC<HeroProps> = ({ name }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-blush/60 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-200/50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-text/50 font-medium block">
          A Special Chapter For You
        </span>
        <h1 className="text-5xl md:text-8xl font-extralight tracking-tight text-brand-text leading-tight">
          Selamat Ulang Tahun, <br />
          <span className="font-serif italic font-normal text-slate-700 block mt-2">{name}</span>.
        </h1>
        <div className="w-12 h-[1px] bg-brand-text/20 mx-auto my-6" />
        <p className="text-sm md:text-base text-brand-text/70 font-light max-w-md mx-auto leading-relaxed tracking-wide">
          Hari ini semesta berbisik lembut, merayakan lahirnya jiwa seindah dirimu ke dunia.
        </p>
        <div className="pt-12">
          <div className="animate-bounce inline-block text-xs uppercase tracking-widest text-brand-text/40">
            Scroll Down
          </div>
        </div>
      </div>
    </section>
  );
};