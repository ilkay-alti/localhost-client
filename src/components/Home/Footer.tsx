import Link from "next/link";
import React, { FC } from "react";

interface FooterElementProps {
  title: string;
  elements: {
    title: string;
    path: string;
  }[];
}

const FooterElement: FC<FooterElementProps> = ({ title, elements }) => {
  return (
    <div className="container text-[#171E1D] flex  flex-col gap-4">
      <div className="text-xl font-semibold">{title}</div>
      <div className="flex flex-col gap-3">
        {elements.map((element, i) => {
          return (
            <Link href={element.path} key={i}>
              {element.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  const mockData: FooterElementProps[] = [
    {
      title: "Support",
      elements: [
        {
          title: "Help Centre",
          path: "/",
        },
        {
          title: "AirCover",
          path: "/",
        },
        {
          title: "Combating discrimination",
          path: "/",
        },
        {
          title: "Supporting people with disabilities",
          path: "/",
        },
        {
          title: "Cencellation options",
          path: "/",
        },
        {
          title: "Report neighbourhood concern",
          path: "/",
        },
      ],
    },
    {
      title: "Hosting",
      elements: [
        { title: "Local Home", path: "/" },
        { title: "Cover for hosts", path: "/" },
        { title: "Hosting resources", path: "/" },
        { title: "Community forum", path: "/" },
        { title: "Hosting responsibly", path: "/" },
      ],
    },
    {
      title: "Localhost",
      elements: [
        { title: "Newsroom", path: "/" },
        { title: "New Features", path: "/" },
        { title: "Careers", path: "/" },
        { title: "Investres", path: "/" },
        { title: "Gift cards", path: "/" },
      ],
    },
  ];
  return (
    <div className="flex px-20 mt-5 mb-10  bg-[#F4F4F4]">
      {mockData.map((data, i) => {
        return (
          <FooterElement title={data.title} elements={data.elements} key={i} />
        );
      })}
    </div>
  );
};

export default Footer;
