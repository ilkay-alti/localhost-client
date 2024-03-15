"use client";
import Footer from "@/components/Home/Footer";
import ListItem from "@/components/Home/ListItem";
import Search from "@/components/Home/Search";
import React from "react";

const Home = () => {
  const data = [
    {
      title: "Title",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: true,
      liked: true,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
    {
      title: "Title2",
      location: "USA",
      star: 4.9,
      price: 350,
      priceChart: false,
    },
  ];

  const [dataCount, setDataCount] = React.useState(0);
  const dataCountPlus = () => {
    setDataCount(dataCount + 1);
    console.log(dataCount);
  };
  return (
    <div className="flex flex-col ">
      <Search />
      <div className="container grid grid-cols-4 gap-4 mx-auto py-6">
        {data.map((item, i) => {
          return <ListItem key={i} data={item} />;
        })}
      </div>
      <div className="flex justify-center py-6">
        <button
          onClick={dataCountPlus}
          className="bg-white border-2 border-[#00C29F] text-[#00C29F] rounded-lg w-36 h-16"
        >
          Show More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
