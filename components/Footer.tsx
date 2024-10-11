import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <Link href="/" className="text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              AIluminator
            </Link>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Homepage</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/home" className="no-underline hover:underline text-gray-800 hover:text-blue-500">
                  Homepage
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/technology" className="no-underline hover:underline text-gray-800 hover:text-blue-500">
                  Technology
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/about" className="no-underline hover:underline text-gray-800 hover:text-blue-500">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
