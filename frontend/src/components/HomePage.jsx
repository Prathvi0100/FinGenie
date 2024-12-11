import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white text-center py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">Chatter-Box The New Era ChatBot</h1>
        <p className="text-2xl mb-10 mx-auto max-w-4xl">
          Explore the power of Chatter-Box with intergration of Gemini API.
        </p>
        <Link to="/learn">
          <button className="bg-white text-purple-700 px-10 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
            Begin Chatting
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;