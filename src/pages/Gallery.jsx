import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {

useEffect(() => {
    document.title = "Restoran Lav - Galerija";
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: '/gal1.jpg', alt: 'Enterijer restorana', category: 'enterijer' },
    { id: 2, src: '/gal2.jpg', alt: 'Letnja bašta', category: 'bašta' },
    { id: 3, src: '/gal3.jpg', alt: 'Galerija restorana', category: 'enterijer' },
    { id: 4, src: '/gal4.jpg', alt: 'Rostilj', category: 'kuhinja' },
    { id: 5, src: '/gal5.jpg', alt: 'Bar', category: 'bar' },
    { id: 6, src: '/gal6.jpg', alt: 'Pogled na salu', category: 'enterijer' },
    { id: 7, src: '/gal7.jpg', alt: 'Specijaliteti', category: 'hrana' },
    { id: 8, src: '/gal8.jpg', alt: 'Team', category: 'osoblje' },
    { id: 9, src: '/gal9.jpg', alt: 'Pogled spolja', category: 'eksterijer' }
  ];

  const categories = [
    { id: 'sve', name: 'Sve' },
    { id: 'enterijer', name: 'Enterijer' },
    { id: 'bašta', name: 'Letnja bašta' },
    { id: 'kuhinja', name: 'Kuhinja' },
    { id: 'bar', name: 'Bar' },
    { id: 'hrana', name: 'Naša jela' },
    { id: 'osoblje', name: 'Naš tim' },
    { id: 'eksterijer', name: 'Eksterijer' }
  ];

  const [activeCategory, setActiveCategory] = useState('sve');

  const filteredImages = activeCategory === 'sve' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-red-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galerija</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Pogledajte atmosferu našeg restorana
          </p>
        </div>
      </div>
      
      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-2 text-center text-white">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;