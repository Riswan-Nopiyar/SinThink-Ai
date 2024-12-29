import { useState, useEffect } from "react";
import LogoAi from "../../assets/ai-logo-192x192.png";
import { BiSun, BiMoon } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import {
  toggleTheme,
  getCurrentTheme,
  applyTheme,
} from "../../utils/themeUtils";

const Navbar = () => {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Kontrol visibilitas navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Posisi scroll terakhir

  const handleToggleTheme = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll ke bawah: sembunyikan navbar
      setIsVisible(false);
    } else {
      // Scroll ke atas: tampilkan navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); // Simpan posisi scroll terakhir
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      id="navbar"
      style={{ zIndex: 2147483646 }}
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 0
          ? "bg-white/30 dark:bg-gray-800/50 backdrop-blur-md shadow-lg"
          : "bg-transparent dark:bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Grup Kiri: Logo dan Nama Brand */}
        <div className="flex items-center space-x-2">
          <img src={LogoAi} alt="Left Logo" className="w-8 h-8" />
          <a
            href="/#home"
            className="text-2xl font-bold text-gray-800 dark:text-white"
            aria-label="Go to homepage"
          >
            SinThink.Ai
          </a>
        </div>

        {/* Grup Kanan: Navigation */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          <li>
            <a
              href="/"
              className="text-gray-800 hover:text-purple-500 dark:text-white dark:hover:text-purple-400 transition"
              aria-label="Go to Home section"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/list-ai"
              className="text-gray-800 hover:text-purple-500 dark:text-white dark:hover:text-purple-400 transition"
              aria-label="Go to List Ai page"
            >
              List Ai
            </a>
          </li>
          <li>
            <a
              href="/install"
              className="text-gray-800 hover:text-purple-500 dark:text-white dark:hover:text-purple-400 transition"
              aria-label="Go to Install section"
            >
              Install
            </a>
          </li>
        </ul>

        {/* Actions (Theme toggle and menu toggle) */}
        <div className="flex items-center ml-8">
          <button
            onClick={handleToggleTheme}
            className="text-gray-800 dark:text-white"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <BiMoon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <BiSun className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-toggle"
            className="ml-4 text-gray-800 dark:text-white md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <HiMenu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="bg-gradient-to-r from-purple-500/50 to-blue-500/50 dark:bg-gray-800/20 backdrop-blur-3xl md:hidden absolute top-15 right-0 w-48 font-bold text-gray-800 dark:text-white py-4 px-6 space-y-4 shadow-lg rounded-lg"
        >
          <a
            href="/"
            className="block hover:text-purple-500 dark:hover:text-purple-400 transition"
            aria-label="Go to Home section"
          >
            Home
          </a>
          <a
            href="/list-ai"
            className="block hover:text-purple-500 dark:hover:text-purple-400 transition"
            aria-label="Go to List Ai page"
          >
            List Ai
          </a>
          <a
            href="/install"
            className="block hover:text-purple-500 dark:hover:text-purple-400 transition"
            aria-label="Go to Services section"
          >
            Install
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
