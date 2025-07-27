
import React from "react";

const VisionMissionPage = () => {
    return (
        <div className="min-h-screen mt-28 px-6 md:px-20 py-16 text-gray-800">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#WCAGAA] mb-4">
                    Vision And Mission
                </h1>


                <section className="mb-20 text-center">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        To create a digitally inclusive world where every student, regardless of location or economic background, has access to quality education through sustainable technology solutions.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="mb-20 text-center">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        To bridge the digital divide by facilitating transparent CSR partnerships that deliver refurbished, tech-enabled learning tools to underserved schools — while promoting circular economy practices and maximizing the lifecycle of electronic devices.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default VisionMissionPage;
