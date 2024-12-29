import React from "react";

const Marquee: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      style={{ zIndex: 2147483647 }}
      className="fixed bottom-0 left-0 w-full bg-gray-800 text-white h-6 overflow-hidden"
    >
      {/* Container untuk item di marquee */}
      <div className="flex items-center space-x-4 animate-marquee">
        <img
          src="https://avatars.githubusercontent.com/u/103617674?v=4"
          alt="Riswan Nopiyar"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm font-semibold">Riswan Nopiyar</p>

        <img
          src="https://avatars.githubusercontent.com/u/25720743?s=200&v=4"
          alt="Hugging Face"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm">Hugging Face</p>
        
        <img
          src="https://avatars.githubusercontent.com/u/167524748?v=4"
          alt="Kingnish"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm">Kingnish</p>

        <p className="text-sm ml-8">&</p>

        <img
          src="https://avatars.githubusercontent.com/u/100950301?s=200&v=4"
          alt="Stability AI"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm">Stability AI</p>
      </div>

      {/* Display dynamic year */}
      <div className="absolute bottom-0 right-0 p-2 text-xs text-gray-400">
        <p>&copy; {currentYear} All Rights Reserved</p>
      </div>
    </section>
  );
};

export default React.memo(Marquee);