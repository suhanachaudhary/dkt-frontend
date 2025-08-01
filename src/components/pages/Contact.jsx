
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen mt-12 px-6 md:px-20 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 id="contact" className="text-4xl md:text-5xl font-bold text-center text-[#WCAGAA] mb-4">Let’s Partner to Power Purpose</h1>
        <p className="text-gray-600 mb-8 text-[16px]">
          Have questions or want to collaborate with us? We'd love to hear from you.
          Fill out the form or use the contact details below.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[16px] font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-[16px] font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-[16px] font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition text-xl"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-1">Email</h3>
              <p className="text-gray-700 text-[16px]">digitalkprivatelimited@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-1">Phone</h3>
              <p className="text-gray-700 text-[16px]">+91 98191 43730 / +91 95940 93430</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-1">Address</h3>
              <p className="text-gray-700 text-[16px]">
                DKT Foundation,<br />
                2nd Floor, Impact Tower,<br />
                Sector 63, Noida, UP 201301
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-1">Business Hours</h3>
              <p className="text-gray-700 text-sm">Monday to Friday — 10 AM to 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
