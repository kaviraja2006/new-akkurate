import RevealOnScroll from './RevealOnScroll';
import RoadmapLine from './RoadmapLine';

export default function RoadmapSection() {
    // ... existing steps array ...
    const steps = [
        { id: 1, title: 'Brainstorming', icon: '🧠', bg: 'bg-blue-500' },
        { id: 2, title: 'UX Research', icon: '📄', bg: 'bg-[#1e1b4b]' },
        { id: 3, title: 'Product Designing', icon: '🎨', bg: 'bg-cyan-500' },
        { id: 4, title: 'Front-End Development', icon: '💻', bg: 'bg-[#1e1b4b]' },
        { id: 5, title: 'Digital Marketing', icon: '📢', bg: 'bg-cyan-600' },
        { id: 6, title: 'SEO Optimization', icon: '🔍', bg: 'bg-blue-600' },
        { id: 7, title: 'Back-End Development', icon: '⚙️', bg: 'bg-pink-500' },
        { id: 8, title: 'Usability Testing', icon: '📋', bg: 'bg-slate-700' },
    ];

    return (
        <section className="bg-[#110e2e] py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">

                    {/* ... header content ... */}
                    <div className="max-w-lg">
                        <RevealOnScroll>
                            <div className="inline-block bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                                What We Do
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Working Roadmap
                            </h2>
                        </RevealOnScroll>
                        <RevealOnScroll delay={200}>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                            </p>
                        </RevealOnScroll>
                    </div>

                    {/* CTA on the right */}
                    <div className="flex items-center gap-6">
                        <RevealOnScroll variant="scale" delay={300}>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                                Get Started
                            </button>
                        </RevealOnScroll>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border border-[#110e2e] bg-slate-400 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-slate-300 to-white"></div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">4 M+</p>
                                <p className="text-[10px] text-slate-400">3000+ Client reviews</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Steps Visualisation */}
                <div className="relative">
                    {/* Background Wave Line */}
                    <RoadmapLine
                        className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 opacity-20 pointer-events-none"
                        delay={500}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-y-16 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex flex-col items-center text-center group ${index % 2 === 1 ? 'md:mt-16' : 'md:mb-16'}`}>
                                <RevealOnScroll variant="scale" delay={index * 150 + 500} className="relative z-20">
                                    <div className={`w-20 h-20 ${step.bg} rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-[#110e2e] group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                        {/* Number Badge */}
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center border-2 border-[#110e2e]">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </div>
                                    </div>
                                </RevealOnScroll>
                                <RevealOnScroll delay={index * 150 + 600}>
                                    <h3 className="text-white font-semibold text-sm mt-4 px-2">
                                        {step.title}
                                    </h3>
                                </RevealOnScroll>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Stats Section appended here or separate? Design shows it right after roadmap */}
            <div className="bg-white py-20 mt-20 rounded-t-[3rem] text-center">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">
                        We Makes Globally <span className="font-extrabold">Growth & Increase</span> Revenue
                    </h2>
                </RevealOnScroll>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
                    {/* Stat 1 */}
                    <RevealOnScroll variant="scale" delay={200} className="bg-blue-600 text-white rounded-[2rem] p-8 col-span-1 lg:col-span-1 transform -rotate-2 hover:rotate-0 transition-all duration-300 h-full">
                        <div className="flex flex-col justify-center h-full">
                            <p className="text-4xl font-bold mb-2">27 K</p>
                            <p className="text-[10px] opacity-80 leading-tight">Average revenue growth for per successful clients</p>
                        </div>
                    </RevealOnScroll>

                    {/* Stat 2 (Wide) */}
                    <RevealOnScroll variant="scale" delay={300} className="bg-blue-600 text-white rounded-full px-8 py-5 col-span-1 lg:col-span-2 flex items-center justify-between shadow-lg h-full">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">↑</span>
                                <span className="text-4xl font-bold">88%</span>
                            </div>
                            <p className="text-[10px] text-left max-w-[120px] opacity-90 leading-tight">Average revenue growth for per successful clients</p>
                        </div>
                    </RevealOnScroll>

                    {/* Stat 3 (White Pill) */}
                    <RevealOnScroll variant="scale" delay={400} className="bg-white border border-slate-100 rounded-full px-8 py-5 col-span-1 lg:col-span-1 shadow-sm flex items-center gap-2 justify-center h-full">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 text-3xl font-bold">3x</span>
                            <span className="text-slate-400 text-[10px] text-left">// Faster time to launch</span>
                        </div>
                    </RevealOnScroll>

                    {/* Stat 4 (White Pill) */}
                    <div className="bg-white border-none rounded-full px-4 py-5 col-span-1 shadow-none flex items-center justify-center">
                        {/* Empty filler or spacer if needed */}
                    </div>
                </div>

                {/* Second Row of stats simulation */}
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <RevealOnScroll variant="scale" delay={500} className="bg-white border border-slate-100 rounded-full px-8 py-5 flex items-center gap-4 shadow-sm justify-center">
                        <div className="flex items-center gap-4">
                            <span className="text-blue-600 text-3xl font-bold">50%</span>
                            <p className="text-[10px] text-left text-slate-500 max-w-[100px]">Effective in financial growth than before growth</p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale" delay={600} className="bg-blue-600 text-white rounded-full px-8 py-8 flex flex-col items-center justify-center shadow-lg aspect-square w-48 h-48 mx-auto -mt-12 z-10 border-4 border-white">
                        <span className="text-4xl font-bold">95%</span>
                        <span className="text-[10px] opacity-80 mt-1">Average positive review</span>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale" delay={700} className="bg-white border border-slate-100 rounded-full px-8 py-5 flex items-center gap-4 shadow-sm justify-center">
                        <div className="flex items-center gap-4">
                            <span className="text-blue-600 text-3xl font-bold">5m</span>
                            <p className="text-[10px] text-left text-slate-500 max-w-[100px]">Average revenue growth per successful clients</p>
                        </div>
                    </RevealOnScroll>
                </div>

            </div>
        </section>
    );
}
