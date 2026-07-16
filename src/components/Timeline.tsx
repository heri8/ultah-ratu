import React from 'react';

interface Wish {
  title: string;
  desc: string;
}

export const Timeline: React.FC = () => {
  const wishes: Wish[] = [
    { title: 'Kedamaian & Langkah yang Ringan', desc: 'Semoga di setiap jalan yang kamu pilih, semesta selalu melunakkan rintangannya dan memberikan ketenangan di hatimu.' },
    { title: 'Ruang untuk Bertumbuh', desc: 'Semoga kamu selalu memiliki keberanian untuk mengejar mimpi baru, mengeksplorasi dunia, tanpa kehilangan dirimu yang hangat.' },
    { title: 'Bahagia yang Sederhana', desc: 'Menikmati kopi hangat di pagi hari, tawa lepas tanpa beban, dan mengetahui bahwa kamu selalu dicintai dengan tulus.' },
  ];

  return (
    <section className="py-32 px-6 bg-brand-blush/20">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-text/40 block">Our Tomorrow</span>
          <h2 className="text-3xl font-extralight text-brand-text tracking-wide">Harapan & Doa Baik</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {wishes.map((wish, index) => (
            <div key={index} className="bg-white/80 border border-white p-8 rounded-2xl space-y-4 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:translate-y-[-2px] transition-transform duration-300">
              <div className="text-xs font-serif italic text-brand-text/30">
                0{index + 1}.
              </div>
              <h3 className="text-base font-medium tracking-wide text-brand-text">{wish.title}</h3>
              <p className="text-xs text-brand-text/70 font-light leading-relaxed">{wish.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};