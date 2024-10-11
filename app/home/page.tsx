"use client";

import Image from 'next/image';
import Link from "next/link"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import '@/app/ui/global.css';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function HomePage() {
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
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="container mx-auto px-4">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI/lluminator
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Using the power of AI, this free-to-use tool will help you keep track of the latest scientific literature in your field.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Open Telegram Bot
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="/images/hero.png"
                alt="Hero"
                width={550}
                height={550}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Features</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Tracking scientific progress</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-4">
                  The surge in scientific publications is staggering. ArXiv, a popular preprint server, has seen its annual submissions grow from just 306 papers in 1991 to an impressive 208,493 papers in 2023. This exponential growth significantly complicates the task of tracking interesting scientific progress.
                </p>
                <div className="h-[300px] sm:h-[400px] w-full flex items-center justify-center">
                  <Bar data={data} />
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Using the power of LLMs</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-4">
                  AI/lluminator uses the power of large language models (LLMs) to help you keep track of the latest scientific literature in your field. Our tools integrate various sources like arxiv into a single big vector database, which the AI model can access to generate recommendations for you.
                </p>
                <Image
                  src="/images/ai-sorting.png"
                  alt="AI Sorting"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm md:col-span-2">
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Messenger Bot</h3>
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm sm:text-base text-gray-500 mb-2">
                      AI/lluminator is available as a Telegram bot. This means you can access the latest scientific literature in your field from anywhere, at any time. Simply use the command /start to get started, and /help to get a list of available commands.
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      Once you submit your prompts, the bot will check the latest scientific literature for you and send you the most relevant papers twice a day.
                    </p>
                  </div>
                  <div className="flex justify-center w-full">
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
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Can't find your papers?</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">
                Use the command /feature_request in the Telegram bot to request a new feature, like the integration of other scientific databases.
              </p>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Open Telegram Bot
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
