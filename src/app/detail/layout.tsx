import Brand from "@/components/Brand";
import Footer from "@/components/Home/Footer";
import React, { FC } from "react";

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default DetailLayout;
