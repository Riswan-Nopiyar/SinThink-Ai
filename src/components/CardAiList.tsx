import React from "react";
import { FaComments,  FaLock } from "react-icons/fa"; // FaLock untuk ikon terkunci
import { FaRegImage } from "react-icons/fa6";
import Card from "./Card";

const CardAiList: React.FC = () => {
  const cardData = [
    {
      title: "Image",
      categories: ["Generative AI", "Computer Vision"],
      description: "Create images from text using fast AI models.",
      link: "/list-ai/service/image",
      Icon: FaRegImage
    },
    {
      title: "Chat",
      categories: ["Natural Language Processing", "(NLP)"],
      description: "Engage in conversations powered by AI language models.",
      link: "/list-ai/service/chat",
      Icon: FaComments
    },
    {
      title: "Locked Feature",
      categories: ["???", "???"],
      description: "This feature is currently locked. Unlock to access it.",
      link: "#",
      Icon: FaLock
    },
  ];

  return (
    <div className="container h-full mb-16 mx-auto px-4 sm:px-6 md:px-8 lg:px-52">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardAiList;