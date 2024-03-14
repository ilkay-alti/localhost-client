"use client";
import { on } from "events";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const onClick = () => {
    console.log(searchInput, checkIn, checkOut, guests);
    // Add your logic here
  };
  return (
    <div className="flex flex-col h-[264px] justify-center bg-search-hero py-6 text-black px-20">
      <p className="font-bold text-4xl">
        Find a <text className="text-[#00C29F]">host</text> for every journey
      </p>
      <p className="font-light text-xl">
        Discover the best local rental properties that fits your every travel
        needs
      </p>
      <div className=" flex gap-3 mt-6 px-[12px] py-[10px] bg-white rounded-xl ">
        <div className="relative max-w-[547px] w-full h-16 flex items-center border border-[#D9D9D9] rounded">
          <input
            type="text"
            placeholder="Search for a city"
            className=" w-full h-full rounded-lg border-none relative px-4 outline-none "
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <label className="absolute right-6 ">
            <FaLocationCrosshairs />
          </label>
        </div>
        <div className="relative max-w-[173px] w-full h-16 flex items-center border border-[#D9D9D9] rounded">
          <input
            type="date"
            placeholder="Check in"
            className=" w-full h-full rounded-lg border-none relative px-4 outline-none "
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="relative max-w-[173px] w-full h-16 flex items-center border border-[#D9D9D9] rounded">
          <input
            type="date"
            placeholder="Check out"
            className=" w-full h-full rounded-lg border-none relative px-4 outline-none "
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="relative max-w-[173px] w-full h-16 flex items-center border border-[#D9D9D9] rounded">
          <input
            type="number"
            placeholder="Guests"
            className=" w-full h-full rounded-lg border-none relative px-4 outline-none "
            onChange={(e) => setGuests(e.target.value)}
          />
          <label className="absolute right-8 ">
            <FaRegUser />
          </label>
        </div>
        <button
          onClick={onClick}
          className="bg-[#00C29F] text-white rounded-lg w-36 h-16"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
