'use client';

export default function Navbar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 bg-gradient-to-b from-black via-gray-800 to-amber-200 text-white flex flex-col justify-between py-10 px-4">
  
      <div className="flex flex-col items-center">
        <div className="writing-vertical text-5xl">夏の記録帳</div>
      </div>

      <div className="flex flex-col items-center space-y-8 mt-12 text-[10px] sm:text-xs">
        <div>Small<br />Hanabi</div>
        <div>Tanabata<br />Kazari</div>
        <div>Small<br />Yatai</div>
      </div>
    </aside>
  );
}
