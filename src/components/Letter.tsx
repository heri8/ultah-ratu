import React, { useState } from 'react';

interface LetterProps {
  message: string;
}

export const Letter: React.FC<LetterProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-32 px-6 flex justify-center items-center bg-brand-blush/30 relative">
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/60 transition-all duration-500">
        <div className="text-center space-y-8">
          <div className="text-xs uppercase tracking-[0.2em] text-brand-text/40">
            — Private Letter —
          </div>
          
          {!isOpen ? (
            <div className="space-y-4">
              <p className="text-sm text-brand-text/60 font-light">Ada sebuah pesan yang tersimpan rapat untukmu di sini.</p>
              <button
                onClick={() => setIsOpen(true)}
                className="mt-4 px-8 py-3 bg-brand-text text-white text-xs tracking-widest uppercase font-medium rounded-full shadow-xs hover:bg-brand-text/90 transition-all cursor-pointer"
              >
                Buka Pesan
              </button>
            </div>
          ) : (
            <div className="space-y-6 text-left animate-fade-in transition-all">
              <p className="text-brand-text/80 font-light text-sm md:text-base leading-relaxed tracking-wide whitespace-pre-line font-serif italic">
                "{message}"
              </p>
              <div className="w-full h-[1px] bg-brand-text/10 my-6" />
              <div className="text-right">
                <p className="font-serif italic text-brand-text/80 text-base">Dengan ketulusan,</p>
                <p className="text-[10px] tracking-[0.2em] text-brand-text/40 uppercase font-semibold mt-1">Seseorang yang bersyukur atas hadirmu</p>
              </div>
              <div className="text-center pt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] uppercase tracking-widest text-brand-text/30 hover:text-brand-text underline underline-offset-4 transition-all cursor-pointer"
                >
                  Tutup surat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};