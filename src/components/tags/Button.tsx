import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string; // Jika diberikan, akan membuat elemen <a> atau <Link>
  target?: "_blank" | "_self" | "_parent" | "_top"; // Target untuk link (opsional)
  rel?: string; // Rel untuk link eksternal
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  href,
  target,
  rel,
}) => {
  const baseClass =
    "focus:ring-4 focus:outline-none focus:ring-purple-400 shadow-lg inline-flex items-center justify-center py-2 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 dark:hover:bg-purple-800 hover:opacity-75";

  // Gunakan <Link> jika href tersedia dan merupakan route internal
  if (href && !href.startsWith("http")) {
    return (
      <Link to={href} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }

  // Gunakan <a> jika href tersedia dan merupakan link eksternal
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  // Jika tidak, buat elemen <button>
  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
