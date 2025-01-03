import LogoAi from "../../assets/ai-logo-192x192.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* jangan pakai tag footer */}
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={LogoAi} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SinThink.Ai
              </span>
            </Link>
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a
              href="https://www.nopiyar.my.id/p/riswan-nopiyar.html"
              className="hover:underline"
            >
              Riswan Nopiyar
            </a>
            . All Rights Reserved.
          </span>
        </div>
    </>
  );
};

export default Footer;
