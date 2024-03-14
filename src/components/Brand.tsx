import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <div className="container mx-20 h-10 flex justify-between items-center bg-[#F4F4F4]">
      <Link href={"/"}>© 2024 Localhost, Inc. All Rights Reserved</Link>
      <div className="flex gap-5">
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Terms of Service</Link>
        <Link href={"/"}>Contact us</Link>
      </div>
    </div>
  );
};

export default Brand;
