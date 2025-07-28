
import Slider from "react-slick";
import {
  FaHandsHelping,
  FaTruck,
  FaBrain,
  FaCommentDots,
  FaChartBar,
  FaUserShield,
} from "react-icons/fa";

const features = [
  {
    title: "Donation Management",
    description:
      "Streamline and track your contributions with our intuitive management tools.",
    icon: <FaHandsHelping className="text-white text-xl" />,
  },
  {
    title: "Delivery & Reconciliation",
    description:
      "Ensure seamless product delivery with our integrated system.",
    icon: <FaTruck className="text-white text-xl" />,
  },
  {
    title: "AI Learning Integration",
    description:
      "Leverage AI to identify schools with the greatest needs and optimize your impact.",
    icon: <FaBrain className="text-white text-xl" />,
  },
  {
    title: "Feedback Capture",
    description:
      "Gather valuable feedback from schools and vendors to continuously improve.",
    icon: <FaCommentDots className="text-white text-xl" />,
  },
  {
    title: "Reporting Engine",
    description:
      "Generate comprehensive reports on your donations and their measurable impact.",
    icon: <FaChartBar className="text-white text-xl" />,
  },
  {
    title: "Role-Based Access",
    description:
      "Control access to platform features based on user roles for enhanced security.",
    icon: <FaUserShield className="text-white text-xl" />,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PlatformFeatures = () => {
  return (
    <section id="features" className="bg-[#AAA] py-16 px-6 md:px-20">
      <h2 id="features" className="text-4xl md:text-4xl font-bold text-center text-[#WCAGAA] mb-12">
        Platform Features
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <Slider {...sliderSettings}>
          {features.map((item, index) => (
            <div key={index} className="px-6 w-full box-border">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform h-full flex flex-col items-center">

                <div className="w-16 h-16 mb-6 bg-[#E6F4EA] rounded-full flex items-center justify-center shadow-inner transition-all">
                  <div className="bg-green-600 p-3 rounded-full text-white text-xl group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-700 text-center mb-3 group-hover:text-green-700 transition">
                  {item.title}
                </h3>

                <p className="text-[16px] text-gray-600 text-center group-hover:text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};

export default PlatformFeatures;
