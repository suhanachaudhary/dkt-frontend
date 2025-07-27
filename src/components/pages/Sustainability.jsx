
function Sustainability() {
    return (
        <div className="min-h-screen mt-28 px-6 md:px-20 py-16 text-gray-800">
            <section className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#WCAGAA] mb-4">Our Sustainability Commitments</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Device Reuse First",
                            description:
                                "We prioritize reuse over recycling to extend the life of IT equipment and reduce unnecessary manufacturing waste.",
                        },
                        {
                            title: "Responsible Recycling",
                            description:
                                "When devices can't be reused or repaired, we ensure environmentally responsible disposal via certified e-waste partners.",
                        },
                        {
                            title: "Green Karma Engine",
                            description:
                                "Our proprietary engine quantifies the CO₂ and resource savings from every donated or refurbished device.",
                        },
                        {
                            title: "Zero Landfill Policy",
                            description:
                                "We commit to diverting electronic waste from landfills through structured repurposing and recycling processes.",
                        },
                        {
                            title: "Carbon Impact Reports",
                            description:
                                "Every CSR donor receives carbon reduction data linked to their donation — adding measurable value to sustainability goals.",
                        },
                        {
                            title: "Community Education",
                            description:
                                "We educate schools and students on responsible digital practices, sustainability, and e-waste awareness.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
                        >
                            <h3 className="text-xl font-bold text-gray-700 mb-2">{item.title}</h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="text-center mt-20">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Join Us in Building a Greener, Smarter Tomorrow
                </h3>
                <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition"
                >
                    Connect With Us
                </a>
            </div>
        </div>
    )
}

export default Sustainability