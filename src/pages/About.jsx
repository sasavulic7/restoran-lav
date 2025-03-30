import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {

  useEffect(() => {
    document.title = "Restoran Lav - O nama";
  }, []);
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-red-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">O Restoranu Lav</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Tradicija i kvalitet u srcu Jagodine
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative h-64 md:h-80">
            <img 
              src="/gal1.jpg" 
              alt="Interijer restorana Lav"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-amber-500 text-white font-bold px-4 py-1 rounded-full text-sm">
                Od 2011. godine
              </span>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
              <span className="relative z-10">
                Luksuzno opremljen restoran
                <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-400 opacity-30 -z-0"></span>
              </span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              u srcu Jagodine
            </h3>
            
            <div className="prose max-w-none text-gray-600 space-y-4">
              <p>
                Restoran LAV počeo je sa radom decembra 2011. godine. Preko puta nekadašnje ćevabdžinice LAV u ulici Kneginje Milice u Jagodini otvoren je nov, moderan objekat koji trenutno može da primi više od 200 gostiju.
              </p>
              <p>
                Restoran raspolaže sa 210 sedećih mesta u prizemlju, galeriji i letnjoj bašti. U Restoranu LAV vas očekuje prijatan ambijent, kvalitetna usluga, ljubazno osoblje i svakako bogata ponuda hrane i pića.
              </p>
              <p>
                Naši iskusni kuvari pripremaju jela sa roštilja, pice, razne specijalitete, čorbe i sveže salate, koristeći samo najkvalitetnije sastojke i tradicionalne recepte.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Kapacitet</h4>
                  <p className="text-gray-600">210 sedećih mesta u tri različite zone</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Radno vreme</h4>
                  <p className="text-gray-600">Pon-Ned: 08-24h, neprestano otvoreno</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Lokacija</h4>
                  <p className="text-gray-600">Kneginje Milice 99, Jagodina</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Specijaliteti</h4>
                  <p className="text-gray-600">Jela sa roštilja, domaća kuhinja, pice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery Preview */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Naš prostor</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="/gal2.jpg" 
              alt="Restoran Lav interijer" 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/gal3.jpg" 
              alt="Letnja bašta" 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/gal4.jpg" 
              alt="Galerija restorana" 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/gal5.jpg" 
              alt="Rostilj" 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div className="text-center mt-6">
            <a 
              href="/galerija" 
              className="inline-block border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Pogledajte celu galeriju
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
