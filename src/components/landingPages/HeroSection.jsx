
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight transition-all duration-500">
            Empowering Schools Through{" "}
            <span className="text-gray-500">Smart CSR Donations</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed transition-opacity duration-700">
            Our platform connects companies, vendors, and schools to facilitate impactful and transparent CSR & ESG donations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/programs">
              <button className="bg-green-500 hover:bg-green-600 hover:scale-105 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all duration-300">
                Explore Program
              </button>
            </Link>
            <a href="#login-gateway">
              <button className="bg-transparent border border-green-500 hover:bg-green-500 text-green-600 hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105">
                Login to Portal
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src="/images/herosection.jpg"
            alt="Hero"
            className="w-full max-w-md mx-auto rounded-xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
