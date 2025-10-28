// src/components/Footer.js
export default function Footer() {
const currentYear = new Date().getFullYear(); // Mengambil tahun saat ini secara dinamis
return (
<footer className="bg-gray-800 text-white p-4 mt-auto">
<div className="container mx-auto text-center">
<p>&copy; {currentYear} Portofolio Saya. Dibuat dengan cinta.</p>
</div>
</footer>
);
}