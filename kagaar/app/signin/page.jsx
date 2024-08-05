"use client";
import React, { useState } from "react";
import { GoLock } from "react-icons/go";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import Navbar from "../components/navbar";
import Alert from "../components/Alert";
import { useRouter } from "next/navigation";
import signinImage from "../images/signin.png";

const host = "https://kagaar-backend-1wr7.onrender.com";
// const host='http://localhost:5000'
const SignupSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Required"),
  password: z.string().min(6, "Too short!").nonempty("Required"),
});
// Shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
function Page() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });
      const result = await response.json();
      if (result.success) {
        // console.log("Signup successful:", result);
        router.push("/dashboard");
      } else {
        setAlertMessage(result.error);
        setShowAlert(true);

        // console.error("Error during signup:", result);
      }
    } catch (error) {
      setAlertMessage("Network error");
      setShowAlert(true);
      // console.error("Network error during signup:", error);
    }
  };
  const loginwithgoogle = () => {
    window.open(`${host}/auth/google/callback`, "_self");
  };

  return (
    <div className="flex">
      <div className="w-1/2 hidden md:block">
        <div className={"flex justify-center w-full mt-4"}>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Image src={signinImage} width={500} height={400} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="md:w-1/2">
        <Navbar />
        <div className="w-11/12 sm:w-1/2 md:w-9/12 flex justify-center flex-col m-auto text-center mt-5">
          <div className="text-3xl font-bold text-[#000B18]">Sign In</div>
          <div className="text-md text-[#000B18] pt-2 font-semibold">
            Welcome back, you've been missed!
          </div>
          {/* //#Different Login Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mt-14 w-11/12 sm:w-9/12 m-auto gap-4">
            <div className="bg-orange-100 px-4 py-2 rounded-md text-[#000B18] text-sm font-medium flex flex-row gap-2 items-center justify-center">
              <FaGoogle />
              <button onClick={loginwithgoogle}>Login with Google</button>
            </div>
            <div className="bg-orange-100 px-4 py-2 rounded-md text-[#000B18] text-sm font-medium flex flex-row gap-2 items-center justify-center">
              <FaApple size={20} />
              <button>Login with Apple</button>
            </div>
          </div>
          <div className="relative mt-12">
            <div className="border-b-2 border-gray-300"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-4 text-sm font-medium">
              OR
            </div>
          </div>
          {/* //#Form */}
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

            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                <GoLock />
              </span>
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                type={passwordVisible ? "text" : "password"}
                {...register("password")}
                placeholder="Create Password"
                className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </div>
            )}
            <div className="flex flex-col sm:flex-row justify-between text-sm mt-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </div>
              <Link
                href="/forgotpassword"
                className="text-[#FD9346] cursor-pointer mt-2 sm:mt-0"
              >
                Forgot Password?
              </Link>
            </div>
            <div
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="text-white bg-[#FD9346] p-2 rounded-md mt-4 cursor-pointer"
            >
              Sign In
            </div>
            <div className="mt-3">
              <div>
                You don't have an account?
                <Link
                  href="/signup"
                  className="text-[#FD9346] cursor-pointer ml-2"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
          <Alert show={showAlert} onClose={() => setShowAlert(false)}>
            <p className="text-red-600">{AlertMessage}</p>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default Page;
