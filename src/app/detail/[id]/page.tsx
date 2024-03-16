"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { LuHeart, LuHeartOff } from "react-icons/lu";
import { MdFreeCancellation } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
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
  home: {
    about:
      "Welcome to Brightwoods Cabin, your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway. Living Space: This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our entertainment center featuring a flat-screen TV, WiFi, and more. Bedrooms: With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to [number of guests]. Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber. Kitchen & Dining: Our fully-equipped kitchen offers everything you need to prepare delicious home-cooked meals. The open dining area provides a welcoming space to enjoy meals with friends and family. Bathrooms: 2 modern bathrooms stocked with fresh towels, toiletries, and all essential amenities add to your convenience. Outdoor Space: Step outside to a serene outdoor setting. Whether it's a morning coffee on the porch, a BBQ in the yard, or a soothing evening by the fire pit, the beauty of Bridlepath is at your doorstep. Location: Located just minutes from [local attractions, trails, dining, shopping], our cabin offers the perfect base to explore the best of the region or simply unwind in seclusion. Hosted with Love: We take pride in hosting our guests and are committed to making your stay unforgettable. We're just a call or message away should you need anything during your stay. Come, be our guest at [Cabin Name], and experience a piece of woodland serenity right here in Bridlepath, Ontario. Book now and make yourself at home!",
    option: [
      {
        name: "Entire Cabin",
        description: "You’ll have the cabin to yourself.",
      },
      {
        name: "Self Check-in",
        description: "Check yourself in with the lockbox.",
      },
      {
        name: "Enhanced Clean",
        description:
          "This host committed to Airbnb's 5-step enhanced cleaning process.",
      },
      {
        name: "Wifi",
        description: "Guests often search for this popular amenity",
      },
      {
        name: "Free Cancellation",
        description: "Cancel up to 24 hours before check-in",
      },
    ],

    amenities: [
      {
        name: "Dedicated workspace",
        icon: "/coffee.svg",
        description:
          "A private room equipped with WiFi and a comfortable workspace",
      },
      {
        name: "Self check-in",
        icon: "/coffee.svg",
        description: "Check in with just your phone",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
      {
        name: "Free cancellation",
        icon: "/coffee.svg",
        description: "Cancel up to 24 hours before check-in",
      },
    ],
  },
  revives: [
    {
      name: "John Doe",
      date: "May 2021",
      review:
        "Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review:
        "The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review:
        "The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
      star: 4.0,
    },
    {
      name: "John Doe",
      date: "May 2021",
      review: "This is the",
      star: 4.0,
    },
  ],
};

const Detail: FC<DetailProps> = ({ params }) => {
  const [showMore, setShowMore] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const toogleShowMore = () => {
    setShowMore(!showMore);
  };
  const toogleShowAmenities = () => {
    setShowAmenities(!showAmenities);
  };
  const toogleShowReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="text-[#171E1D] flex flex-col gap-11">
      {/* //section 1 */}
      <div className="flex gap-7 group">
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
      {/* //section 2 */}
      <div className="flex">
        <div className=" flex flex-col gap-10 w-3/5 ">
          <div className="flex gap-5 flex-col">
            <h2 className="font-semibold text-2xl">About this home</h2>
            <div>
              <p className={showMore ? "line-clamp-4" : "line-clamp-none"}>
                {data.home.about}
              </p>
              <button onClick={toogleShowMore} className="text-[#00C29F]">
                {showMore ? "Show More" : "Show Less"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <h2 className="font-semibold text-2xl">Amenities</h2>
            <div className="grid  grid-cols-3 gap-3">
              {data.home.amenities
                .slice(0, showAmenities ? data.home.amenities.length : 12)
                .map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={amenity.icon}
                      alt={amenity.description}
                      width={18}
                      height={18}
                    />
                    <p>{amenity.name}</p>
                  </div>
                ))}
            </div>
            <button
              onClick={toogleShowAmenities}
              className="bg-white border-2 border-[#171E1D] w-1/5 "
            >
              {showAmenities ? "Show less amenities" : "Show all amenities"}
            </button>
          </div>
        </div>
        <div className="w-2/5 ">
          <div className="flex flex-col gap-10 p-5 ">
            {data.home.option.map((option, index) => (
              <div key={index} className="flex gap-3 items-center  ">
                <div className="w-14 h-14 flex items-center justify-center bg-[#00C29F] bg-opacity-30">
                  Sa
                </div>
                <div>
                  <p className="font-semibold">{option.name}</p>
                  <p>{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //section 3 */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">Reviews</h2>
          <button onClick={toogleShowReviews} className="text-[#00C29F]">
            {showReviews ? "Show Less" : "All reviews"}
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {data.revives
            .slice(0, showReviews ? data.revives.length : 3)
            .map((review, index) => {
              return (
                <div className="w-full p-6 flex flex-col gap-3">
                  <div className="flex gap-4">
                    <Image
                      src={data.author.avatar}
                      alt="avatar"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="flex items-center justify-between max-w-[385px] w-full">
                      <div className="">
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-[#7A7A7A] text-sm">{review.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-semibold">{review.star}</p>
                        <Image
                          src="/star.svg"
                          alt="star"
                          width={13}
                          height={13}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="line-clamp-3 ">{review.review}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
