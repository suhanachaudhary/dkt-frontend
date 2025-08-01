
import { useState } from "react";
import {
  FaUserTie,
  FaTruckLoading,
  FaTags,
  FaLaptop,
  FaChartBar
} from "react-icons/fa";

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, all donations made through our platform are eligible for tax deductions under applicable laws.",
  },
  {
    question: "Can I choose multiple schools?",
    answer:
      "Absolutely! You can support one or multiple schools based on your CSR goals.",
  },
  {
    question: "How is vendor quality ensured?",
    answer:
      "Vendors are onboarded after background checks, experience validation, and past delivery success.",
  },
];

const steps = [
  {
    title: "Step 1: Corporates Commit",
    description:
      "Donors register and pledge funds or devices.",
    icon: <FaUserTie className="text-white text-2xl" />,
  },
  {
    title: "Step 2: We Procure or Collect",
    description:
      "Devices are sourced from vendors or picked up.",
    icon: <FaTruckLoading className="text-white text-2xl" />,
  },
  {
    title: "Step 3: Devices Are Classified",
    description:
      "Assets are tagged REU, REP, or REC.",
    icon: <FaTags className="text-white text-2xl" />,
  },
  {
    title: "Step 4: Delivery & Installation",
    description:
      "Laptops/PCs with AI software reach schools.",
    icon: <FaLaptop className="text-white text-2xl" />,
  },
  {
    title: "Step 5: Track, Report & Certify",
    description:
      "Real-time dashboards and CSR impact reports.",
    icon: <FaChartBar className="text-white text-2xl" />,
  },
];

const HowItWorksPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen mt-28 px-6 md:px-20 py-16 text-gray-800">
      <div className="max-w-6xl mx-auto">

        <h1 id="how-works" className="text-4xl md:text-5xl font-bold text-center text-[#WCAGAA] mb-4">
          How Our Platform Works
        </h1>
        <p className="text-center text-2xl mt-6 text-gray-600 max-w-3xl mx-auto mb-16">
          In 5 Simple Steps.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-gray-500 p-3 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 id="title" className="text-lg font-semibold text-gray-600 mb-2">
                {step.title}
              </h3>
              <p className="text-[16px] text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-[#WCAGAA] mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 id="verified-partner" className="text-gray-600 text-xl font-bold mb-2">Verified Partners</h3>
              <p className="text-[16px] text-gray-600">
                All vendors and schools go through a strict verification process ensuring reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 id="tracking" className="text-gray-600 text-xl font-bold mb-2">Transparent Tracking</h3>
              <p className="text-[16px] text-gray-600">
                Know exactly where your donation goes with real-time updates and progress reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 id="support" className="text-gray-600 text-xl font-bold mb-2">End-to-End Support</h3>
              <p className="text-[16px] text-gray-600">
                From school onboarding to delivery logistics, we manage everything — you just focus on impact.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 bg-white p-10 rounded-xl shadow-md text-center">
          <h2 id="impact" className="text-3xl font-semibold text-[#WCAGAA] mb-6">Our Impact So Far</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-gray-600">500+</h3>
              <p className="text-[16px] text-gray-600">Schools Supported</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-600">100+</h3>
              <p className="text-[16px] text-gray-600">CSR Donors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-600">20K+</h3>
              <p className="text-[16px] text-gray-600">Students Benefited</p>
            </div>
          </div>
        </div>


        <div className="mb-20">
          <h2 id="questionary" className="text-3xl font-semibold text-center text-[#WCAGAA] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow transition hover:shadow-md cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-5 flex justify-between items-center">
                  <h4 className="text-gray-600 font-medium">{faq.question}</h4>
                  <span className="text-gray-500 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-[16px] text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 id="ready-to-join" className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Join the Movement?
          </h2>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
