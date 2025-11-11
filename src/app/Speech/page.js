// src/app/about/page.js 
import Image from 'next/image'; // Jangan lupa import! 
export default function AboutPage() { 
return ( 
<main className="container mx-auto px-4 py-12"> 
      <h1 className="text-4xl font-bold text-center mb-10">Speech Saya</h1> 
 
      <div className="flex flex-col md:flex-row items-center gap-10"> 

        <div className="w-48 h-48 md:w-56 md:h-56 relative flex-shrink-0"> 
          <Image 
            src="/profiles.png" 
            alt="Foto Profil" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full shadow-lg" 
          /> 
        </div> 
 
        {/* Kolom Teks */} 
        <div className="text-center md:text-left"> 
          <p className="mb-4 text-lg"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus erat, convallis pretium volutpat at, aliquam ac augue. Proin finibus, mi in euismod hendrerit, dui sem commodo orci, a laoreet est purus cursus sem. Donec et lorem tortor. Praesent ac ultricies risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non congue leo. Donec sit amet venenatis felis. Vestibulum quis lectus sit amet sapien eleifend egestas non sit amet nulla. Aliquam enim augue, aliquam in feugiat vel, aliquet non urna. Curabitur efficitur pellentesque nulla sed placerat. Mauris a turpis sed velit accumsan viverra et sed nunc.

Curabitur vitae felis ante. Nam tincidunt odio et libero aliquam dignissim. Proin lorem velit, tempor ultrices tristique eu, egestas vel justo. Maecenas non tortor nec lorem tempor vulputate. Proin ut sem dictum, porta ex sed, ornare urna. Suspendisse feugiat sollicitudin imperdiet. Vivamus sed metus aliquet, pellentesque eros nec, lacinia dui. Curabitur bibendum, dolor id consequat consectetur, elit elit faucibus erat, at auctor libero orci non nibh. Ut at augue neque. Aenean enim turpis, laoreet congue vehicula at, laoreet ut mi.

Pellentesque at lectus in turpis aliquet pellentesque in in purus. Integer tristique consequat justo non ultrices. Maecenas ac urna a ante ornare ornare et eget arcu. Quisque fermentum interdum consectetur. Maecenas sit amet accumsan mauris. Praesent sed nibh feugiat, interdum quam sed, elementum mi. Proin bibendum ornare erat, eu venenatis felis laoreet id. Sed dapibus erat in tortor molestie bibendum. Etiam hendrerit accumsan metus, vitae molestie felis malesuada sed. Nunc varius purus sed condimentum semper. Nulla maximus neque sit amet nunc lobortis, vel molestie erat ultricies.

Ut lobortis efficitur nulla sed sollicitudin. Aliquam nec enim eu enim egestas rutrum. Praesent dignissim libero sed libero efficitur lobortis. Nullam dictum, sem in tincidunt pellentesque, metus sem tempus risus, in facilisis massa arcu sit amet nunc. Phasellus egestas enim vel turpis convallis, sit amet fermentum felis dapibus. Praesent ante nisl, commodo non semper ac, aliquet sed erat. Sed vitae nibh quis metus ornare pulvinar in ac nunc. Aenean euismod felis nec egestas posuere. Vestibulum malesuada, lorem et tempus blandit, lectus erat aliquet nunc, quis pretium eros enim vel magna.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum faucibus pulvinar condimentum. Sed placerat risus quis odio dictum scelerisque. Fusce lacus eros, laoreet eu consequat eu, gravida vel risus. Ut non varius nisi, nec efficitur augue. In consequat tempus nisl in dapibus. Vivamus rutrum ultricies pretium. Nulla at ipsum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In fermentum nulla vel nulla malesuada commodo. Nulla nec dictum nibh. Mauris sit amet imperdiet odio. Donec varius auctor libero non pharetra. Donec efficitur iaculis scelerisque. Curabitur pulvinar erat vitae augue dignissim, ut porta metus aliquet. Vivamus vitae odio libero
          </p> 
          <p className="text-lg"> 
            
</p> 
</div> 
</div> 
</main> 
); 
} 