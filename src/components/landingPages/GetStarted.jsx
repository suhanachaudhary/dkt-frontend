
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="relative z-10 py-14 px-6 md:px-20 flex items-center justify-center overflow-hidden bg-[#AAA]">
      <div className="max-w-4xl w-full text-center  backdrop-blur-xl px-8 py-12 transition-transform duration-500 hover:scale-[1.01]">

        <h2 id="ready-to-start" className="text-4xl md:text-5xl font-bold text-[#WCAGAA]">
          Ready to Get Started?
        </h2>

        <p className="text-[#WCAGAA] mt-6 text-[16px] md:text-lg mb-10 max-w-xl mx-auto leading-relaxed animate-fadeSlideUp [animation-delay:0.2s]">
          Join us in making a difference. Contact our team to learn more or sign up to begin empowering schools and communities today.
        </p>

        <Link to="/contact">
          <button className="relative inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full text-xl md:text-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 animate-fadeSlideUp [animation-delay:0.4s]">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
