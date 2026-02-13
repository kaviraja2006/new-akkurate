import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="bg-slate-50 pt-10 pb-20 relative overflow-hidden">
            {/* Background Gradients/Glows could be added here */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10">
                    {/* Top badges could go here if needed, keeping it clean for now as per image */}

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                        Transform <span className="text-slate-900">Your</span> <br />
                        Business Through <br />
                        Strategic <br />
                        IT Solutions
                    </h1>

                    <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                        In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                    </p>

                    <div className="flex items-center gap-8">
                        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-200">
                            Get Started
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                        {/* Placeholder for user avatars */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400"></div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">3 M+</p>
                                <p className="text-xs text-slate-500">2000+ Client reviews</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image/Graphic */}
                <div className="relative z-10 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md">
                        {/* Main Image Container */}
                        {/* Main Image Container */}
                        <div className="relative z-10 aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in">
                            <img
                                src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771015434/juliusbusch-man-6554120_fp1oeh.jpg"
                                alt="Strategic IT Solutions"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>

                        {/* Floating Elements mimicking the design */}

                        {/* Trustpilot Badge */}
                        <div className="absolute top-10 -right-6 md:-right-12 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce-slow">
                            <div className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">4.9 ★</div>
                            <div>
                                <p className="text-xs font-bold text-slate-900">Trust pilot</p>
                            </div>
                            <div className="text-blue-500">✔</div>
                        </div>

                        {/* Revenue Card */}
                        <div className="absolute bottom-8 -left-6 md:-left-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl z-20 border border-white/50 w-72 flex items-center justify-between gap-4">
                            {/* Left Side: Stats */}
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase mb-1">Revenue</p>
                                    <p className="text-3xl font-bold text-slate-900 tracking-tight">$4820.00</p>
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-medium mt-6">
                                    <span className="text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5 cursor-pointer">Daily</span>
                                    <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Weekly</span>
                                    <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Monthly</span>
                                </div>
                            </div>

                            {/* Right Side: Circular Graph Spec */}
                            <div className="relative w-24 h-24 flex-shrink-0">
                                {/* Soft Purple Circle Background */}
                                <div className="absolute inset-0 rounded-full bg-purple-50"></div>

                                {/* Inner chart simulation using SVG */}
                                <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100">
                                    {/* Grid/Axes optional, keeping clean as per image */}

                                    {/* Wave Line 1 (Lighter/Background) */}
                                    <path d="M10,70 Q30,60 50,70 T90,65" fill="none" stroke="#f0abfc" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

                                    {/* Wave Line 2 (Main) */}
                                    <path d="M10,60 Q30,40 50,55 T90,45" fill="none" stroke="#d946ef" strokeWidth="3" strokeLinecap="round" />

                                    {/* Active Point */}
                                    <circle cx="50" cy="55" r="4" fill="#9333ea" stroke="white" strokeWidth="2" />

                                    {/* Floating Tag */}
                                    <rect x="40" y="25" width="20" height="12" rx="4" fill="white" opacity="0.8" />
                                    <text x="50" y="33" fontSize="6" fontWeight="bold" fill="#7e22ce" textAnchor="middle">98%</text>
                                </svg>
                            </div>
                        </div>

                        {/* Strikes Decoration Image */}
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1770982880/strikes_pgro47.png"
                            alt="Decoration"
                            className="absolute bottom-36 -left-10 md:-left-28 z-10 w-20 h-auto pointer-events-none animate-move-diagonal rotate-330"
                        />

                        {/* Blue Badge */}
                        <div className="absolute -bottom-6 -right-4 bg-blue-600 text-white p-6 rounded-3xl rounded-tl-none shadow-blue-500/30 shadow-xl z-20">
                            <p className="text-3xl font-bold">$8 +</p>
                            <p className="text-xs opacity-80 mt-1">Years Experience</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 transform origin-top-right -z-0 pointer-events-none"></div>
        </div>
    );
}
