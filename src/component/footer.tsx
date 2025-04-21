import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
                <span className="text-lg font-semibold text-gray-900">
                  logo.
                </span>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, quaerat.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li>
                  <Link href="#about-us" className="hover:text-black">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#technologies" className="hover:text-black">
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-black">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact-us" className="hover:text-black">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-10 border-t border-gray-300 pt-6 text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} Beatitude Ventures. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
