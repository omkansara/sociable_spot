import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function Gallery() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-10 flex flex-col">
        <div className="text-center mt-10 mb-8">
          <span className="text-black text-3xl font-bold border-b-2 border-green-800">Gallery</span>

          <div className="container mx-auto p-4">
            <div className="relative bg-white border border-gray-300 rounded-lg shadow-md h-64">
              {/* First Box (Horizontal) */}
              <div className="absolute left-0 top-0 h-16 w-48 bg-blue-400"></div>
              {/* Second Box (Square) */}
              <div className="absolute inset-x-0 top-16 h-25 bg-green-400"></div>
              {/* Third Box (Rectangle) */}
              <div className="absolute bottom-0 right-0 h-22 w-16 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
