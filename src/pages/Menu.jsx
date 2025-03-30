import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Menu() {
  const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('sve');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'sve', name: 'Sve' },
    { id: 'salata', name: 'Salate' },
    { id: 'predjelo', name: 'Predjela' },
    { id: 'prilog', name: 'Prilozi' },
    { id: 'rostilj', name: 'Rostilj' },
    { id: 'meso', name: 'Jela od mesa' },
    { id: 'riba', name: 'Riba i morski plodovi' },
    { id: 'piletina', name: 'Piletina' },
    { id: 'vegetarijansko', name: 'Vegetarijanska jela' },
    { id: 'pica', name: 'Pice' },
    { id: 'testenina', name: 'Testenine' },
    { id: 'desert', name: 'Deserti' },
  ];

  useEffect(() => {
    document.title = 'Restoran Lav - Jelovnik';
    
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setFilteredData(data);
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  useEffect(() => {
    let result = jsonData;
    
    if (activeFilter !== 'sve') {
      result = result.filter(item => item.kategorija === activeFilter);
    }
    
    if (searchTerm) {
      result = result.filter(item => 
        item.imeJela.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredData(result);
  }, [activeFilter, searchTerm, jsonData]);

  return (
    <div className="relative bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-red-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Naš Jelovnik</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Otkrijte bogatstvo ukusa naših specijaliteta
          </p>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Pretražite jelovnik..."
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-6 top-3.5 h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`cursor-pointer px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                    activeFilter === category.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.slika || '/images/menu-placeholder.jpg'}
                    alt={item.imeJela}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                    {item.cena} RSD
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.imeJela}</h3>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {categories.find(c => c.id === item.kategorija)?.name}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.opis}</p>
                  {item.sastojci && (
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Sastojci:</span> {item.sastojci}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Nema rezultata</h3>
            <p className="mt-1 text-gray-500">
              Nismo pronašli jela koja odgovaraju vašoj pretrazi.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default Menu;