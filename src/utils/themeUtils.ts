// themeUtils.ts
export const getCurrentTheme = (): string => {
    return localStorage.getItem("theme") || "light";
  };
  
  export const applyTheme = (theme: string) => {
    const root = document.documentElement;
    const gradioApp = document.querySelector("gradio-app");
  
    if (theme === "dark") {
      root.classList.add("dark");
      if (gradioApp) gradioApp.classList.add("dark");
    } else {
      root.classList.remove("dark");
      if (gradioApp) gradioApp.classList.remove("dark");
    }
  };
  
  export const toggleTheme = (): string => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    return newTheme;
  };
  