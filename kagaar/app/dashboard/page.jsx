"use client";

import Navbar from "./navbar";
import SideBar from "./sidebar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import { useEffect, useState } from "react";
const host = "https://kagaar-backend-1wr7.onrender.com";
// const host='http://localhost:5000'
function Page() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const response = await fetch(`${host}/login/success`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setUser(data.user);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Navbar displayName={user == null ? "" : user.displayName} />
      <div className="flex h-screen">
        <SideBar className="w-64" />

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col">
          <div className="flex h-48 w-full">
            <div className="  p-4  w-2/3">
              <Section1 />
            </div>
            <div className=" w-1/3">
              <Section2 />
            </div>
            <div className=" w-1/3">
              {/* Frined list section */}
              <Section3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
