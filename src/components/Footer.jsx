
import { Link } from "react-router-dom";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-12 px-6 md:px-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <Link to="/" className="items-center space-x-2">
              <img
                src="/images/logo103-removebg-preview.png"
                alt="DKT Logo"
                className="w-18 h-14"
              />
              <span className="font-semibold text-lg text-white">Digital K</span>
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 hover:text-gray-300 transition">
            Empowering schools through smart CSR donations, connecting companies,
            vendors, and communities for a brighter future.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-base">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "https://digital-k-tech.vercel.app/auth/sign-in", label: "Login" },
              { to: "/how-it-works", label: "How it works" },
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
          <h2 className="text-white font-semibold mb-3 text-base">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-gray-400 transition duration-300">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-400 transition duration-300">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-base">Connect</h2>
          <div className="flex space-x-5 items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-gray-400 transition transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-gray-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © 2025 <span className="text-gray-200 font-medium">Digital K</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
