'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaGlobe, FaSearch, FaHome, FaUsers, FaEnvelope, FaBell, FaCompass, FaUser, FaCog, FaSignOutAlt, FaCircle } from 'react-icons/fa';
import users from '../data/users';

const RecommendedUsers = () => {
  const [activeTab, setActiveTab] = useState('followers');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedFriends, setSearchedFriends] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const results = users.filter(user => user.name.toLowerCase().includes(query));
      setSearchedFriends(results);
    } else {
      setSearchedFriends([]);
    }
  };

  const filterUsers = (type) => {
    switch (type) {
      case 'followers':
        return users.filter(user => user.type === 'follower');
      case 'following':
        return users.filter(user => user.type === 'following');
      case 'people':
        return users.filter(user => user.type === 'public');
      default:
        return users;
    }
  };

  const renderContent = () => {
    const filteredUsers = filterUsers(activeTab);
    return (
      <>
        {filteredUsers.map((user, index) => {
          const followButtonStyles = user.type === 'following'
            ? 'bg-white border text-black'
            : 'bg-blue-500 text-white';
          const ignoreButtonStyles = 'bg-white text-black border';

          return (
            <div key={index} className="bg-white p-4 rounded-3xl shadow flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src={user.profileImage} alt={user.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                  <p className="mb-2">{user.position}</p>
                  <div className="flex justify-end space-x-2">
                    {user.socialLinks.browser && (
                      <a href={user.socialLinks.browser} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                        <FaGlobe className="w-6 h-6" />
                      </a>
                    )}
                    {user.socialLinks.linkedin && (
                      <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    )}
                    {user.socialLinks.instagram && (
                      <a href={user.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                        <FaInstagram className="w-6 h-6" />
                      </a>
                    )}
                    {user.socialLinks.facebook && (
                      <a href={user.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaFacebook className="w-6 h-6" />
                      </a>
                    )}
                    {user.socialLinks.twitter && (
                      <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full mt-auto">
                <button className={`px-6 py-3 rounded-lg ${ignoreButtonStyles} hover:shadow-lg transition-shadow duration-300`}>
                  Ignore
                </button>
                <button className={`px-6 py-3 rounded-lg ${followButtonStyles} hover:shadow-lg transition-shadow duration-300`}>
                  {user.type === 'following' ? 'Unfollow' : 'Follow'}
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/6 bg-white text-gray-800 p-4 flex-shrink-0">
        <h1 className="text-xl font-bold mb-4"></h1>
        <ul>
          <li className="mb-2 flex items-center">
            <FaHome className="mr-2" /> Feed
          </li>
          <li className="mb-2 flex items-center">
            <FaUsers className="mr-2" /> My Community
          </li>
          <li className="mb-2 flex items-center">
            <FaEnvelope className="mr-2" /> Messages
          </li>
          <li className="mb-2 flex items-center">
            <FaBell className="mr-2" /> Notifications
          </li>
          <li className="mb-2 flex items-center">
            <FaCompass className="mr-2" /> Explore
          </li>
          <li className="mb-2 flex items-center">
            <FaUser className="mr-2" /> Profile
          </li>
          <li className="mb-2 flex items-center">
            <FaCog className="mr-2" /> Settings
          </li>
          <li className="mb-2 flex items-center">
            <FaSignOutAlt className="mr-2" /> Logout
          </li>
        </ul>
      </div>

      <div className="w-full md:w-2/3 rounded-3xl bg-gray-100 p-4 flex-grow min-h-screen">
        <div className="flex justify-center mx-auto rounded-2xl bg-white py-2 mb-4 border-b border-gray-300">
          <div className="w-full flex justify-around rounded-3xl text-sm font-medium text-center space-x-2">
            <a
              href="#"
              className={`inline-block w-[28%]  px-4 py-2 rounded-lg  border ${activeTab === 'followers' ? 'text-white bg-blue-600 border-blue-600' : 'text-gray-500 border-gray-300 hover:text-gray-900 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('followers')}
            >
              52,844 Followers
            </a>
            <a
              href="#"
              className={`inline-block w-[28%]  px-4 py-2 rounded-lg border ${activeTab === 'following' ? 'text-white bg-blue-600 border-blue-600' : 'text-gray-500 border-gray-300 hover:text-gray-900 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('following')}
            >
              2,564 Following
            </a>
            <a
              href="#"
              className={`inline-block w-[28%] px-4 py-2 rounded-lg border ${activeTab === 'people' ? 'text-white bg-blue-600 hover:transition-shadow border-blue-600' : 'text-gray-500 border-gray-300 hover:text-gray-900 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('people')}
            >
              People You Might Like
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {renderContent()}
        </div>
      </div>

      <div className="w-full md:w-1/6 bg-white text-gray-800 p-4 flex-shrink-0">
        <h1 className="text-xl font-bold mb-4">Search Friends</h1>
        <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2"
            placeholder="Search..."
          />
          <FaSearch className="mx-2 text-gray-500" />
        </div>
        {searchedFriends.length > 0 && (
          <ul>
            {searchedFriends.map((friend, index) => (
              <li key={index} className="mb-2 flex items-center">
                <span className={`h-2 w-2 rounded-full mr-2 ${friend.active ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {friend.name}
              </li>
            ))}
          </ul>
        )}
        <h1 className="text-xl font-bold mt-6 mb-4">Friend Activity</h1>
        <ul>
          {users.map((friend, index) => (
            <li key={index} className="mb-2 flex items-center">
              <FaCircle className={`w-3 h-3 mr-2 ${friend.active ? 'text-green-500' : 'text-red-500'}`} />
              {friend.name}
              <span className="text-gray-500 text-sm ml-2">
                {friend.active ? 'Online' : `Last seen ${friend.lastSeen}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendedUsers;
