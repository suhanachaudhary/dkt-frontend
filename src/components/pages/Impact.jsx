
function Impact() {
    const impactAreas = [
        {
            title: "Education Inequality",
            description: "Access to devices for underserved students.",
        },
        {
            title: "E-Waste Reduction",
            description: "Reuse > Recycle > Responsible Disposal.",
        },
        {
            title: "Transparent CSR",
            description: "Real-time reports and traceable donations.",
        },
        {
            title: "Lifecycle Optimization",
            description: "Devices refurbished before redistribution.",
        },
    ];

    return (
        <div className="min-h-screen mt-28 px-6 md:px-20 py-16 text-gray-800">
            <h1 id="impact-areas" className="text-4xl md:text-5xl font-bold text-center text-[#WCAGAA] mb-4">
                What We Solve
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {impactAreas.map((area, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-gray-600 text-xl font-bold mb-2">{area.title}</h3>
                        <p className="text-[16px] text-gray-600">{area.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-18 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    Real Impact, Real Change
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission goes beyond device donation. We aim to build a future where every child, regardless of background, has access to quality digital education — while ensuring that technology is reused, repurposed, and responsibly handled. Your contribution supports a transparent, sustainable, and impactful cycle of change.
                </p>

                <a
                    href="/impact"
                    className="inline-block mt-8 px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition"
                >
                    See Our Full Impact Report
                </a>
            </div>

        </div>
    )
}
export default Impact