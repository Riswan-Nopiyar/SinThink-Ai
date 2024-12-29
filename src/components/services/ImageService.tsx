import { useEffect, useState } from "react";
import LINK from "../../config/Link";
import { applyTheme, getCurrentTheme } from "../../utils/themeUtils";
import './image.css';

const ImageService = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const script = document.createElement("script");
    script.src = LINK.gradioScriptSrc;
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const gradioContainer = document.getElementById("gradio-container");
      if (gradioContainer) {
        gradioContainer.style.transition = "opacity 1s ease-in-out";
        gradioContainer.style.opacity = "1";
      }

      // Terapkan tema setelah elemen tersedia
      const theme = getCurrentTheme();
      applyTheme(theme);
    }
  }, [isLoading]);

  
  return (
    <>

      <section className="container mx-auto px-4 py-8 -mt-6 flex flex-col items-center justify-center" id="Services">
        {/* Card Wrapper */}
        <div
          id="card-container"
          className="w-full max-w-[800px] bg-white border border-gray-300 rounded-lg shadow-md p-6 m-4 overflow-hidden flex flex-col items-center justify-center relative dark:bg-[rgb(11,15,25)] dark:border-gray-700 dark:shadow-lg"
        >
          {/* Status Indicator (Running + Spinning Icon) */}
          <span className="absolute top-2 right-2 z-10 inline-block cursor-wait">
            <div className="inline-flex select-none items-center overflow-hidden font-mono text-xs flex-shrink-0 mr-2 rounded-lg border leading-none dark:bg-[rgb(11,15,25)] border-green-100 dark:border-green-600 text-green-700 dark:text-green-500">
              <div className="inline-flex items-center px-2 py-[0.32rem] border-r border-green-100 bg-green-100 dark:bg-green-950 hover:bg-green-100/70 dark:hover:bg-green-800 hover:text-green-800 dark:hover:text-green-400">
                Running <span className="mx-1">on</span>
                <span className="-skew-x-6 truncate font-bold uppercase">HGF</span>
              </div>
              <div className="inline-flex items-center px-2 py-0 pb-px">
                <svg
                  className="h-2.5 w-2.5 mr-1.5 animate-spin-slow-left"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M7.48877 6.75C7.29015 6.75 7.09967 6.82902 6.95923 6.96967C6.81879 7.11032 6.73989 7.30109 6.73989 7.5C6.73989 7.69891 6.81879 7.88968 6.95923 8.03033C7.09967 8.17098 7.29015 8.25 7.48877 8.25C7.68738 8.25 7.87786 8.17098 8.0183 8.03033C8.15874 7.88968 8.23764 7.69891 8.23764 7.5C8.23764 7.30109 8.15874 7.11032 8.0183 6.96967C7.87786 6.82902 7.68738 6.75 7.48877 6.75ZM7.8632 0C11.2331 0 11.3155 2.6775 9.54818 3.5625C8.80679 3.93 8.47728 4.7175 8.335 5.415C8.69446 5.565 9.00899 5.7975 9.24863 6.0975C12.0195 4.5975 15 5.19 15 7.875C15 11.25 12.3265 11.325 11.4428 9.5475C11.0684 8.805 10.2746 8.475 9.57813 8.3325C9.42836 8.6925 9.19621 9 8.89665 9.255C10.3869 12.0225 9.79531 15 7.11433 15C3.74438 15 3.67698 12.315 5.44433 11.43C6.17823 11.0625 6.50774 10.2825 6.65751 9.5925C6.29056 9.4425 5.96855 9.2025 5.72891 8.9025C2.96555 10.3875 0 9.8025 0 7.125C0 3.75 2.666 3.6675 3.54967 5.445C3.92411 6.1875 4.71043 6.51 5.40689 6.6525C5.54918 6.2925 5.78882 5.9775 6.09586 5.7375C4.60559 2.97 5.1972 0 7.8632 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </span>
          

          

          {/* Loading Spinner (Visible during waiting period) */}
          {isLoading && (
            <div id="loading-spinner" className="text-center mb-6 block cursor-wait mt-32">
              <div className="w-12 h-12 border-8 border-t-4 border-purple-600 border-t-transparent border-solid rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-300 mt-2 dark:text-gray-400">
                Waiting for AI Tool to load...
              </p>
            </div>
          )}

          {/* Gradio AI App (Initially hidden with opacity 0) */}
          <div
            id="gradio-container"
            className="max-w-[800px] bg-white dark:bg-[rgb(11,15,25)] overflow-hidden relative"
            style={{ opacity: 0 }} // Start with opacity 0 (hidden)
          >
            <script
              type="module"
              src={LINK.gradioScriptSrc}
            ></script>
            <gradio-app
              id="gradio-app"
              src={LINK.gradioAppLinkImage}
              className="w-full h-auto rounded-lg"
            ></gradio-app>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ImageService;
