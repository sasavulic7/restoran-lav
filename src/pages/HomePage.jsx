import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../assets/images/pocetna_slika.jpg';
import {Link } from 'react-router-dom';

console.log(backgroundImage); // Should show the resolved path

function HomePage() {

    useEffect(() => {
        document.title = 'Restoran Lav - Početna Strana'; // Set the document title
    }, []);
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SectionWithWhiteBackground />
      <PopularDishesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
function Hero() {
    return (
        <div className="relative w-full h-[70vh] min-h-[500px] bg-cover bg-center bg-gray-900">
            {/* Background image with overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: 'url("/pocetna_slika.jpg")' }}
            ></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Logo */}
                <div className="mb-8 animate-fade-in">
                    <img 
                        src="/lav-logo.png" 
                        alt="Lav Logo" 
                        className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-lg"
                    />
                </div>
                
                {/* Text */}
                <div className="mt-8 animate-slide-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Najbolje mesto za užitak!
                    </h1>
                    <p className="text-xl text-amber-300 max-w-2xl mx-auto">
                        Doživite pravi ukus tradicije u srcu Jagodine
                    </p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-12 animate-fade-in">
                    <a 
                        href="/rezervacije" 
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Rezervišite sto
                    </a>
                </div>
            </div>
        </div>
    );
}

function SectionWithWhiteBackground() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Tekstualni deo */}
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            <span className="relative inline-block">
                                Luksuzno opremljen restoran
                                <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-400 opacity-30 -z-0"></span>
                            </span>
                            <br />
                            <span className="relative inline-block mt-2">
                                u srcu Jagodine
                                <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-400 opacity-30 -z-0"></span>
                            </span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Restoran LAV počeo je sa radom decembra 2011. godine. Preko puta nekadašnje ćevabdžinice LAV u ulici Kneginje Milice u Jagodini otvoren je nov, moderan objekat koji trenutno može da primi više od 200 gostiju.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4 text-amber-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">210 sedećih mesta u prizemlju, galeriji i letnjoj bašti</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4 text-amber-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Iskusni kuvari sa tradicionalnim receptima</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Slika */}
                    <div className="md:w-1/2 relative">
                        <img 
                            src="home_about.jpg" 
                            alt="Restoran LAV interijer" 
                            className="rounded-xl shadow-xl w-full h-auto object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg">
                            <span className="font-bold text-lg">Od 2011. godine</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PopularDishesSection() {
    const popularDishes = [
        {
            id: 1,
            name: "Roštilj specijalitet LAV",
            description: "Miks najkvalitetnijih mesa sa roštilja uz domaće specijalitete",
            price: "700 RSD",
            image: "/punjenaPljeskavica.jpg"
        },
        {
            id: 2,
            name: "Pica po izboru šefa",
            description: "Dnevna ponuda svežih pizza sa tradicionalnim receptima",
            price: "900 RSD",
            image: "/picaLav.jpg"
        },
        {
            id: 3,
            name: "Baklave",
            description: "Pripremljena po originalnom receptu",
            price: "300 RSD",
            image: "/baklave.jpg"
        }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Naslov sa dekoracijom */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                        <span className="relative z-10">Najpopularnija jela</span>
                        <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-400 opacity-30 -z-0"></span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Probajte jela koje naši gosti najčešće biraju i postanite deo Lav porodice!
                    </p>
                </div>

                {/* Kartice sa jelima */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {popularDishes.map((dish) => (
                        <div 
                            key={dish.id} 
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img 
                                    src={dish.image} 
                                    alt={dish.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                                <span className="absolute bottom-4 right-4 bg-amber-500 text-white font-bold px-4 py-1 rounded-full text-sm">
                                    {dish.price}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                                <p className="text-gray-600 mb-4">{dish.description}</p>
                                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                                    Naruči odmah
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Poziv na akciju */}
                <div className="mt-16 text-center">
                  

                    <Link to="/jelovnik" className="inline-block border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                    Pogledajte ceo meni →
                    </Link>
                </div>
            </div>
        </section>
    );
}

function CallToActionSection() {
    return (
        <section className="py-20 bg-amber-50 relative overflow-hidden">
            {/* Dekorativni elementi */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-amber-400"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-amber-300"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        <span className="relative inline-block">
                            Uverite se sami, dođite već danas!
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-400 opacity-30 -z-0"></span>
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Idealno mesto za porodične ručkove, najbolji izbor za užitak u hrani! Prijatan ambijent za održavanje poslovnih sastanaka i proslava svih vrsta.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="/rezervacije" 
                            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Rezervišite sto
                        </a>
                        <a 
                            href="/kontakt" 
                            className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
                        >
                            Kontaktirajte nas
                        </a>
                    </div>
                </div>
                
                {/* Info kartice */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Prijatan ambijent</h3>
                        <p className="text-gray-600">Luksuzno opremljen prostor za sve prilike</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Radno vreme</h3>
                        <p className="text-gray-600">Pon-Ned: 08-24h<br />Neprestano otvoreno</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Brza rezervacija</h3>
                        <a href='tel:' className="text-gray-600">Pozovite nas odmah<br />035 8220912</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomePage;