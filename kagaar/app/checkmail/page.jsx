"use client";
import React from "react";
import Navbar from "../components/navbar";

function Page() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 sm:w-1/2 md:w-1/3 flex justify-center flex-col m-auto text-center mt-5">
        <div className="text-3xl font-bold text-gray-500">
          {" "}
          Check your email?
        </div>
        <div className="text-sm text-gray-500 pt-4 font-semibold">
          We've sent a link to your email address :{" "}
          <span className="text-kagaar-org">ahmad@gmail.com</span>
        </div>
        <div
          type="submit"
          className="text-white bg-kagaar-org p-2 rounded-md mt-6 cursor-pointer"
        >
          Skip now
        </div>
        <div className="mt-3 justify-center flex flex-row text-sm">
          <div>Didn't receive an email?</div>
          <div className="text-kagaar-org cursor-pointer ml-2">Resend</div>
        </div>
      </div>
    </>
  );
}

export default Page;
