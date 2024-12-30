import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Terminal from "./Terminal";
import { getCurrentTheme } from "../utils/themeUtils";

const TerminalWrapper = () => {
  const handleCopy = (elementId: string) => {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        const codeText = element.innerText;
        navigator.clipboard
          .writeText(codeText)
          .then(() => showToast("Code successfully copied to clipboard!", "success"))
          .catch(() => showToast("Failed to copy code. Please try again.", "error"));
      } else {
        showToast("Element not found. Please check the ID.", "error");
      }
    } catch (_) {
      showToast("An unexpected error occurred. Please try again.", "error");
    }
  };

  const showToast = (message: string, type: "success" | "error") => {
    const theme = getCurrentTheme();

    if (type === "success") {
      toast(message, { theme });
    } else {
      toast.error(message, { theme });
    }
  };


  return (
    <div
    id="howToInstall"
    className="terminal-custom-card p-4 overflow-hidden border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm"
  >
    <div className="max-w-6xl mx-auto space-y-6">
    <div className="flex flex-col justify-center items-center mb-9 mt-6">
  <h1 className="text-center text-3xl font-bold dark:text-white">Installing Locally</h1>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1418 125"
      width={300}
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
        d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
        fill="url(#gradient-light)" // Default gradient
        className="dark:fill-[url(#gradient-dark)]" // Dark mode gradient
      ></path>
    </svg>
</div>

      {/* Step 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Left: Heading and Description */}
        <div>
          <h2 className="border-l-8 pl-2 border-purple-600 text-xl font-semibold text-gray-800 dark:text-white">Step 1: Clone the Repository</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Clone the repository to your local machine. This command fetches all project files from the GitHub repository.
          </p>
        </div>
        {/* Right: Terminal */}
        <Terminal
          title="Terminal"
          buttonId="terminalGit"
          content={[
            { text: 'git', color: 'text-yellow-300' },
            { text: ' clone https://github.com/Riswan-Nopiyar/SinThink-Ai', color: 'text-white' }
          ]}
          onCopy={handleCopy}
        />
      </div>
  
      {/* Step 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div>
          <h2 className="border-l-8 pl-2 border-purple-600 text-xl font-semibold text-gray-800 dark:text-white">Step 2: Navigate to the Project Directory</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Change into the project directory to ensure you’re working in the correct folder.
          </p>
        </div>
        <Terminal
          title="Terminal"
          buttonId="terminalCd"
          content={[
            { text: 'cd', color: 'text-yellow-300' },
            { text: ' SinThink-Ai', color: 'text-white' }
          ]}
          onCopy={handleCopy}
        />
      </div>
  
      {/* Step 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div>
          <h2 className="border-l-8 pl-2 border-purple-600 text-xl font-semibold text-gray-800 dark:text-white">Step 3: Install Dependencies</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Install all required dependencies listed in the <code className="font-mono">package.json</code> file.
          </p>
        </div>
        <Terminal
          title="Terminal"
          buttonId="terminalInstall"
          content={[
            { text: 'npm', color: 'text-yellow-300' },
            { text: ' install', color: 'text-white' }
          ]}
          onCopy={handleCopy}
        />
      </div>
  
      {/* Step 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div>
          <h2 className="border-l-8 pl-2 border-purple-600 text-xl font-semibold text-gray-800 dark:text-white">Step 4: Start the Development Server</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Launch the development server to preview the application in your browser.
          </p>
        </div>
        <Terminal
          title="Terminal"
          buttonId="terminalRun"
          content={[
            { text: 'npm', color: 'text-yellow-300' },
            { text: ' run dev', color: 'text-white' }
          ]}
          onCopy={handleCopy}
        />
      </div>
    </div>
  </div>
  
  );
};

export default TerminalWrapper;
