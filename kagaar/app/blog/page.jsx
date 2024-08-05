"use client";
import React from "react";
import logo from "./../images/logo.jpeg";
import SideBar from "../dashboard/sidebar";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import addImage from "./../images/add.png";
import Card from "./components/Card";
import { FiPlus } from "react-icons/fi";
import { FaCheckCircle } from 'react-icons/fa';
import { MdPublic } from 'react-icons/md';
import {
  FaComment,
  FaFacebook,
  FaHeart,
  FaLinkedin,
  FaShare,
  FaSmile,
  FaThumbsUp,
  FaTwitter,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { FaGlobeAfrica } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Newsletter from './components/Newsletter'
import Footer from "../components/Footer";
// Shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Page() {
  return (
    <div className="">
      <nav className="flex justify-between p-3">
        <div className="flex flex-row gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          <div className="text-3xl font-bold text-black mt-2">Kagaar</div>
        </div>
        <div className="flex items-center">
          <div className="bg-black text-white p-2 rounded-md">Subscribe </div>
        </div>
      </nav>
      <div className="flex">
        <SideBar className="w-64 " />
        {/* Main Content Area */}
        <div className=" ">
          <div className="mt-10 w-2/3 ml-10  ">
            <div className="flex gap-3">
              <div className="text-black font-bold">Auther Name</div>
              <div className="text-gray-400 ">4 min read</div>
            </div>
            <div className="text-6xl font-bold mt-4">
              Definitive Guide to Make a More Productive Workflow.
            </div>
            <div className="flex mt-5 text-sm gap-2   ">
              <span className="font-bold">Home</span>{" "}
              <FaAngleRight className="mt-1" />{" "}
              <span className="font-bold">Creative Definitive</span>{" "}
              <FaAngleRight className="mt-1" />
              Guide to Make a More Productive Workflow.
            </div>
          </div>
          <div className="mt-10 ml-10 w-full m-auto flex ">
            {/* left Content */}
            <div className="w-3/5    ">
              <div className="mb-6   ">
                {/* <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="https://dummyimage.com/660x600/E2E2B6"
                        className="w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="https://dummyimage.com/660x600/B5CFB7"
                        className="w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                    </CarouselItem>
                  </CarouselContent>
                  
                </Carousel> */}
                      <img
                        src="https://dummyimage.com/660x600/4F1787"
                        className="w-full h-[400px] object-cover"
                      />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Exploring Generative AI in Content Creation
                </h2>
                <p className="text-base mb-4">
                  Hello there! As a marketing manager in the SaaS industry, you
                  might be looking for innovative ways to engage your audience.
                  I bet generative AI has crossed your mind as an option for
                  creating content. Well, let me share from my firsthand
                  experience.
                </p>
                <p className="text-base mb-4">
                  Google encourages high-quality blogs regardless of whether
                  they're written by humans or created using artificial
                  intelligence like ChatGPT. Here's what matters: producing
                  original material with expertise and trustworthiness based on
                  Google E-E-A-T principles.
                </p>
                <p className="text-base mb-4">
                  This means focusing more on people-first writing rather than
                  primarily employing AI tools to manipulate search rankings.
                  There comes a time when many experienced professionals want to
                  communicate their insights but get stuck due to limited
                  writing skills – that’s where Generative AI can step in.
                </p>
                <p className="text-base mb-4">
                  So, together, we’re going explore how this technology could
                  help us deliver valuable content without sounding robotic or
                  defaulting into mere regurgitations of existing materials
                  (spoiler alert – common pitfalls!). Hang tight - it’ll be a
                  fun learning journey!
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Steering Clear of Common AI Writing Pitfalls
                </h2>
                <p className="text-base mb-4">
                  Jumping headfirst into using AI, like ChatGPT, without a
                  content strategy can lead to some unfortunate results. One
                  common pitfall I've seen is people opting for quantity over
                  quality - they churn out blogs, but each one feels robotic and
                  soulless, reading just like countless others on the internet.
                </p>
                <p className="text-base mb-4">
                  Another fault line lies in creating reproductions rather than
                  delivering unique perspectives that offer value to readers; it
                  often happens if you let an AI tool write your full blog
                  unrestrained! Trust me on this – Ask any experienced marketer
                  or writer about their takeaways from using generative AI
                  tools. They'll all agree that adding a human touch and
                  following specific guidelines are key when implementing these
                  tech pieces.
                </p>
                <p className="text-base mb-4">
                  Remember, our goal here isn’t merely satisfying search engines
                  but, more importantly, knowledge-hungry humans seeking
                  reliable information online. So keep your audience's needs at
                  heart while leveraging technology’s assistance!
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Understanding ChatGPT Capabilities - Define Your Style
                </h2>
                <p className="text-base mb-4">
                  Welcome to the intriguing world of ChatGPT! Its ability and
                  potential can truly be mind-boggling. I have learned from
                  experience how capable it is in dealing with diverse content
                  generation tasks, only that its text sounded slightly
                  "unnatural" in accordance with TechTarget. However, fear not –
                  there are ways around this!
                </p>
                <p className="text-base mb-4">
                  One strategic move I've seen work wonders is defining your
                  unique writing style first before handing over the reins to
                  AI; you treat it like a canvas whereupon our vision opens up.
                  If we clearly instruct who we're targeting or what tone
                  resonates more effectively, generative AI tools such as
                  ChatGPT will comply remarkably well.
                </p>
                <p className="text-base mb-4">
                  In framing guidelines, remember to keep audience interests at
                  heart while adopting technology’s benefits for efficient
                  output – trust me on this because neglecting these aspects
                  could backfire by generating unappealing robotic-like reads.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Understand Your Readers{" "}
                </h2>
                <p className="text-base mb-4">
                  Understanding your readers is vital when producing blog posts.
                  It's not about filling blanks with popular search terms, no
                  matter how much keyword research you do. Real readability goes
                  beyond that! Your content has to 'speak' directly to your
                  target audience.
                </p>
                <p className="text-base mb-4">
                  Building an Ideal Customer Profile (ICP) can help immensely in
                  this respect (Dan Martell). This tool identifies specific
                  firmographics or psychographic drivers behind customer success
                  - a valuable guide for creating targeted outputs catering to
                  arrayed reader types.
                </p>
                <p className="text-base mb-4">
                  Simultaneously, SEO aspects also need attention: identifying
                  suitable keywords & phrases people commonly use enhances reach
                  (SEO.COM reference). Yet remember – human appeal doesn’t mean
                  packing text up finely into presentable semblances bearing
                  little value substance and stuffing it full with only
                  ‘keywords.’
                </p>
              </div>
              <div className="bg-gray-200 rounded-md p-4 flex-col flex mt-4">
                <div className="flex flex-row w-full">
                  <div className="text-xl font-semibold">
                    Like what you see? Share with a friend.
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center space-x-6">
                      <FaFacebook className="text-2xl" />
                      <FaTwitter className="text-2xl" />
                      <FaLinkedin className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 rounded-md px-4 py-6 mt-6  ">
                <div className="flex gap-5">
                  <img
                    src="https://dummyimage.com/40x40"
                    alt="avatar1"
                    className="h-10 w-10 rounded-full border border-white"
                  />
                  <input
                    type="text"
                    placeholder="Add a Comment"
                    className="w-full p-2 border border-gray-800 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex  gap-4 mt-4  border-2">
                  <div className="bg-blue-100 rounded-md p-2 flex">
                    <div>Add Media</div>
                    <RiGalleryFill className="ml-2 mt-1" />
                  </div>
                  <div className="bg-blue-100 rounded-md p-2 flex">
                    <div>Add Category</div>
                    <IoMdArrowDropdown className="ml-2 mt-1" />
                  </div>
                </div>
              </div>
              <div class="flex-1 mr-2  mt-8">
                <div className="mb-4 flex items-center  p-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mr-2">
                    <FiPlus className="text-black" />
                  </div>
                  <input
                    type="text"
                    placeholder="Write a blog for free..."
                    className="flex-1 p-2 outline-none"
                  />
                </div>
                <div className="flex items-center mb-4  ">
                  <div className="flex w-3/4  border-b-2 border-gray-300">
                    <h2 className="text-lg font-semibold mb-0 text-gray-500 mr-4 cursor-pointer hover:text-black">
                      Following
                    </h2>
                    <h2 className="text-lg  font-semibold mb-0 text-black-500 cursor-pointer hover:text-black">
                      Recommended
                    </h2>
                  </div>
                </div>
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            {/* Right Content */}
            <div className="w-1/4 ml-24 ">
              <div>
                <div className="bg-[#F7F7F7] rounded-md p-4 flex-col flex">
                  <div className="flex gap-5 w-full">
                    <img
                      className="w-1/4 h-full object-cover object-center"
                      src="https://dummyimage.com/300x300"
                    />
                    <div className="mt-2 w-full">
                      <div className="m-auto w-full flex justify-end  pr-2">
                        <BsThreeDots className=" " />
                      </div>
                      <div className="bg-[#EBEBEB] rounded-2xl flex items-center justify-center flex-1 p-2 mt-2">
  <MdPublic className="text-black mr-2" size={24} />
  <span className="text-black">company.com</span>
</div>
                      <div className="ml-4 mb-2">
                        <div className="flex items-center mt-2 space-x-6">
                          <FaFacebook className="text-blue-600 cursor-pointer text-lg hover:text-blue-700" />
                          <FaTwitter className="text-blue-400 cursor-pointer text-lg hover:text-blue-500" />
                          <FaLinkedin className="text-blue-700 cursor-pointer text-lg hover:text-blue-800" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 ml-1 ">
                  <div className="flex items-center text-xl font-bold">
    <span>Tamás Hám-Szabó</span>
    <FaCheckCircle className="text-blue-500 ml-2" size={20} />
  </div>
                    <div className="text-base mt-2">
                      Founder of SAAS First - the Best AI and Data-Driven
                      Customer Engagement Tool
                    </div>
                    <div className="border border-gray-400 mt-2"></div>
                    <div className="text-sm mt-2">
                      Founder of SAAS First - the Best AI and Data-Driven
                      Customer Engagement Tool Founder of SAAS First - the Best
                      AI and Data-Driven Customer Engagement Tool
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="bg-[#EBEBEB] rounded-full h-12 p-1 py-1.5 flex items-center justify-between mt-4 w-full max-w-lg">
     
      <div className="bg-black text-white h-full flex items-center justify-center rounded-full px-4 mx-2">
      create your canvas
      </div>
      
    
      <div className="flex items-center space-x-2 text-black mr-2">
        <span>Get started</span>
        <FaAngleRight className="text-black" />
      </div>
    </div>
                {/*  */}
                <div className="bg-[#F7F7F7] rounded-md p-4 flex-col flex mt-4 ">
                  <div className="flex flex-col w-full">
                    <div className="text-xl font-semibold">
                      Share with your community!
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center mt-2 space-x-6">
                        <FaFacebook className="text-2xl" />
                        <FaTwitter className="text-2xl" />
                        <FaLinkedin className="text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add kagar */}
                <div className="bg-white rounded-md p-4 flex-col flex mt-6  ">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-3">
                      <img
                        src="https://dummyimage.com/40x40"
                        alt="avatar1"
                        className="h-10 w-10 rounded-full border border-white"
                      />
                      <div className="flex flex-col">
                        <div className="text-base font-semibold flex gap-2">
                          <div>Company Name</div>
                          {/* <TiTick className="mt-1" /> */}
                          <FaCheckCircle className="text-blue-500" size={20} />
                        </div>
                        <div className="text-sm text-gray-600 flex">
                          <div> Sponsored .</div> <FaGlobeAfrica />
                        </div>
                      </div>
                    </div>
                    <div>
                      <BsThreeDots className=" " />
                    </div>
                  </div>
                  <div className="mt-2">
                    Here text of 125 characters (optimal)
                  </div>
                  <div className="mt-2">
                    <Image
                      src={addImage}
                      alt="image"
                      className="h-auto w-full object-cover object-center"
                    />
                  </div>

                  <div className="bg-blue-50 w-full">
                    <div className="flex flex-row justify-between p-2">
                      <div className="font-normal text-xs">
                        <div>25 characters(optimal)</div>
                        <div className="font-medium">
                          30 characters(optimal)
                        </div>
                      </div>
                      <div className="bg-gray-300  p-2 rounded-md text-sm font-semibold">
                        Learn More
                      </div>
                    </div>
                  </div>
                  <div className="bg-white w-full">
                    <div className="flex flex-row justify-between p-2">
                      <div className="font-normal text-xs">
                        <div>
                          <div className="flex items-center bg-white">
                            <FaThumbsUp className="text-blue-500 text-xl -mr-1" />
                            <FaSmile className="text-yellow-500 text-xl -mr-1" />
                            <FaHeart className="text-red-500 text-xl" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-2">
                        <div className="text-xs text-gray-700">2 comments</div>
                        <div className="text-xs text-gray-700">5 shares</div>
                        <div className="text-xs text-gray-700">73.8k views</div>
                      </div>
                    </div>
                    <div className="border-b border-gray-300 w-11/12 m-auto "></div>
                    <div className="flex items-center justify-between mt-2 p-2">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-red-500">
                        <FaHeart className="text-base" />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
                        <FaComment className="text-base" />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-green-500">
                        <FaShare className="text-base" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Questions */}
                <div className="p-6    ">
                  <div className="font-bold text-lg">In this article</div>
                  <div className=" flex flex-col gap-3 mt-4">
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Exploring Generative AI in Content Creation
                    </div>
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Steering Clear of Common AI Writing Pitfalls
                    </div>
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Understanding ChatGPT Capabilities - Define Your Style
                    </div>
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Understand Your Readers
                    </div>
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Creating Quality AI-powered Blogs that Stand Out
                    </div>
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Conclusion: Embracing AI in Blog Creation{" "}
                    </div>
                    <div className="text-base hover:text-kagaar-org hover:border-l-2 hover:border-kagaar-org pl-2">
                      Afterword: The AI Behind This Article
                    </div>
                  </div>
                </div>
               <div className="p-6    ">

                <Newsletter/>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;
