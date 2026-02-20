import { LuBrain } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import RevealOnScroll from './RevealOnScroll';

export default function RoadmapSection() {
    const steps = [
        { id: 1, title: 'Brainstorming', icon: <LuBrain className="text-4xl" />, bg: 'bg-blue-600' },
        { id: 2, title: 'UX Research', icon: <TbReportSearch className="text-4xl" />, bg: 'bg-[#2a245c]' },
        { id: 3, title: 'Product Designing', icon: <GiBoxUnpacking className="text-4xl" />, bg: 'bg-cyan-600' },
        { id: 4, title: 'Front-End Development', icon: <FaLaptopCode className="text-4xl" />, bg: 'bg-[#2a245c]' },
        { id: 5, title: 'Usability Testing', icon: <GrDocumentVerified className="text-4xl" />, bg: 'bg-slate-700' },
        { id: 6, title: 'Back-End Development', icon: <FaCode className="text-4xl" />, bg: 'bg-pink-500' },
        { id: 7, title: 'SEO Optimization', icon: <FaMagnifyingGlassChart className="text-4xl" />, bg: 'bg-blue-600' },
        { id: 8, title: 'Digital Marketing', icon: <HiOutlineSpeakerphone className="text-4xl" />, bg: 'bg-cyan-600' },
    ];

    const topSteps = steps.slice(0, 4);
    const bottomSteps = steps.slice(4);

    return (
        <section className="bg-slate-100 py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-[#110e2e] rounded-[2.5rem] px-8 md:px-12 pt-14 md:pt-20 pb-28 md:pb-32 overflow-hidden min-h-[560px] md:min-h-[620px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-10 lg:gap-6 items-center">
                        <div className="max-w-lg relative">
                            <div className="inline-block bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                                What We Do
                            </div>
                            <img
                                src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771503561/curved_arrow_uaxfe6.png"
                                alt="Curved arrow"
                                className="absolute -top-16 left-88 w-20 h-auto animate-left-right"
                            />
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Working Roadmap
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                In today&apos;s competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-6">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                                    Get Started
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border border-[#110e2e] bg-slate-400 overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-br from-slate-300 to-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">4 M+</p>
                                        <p className="text-[10px] text-slate-400">5000+ Client reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
                                {topSteps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className={`flex flex-col items-center text-center ${
                                            index === 0
                                                ? "md:translate-y-4"
                                                : index === 1
                                                    ? "md:-translate-y-4"
                                                    : index === 2
                                                        ? "md:translate-y-2"
                                                        : "md:-translate-y-2"
                                            }`}
                                    >
                                        <div className={`w-32 h-32 md:w-36 md:h-36 ${step.bg} rounded-full flex flex-col items-center justify-center gap-2 text-white shadow-lg border-4 border-[#110e2e] relative px-3`}>
                                            {step.icon}
                                            <span className="text-xs font-semibold leading-snug">{step.title}</span>
                                            <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center border-2 border-[#110e2e]">
                                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center mt-8 md:mt-10">
                                {bottomSteps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className={`flex flex-col items-center text-center ${
                                            index === 0
                                                ? "md:-translate-y-3"
                                                : index === 1
                                                    ? "md:translate-y-4"
                                                    : index === 2
                                                        ? "md:-translate-y-1"
                                                        : "md:translate-y-3"
                                            }`}
                                    >
                                        <div className={`w-32 h-32 md:w-36 md:h-36 ${step.bg} rounded-full flex flex-col items-center justify-center gap-2 text-white shadow-lg border-4 border-[#110e2e] relative px-3`}>
                                            {step.icon}
                                            <span className="text-xs font-semibold leading-snug">{step.title}</span>
                                            <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center border-2 border-[#110e2e]">
                                                {index + 5 < 10 ? `0${index + 5}` : index + 5}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <img
                        src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771500011/line_image_trmcav.png"
                        alt="Roadmap timeline"
                        className="absolute bottom-6 left-0 w-full opacity-90 pointer-events-none"
                    />
                </div>
            </div>

            <div className="bg-white py-20 mt-20 rounded-t-[3rem] text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">
                    We Makes Globally <span className="font-extrabold">Growth & Increase</span> Revenue
                </h2>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    <RevealOnScroll variant="fade" delay={100} className="bg-blue-600 text-white rounded-full px-10 py-8 flex flex-col items-center justify-center shadow-lg min-h-[160px] md:col-span-4">
                        <p className="text-4xl font-bold mb-2">27 K</p>
                        <p className="text-xs opacity-90 leading-tight max-w-[200px]">
                            Average revenue growth for per successful clients
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll variant="fade" delay={220} className="bg-blue-600 text-white rounded-full px-10 py-8 flex items-center justify-center shadow-lg min-h-[160px] md:col-span-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl text-green-400">^</span>
                                <span className="text-4xl font-bold">88%</span>
                            </div>
                            <p className="text-xs text-left max-w-[180px] opacity-90 leading-tight">
                                Average revenue growth for per successful clients
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="fade" delay={340} className="bg-white border border-slate-100 rounded-full px-10 py-8 flex items-center justify-center shadow-sm min-h-[160px] md:col-span-4">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 text-3xl font-bold">3x</span>
                            <span className="text-slate-500 text-xs text-left">Faster time to launch</span>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mt-6">
                    <RevealOnScroll variant="fade" delay={460} className="bg-white border border-slate-100 rounded-full px-10 py-8 flex items-center justify-center shadow-sm min-h-[160px] md:col-span-5">
                        <div className="flex items-center gap-4">
                            <span className="text-blue-600 text-3xl font-bold">50%</span>
                            <p className="text-xs text-left text-slate-500 max-w-[180px]">
                                Effective in financial growth than before growth
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="fade" delay={580} className="bg-blue-600 text-white rounded-full px-10 py-8 flex flex-col items-center justify-center shadow-lg min-h-[160px] md:col-span-2">
                        <span className="text-4xl font-bold">95%</span>
                        <span className="text-xs opacity-90 mt-1">Average positive review</span>
                    </RevealOnScroll>

                    <RevealOnScroll variant="fade" delay={700} className="bg-white border border-slate-100 rounded-full px-10 py-8 flex items-center justify-center shadow-sm min-h-[160px] md:col-span-5">
                        <div className="flex items-center gap-4">
                            <span className="text-blue-600 text-3xl font-bold">5m</span>
                            <p className="text-xs text-left text-slate-500 max-w-[180px]">
                                Average revenue growth for per successful clients
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
