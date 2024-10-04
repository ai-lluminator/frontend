import React from "react";

const Features: React.FC = () => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Features</h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Tracking scientific progress
            </h3>
            <p className="text-gray-600 mb-8">
              The surge in scientific publications, best demonstrated by the number of publications on arxiv rising from 30,601 in 2000 to 208,493 in 2023, significantly complicates tracking interesting scientific progress...
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <div className="w-full sm:h-64 mx-auto">
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
