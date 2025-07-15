
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Isha Sharma",
    role: "Founder & CEO",
    image: "/images/about1.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Aman Verma",
    role: "Lead Developer",
    image: "/images/abou2.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Neha Kapoor",
    role: "UI/UX Designer",
    image: "/images/about3.png",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Isha Sharma",
    role: "Founder & CEO",
    image: "/images/about1.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Aman Verma",
    role: "Lead Developer",
    image: "/images/abou2.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Neha Kapoor",
    role: "UI/UX Designer",
    image: "/images/about3.png",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

const AboutUs = () => {

  const sliderRef = useRef(null);
  const extendedTeam = [...team, ...team];


  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-1 py-20 text-gray-800">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-[#WCAGAA] mb-4 animate-fade-in text-center">
          About Us
        </h1>
        <p className="text-[16px] mb-10 leading-relaxed animate-slide-up delay-200">
          We are a passionate team dedicated to providing seamless digital
          solutions for modern problems. Our goal is to deliver user-friendly
          and scalable products that make a real impact in the world.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-fade-in delay-300">
          <h2 className="text-2xl font-semibold text-[#WCAGAA] mb-3 text-center">
            Our Mission
          </h2>
          <p className="text-[16px]">
            To simplify complex workflows and help businesses grow with
            technology-driven solutions. We believe in innovation, transparency,
            and user satisfaction.
          </p>
        </div>

        <section className="py-20 px-2 md:px-20">
          <h2 className="text-3xl text-center font-semibold text-[#WCAGAA] mb-6 animate-fade-in delay-400">
            Meet Our Team
          </h2>

          <div
            ref={sliderRef}
            className="flex gap-10 w-[200%] animate-team-scroll md:px-6"
            style={{
              animation: "team-scroll 20s linear infinite",
            }}
          >
            {extendedTeam.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-500 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-gray-400 transition">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-[16px] text-gray-600 mb-4">{member.role}</p>

                {/* Social icons */}
                <div className="flex justify-center gap-4 text-gray-500 group-hover:text-gray-700 text-xl transition">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>


        <p className="text-center text-sm text-gray-500 mt-16 animate-fade-in delay-500">
          Empowering innovation, one solution at a time. 💡
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
