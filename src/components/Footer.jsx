
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    // <footer className="bg-gray-600 text-gray-200 py-12 px-6 md:px-16 transition-all duration-300">
    <footer className="bg-[#333] text-gray-300 py-12 px-6 md:px-16 transition-all duration-300">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <Link to="/" className="items-center space-x-2">
              <img
                src="/images/logo103-removebg-preview.png"
                alt="DKT Logo"
                className="w-18 h-14"
              />
              <span id="logo" className="font-semibold text-lg text-white">Digital K</span>
            </Link>
          </div>
          <p className="text-[16px] leading-relaxed text-gray-400 hover:text-gray-300 transition">
            Empowering schools through smart CSR donations, connecting companies,
            vendors, and communities for a brighter future.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-xl">About</h2>
          <ul className="space-y-2 text-[16px]">
            {[
              { to: "/vision-mission", label: "Vision" },
              { to: "/vision-mission", label: "Mission" },
              { to: "/sustainability", label: "Sustainability" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="hover:text-gray-400 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-xl">Quick Links</h2>
          <ul className="space-y-2 text-[16px]">
            {[
              { to: "/", label: "Home" },
              { to: "/how-it-works", label: "How it works" },
              { to: "https://digital-k-tech.vercel.app/auth/sign-in", label: "Login" },
              { to: "/contact", label: "Contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="hover:text-gray-400 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-xl">Legal</h2>
          <ul className="space-y-2 text-[16px]">
            <li>
              <Link to="/privacy" className="hover:text-gray-400 transition duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-400 transition duration-300">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-xl">Socials</h2>
          <div className="flex space-x-5 items-center">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-gray-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-[16px] text-gray-500">
        © 2025 <span className="text-gray-200 font-medium">Digital K</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
