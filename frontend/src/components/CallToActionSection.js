import RevealOnScroll from './RevealOnScroll';

export default function CallToActionSection() {
    return (
        <section className="py-0 overflow-hidden bg-gradient-to-br from-blue-50 to-white relative">
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 items-end">

                    {/* Left - Person Image */}
                    <div className="relative pt-20">
                        <RevealOnScroll variant="scale" delay={200}>
                            {/* Circle Graphics */}
                            <div className="absolute top-1/2 left-0 w-64 h-64 border-2 border-orange-400 rounded-full rounded-tr-none transform -rotate-45 pointer-events-none"></div>

                            {/* Person Image Placeholder */}
                            <div className="relative z-10 w-full max-w-sm mx-auto h-[400px] bg-slate-200 rounded-t-full overflow-hidden flex items-end justify-center">
                                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                                    Person Image
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right - Text Content */}
                    <div className="pb-20 md:pl-10 text-center md:text-left">
                        <RevealOnScroll variant="scale" delay={400}>
                            <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                                Have A Project?
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                                Have A Project? <br />
                                Speak With Our <br />
                                expert.
                            </h2>
                            <p className="text-slate-500 text-sm mb-8">
                                Leave your contacts and get a free consultation form
                            </p>

                            <button className="bg-[#110e2e] text-white px-10 py-4 rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors w-full md:w-auto">
                                Get Started Today
                            </button>
                        </RevealOnScroll>
                    </div>

                </div>

                {/* Arrow Decoration */}
                <RevealOnScroll variant="scale" delay={600} className="hidden md:block absolute bottom-1/3 left-1/2 -translate-x-1/2 opacity-20">
                    <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
                        <path d="M10,90 Q100,10 190,50" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                            </marker>
                        </defs>
                    </svg>
                </RevealOnScroll>
            </div>
        </section>
    );
}
