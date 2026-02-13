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
                        <div className="self-start mt-4">
                            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                ↗
                            </button>
                        </div>
                        {/* Decoration Image Mockup - Bottom Right */}
                        <div className="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-tl from-red-200 to-transparent opacity-50 rounded-tl-full"></div>
                    </RevealOnScroll>

                    {/* Card 2 (Tall Center) */}
                    <RevealOnScroll variant="scale" delay={400} className="bg-blue-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow md:row-span-2 h-auto flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-blue-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">Website Design & Development</h3>
                        </div>
                        <div className="self-start mt-4 mb-20">
                            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-700 transition-colors">
                                ↗
                            </button>
                        </div>
                        {/* Decoration Image Mockup - Centered */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-64 bg-white shadow-lg rounded-xl border border-slate-100 p-4">
                            <div className="w-full h-8 bg-blue-100 rounded mb-2"></div>
                            <div className="w-full h-24 bg-slate-100 rounded mb-2"></div>
                            <div className="flex gap-2">
                                <div className="w-1/2 h-20 bg-slate-50 rounded"></div>
                                <div className="w-1/2 h-20 bg-slate-50 rounded"></div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Card 3 */}
                    <RevealOnScroll variant="scale" delay={500} className="bg-slate-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-blue-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">CRM Software Solution</h3>
                        </div>
                        <div className="self-start mt-4">
                            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                ↗
                            </button>
                        </div>
                        {/* Decoration Image Mockup */}
                        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md w-24">
                            <div className="flex items-end gap-1 h-12">
                                <div className="w-2 bg-blue-200 h-4"></div>
                                <div className="w-2 bg-blue-300 h-8"></div>
                                <div className="w-2 bg-blue-500 h-6"></div>
                                <div className="w-2 bg-blue-600 h-10"></div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Card 4 */}
                    <RevealOnScroll variant="scale" delay={600} className="bg-red-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-red-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">WowCommerce System Development</h3>
                        </div>
                        <div className="self-start mt-4">
                            <button className="w-10 h-10 bg-red-400 text-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-red-500 transition-colors">
                                ↗
                            </button>
                        </div>
                        {/* Decoration Image Mockup */}
                        <div className="absolute bottom-4 right-4 w-32 h-20 bg-white border border-slate-200 rounded-lg shadow-sm rotate-[-10deg]"></div>
                    </RevealOnScroll>

                    {/* Card 5 */}
                    <RevealOnScroll variant="scale" delay={700} className="bg-green-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow h-80 flex flex-col justify-between">
                        <div>
                            <p className="text-xs text-green-500 font-semibold mb-2">Excellent Performance</p>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight w-2/3">WowCommerce System Development</h3>
                        </div>
                        <div className="self-start mt-4">
                            <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-colors">
                                ↗
                            </button>
                        </div>
                        {/* Decoration Image Mockup */}
                        <div className="absolute bottom-0 right-0 w-40 h-32">
                            {/* Connecting lines mock */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100">
                                <circle cx="20" cy="80" r="5" fill="#22c55e" />
                                <circle cx="50" cy="60" r="5" fill="#22c55e" />
                                <circle cx="80" cy="80" r="5" fill="#22c55e" />
                                <line x1="20" y1="80" x2="50" y2="60" stroke="#bbf7d0" strokeWidth="2" />
                                <line x1="80" y1="80" x2="50" y2="60" stroke="#bbf7d0" strokeWidth="2" />
                            </svg>
                        </div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
}
