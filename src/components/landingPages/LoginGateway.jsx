
import { Link } from "react-router-dom";

const LoginGateway = () => {
  return (
    <section id="login-gateway" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="login" className="text-4xl md:text-4xl font-bold text-[#WCAGAA] mb-4 transition-all duration-500">
          Login Gateway
        </h2>
        <p className="text-gray-600 mb-10 text-[16px] md:text-[18px] max-w-2xl mx-auto transition-opacity duration-500">
          Access your dedicated portal to manage donations, connect with
          partners, or oversee platform activities.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            { label: "Donor", path: "https://digital-k-tech.vercel.app/auth/sign-in" },
            { label: "Vendor", path: "https://digital-k-tech.vercel.app/auth/sign-in" },
            { label: "School", path: "https://digital-k-tech.vercel.app/auth/sign-in" },
            { label: "Admin", path: "https://digital-k-tech.vercel.app/auth/sign-in" },
          ].map((item, index) => (
            <Link to={item.path} key={index}>
              <button
                className="relative bg-green-500 text-white px-6 py-2 rounded-md font-medium text-xl md:text-xl 
                transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="absolute -inset-1 rounded-md blur opacity-20 group-hover:opacity-30 transition" />
                {item.label} Login
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoginGateway;
