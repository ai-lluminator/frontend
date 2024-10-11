"use client";

import Image from 'next/image';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '@/app/ui/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HomePage = () => {

  const data = {
    labels: [
      1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
      2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
      2021, 2022, 2023,
    ],
    datasets: [
      {
        label: 'Arxiv papers per year',
        data: [
          306, 3263, 6743, 10097, 13014, 15866, 19624, 24172, 27704, 30601,
          33214, 36121, 39414, 43727, 46855, 50227, 55638, 58915, 64047, 70131,
          76578, 84603, 92641, 97517, 105280, 113380, 123523, 140616, 155866,
          178329, 181630, 185692, 208493,
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <title>AIluminator - Homepage</title>

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center max-w-screen-lg">
          {/* Left Col */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              Tracking your scientific niche?
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">AI/lluminator</h1>
            <p className="leading-normal text-2xl mb-8">
              Using the power of AI, this free-to-use tool will help you keep track of the
              latest scientific literature in your field.
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Open Telegram Bot
            </button>
          </div>
          {/* Right Col */}
          <div className="w-full md:w-3/5 py-6 flex justify-end">
            <div className="md:w-3/5 z-50">
              <Image
                src="/images/hero.png"
                alt="Hero"
                width={500}
                height={500}
                className="z-50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave */}
      <div className="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      {/* Features Section */}
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
            Features
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-purple-600 to-blue-400 w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          {/* First Feature */}
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading</div>-none mb-3">
                Tracking scientific progress
              </h3>
              <p className="text-gray-600 mb-8">
                The surge in scientific publications, best demonstrated by the number of
                publications on arxiv rising from 30,601 in 2000 to 208,493 in 2023,
                significantly complicates tracking interesting scientific progress. Even
                classical methods like Google Scholar alerts are not sufficient to keep up
                with the pace of scientific progress. AIluminator uses the power of AI to
                help you keep track of the latest scientific literature in your field.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="w-full sm:h-64 mx-auto">
                <Bar data={data} />
              </div>
            </div>
          </div>

          {/* Second Feature */}
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image
                src="/images/ai-sorting.png"
                alt="AI Sorting"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Using the power of LLMs
                </h3>
                <p className="text-gray-600 mb-8">
                  AI/lluminator uses the power of large language models (LLMs) to help you
                  keep track of the latest scientific literature in your field. Our tools
                  integrate various sources like arxiv into a single big vector database,
                  which the AI model can access to generate recommendations for you.
                  <br />
                  <br />
                  And the best part of this technology? Contrary to filtering by key words,
                  you can simply use a prompt like &quot;I am interested in the latest research
                  on quantum computing&quot; to get the most relevant papers, without having to
                  think about which keyword best suits your interest.
                </p>
              </div>
            </div>
          </div>

          {/* Third Feature */}
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Messenger Bot
              </h3>
              <p className="text-gray-600 mb-8">
                AI/lluminator is available as a Telegram bot. This means you can access the
                latest scientific literature in your field from anywhere, at any time.
                Simply use the command /start to get started, and /help to get a list of
                available commands.
                <br />
                <br />
                Once you submit your prompts, the bot will check the latest scientific
                literature for you and send you the most relevant papers twice a day.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 flex justify-center">
              <div className="w-full sm:h-64 flex justify-center items-center">
                <Image
                  src="/images/bot.png"
                  alt="Telegram Bot"
                  width={300}
                  height={300}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto text-center py-12 mb-12">
        <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
          Can&apos;t find your papers?
        </h2>
        <h3 className="w-full my-4 text-base max-w-lg mx-auto leading-tight text-center md:px-10 text-white/90">
          Use the command /feature_request in the Telegram bot to request a new feature,
          like the integration of other scientific databases.
        </h3>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;