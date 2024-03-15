import React, { FC } from "react";

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default DetailLayout;
