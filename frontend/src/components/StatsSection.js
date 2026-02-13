import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function StatsSection() {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Grid with Cards */}
                <div className="grid grid-cols-2 gap-6 items-center">
                    {/* Card 1: Blue Background */}
                    <RevealOnScroll delay={0} className="bg-blue-600 rounded-3xl p-8 text-white h-full flex flex-col justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl lg:text-5xl font-bold mb-4 flex items-start gap-1">
                            <span className="text-2xl mt-1">↑</span>88%
                        </div>
                        <p className="text-sm font-medium opacity-90">Average revenue growth for per successful clients</p>
                    </RevealOnScroll>

                    {/* Card 2: Image/Person */}
                    <RevealOnScroll delay={200} className="rounded-3xl overflow-hidden shadow-lg h-64 lg:h-80 relative group">
                        {/* Placeholder for the person image with circular graphical element */}
                        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                            <div className="absolute w-40 h-40 border-[3px] border-yellow-400 rounded-full animate-spin-slow opacity-50"></div>
                            {/* In a real scenario, use <Image /> here */}
                            <span className="text-white text-xs z-10">Portrait Image Placeholder</span>
                        </div>

                        {/* Floating Stats Badge */}
                        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-md z-20 flex items-center gap-3">
                            <div className="bg-slate-100 p-1.5 rounded-full">
                                <span className="text-green-500">☺</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">99%</p>
                                <p className="text-[10px] text-slate-500">Client Satisfaction</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Card 3: Dark Background with Circle */}
                    <RevealOnScroll delay={400} className="bg-[#1e1b4b] rounded-3xl p-8 text-white h-full flex flex-col justify-center relative overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        {/* Progress Circle Mock */}
                        <div className="relative w-24 h-24 mb-4">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-700" />
                                <circle cx="48" cy="48" r="40" stroke="#3b82f6" strokeWidth="8" fill="transparent" className="text-blue-500" strokeDasharray="251.2" strokeDashoffset="55" strokeLinecap="round" />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">78%</span>
                        </div>
                        <p className="text-sm font-medium opacity-90 mt-2">Average revenue growth for per successful clients</p>
                    </RevealOnScroll>

                    {/* Right column of the grid (Pills) */}
                    <div className="flex flex-col gap-4 justify-center h-full">
                        <RevealOnScroll delay={600} className="bg-[#1e1b4b] text-white px-6 py-3 rounded-full text-sm font-medium text-center shadow-md">Cybersecurity</RevealOnScroll>
                        <RevealOnScroll delay={700} className="bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium text-center shadow-md">Infrastructure Management</RevealOnScroll>
                        <RevealOnScroll delay={800} className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium text-center shadow-md">Operational Excellence</RevealOnScroll>
                    </div>
                </div>

                {/* Right Text Content */}
                <div className="flex flex-col justify-center">
                    <RevealOnScroll delay={100}>
                        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 w-max">
                            About Us
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300}>
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-8">
                            Comprehensive IT <br />
                            Solution Growth <br />
                            & Efficiency
                        </h2>
                    </RevealOnScroll>

                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <RevealOnScroll delay={500} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 text-xl border border-slate-100">
                                💡
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Innovation at our core</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critical.
                                </p>
                            </div>
                        </RevealOnScroll>

                        {/* Feature 2 */}
                        <RevealOnScroll delay={700} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 text-xl border border-slate-100">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Simplifying complexity</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critical.
                                </p>
                            </div>
                        </RevealOnScroll>

                        {/* Feature 3 */}
                        <RevealOnScroll delay={900} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 text-xl border border-slate-100">
                                📈
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Empowering growth</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critical.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

            </div>
        </div>
    );
}
