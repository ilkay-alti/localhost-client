import Image from "next/image";
import React, { FC } from "react";
import { LuHeart, LuHeartOff } from "react-icons/lu";

interface DetailProps {
  params: {
    id: string;
  };
}

const data = {
  title: "Brightwoods Cabin",
  location: "USA",
  star: 4.9,
  price: 350,
  priceChart: true,
  liked: true,
  description:
    "Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. ",
  author: {
    name: "John Doe",
    joined: "May 2021",
    avatar: "/avatar.svg",
  },
  revives: [
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
    },
  ],
};

const Detail: FC<DetailProps> = ({ params }) => {
  return (
    <div className="text-[#171E1D]">
      <div className="flex gap-7">
        <div className="w-3/5 bg-red-200 ">Image</div>
        <div className="w-2/5  px-7 py-9">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-3xl">{data.title}</h1>
              <p>{data.location}</p>
            </div>
            <div className=" bg-white rounded-full w-9 h-9 flex items-center justify-center ">
              {data.liked ? <LuHeart /> : <LuHeartOff />}
            </div>
          </div>
          <div className="flex gap-3 mt-3 mb-4">
            <div className="flex gap-1">
              <p className="font-semibold">{data.star}</p>
              <Image src="/star.svg" alt="star" width={13} height={13} />
            </div>
            <div className="text-[#00C29F]">{data.revives.length} Reviews</div>
          </div>
          <p className="mb-7">{data.description}</p>
          <div className="flex justify-between items-end ">
            <div className="flex items-baseline">
              <h2 className="font-bold text-3xl">${data.price}</h2>
              <p>/night</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/priceChart.svg"}
                alt="price chart"
                width={18}
                height={18}
              />
              <div className="text-[#00C29F]">Best time to Book</div>
            </div>
          </div>
          <button className="bg-[#00C29F] text-white rounded-lg w-full h-16 mt-7">
            Book this Home
          </button>
          <div className="text-[#787878] font-light mt-7 flex flex-col gap-3 ">
            <p>Hosted by:</p>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                {data.author.avatar && (
                  <Image
                    src={data.author.avatar}
                    alt="avatar"
                    width={50}
                    height={50}
                  />
                )}
              </div>
              <div>
                <h3 className="text-[#171E1D] font-semibold">
                  {data.author.name}
                </h3>
                <p>Joinned in {data.author.joined}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
