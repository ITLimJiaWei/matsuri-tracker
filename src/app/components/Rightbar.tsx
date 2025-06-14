'use client';

import Link from 'next/link';

export default function Rightbar() {
  return (
    <aside className="fixed top-0 left-20 h-screen w-64 bg-gray-100 text-black py-10 px-4 shadow-lg flex flex-col space-y-4 z-10">

      <div className="w-full">
        <div className="writing-vertical text-7xl">祭り</div>
      </div>


      {/* <h2 className="text-xl font-semibold">Filters</h2> */}


        <br>
        </br>

        <br>
        </br>

      <input
        type="text"
        placeholder="Search ..."
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />

      {/* <select className="w-full px-4 py-2 border border-gray-300 rounded">
        <option value="">Select Region</option>
        <option value="tokyo">Tokyo</option>
        <option value="kyoto">Kyoto</option>
        <option value="osaka">Osaka</option>
      </select> */}

      <button className="bg-black text-white py-2 px-4 rounded hover:bg-amber-300 transition">
        Apply
      </button>

      <div className="bottom-0 text-[10px] sm:text-xl flex flex-col items-left space-y-2 mt-auto">
        <Link href="/languages" className="mb-4 hover:text-amber-300">Languages</Link>
        <Link href="/about" className="mb-4 hover:text-amber-300">About</Link>
      </div>

      
    </aside>
  );
}
