import RevealOnScroll from "./RevealOnScroll";

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: "Webcly Jhonson",
            role: "Tang Plan - Ceo and Founder",
            bg: "bg-white", // Not strictly focused in design
            img: "man1", // placeholder
            rating: 5,
        },
        {
            id: 2,
            name: "James anderson",
            role: "CEO and Founder",
            bg: "bg-white",
            img: "man2",
            rating: 5,
            quote: "SassTech hires great people from a widely variety of backgrounds, which simply makes our company stronger, and we couldn't be prouder of that, elevating your optimizing Business Growth.",
            featured: true
        },
        {
            id: 3,
            name: "John Doe",
            role: "Developer - Web Developer",
            bg: "bg-white",
            img: "man3",
            rating: 5,
            quote: "An amazing experience working with the team.",
            featured: false
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorative curve */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-100 to-transparent -skew-y-3 origin-top-left -z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <RevealOnScroll variant="scale" threshold={0.2} rootMargin="0px 0px -100px 0px">
                        <div className="inline-block bg-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                            Work Showcase
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll variant="scale" delay={100} threshold={0.2} rootMargin="0px 0px -100px 0px">
                        <h2 className="text-4xl font-bold text-slate-900">
                            What Our Client Say <br />
                            About Us
                        </h2>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Card 1 */}
                    <RevealOnScroll variant="scale" delay={200} threshold={0.2} rootMargin="0px 0px -100px 0px" className="bg-white rounded-3xl p-8 shadow-lg text-center transform transition hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                        <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">W</div>
                        </div>
                        <h3 className="font-bold text-slate-900">Webcly Jhonson</h3>
                        <p className="text-xs text-slate-500">Tang Plan - Ceo and Founder</p>
                    </RevealOnScroll>

                    {/* Card 2 - Main Featured */}
                    <RevealOnScroll variant="scale" delay={400} threshold={0.2} rootMargin="0px 0px -100px 0px" className="bg-white rounded-3xl p-10 shadow-xl text-left md:scale-110 relative z-20 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex text-green-500 text-sm mb-4">★★★★★</div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
                                "{testimonials[1].quote}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5 shrink-0">
                                <div className="w-full h-full bg-slate-300 rounded-full overflow-hidden flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-bold">
                                    JA
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">{testimonials[1].name}</h3>
                                <p className="text-[10px] text-slate-500">{testimonials[1].role}</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Card 3 */}
                    <RevealOnScroll variant="scale" delay={600} threshold={0.2} rootMargin="0px 0px -100px 0px" className="bg-white rounded-3xl p-8 shadow-lg text-center transform transition hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                        <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-red-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">J</div>
                        </div>
                        <h3 className="font-bold text-slate-900">John Doe</h3>
                        <p className="text-xs text-slate-500">Developer - Web Developer</p>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
