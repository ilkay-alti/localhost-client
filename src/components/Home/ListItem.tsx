import Image from "next/image";
import React, { FC } from "react";

interface IListItemProps {
  data: {
    title: string;
    location: string;
    star: number;
    price: number;
  };
}
const ListItem: FC<IListItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col max-w-[300px] rounded-xl border-2 border-[#E8ECF2]">
      <Image
        src="/listing image.svg"
        alt="Picture of the author"
        width={300}
        height={300}
        className="rounded-t-xl"
      />
      <div className="flex flex-col p-4 gap-5">
        <div className="flex  items-center justify-between">
          <div>
            <h3 className="text-[#171E1D] font-semibold">{data.title}</h3>
            <p className="text-[#787878] text-sm">{data.location}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[#171E1D] font-semibold">{data.star}</p>
            <Image src="/star.svg" alt="star" width={13} height={13} />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-1">
            <p className="text-[#171E1D] font-semibold">{data.price}</p>
            <p className="text-[#787878] text-sm"> /night</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/priceChart.svg"}
              alt="price chart"
              width={18}
              height={18}
            />
            <div className="text-[#00C29F]">Price chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
