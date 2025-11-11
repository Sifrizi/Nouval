// src/components/Navbar.js
import Link from 'next/link';
export default function Navbar() {
return (
<nav className="bg-white p-4 shadow-md">
<div className="container mx-auto flex justify-between items-center">
<Link href="/" className="text-gray-700 text-2x1 font-bold">
Web Portofolio
</Link>
<div className="flex gap-4">
<Link href="/" className="text-gray-400 hover:text-gray-700">
Home
</Link>
<Link href="/about" className="text-gray-400 hover:text-gray-700">
About
</Link>
<Link href="/contact" className="text-gray-400 hover:text-gray-700">
Contact
</Link>
<Link href="/posts" className="text-gray-400 hover:text-gray-700">
Posts
</Link>
<Link href="/Speech" className="text-gray-400 hover:text-gray-700">
Speech
</Link>
</div>
</div>
</nav>
);
}
