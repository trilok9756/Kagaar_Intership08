"use client";
import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const SignupSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Required"),
});
function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <div className="w-11/12 sm:w-1/2 md:w-1/3 flex justify-center flex-col m-auto text-center mt-5">
        <div className="text-3xl font-bold text-gray-500">
          {" "}
          Forgot Password?
        </div>
        <div className="text-md text-gray-500 pt-2 font-semibold">
          Enter your details to receive a reset link
        </div>
        <form
          className="flex flex-col gap-4 mt-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">
              @
            </span>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}

          <div
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="text-white bg-kagaar-org p-2 rounded-md mt-4 cursor-pointer"
          >
            Send
          </div>
          <Link
            href="/signin"
            className="mt-3 flex justify-center gap-2 text-sm text-kagaar-org"
          >
            <div>
              <FaChevronLeft size={20} />
            </div>
            <div>Back to Sign in</div>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Page;
