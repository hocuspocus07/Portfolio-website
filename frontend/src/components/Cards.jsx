import React from "react";

const Card = ({ title, description, image, icon: Icon, link, date }) => {
  return (
    <a href={link} alt={title} target="_blank" rel="noopener noreferrer">
      <div className="relative group hover:cursor-pointer w-[190px] h-[254px] bg-black/40 border border-green-700/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute inset-[3px] bg-black/70 rounded-md flex flex-col justify-center items-center p-4 text-center z-10 backdrop-blur-sm">
          {Icon && <Icon className="text-green-400 size-10 mb-2 group-hover:scale-110 transition-transform duration-300" />}
          {image && <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md mb-2 transition-all duration-300" />}
          <h2 className="text-green-300 text-lg font-mono font-semibold group-hover:text-green-400 transition-colors duration-300">{title}</h2>
          <p className="text-gray-400 text-xs mt-1 font-mono">{description}</p>
          {date && <span className="text-gray-500 text-xs font-mono mt-2">{date}</span>}
        </div>
        
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-500/50"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/50"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500/50"></div>
      </div>
    </a>
  );
};

export default Card;