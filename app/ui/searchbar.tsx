'use client';

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useState<string>("");
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchParams.trim()) {
      router.push(`https://pantip.com/search?q=${encodeURIComponent(searchParams)}`);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold">ยินดีต้อนรับสู่ Pantip</h2>
        <p className="text-xl text-gray-600">ค้นหา แบ่งปัน และเรียนรู้ในคอมมูนิตี้ที่ใหญ่ที่สุดในประเทศไทย</p>
      </div>

      <div className="mb-12">
        <form onSubmit={handleSearch} className="flex gap-2 rounded-full border p-2 shadow-sm">
          <input
            type="text"
            placeholder="ค้นหาหัวข้อ บทความ หรือคอมมูนิตี้"
            className="grow px-4 py-2 focus:outline-none"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}