import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const user = null;
  return (
    <div className="container mx-20 flex items-center justify-between h-12 py-4">
      <Image src="/logo.svg" alt="logo" width={156} height={40} />
      <div className="flex items-center gap-7 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Stays</Link>
        <Link href={"/"}>Become a host</Link>
      </div>
      {user && <div>{user}</div>}
    </div>
  );
};

export default Header;
