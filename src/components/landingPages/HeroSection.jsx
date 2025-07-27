
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white mt-28 py-10 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 id="schools" className="text-5xl md:text-5xl font-extrabold text-slate-900 leading-tight transition-all duration-500">
            Empowering Education Through{" "}
            <span className="text-[#AAA]">Sustainable Tech Donations</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed transition-opacity duration-700">
            Bridging the digital divide by connecting corporates, schools, and technology partners — with purpose, impact, and transparency.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/programs">
              <button className="bg-green-500 hover:bg-green-600 hover:scale-105 text-white font-semibold px-6 py-3 rounded-full text-xl shadow-md transition-all duration-300">
                Explore Program
              </button>
            </Link>
            <a href="#login-gateway">
              <button className="bg-transparent border border-green-500 hover:bg-green-500 text-green-600 hover:text-white font-semibold px-6 py-3 rounded-full text-xl transition-all duration-300 hover:scale-105">
                Login to Portal
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src="/images/hero111.jpeg"
            alt="Heroi-image"
            className="w-full max-w-md mx-auto rounded-xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
