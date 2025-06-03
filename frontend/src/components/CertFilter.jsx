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
        {name:'Professional'},
        {name:'Other'},
    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
        onFilterChange(category);
    };

    return (
        <div className="flex justify-center items-center my-8">
            <div className="w-[150px] text-gray-900 dark:text-gray-100">
                <div className="relative w-full group">
                    <label className="text-sm text-lime-500">Category</label>
                    <button 
                        className="py-2.5 px-3 w-full mt-2 md:text-sm text-site border border-dimmed bg-gray-900 text-white focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
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
                        <div className="absolute bg-gray-900 text-white z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max p-1 border border-dimmed text-xs md:text-sm">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`w-full block cursor-pointer hover:bg-gray-400 hover:text-black dark:hover:bg-gray-900 px-3 py-2 rounded-md ${
                                        selectedCategory === category.name ? 'bg-white text-black dark:bg-gray-900 text-link' : ''
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