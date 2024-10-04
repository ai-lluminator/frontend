// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a
                className="text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                AIluminator
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Homepage</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="/home"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Homepage
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="/technology"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Technology
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="/about"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  