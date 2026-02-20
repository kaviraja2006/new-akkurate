import RevealOnScroll from './RevealOnScroll';

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: "IT Management Service",
            category: "Excellent Performance",
            bg: "bg-red-50",
            iconBase: "bg-white text-blue-600",
            arrow: "↗",
            imgType: "chart" // placeholder for illustration type
        },
        {
            id: 2,
            title: "Website Design & Development",
            category: "Excellent Performance",
            bg: "bg-blue-50",
            iconBase: "bg-blue-600 text-white",
            arrow: "↗",
            imgType: "code"
        },
        {
            id: 3,
            title: "CRM Software Solution",
            category: "Excellent Performance",
            bg: "bg-slate-50",
            iconBase: "bg-white text-blue-600",
            arrow: "↗",
            imgType: "crm"
        },
        {
            id: 4,
            title: "WowCommerce System Development",
            category: "Excellent Performance",
            bg: "bg-red-50",
            iconBase: "bg-red-400 text-white",
            arrow: "↗",
            imgType: "ecommerce"
        },
        {
            id: 5,
            title: "WowCommerce System Development",
            category: "Excellent Performance",
            bg: "bg-green-50",
            iconBase: "bg-green-400 text-white",
            arrow: "↗",
            imgType: "server"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <RevealOnScroll>
                            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                                What We Offering
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={100}>
                            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                                Provides Full-Cycle Custom <br />
                                IT Development Services.
                            </h2>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll delay={200}>
                        <p className="text-slate-500 text-sm max-w-sm">
                            In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <RevealOnScroll variant="scale" delay={300} className="bg-red-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-red-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">IT Management Service</h3>
                        </div>
                        <div className="self-start mt-4 relative z-10">
                            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                ↗
                            </button>
                        </div>
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771505206/it_management_qya5ca.png"
                            alt="IT management service"
                            className="absolute bottom-0 right-0 w-full h-auto object-contain"
                        />
                    </RevealOnScroll>

                    {/* Card 2 (Tall Center) */}
                    <RevealOnScroll variant="scale" delay={400} className="bg-blue-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow md:row-span-2 h-auto flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-blue-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">Website Design & Development</h3>
                        </div>
                        <div className="self-start mt-4 mb-20 relative z-10">
                            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-700 transition-colors">
                                ↗
                            </button>
                        </div>
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771504731/website_design_and_development_ia196g.png"
                            alt="Website design and development"
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[440px] h-auto drop-shadow-xl"
                        />
                    </RevealOnScroll>

                    {/* Card 3 */}
                    <RevealOnScroll variant="scale" delay={500} className="bg-slate-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-blue-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">CRM Software Solution</h3>
                        </div>
                        <div className="self-start mt-4 relative z-10">
                            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                ↗
                            </button>
                        </div>
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771514487/offerimg4_mowu5x.png"
                            alt="CRM software solution"
                            className="absolute bottom-0 right-0 w-full h-auto object-contain"
                        />
                    </RevealOnScroll>

                    {/* Card 4 */}
                    <RevealOnScroll
                        variant="scale"
                        delay={600}
                        className="bg-transparent rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between"
                        style={{
                            backgroundImage: "url('https://res.cloudinary.com/ddnxhn442/image/upload/v1771504629/that_div_xscqwy.png')",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <div className="relative z-10">
                            <p className="text-xs text-red-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">WowCommerce System Development</h3>
                        </div>
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771513606/offerimg2_kigqcu.png"
                            alt="WowCommerce background"
                            className="absolute bottom-0 right-0 w-full h-auto object-contain"
                        />
                        <div className="self-start mt-4 relative z-10">
                            <button className="w-10 h-10 bg-red-400 text-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-red-500 transition-colors">
                                ↗
                            </button>
                        </div>
                    </RevealOnScroll>

                    {/* Card 5 */}
                    <RevealOnScroll
                        variant="scale"
                        delay={700}
                        className="bg-transparent rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between"
                    >
                        <div>
                            <p className="text-xs text-green-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">WowCommerce System Development</h3>
                        </div>
                        <div className="self-start mt-4 relative z-10">
                            <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-colors">
                                ↗
                            </button>
                        </div>
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771504629/that_div_xscqwy.png"
                            alt="WowCommerce background"
                            className="absolute bottom-0 right-0 w-full h-auto object-contain"
                        />
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
}
