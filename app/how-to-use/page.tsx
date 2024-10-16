"use client";

import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HowToUse() {
  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >

      <title>AIlluminator - How to use</title>
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
              How to use
            </p>
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

      <section className="bg-white border-b py-8">
        {/* Telegram Bot User Guide */}
        <div className="container max-w-5xl mx-auto m-8">
          <div className="w-full p-6">
            <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
              Telegram Bot User Guide
            </h3>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto bg-gradient-to-r from-purple-600 to-blue-400 w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p className="text-gray-600 mb-8">
              This Telegram bot allows you to manage and preview research paper prompts. Here&apos;s how to use its features:
            </p>
            <h4 className="text-2xl text-gray-700 font-semibold mb-3">Getting Started</h4>
            <ol className="text-gray-600 mb-8 list-decimal list-inside">
              <li>Start a chat with the bot on Telegram.</li>
              <li>Use the <code>/start</code> command to register your account with the bot.</li>
            </ol>
            <h4 className="text-2xl text-gray-700 font-semibold mb-3">Available Commands</h4>
            <div className="text-gray-600 mb-8">
              <div className="text-gray-600 mb-8">
                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/start</code></h5>
                  <p>Registers your account with the bot. Use this command when you first interact with the bot.</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/help</code></h5>
                  <p>Displays a list of all available commands and their descriptions.</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/add_prompt &lt;your prompt&gt;</code></h5>
                  <p>Adds a new prompt to your account. The bot will query this prompt once a day for relevant research papers.</p>
                  <p>Example: <code>/add_prompt Latest developments in quantum computing</code></p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/delete_prompt</code></h5>
                  <p>Displays a list of your current prompts. Click on a prompt to delete it from your account.</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/get_prompts</code></h5>
                  <p>Shows a list of all your currently saved prompts.</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/preview_prompt &lt;your prompt&gt;</code></h5>
                  <p>Previews potential research papers for a given prompt. This command returns up to 6 papers related to your prompt, including their titles and links.</p>
                  <p>Example: <code>/preview_prompt Advancements in machine learning algorithms</code></p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/summarize</code></h5>
                  <p>Gives a selection of the last papers that were sent to the user. After selecting one paper, a LLM will generate and send a summary of the paper to the user.</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-700 mb-2"><code>/stop</code></h5>
                  <p>Deletes your account and all associated data from the bot&apos;s database.</p>
                </div>
              </div>

            </div>
            <h4 className="text-2xl text-gray-700 font-semibold mb-3">Tips</h4>
            <ul className="text-gray-600 mb-8 list-disc list-inside">
              <li>When adding or previewing a prompt, make sure to include the prompt text after the command.</li>
              <li>You can have multiple prompts associated with your account.</li>
              <li>Use the preview feature to test out prompts before adding them to your regular query list.</li>
              <li>If you&apos;re unsure about any feature, use the <code>/help</code> command for a quick reference of all available commands.</li>
            </ul>
            <h4 className="text-2xl text-gray-700 font-semibold mb-3">Privacy</h4>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Your prompts and user data are stored securely in the bot&apos;s database.</li>
              <li>You can delete your account at any time using the <code>/stop</code> command.</li>
            </ul>
            <p className="text-gray-600 mb-8">Enjoy using the Research Paper Prompt Bot!</p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}