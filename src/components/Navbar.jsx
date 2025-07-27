
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/how-it-works", label: "How it works" },
    { path: "/modules", label: "Modules" },
    { path: "/impact", label: "Impact" },
    { path: "https://digital-k-tech.vercel.app/auth/sign-in", label: "Login" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link to="/" className="items-center space-x-2">
              <img
                src="/images/logo103.PNG"
                alt="DKT Logo"
                className="w-18 h-14"
              />
              <span id="logo" className="font-semibold text-lg text-gray-900">Digital K</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xl font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition duration-300 hover:text-black ${isActive(link.path) ? "text-gray-700" : ""
                  }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="https://digital-k-tech.vercel.app/auth/sign-in">
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-md">
                Donate Now
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-gray-700"
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pt-4 pb-4 space-y-3 bg-white shadow-md text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-1 transition hover:text-black ${isActive(link.path) ? "text-green-600" : ""
                }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/get-started" onClick={() => setOpen(false)}>
            <button className="mt-2 bg-green-500 hover:bg-green-600 hover:scale-105 text-white w-full py-2 rounded-full text-xl transition-all duration-300 shadow">
              Donate Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
