import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">Tracking your scientific niche?</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">AI/lluminator</h1>
          <p className="leading-normal text-2xl mb-8">
            Using the power of AI, this free-to-use tool will help you keep track of the latest scientific literature in your field.
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Open Telegram Bot
          </button>
        </div>
        {/* Right Col */}
        <div className="w-full md:w-3/5 py-6 flex justify-end">
          <img className="md:w-3/5 z-50" src="/images/hero.png" alt="AI/lluminator Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;