
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="relative z-10 py-14 px-6 md:px-20 flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-4xl w-full text-center  backdrop-blur-xl border border-white/20 px-8 py-12 transition-transform duration-500 hover:scale-[1.01]">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 mb-4 via-gray-500 to-gray-600 animate-gradient">
          Ready to Get Started?
        </h2>

        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed animate-fadeSlideUp [animation-delay:0.2s]">
          Join us in making a difference. Contact our team to learn more or sign up to begin empowering schools and communities today.
        </p>

        <Link to="/contact">
          <button className="relative inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full text-sm md:text-base shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 animate-fadeSlideUp [animation-delay:0.4s]">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;



// import { Link } from "react-router-dom";

// const GetStarted= () => {
//   return (
//     <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//         Ready to Get Started?
//       </h2>
//       <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
//         Join us in making a difference. Contact our team to learn more or sign up to 
//         begin empowering schools and communities today.
//       </p>
//       <Link to="/contact">
//         <button className="relative bg-green-500 text-white px-6 py-2 rounded-md font-medium text-sm md:text-base 
//                 transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 shadow-md hover:shadow-lg">
//           Contact Us
//         </button>
//       </Link>
//     </section>
//   );
// };

// export default GetStarted;
