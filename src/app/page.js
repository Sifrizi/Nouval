// src/app/page.js
import Link from 'next/link'; // Langkah 1: Import komponen Link
export default function HomePage() {
return (
<main className="flex min-h-screen flex-col items-center p-24">
<h1 className="text-5xl font-bold mb-8">Selamat Datang di Portofolio Saya</h1>
<div className="flex gap-4">
{/* Langkah 2: Gunakan komponen Link dengan prop 'href' */}
<Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded
hover:bg-blue-600">
Tentang Saya
</Link>
<Link href="/contact" className="bg-green-500 text-white px-4 py-2 rounded
hover:bg-green-600">
Hubungi Saya
</Link>
</div>
</main>
);
}