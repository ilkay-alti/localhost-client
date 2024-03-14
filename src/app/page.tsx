import Footer from "@/components/Home/Footer";
import ListItem from "@/components/Home/ListItem";
import Search from "@/components/Home/Search";
import React from "react";

const Home = () => {
  const data = {
    title: "Title",
    location: "USA",
    star: 4.9,
    price: 350,
    priceChart: true,
  };
  return (
    <div className="flex flex-col flex-1 ">
      <Search />
      <div className=" grid grid-cols-4 gap-4 mx-auto py-6">
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
