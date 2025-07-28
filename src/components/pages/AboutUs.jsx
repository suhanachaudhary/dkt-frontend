
import { useRef } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRecycle, FaGlobeAsia, FaGraduationCap } from "react-icons/fa";

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
];

const AboutUs = () => {

  const sliderRef = useRef(null);
  const extendedTeam = [...team, ...team, ...team];


  return (
    <section id="about" className="min-h-screen scroll-mt-24 mt-16 px-6 md:px-1 py-20 text-gray-800">
      <div className="max-w-5xl mx-auto">

        <h1 id="aboutUs" className="text-4xl md:text-5xl font-bold text-[#WCAGAA] mb-4 animate-fade-in text-center">
          Who We Are
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-up delay-200">
          <span className="font-semibold text-gray-700">Digital K Tech (DKT)</span> is a mission-driven platform empowering underserved students and institutions through responsible tech donations, transparent CSR collaborations, and sustainability-first practices.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-14 animate-fade-in delay-300">
          {[
            {
              icon: <FaRecycle className="text-green-600 text-3xl mb-3" />,
              title: "Reduce Digital Waste",
              desc: "We prioritize reuse and repair before recycling, promoting a sustainable circular economy.",
            },
            {
              icon: <FaGlobeAsia className="text-green-600 text-3xl mb-3" />,
              title: "Bridge the Digital Divide",
              desc: "Connecting the India-Bharat gap by delivering tech access to remote and rural schools.",
            },
            {
              icon: <FaGraduationCap className="text-green-600 text-3xl mb-3" />,
              title: "Advance Quality Education",
              desc: "Empowering learning outcomes while contributing to environmental conservation.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
              <p className="text-[16px] text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>


        <section className="py-20 px-2 md:px-20">
          <h2 id="team" className="text-3xl text-center font-semibold text-[#WCAGAA] mb-6 animate-fade-in delay-400">
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


        <p className="text-center text-[16px] text-gray-500 mt-16 animate-fade-in delay-500">
          Empowering innovation, one solution at a time. 💡
        </p>
      </div >
    </section >
  );
};

export default AboutUs;
