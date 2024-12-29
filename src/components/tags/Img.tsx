import React, { useState } from "react";
import { BiX } from "react-icons/bi"; // Ikon tombol silang

interface ImageProps {
  src: string; // URL gambar
  alt: string; // Deskripsi alternatif
  className?: string; // Kelas tambahan untuk gambar
  lazy?: boolean; // Mendukung lazy loading
}

const Img: React.FC<ImageProps> = ({ src, alt, className, lazy = true }) => {
  const [isImageOpen, setImageOpen] = useState(false);

  return (
    <>
      {/* Gambar */}
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer ${className}`}
        loading={lazy ? "lazy" : "eager"} // Lazy loading jika diaktifkan
        onClick={() => setImageOpen(true)} // Buka modal saat diklik
      />

      {/* Modal */}
      {isImageOpen && (
        <div className="fixed inset-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Konten Modal */}
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Tombol Tutup */}
            <button
              className="absolute top-4 right-4 bg-red-700/50 text-black rounded-full p-2 shadow-md hover:bg-red-200"
              onClick={() => setImageOpen(false)}
              aria-label="Close"
            >
              <BiX className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Img;