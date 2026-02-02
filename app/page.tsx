"use client";

import { useState } from "react";

export default function Home() {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    setNoHoverCount(noHoverCount + 1);
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleNoClick = () => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    setNoPosition({ x: randomX, y: randomY });
  };

  if (answered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="text-8xl mb-4 animate-bounce">💕</div>
          <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-4">
            Yay! 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-rose-700 font-medium">
            You made my day! ❤️
          </p>
          <div className="text-6xl mt-8">🌹💐🌹</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4">
      <div className="text-center space-y-12 max-w-2xl">
        <div className="space-y-6">
          <div className="text-7xl md:text-8xl mb-6">💝</div>
          <h1 className="text-4xl md:text-6xl font-bold text-rose-700 mb-4">
            Will you be my Valentine?
          </h1>
          <p className="text-xl md:text-2xl text-rose-600">
            💕
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button
            onClick={handleYes}
            className="px-12 py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-2xl font-semibold rounded-full shadow-2xl hover:shadow-rose-300/50 transform hover:scale-110 transition-all duration-300 hover:from-pink-600 hover:to-rose-600"
          >
            Yes! ❤️
          </button>
          
          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            className="px-12 py-6 bg-gray-200 text-gray-600 text-2xl font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300 relative"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
