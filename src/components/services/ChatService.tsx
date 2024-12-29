import { useEffect, useState } from "react";
import LINK from "../../config/Link";
import { applyTheme } from "../../utils/themeUtils";
import Button from "../tags/Button";
import Modal from "../Modal";
import Img from "../tags/Img";
import ThemeImage1 from "../../assets/theme-1.png";
import ThemeImage2 from "../../assets/theme-2.png";

import "./chat.css";

const ChatService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const iframeContainer = document.getElementById("iframe-container");
      const iframe = document.getElementById("iframe") as HTMLIFrameElement;
      if (iframeContainer) {
        iframeContainer.style.transition = "opacity 1s ease-in-out";
        iframeContainer.style.opacity = "1";
      }

      // Terapkan tema aplikasi berdasarkan iframe
      if (iframe) {
        const checkIframeTheme = () => {
          try {
            // Akses elemen root dari iframe
            const iframeDoc =
              iframe.contentDocument || iframe.contentWindow?.document;
            const iframeHtml = iframeDoc?.documentElement;

            // Periksa apakah iframe memiliki kelas "dark"
            const isIframeDark = iframeHtml?.classList.contains("dark");

            // Terapkan tema berdasarkan iframe
            if (isIframeDark) {
              applyTheme("dark");
            } else {
              applyTheme("light");
            }
          } catch (error) {
            console.warn("Tidak dapat membaca iframe:", error);
          }
        };

        // Periksa tema iframe setelah beberapa waktu (karena iframe bisa membutuhkan waktu untuk memuat)
        const themeCheckInterval = setInterval(() => {
          checkIframeTheme();
        }, 1000);

        // Bersihkan interval saat komponen dihancurkan
        return () => clearInterval(themeCheckInterval);
      }
    }
  }, [isLoading]);

  return (
    <>
      <section
        className="mx-auto px-0 md:px-4 -mt-16 flex flex-col items-center justify-center"
        id="Services"
      >
        {/* Card Wrapper */}
        <div className="w-full border border-gray-300 rounded-lg shadow-md pt-0 pb-6 md:p-6 m-4 overflow-hidden flex flex-col items-center justify-center relative dark:bg-gray-900 dark:border-gray-700 dark:shadow-lg">
          {/* Loading Spinner */}
          {isLoading && (
            <div
              id="loading-spinner"
              className="text-center mb-6 block cursor-wait mt-32"
            >
              <div className="w-12 h-12 border-8 border-t-4 border-purple-600 border-t-transparent border-solid rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-300 mt-2 dark:text-gray-400">
                Waiting for AI Tool to load...
              </p>
            </div>
          )}

          {/* Gradio AI App (Initially hidden with opacity 0) */}
          <div
            id="iframe-container"
            className="w-full h-auto bg-white overflow-hidden relative border border-gray-300 dark:border-gray-700 rounded-lg"
            style={{ opacity: 0 }} // Start with opacity 0 (hidden)
          >
            <iframe
              id="iframe"
              src={LINK.gradioAppLinkChat}
              className="w-full h-[700px] dark:text-white"
            ></iframe>
          </div>

          {/* Call to Action Button */}
          <div className="mt-6">
            {/* Button untuk membuka modal */}
            <Button onClick={() => setIsModalOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 me-3"
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
              Theme
            </Button>

            {/* Modal */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Change Theme"
            >
              <h4 className="text-xl font-semibold dark:text-gray-200">1. Click the theme button</h4>
              <Img
                src={ThemeImage1}
                alt="Deskripsi gambar"
                lazy={true}
                className="rounded-lg mb-12"
              />
              <h4 className="text-xl font-semibold dark:text-gray-200">2. Then the theme will be in sync</h4>
              <Img
                src={ThemeImage2}
                alt="Deskripsi gambar"
                lazy={true}
                className="rounded-lg"
              />
            </Modal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatService;
