import iconMegic from "../assets/magic-wand.svg";
import poitingRight from "../assets/pointing-right.svg";
import beachImg from "../assets/beach.webp";
import farmerImg from "../assets/man-farmer.webp";
import astronautImg from "../assets/astronaut.webp";
import blueHairImg from "../assets/girl-blue-hair.webp";

const IntroSection = () => {
  return (
    <section
      id="Home"
      className="container mx-auto px-4 sm:px-8 xl:px-0 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
        {/* Kolom Pertama */}
        <div>
          <div className="mx-auto mb-6 max-w-[900px] px-4 sm:px-8 xl:px-0 relative">
            <div className="text-center md:text-start md:ml-11">
              {/* Title */}
              <h1 className="text-black dark:text-white text-3xl font-extrabold sm:text-5xl xl:text-heading-1 pb-2">
                SinThink Ai
              </h1>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 text-transparent bg-clip-text mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1 pb-2 inline-flex items-center">
                <span className="text-green-700 dark:text-green-500 bg-green-400/50 dark:bg-green-700/50 mr-3 pb-1 px-3 rounded-lg">Free </span> Ai Tools
                <img
                  src={iconMegic}
                  alt="AI Icon"
                  className="ml-2"
                  width={50}
                />
              </span>

              {/* Description Text */}
              <p className="max-w-[500px] xs:mx-auto  mb-9 font-medium text-md md:text-lg text-gray-600 dark:text-gray-400">
              experience free and fast AI solutions designed to boost productivity.
              Leverage cutting-edge AI tools to convert your text prompts into stunning visuals,
              Ideal for  demanding swift and effective outcomes.
              </p>

              {/* Call to Action Button */}
              <div className="flex items-center gap-6">
                {/* Tangan Bergerak */}
                <img
                  src={poitingRight}
                  alt="Pointing Right"
                  className="w-20 sway"
                />
                {/* Tombol Get Started */}
                <a
                  href="/list-ai"
                  className="group transform transition-transform duration-300 hover:scale-110 p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg hover:shadow-xl inline-block"
                >
                  <div className="bg-gradient-to-b from-stone-200/40 to-white/80 dark:from-gray-700 dark:to-gray-800 rounded-[8px] px-4 py-2">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold text-gray-700 dark:text-gray-100">
                        Get Started
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>

          <div className="container mx-auto grid grid-cols-4 gap-4 p-6">
            {/* Kolom 1: Tetap */}
            <div className="group -mt-7">
              <div className="aspect-[2/1] w-full">
                <img
                  src={farmerImg}
                  alt="Farmer man"
                  loading="lazy"
                  className="shadow-gray-700 bg-gray-500/10 shadow-lg w-full h-60 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Kolom 2: Naik */}
            <div className="group mt-8">
              <div className="aspect-[2/1] w-full">
                <img
                  src={blueHairImg}
                  alt="girl with blue hair"
                  loading="lazy"
                  className="shadow-gray-700 bg-gray-500/10 shadow-lg w-full h-60 object-cover rounded-lg transform group-hover:translate-y-[-10px] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Kolom 3: Turun */}
            <div className="group -mt-7">
              <div className="aspect-[2/1] w-full">
                <img
                  src={beachImg}
                  alt="beach"
                  loading="lazy"
                  className="shadow-gray-700 bg-gray-500/10 shadow-lg w-full h-60 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Kolom 4: Naik */}
            <div className="group mt-8">
              <div className="aspect-[2/1] w-full">
                <img
                  src={astronautImg}
                  alt="astronaut"
                  loading="lazy"
                  className="shadow-gray-700 bg-gray-500/10 shadow-lg w-full h-60 object-cover rounded-lg transform group-hover:translate-y-[-10px] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1283 132"
      className="w-full h-auto"
    >
      {/* Definisi Gradien */}
      <defs>
        <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" /> {/* from-purple-600 */}
          <stop offset="100%" stopColor="#2563EB" /> {/* to-blue-600 */}
        </linearGradient>
        <linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B21A8" /> {/* from-purple-700 */}
          <stop offset="100%" stopColor="#1E40AF" /> {/* to-blue-700 */}
        </linearGradient>
      </defs>

      {/* Path dengan Gradien */}
      <path
        d="M1282.46 5.79c-.91-3.88-5.18-6.65-9.04-5.54-104.37 29.02-193.78 56.87-361.6 74.53-268.41 28.16-539.6 14.6-803.08-26.38C94.9 47.97-.34 26.24.08 41.38c-1.56 14.21 19.47 12.91 29.6 17.24 32.82 8.6 66.1 15.33 99.4 21.81 238.99 44.43 482.98 55.29 725.63 49.01 92.37-4.11 185.68-9.96 275.51-33.09 18.68-6.31 42.79-9.21 55.18-25.89 6.76-13.28-12.41-21.16-13.83-6.12-17.69 11.67-39.31 15.61-59.45 21.34-114.56 25.18-245.31 30.46-361.99 30.36-191.39.45-383.13-10.13-572-42.21 277.31 36.42 560.77 44.96 837.82 2.23 104.21-15.4 195.11-42.74 260.97-61.22a7.57 7.57 0 0 0 5.54-9.05Z"
        fill="url(#gradient-light)" // Default gradient
        className="dark:fill-[url(#gradient-dark)]" // Dark mode gradient
      ></path>
    </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
