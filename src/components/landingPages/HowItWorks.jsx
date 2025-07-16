
import { FaSchool, FaHandshake, FaDonate, FaChartLine } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Select a School",
      description:
        "Browse our network of verified schools to find a cause that aligns with your CSR goals.",
      icon: <FaSchool className="text-white text-2xl" />,
    },
    {
      title: "Choose a Vendor",
      description:
        "Select from curated vendors offering products and services tailored for educational needs.",
      icon: <FaHandshake className="text-white text-2xl" />,
    },
    {
      title: "Make a Donation",
      description:
        "Contribute securely through our platform, ensuring your funds are allocated transparently.",
      icon: <FaDonate className="text-white text-2xl" />,
    },
    {
      title: "Track Your Impact",
      description:
        "Monitor your donation’s progress and receive detailed impact reports.",
      icon: <FaChartLine className="text-white text-2xl" />,
    },
  ];

  return (
    <section className="bg-[#AAA] py-16 px-4 md:px-20">
      <h2 id="how-works" className="text-center text-4xl md:text-4xl font-bold text-[#WCAGAA] mb-12">
        How It Works
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center relative transition-all">
              <div className="bg-gray-600 p-3 rounded-full shadow-lg group-hover:shadow-[#AAA] transition-all">
                {step.icon}
              </div>
              <div className="absolute inset-0 rounded-full animate-pulse bg-green-200 opacity-0 group-hover:opacity-20 transition" />
            </div>
            <h3 id="title-step" className="font-semibold text-xl text-gray-900 transition mb-2">
              {step.title}
            </h3>
            <p className="text-[16px] text-gray-600 group-hover:text-gray-700 transition">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
