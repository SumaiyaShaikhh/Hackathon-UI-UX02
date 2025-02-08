import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          {/* Logo and Description */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-white">Neutral House</h2>
            <p className="mt-4 text-gray-400">
              Discover quality products with great prices. Experience seamless shopping with us!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap lg:w-1/3 justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link legacyBehavior href="/about">
                    <a className="hover:text-blue-500">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/shop">
                    <a className="hover:text-blue-500">Shop</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact">
                    <a className="hover:text-blue-500">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link legacyBehavior href="/faq">
                    <a className="hover:text-blue-500">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/privacy-policy">
                    <a className="hover:text-blue-500">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/terms">
                    <a className="hover:text-blue-500">Terms of Service</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h3V6c0-1.1.9-2 2-2h2V1h-2c-2.2 0-4 1.8-4 4v2H9v3h2v7h3v-7h2.5l.5-3H14V8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.34-1.6.56-2.46.66.88-.52 1.56-1.35 1.88-2.35-.82.49-1.72.84-2.68 1.03A4.451 4.451 0 0016.11 4c-2.48 0-4.49 2.01-4.49 4.5 0 .35.04.7.11 1.03C8.1 9.44 5.41 7.91 3.61 5.6c-.38.66-.6 1.42-.6 2.25 0 1.55.79 2.92 1.99 3.71-.73-.02-1.42-.22-2.02-.56v.06c0 2.16 1.54 3.96 3.57 4.37-.38.1-.78.15-1.19.15-.29 0-.57-.03-.85-.08.58 1.79 2.24 3.1 4.21 3.14A9.033 9.033 0 012 19.54c-.65 0-1.29-.04-1.93-.11A12.746 12.746 0 007.29 22c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.4-.01-.6.88-.64 1.64-1.45 2.25-2.37z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-5 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.6 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.4-3-3-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Neutral House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
