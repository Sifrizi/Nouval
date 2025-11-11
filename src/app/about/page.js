// src/app/about/page.js 
import Image from 'next/image'; // Jangan lupa import! 
export default function AboutPage() { 
return ( 
<main className="container mx-auto px-4 py-12"> 
      <h1 className="text-4xl font-bold text-center mb-10">Tentang Saya</h1> 
 
      <div className="flex flex-col md:flex-row items-center gap-10"> 
        {/* Kolom Gambar */} 
        <div className="w-48 h-48 md:w-56 md:h-56 relative flex-shrink-0"> 
          <Image 
            src="/profiles.png" 
            alt="Foto Profil" 
            layout="fill" 
            objectFit="cover" 
            className=" shadow-lg" 
          /> 
        </div> 
 
        {/* Kolom Teks */} 
        <div className="text-center md:text-left"> 
          <p className="mb-4 text-lg"> 
            Halo! Ini Webite Nouval
          </p> 
          <p className="text-lg"> 
            Saya Suka Coding dan Ngulik
</p> 
</div> 
</div> 
</main> 
); 
} 