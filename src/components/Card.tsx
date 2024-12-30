import React from "react";
import Button from './tags/Button';
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  categories: string[];
  description: string;
  link: string;
  Icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, categories, description, link, Icon }) => {
  return (
    <div className="relative mt-5 flex flex-col rounded-xl bg-white dark:bg-slate-800 bg-clip-border text-gray-700 shadow-md dark:border dark:border-gray-700">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="text-white w-32 h-32" aria-hidden="true" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 dark:text-white block text-xl font-semibold leading-snug">{title}</h5>
        {categories.map((category, index) => (
          <span
            key={index}
            className="inline-block mr-2 py-[2px] px-2 text-[0.6rem] font-semibold rounded-md text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
          >
            {category}
          </span>
        ))}
        <p className="block dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <Button
          href={link}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default Card;