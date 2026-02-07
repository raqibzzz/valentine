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
          <h1 className="text-5xl md:text-4xl font-bold text-rose-600 mb-4">
            Note from Raqib:
          </h1>
          <p className="text-2xl md:text-xl text-rose-700 font-medium">
          Sofia Mandri, there are so many things about you that I appreciate and find so beautiful. Here are some to name a few. I love your consideration, the way you’re always thoughtful in ways most people don’t even notice. You have this rare ability to make me see the colour in life just by making me feel. Your ambition and persistence inspire me, and your smile… it melts my heart every time. Your eyes, your very, very cool style, and even the way your pupils dilate when you see me hehe. I adore how excited you get about the little things, how deeply you care for me down to the most minute details, and how attentive you are to everything around you. The way you hold my face and look at me makes the world go quiet. Your curiosity, your humour, the sweet texts you send after we hang out, the little frown you do when you’re trying to convince me and you roll out your lower lip, and the moments when you look at me like 🙃. Everyday that I spend with you I feel happier and I like you more. Thank you for being my valentine. ◡̈  
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
