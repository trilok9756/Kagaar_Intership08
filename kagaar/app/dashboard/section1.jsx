import React from "react";
import PostHeader from "./components/section1/postHeader";
import PostImage from "./components/section1/postImage";
import PostFooter from "./components/section1/postFooter";
import PostActions from "./components/section1/postAction";
import Fastpost from "./components/section1/fastpost";

const Section1 = () => (
  <div>
    <Fastpost />

    <div className="bg-white p-2 shadow-sm rounded-lg flex flex-col mt-4">
      <PostHeader />
      <PostImage src="https://dummyimage.com/660x600" />
      <PostFooter />
      <PostActions />
    </div>
    <div className="bg-white p-2 shadow-sm rounded-lg flex flex-col mt-4">
      <PostHeader />
      <PostImage src="https://dummyimage.com/660x600" />
      <PostFooter />
      <PostActions />
    </div>
  </div>
);

export default Section1;
