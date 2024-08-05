import React from "react";
import { FiPhone, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-[#c7c7c7]  py-16">
      <div className="container w-3/4 mx-auto px-4 ">
        <div className="flex flex-wrap justify-between mb-16">
        
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg text-white font-semibold mb-4">Bali</h3>
            <p className="mb-4">
              Balakant Samat,
              <br />
              Gang Bekul Canggu - Kuta,
              <br />
              Indonesia
            </p>
            <div className="space-y-8">
              <p className="flex items-center">
                <FiPhone className="mr-2" /> Berryl: +12 (3)456 7890 1234
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-2" /> Office: +12 (3)456 7890 1234
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg text-white font-semibold mb-4">Morocco</h3>
            <p className="mb-4">
              Balakant Samat,
              <br />
              Rd.Essaouira Taghazout Bay
              <br />
              Morocco
            </p>
            <div className="space-y-8">
              <p className="flex items-center">
                <FiPhone className="mr-2" /> Ayoub: +12 (3)456 7890 123
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-2" /> Office: +12 (3)456 7890 129
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg text-white font-semibold mb-4">Sri Lanka</h3>
            <p className="mb-4">
              Balakant Samat,
              <br />
              Sri Lanka
            </p>
            <div className="space-y-8">
              <p className="flex items-center">
                <FiPhone className="mr-2" /> Jordy: +12 (3)456 7890 12
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-2" /> Office: +12 (3)456 7890 12
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Sign-Up */}
        <div className="flex flex-wrap justify-center items-center mt-16 bg-[#4b4b4b] p-4 rounded-lg">
          <p className="text-xl font-semibold mr-4 mb-4 md:mb-0">
            Newsletter Sign Up
          </p>
          <div className="flex flex-grow ml-10 ">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="flex-grow p-2 border border-gray-400 rounded-l-lg text-black"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg">
              Submit
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center mt-16">
       
          <div className="flex items-center">
            <div className="text-black font-bold text-2xl p-1 rounded-lg">
              <div className="text-4xl font-bold text-[#fd9346]">Kagaar</div>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center space-x-4">
            <p className="text-center mb-0">
              &copy; 2018 Lift Media • All Rights Reserved
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-white border border-white rounded-full p-2 hover:text-gray-400 hover:border-gray-400 transition-colors duration-200">
              <FiFacebook />
            </a>
            <a href="#" className="text-white border border-white rounded-full p-2 hover:text-gray-400 hover:border-gray-400 transition-colors duration-200">
              <FiLinkedin />
            </a>
            <a href="#" className="text-white border border-white rounded-full p-2 hover:text-gray-400 hover:border-gray-400 transition-colors duration-200">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
