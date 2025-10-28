// src/app/page.js 
import Image from 'next/image'; // Import komponen Image 
 
export default function HomePage() { 
  return ( 
    <main className="container mx-auto px-4 py-8"> 
      {/* Secara default (mobile): flex-col (bertumpuk) 
        Mulai dari layar medium (md): flex-row (sejajar) 
      */} 
      <div className="flex flex-col md:flex-row items-center justify-center gap-10"> 
 
        {/* Kolom Gambar */} 
        <div className="w-48 h-48 md:w-64 md:h-64 relative"> 
          <Image 
            src="/profile.png" // Mengambil gambar dari folder public 
            alt="Foto Profil" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full shadow-lg" 
          /> 
        </div> 
 
        {/* Kolom Teks */} 
        {/* Secara default (mobile): text-center 
          Mulai dari layar medium (md): text-left 
        */} 
        <div className="text-center md:text-left"> 
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2"> 
            Nouval Tora
          </h1> 
          <p className="text-lg md:text-xl text-gray-600"> 
            Junior Web Developer | Telecaster number 1 fan 
          </p> 
          <p className="max-w-xl mt-4"> 
            Saya adalah siswa asal SMKN2 BANDAR LAMPUNG jurusaN RPL. Minat saya dalam Rpl adalah untuk mengasah bakat saya dalam dunia Programming dan mengasah kemampuan berlogika saya dalam meneyelesaikan masalah di dalam sintaks.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus erat, convallis pretium volutpat at, aliquam ac augue. Proin finibus, mi in euismod hendrerit, dui sem commodo orci, a laoreet est purus cursus sem. Donec et lorem tortor. Praesent ac ultricies risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non congue leo. Donec sit amet venenatis felis. Vestibulum quis lectus sit amet sapien eleifend egestas non sit amet nulla. Aliquam enim augue, aliquam in feugiat vel, aliquet non urna. Curabitur efficitur pellentesque nulla sed placerat. Mauris a turpis sed velit accumsan viverra et sed nunc.
          </p> 
        </div> 
 
</div> 
</main> 
); 
}