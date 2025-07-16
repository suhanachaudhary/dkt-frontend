
import Slider from "react-slick";

const programs = [
  {
    title: "Digital Infrastructure",
    description:
      "Support schools with laptops, smart boards, and internet facilities to enhance digital learning.",
    image: "/images/digital.png",
  },
  {
    title: "STEM Learning Kits",
    description:
      "Empower students with hands-on Science, Technology, Engineering, and Math education tools.",
    image: "/images/stem.jpg",
  },
  {
    title: "Sanitation & Hygiene",
    description:
      "Fund clean washrooms, sanitary kits, and hygiene workshops to create a healthier school environment.",
    image: "/images/sanitation.jpg",
  },
  {
    title: "Teacher Training",
    description:
      "Sponsor teacher upskilling programs to improve teaching quality and modern pedagogy adoption.",
    image: "/images/teacher.jpg",
  },
  {
    title: "Scholarship Support",
    description:
      "Help underprivileged students access quality education through financial aid programs.",
    image: "/images/scholar.jpg",
  },
];


const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ExploreProgram = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="programs" className="text-3xl md:text-5xl font-bold text-green-500 mb-6">
          Explore Our Programs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover impactful initiatives you can contribute to and help transform education for underserved communities.
        </p>

        <Slider {...sliderSettings}>
          {programs.map((prog, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-green-600 transition duration-300">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{prog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA */}
        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <h3 id="impact_program" className="text-2xl font-semibold text-slate-900 mb-3">
            Ready to Make an Impact?
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Your contribution can empower thousands of students. Choose a program and become a changemaker today.
          </p>
          <a href="/get-started">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreProgram;