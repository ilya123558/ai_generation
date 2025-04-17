'use client'
import React, { useState } from 'react';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="flex items-center justify-between gap-[2vw] m-[0px_8.54vw]">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full p-[4vw_4.27vw_4vw_15.22vw] placeholder:text-[#ACADB9] bg-[#2E2E2E] bg-opacity-[0.03] rounded-[16px]"
        />
        <div className="h-full w-[15.22vw] flex items-center justify-center absolute top-0 pointer-events-none">
          <svg className="w-[8.01vw] h-[8.01vw]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13.0471" cy="13.0349" r="7.91169" transform="rotate(-45 13.0471 13.0349)" stroke="#C2C3CB" stroke-width="1.47619"/>
            <path d="M19.1904 18.8422L23.144 22.7032" stroke="#C2C3CB" stroke-width="1.80233" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <button
        onClick={handleClear}
        className="flex items-center justify-center min-w-[14vw] h-[14vw] bg-[#141718] rounded-[16px]"
      >
        <svg className="w-[7.19vw] h-[6.94vw]" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0938 6.5L7.09375 19.5M7.09375 6.5L20.0938 19.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};