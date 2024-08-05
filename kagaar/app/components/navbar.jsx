import React from "react";
import logo from "./../images/logo.jpeg";
import Image from "next/image";
function Navbar() {
  return (
    <>
      <nav className="flex justify-between p-3">
        <div className="flex flex-row gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          <div className="text-3xl font-bold text-black mt-2">Kagaar</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
