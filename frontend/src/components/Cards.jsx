import React from "react";

const Card = ({ title, description, image, icon: Icon,link,date}) => {
  return (
    <a href={link} alt={title}>
    <div className="relative hover:scale-110 transition-all duration-300 hover:cursor-pointer w-[190px] h-[254px] bg-[#07182E] flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-lg">
      {/* rotating background  */}
      <div className="absolute w-[100px] h-[130%] bg-gradient-to-b from-cyan-400 to-fuchsia-500 animate-slow-spin"></div>

      {/* inner card  */}
      <div className="absolute inset-[5px] bg-[#07182E] rounded-xl flex flex-col justify-center items-center p-4 text-center z-10">
        {Icon && <Icon className="text-cyan-400 size-10 mb-2" />}
        {image && <img src={image} alt={title} className="w-16 h-16 object-cover rounded-lg mb-2" />}
        <h2 className="text-white text-xl font-semibold">{title}</h2>
        <p className="text-gray-300 text-sm mt-1">{description}</p>
        {date && <span className="text-gray-300 text-sm">{date}</span>}
      </div>
    </div></a>
  );
};

export default Card;
