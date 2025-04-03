import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-text text-[#f4f4f4] sticky top-0 z-50 h-20 border-b-[0.01rem] border-gray-100/10 bg-black/98">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-20 items-center">
          {/* Logo with text */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="CORTX Logo" className="h-8 w-auto" />
              <span className="font-bold text-3xl hidden sm:inline-block tracking-wider">
                CORTX
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 h-full lg:border-l-[0.01rem] lg:pl-[51px] border-gray-100/10">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Buy
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Docs
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Whitepaper
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-black ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-gray-700 transition duration-300"
          >
            Buy
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-gray-700 transition duration-300"
          >
            Docs
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-gray-700 transition duration-300"
          >
            Whitepaper
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
