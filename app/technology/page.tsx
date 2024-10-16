"use client";

import '@/app/ui/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const TechPage = () => {

  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >

      <title>AIlluminator - Technology</title>

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center max-w-screen-lg">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Tracking your scientific niche?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">AI/lluminator</h1>
            <p className="leading-normal text-2xl mb-8">Technology</p>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-3/5 py-6 flex justify-end">
            <div className="md:w-3/5 z-50">
              <Image
                src="/images/ai-gears.png"
                alt="AI Gears"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      {/* Content Section */}
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Filtering Scientific Literature
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap pt-6">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Adapting RAG for Tracking Science
              </h3>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <p className="text-gray-600 mb-8">
                AI/lluminator employs a method inspired by retrieval-augmented generation to filter scientific literature efficiently. It works by using an embedding model to generate a vector representation of each paper&apos;s title and abstract, capturing the key meaning of these texts. These vectors are then compared to the vector generated from your research interest prompt. The most similar papers are selected and sent to you daily. This approach helps you access the most relevant information from the scientific literature without needing to read the entire paper.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 flex items-center">
              <div className="sm:h-64 mx-auto">
                <Image
                  src="/images/RAG.png"
                  alt="RAG Model"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row pt-6">
            <div className="w-full sm:w-1/2 p-6 flex items-center">
              <div className="sm:h-64 mx-auto">
                <Image
                  src="/images/SyntheticData.png"
                  alt="Training Loop"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Getting the Embedding Model in the first place
                </h3>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <p className="text-gray-600 mb-8">
                  To get the embedding model to begin with, the model was pre-trained on a synthetic dataset generated by prompting a large language model (LLM) to create specific research interests tailored to each paper in the database. For each paper, the LLM was shown the content and then tasked with generating a corresponding research interest. This process was repeated for every paper in the database, resulting in a vast collection of &apos;interest&apos; -&gt; &apos;paper&apos; pairs. These pairs were then used to train the embedding model, enabling it to accurately map research interests to relevant papers based on their content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap pt-6">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Fine-Tuning the Embedding Model
              </h3>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <p className="text-gray-600 mb-8">
                Reinforcement learning with human feedback (RLHF) is a technique where a model is refined based on interactions with users. Feedback from users, such as which papers they click on or engage with, is used to improve the model&apos;s performance over time. In the case of the embedding model, it is fine-tuned using this feedback to better align its recommendations with user preferences. By analyzing user behavior—specifically which papers are clicked on—the model learns to prioritize more relevant content. For legal and ethical reasons, however, we ensure that this data is anonymized and cannot be attributed to any specific user, preserving privacy while still enhancing the system&apos;s effectiveness.
              </p>
            </div>
            <div className="sm:h-64 mx-auto">
              <Image
                src="/images/TrainingLoop.png"
                alt="Training Loop"
                width={500}
                height={500}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TechPage;
