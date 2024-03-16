"use client";
import Footer from "@/components/Home/Footer";
import ListItem from "@/components/Home/ListItem";
import Search from "@/components/Home/Search";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Title",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: true,
    liked: true,
  },
  {
    id: 2,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
  {
    id: 3,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
  {
    id: 4,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
  {
    id: 5,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
  {
    id: 6,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
  {
    id: 7,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
  {
    id: 8,
    title: "Title2",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: false,
  },
];
const Home = () => {
  const [dataCount, setDataCount] = React.useState(4);
  const dataCountPlus = () => {
    setDataCount(dataCount + 8);
  };
  return (
    <div className="flex flex-col ">
      <Search />
      <div className="container grid grid-cols-4 gap-4 mx-auto py-6">
        {data.slice(0, dataCount).map((item, i) => {
          return <ListItem key={i} data={item} />;
        })}
      </div>
      <div className="flex justify-center py-6">
        <button
          onClick={dataCountPlus}
          className="bg-white border-2 border-[#00C29F] text-[#00C29F] rounded-lg w-36 h-16"
        >
          {dataCount > data.length ? "Full List" : "Load More"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
