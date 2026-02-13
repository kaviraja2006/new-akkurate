import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function PlatformSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            {/* Background Curve could be added here similar to design */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content */}
                <div className="lg:col-span-4 space-y-8">
                    <div>
                        <RevealOnScroll>
                            <div className="inline-block text-blue-600 text-xs font-bold mb-2">
                                Tech Solution
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={100}>
                            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
                                The Complete Platform To Power Your Operations
                            </h2>
                        </RevealOnScroll>
                        <RevealOnScroll delay={200}>
                            <p className="text-slate-500 text-sm">
                                In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                            </p>
                        </RevealOnScroll>
                    </div>

                    <div className="space-y-6">
                        {/* Item 1 */}
                        <RevealOnScroll delay={300} className="group cursor-pointer">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Tailored solution</h3>
                        </RevealOnScroll>

                        {/* Item 2 - Active State */}
                        <RevealOnScroll delay={400} className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-600 relative">
                            <h3 className="text-lg font-bold text-blue-600 mb-2">Cutting-edge technology</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                We customize our technology to fit your specific need ensuring the best possible outcomes.
                            </p>
                        </RevealOnScroll>

                        {/* Item 3 */}
                        <RevealOnScroll delay={500} className="group cursor-pointer">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Discovery & Analysis</h3>
                        </RevealOnScroll>

                        {/* Item 4 */}
                        <RevealOnScroll delay={600} className="group cursor-pointer">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Deployment & Support</h3>
                        </RevealOnScroll>

                    </div>
                </div>

                {/* Right Image/Showcase */}
                <div className="lg:col-span-8 relative">
                    <RevealOnScroll variant="scale" delay={200}>
                        {/* Main Image Container */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for the meeting image */}
                            <div className="aspect-video bg-slate-200 w-full relative">
                                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-400">
                                    Meeting Image Placeholder
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Floating Cards */}
                    {/* Top Right - Chart */}
                    <RevealOnScroll variant="scale" delay={400} className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce-slow">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="text-[10px] text-slate-500">$1,000</div>
                        </div>
                        {/* Mini Pie Chart */}
                        <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-blue-500 border-r-blue-500 transform rotate-45"></div>
                    </RevealOnScroll>

                    {/* Bottom Left - Stats */}
                    <RevealOnScroll variant="scale" delay={600} className="absolute -bottom-10 left-10 bg-white p-5 rounded-xl shadow-xl z-20 w-48">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded flex items-center justify-center text-xs">📦</div>
                            <div>
                                <p className="text-[10px] font-bold">Total testing</p>
                                <p className="text-[8px] text-slate-400">12 products</p>
                            </div>
                        </div>
                        <div className="flex items-end gap-1 h-8">
                            {[40, 60, 30, 80, 50, 90, 40].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-600 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>

            </div>

            {/* CTA Button floating at top right of section in design? Or maybe just part of layout. 
                In design, "Sign up Now" is separate. Putting it here for consistency if needed. 
            */}
            <div className="absolute top-24 right-10 hidden lg:block">
                <RevealOnScroll delay={800}>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Sign Up Now
                    </button>
                </RevealOnScroll>
            </div>
        </section>
    );
}
