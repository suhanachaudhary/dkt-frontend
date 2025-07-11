

const WhoItsFor = () => {
  const data = [
    {
      title: "Donors",
      image: "/images/donor1.jpg",
      description:
        "Companies seeking to make a meaningful, measurable impact through strategic ESG initiatives.",
    },
    {
      title: "Vendors",
      image: "/images/vendor1.png",
      description:
        "Suppliers of educational products and services aiming to connect with schools and projects.",
    },
    {
      title: "Schools",
      image: "/images/school1.jpg",
      description:
        "Educational institutions in need of resources and support for their students and programs.",
    },
    {
      title: "Admins",
      image: "/images/admin1.jpg",
      description:
        "Platform administrators managing the network and ensuring smooth, secure operations.",
    },
  ];

  // Repeat data twice for seamless scroll
  const repeatedData = [...data, ...data];

  return (
    <section id="who" className="bg-white py-20 px-6 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-600 mb-12">
        Who It's For
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-scroll-left gap-8 w-[200%]"
          style={{
            animation: "scroll-left 15s linear infinite",
          }}
        >
          {repeatedData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-gray-50 rounded-2xl p-6 shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:rotate-[1deg]"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow border-4 border-gray-100 hover:border-gray-400 transition duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2 hover:text-gray-600 transition">
                {item.title}
              </h3>
              <p className="text-sm text-center text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;


// const WhoItsFor = () => {
//   const data = [
//     {
//       title: "Donors",
//       image: "/images/donor.webp",
//       description:
//         "Companies seeking to make a meaningful, measurable impact through strategic ESG initiatives.",
//     },
//     {
//       title: "Vendors",
//       image: "/images/vendor.png",
//       description:
//         "Suppliers of educational products and services aiming to connect with schools and projects.",
//     },
//     {
//       title: "Schools",
//       image: "/images/school.png",
//       description:
//         "Educational institutions in need of resources and support for their students and programs.",
//     },
//     {
//       title: "Admins",
//       image: "/images/admin.jpg",
//       description:
//         "Platform administrators managing the network and ensuring smooth, secure operations.",
//     },
//   ];

//   return (
//     <section id="who" className="bg-white py-16 px-6 md:px-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
//         Who It's For
//       </h2>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="group bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//           >
//             <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden shadow-md border-4 border-green-100 group-hover:border-green-400 transition-all duration-300">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 mb-2 transition">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 group-hover:text-gray-700 transition">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhoItsFor;
