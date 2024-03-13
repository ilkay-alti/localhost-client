import Footer from "@/components/Home/Footer";
import ListItem from "@/components/Home/ListItem";
import React from "react";

const Home = () => {
  const data = {
    title: "Title",
    location: "USA",
    star: 4.9,
    price: 350,
  };
  return (
    <div className="flex flex-col flex-1">
      <div className=" flex flex-col gap-24">
        <ListItem data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
