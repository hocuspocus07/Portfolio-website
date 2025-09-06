import React, { useState } from 'react';

function CertFilter({ onFilterChange }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = [
        { name: 'All'},
        { name: 'Cybersecurity'},
        { name: 'Web Development'},
        { name: 'Hackathon'},
        { name: 'CTF'},
        { name: 'Professional'},
        { name: 'Other'},
    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
        onFilterChange(category);
    };

    return (
        <div className="flex justify-center items-center my-8">
            <div className="w-[180px] text-gray-100 font-mono">
                <div className="relative w-full group">
                    <label className="text-sm text-green-500">CATEGORY_FILTER</label>
                    <button 
                        className="py-2.5 px-3 w-full mt-2 text-sm border border-green-700/30 bg-black/40 text-green-400 focus:border-green-500 focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold hover:border-green-500/50 transition-all duration-300"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {selectedCategory}
                        <svg 
                            className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-black/90 border border-green-700/30 text-green-400 z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max p-1 text-sm mt-1 backdrop-blur-sm">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`w-full block cursor-pointer hover:bg-green-900/30 px-3 py-2 rounded-md font-mono ${
                                        selectedCategory === category.name ? 'bg-green-900/40 text-green-300' : ''
                                    }`}
                                    onClick={() => handleCategorySelect(category.name)}
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CertFilter;