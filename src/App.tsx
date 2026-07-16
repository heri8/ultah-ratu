import React from 'react';
import { Hero } from './components/Hero';
import { Letter } from './components/Letter';
import { Gallery } from './components/Gallery';
import { Timeline } from './components/Timeline';

const App: React.FC = () => {
  const namaPasangan = "Raja Natratunnaim";
  const isiSurat = `Selamat ulang tahun, Sayang. ❤️

  Hari ini adalah hari yang mengingatkanku betapa berharganya kehadiranmu. Terima kasih telah menjadi seseorang yang membawa begitu banyak kebahagiaan, ketenangan, dan warna dalam hidupku.

  Aku berharap di usiamu yang baru, setiap langkahmu dipenuhi kesehatan, kebahagiaan, dan impian yang satu per satu menjadi kenyataan. Semoga senyummu selalu punya alasan untuk hadir setiap hari, dan semoga semesta selalu mempertemukanmu dengan hal-hal baik.

  Terima kasih sudah menjadi sosok yang mengajarkanku arti perhatian, kesabaran, dan kasih sayang. Bersamamu, aku belajar bahwa kebahagiaan sering kali hadir dalam momen-momen sederhana.

  Aku mungkin tidak bisa menjanjikan perjalanan yang selalu mudah, tetapi aku berharap kita bisa terus saling mendukung, bertumbuh, dan menciptakan lebih banyak kenangan indah bersama.

  Selamat bertambah usia. Semoga tahun ini menjadi babak baru yang penuh kebahagiaan, keberanian, dan cinta.

  Untukmu, hari ini dan seterusnya. 🤍`;

  return (
    <div className="selection:bg-romantic-pink/50 selection:text-romantic-text antialiased overflow-x-hidden">
      {/* Smooth scroll wrapper */}
      <main>
        <Hero name={namaPasangan} />
        <Letter message={isiSurat} />
        <Gallery />
        <Timeline />
      </main>

      {/* Footer Minimalis */}
      <footer className="py-12 bg-romantic-cream border-t border-romantic-rose/10 text-center">
        <p className="text-xs text-romantic-text/40 font-light tracking-widest uppercase">
          Dibuat dengan Sepenuh Hati • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;