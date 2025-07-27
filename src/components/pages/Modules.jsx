
function Modules() {

    const modules = [
        {
            title: "Donor Portal",
            description: "Track CSR, see reports, select beneficiary schools.",
        },
        {
            title: "Beneficiary Portal",
            description: "Schools receive devices, give feedback, track support.",
        },
        {
            title: "Vendor/Service Partner",
            description: "Procure, classify (REU/REP/REC), repair, or deliver.",
        },
        {
            title: "Admin Dashboard",
            description: "Full journey control, approvals, recon, certifications.",
        },
        {
            title: "Green Karma Engine",
            description: "Calculates environmental savings, CO₂ impact, etc.",
        },
        {
            title: "CSR Reports Module",
            description: "Download real-time project impact, tax docs, photos.",
        },
    ];

    return (
        <>
            <div className="min-h-screen mt-28 px-6 md:px-20 py-16 text-gray-800">
                <h1 id="modules" className="text-4xl md:text-5xl font-bold text-center text-[#WCAGAA] mb-18">
                    What Our Platform Offers
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-600 mb-2">{module.title}</h3>
                            <p className="text-[16px] text-gray-600">{module.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default Modules;