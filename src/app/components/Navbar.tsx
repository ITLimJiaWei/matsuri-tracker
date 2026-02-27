'use client';
import Image from 'next/image';
import { useLanguage } from '../providers/LanguageProvider';

export default function Navbar() {
  const { language } = useLanguage();
  const isJa = language === 'ja';

  return (
    <aside className="fixed top-0 left-0 h-screen w-20 bg-gradient-to-b from-black via-gray-800 dark:via-neutral-900 to-amber-200 dark:to-amber-900 text-white flex flex-col justify-between py-10 px-4 overflow-hidden transition-colors duration-300">

      {/* Oversized background image */}
      <div className="absolute top-[25%] -left-16 w-56 h-56 opacity-80 pointer-events-none z-0">
        <Image
          src="/images/Fireworks_PNG_Clip_Art.png"
          alt="Hanabi Background"
          fill
          className="object-contain"
        />
      </div>

      {/* <div className="absolute top-[50%] -left-16 w-56 h-56 opacity-50 pointer-events-none z-0">
        <Image
          src="/images/tanabata.png"
          alt="Tanabata Background"
          fill
          className="object-contain"
        />
      </div> */}

      <div className="flex flex-col items-center relative z-10">
        <div className="writing-vertical text-5xl font-serif-jp tracking-widest text-amber-500 drop-shadow-md py-4">祭りの記録帳</div>
      </div>

      <div className="flex flex-col items-center space-y-8 mt-12 text-[10px] sm:text-xs relative z-10">

        <div className="flex flex-col items-center text-center">
          {isJa ? <span className="writing-vertical text-lg">七夕飾り</span> : <>Tanabata<br />Kazari</>}
        </div>
        <div className="flex flex-col items-center text-center">
          {isJa ? <span className="writing-vertical text-lg">小さな屋台</span> : <>Small<br />Yatai</>}
        </div>
      </div>
    </aside>
  );
}
