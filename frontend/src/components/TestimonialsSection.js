export default function TestimonialsSection() {
    return (
        <section
            className="py-24 bg-slate-50 relative overflow-hidden"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/ddnxhn442/image/upload/v1771516548/work_showcase_background_etdhdd.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <div className="inline-block bg-white text-slate-700 px-6 py-2 rounded-full text-xs font-semibold mb-4 shadow-sm">
                        Work Showcase
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        What Our Client Say About Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-lg text-center h-full flex flex-col items-center justify-between lg:col-span-3">
                        <div className="w-full max-w-[250px] mx-auto rounded-2xl overflow-hidden mb-8 bg-slate-100">
                            <img
                                src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771518201/image_1_owjbyl.png"
                                alt="Webcly Jhonson"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="pb-2">
                            <h3 className="font-bold text-slate-900 text-lg">Webcly jhonson</h3>
                            <p className="text-sm text-slate-500 mt-1">Tung Phan - Ceo and Founder</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl text-left h-full flex flex-col justify-between lg:col-span-6">
                        <div>
                            <div className="flex items-center gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span
                                        key={i}
                                        className="w-5 h-5 bg-emerald-500 text-white rounded-sm flex items-center justify-center text-[10px]"
                                    >
                                        {"\u2605"}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed mb-8">
                                &quot;SassTech hires great people from a widely variety of backgrounds, which simply makes our company stronger, and we couldn&apos;t be prouder of that. elevating your optimizing Business Growth.&quot;
                            </p>
                            <div className="border-t border-slate-200" />
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-14 h-14 rounded-full border-2 border-purple-500 p-0.5 shrink-0">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771518201/image_1_owjbyl.png"
                                        alt="James anderson"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-base">James anderson</h3>
                                <p className="text-sm text-slate-500">
                                    <span className="text-blue-600 font-semibold">CEO</span> and Founder
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 shadow-lg text-center h-full flex flex-col items-center justify-between lg:col-span-3">
                        <div className="w-full max-w-[250px] mx-auto rounded-2xl overflow-hidden mb-8 bg-slate-100">
                            <img
                                src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771518726/image_2_sn8umd.png"
                                alt="John Doe"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="pb-2">
                            <h3 className="font-bold text-slate-900 text-lg">John Doe</h3>
                            <p className="text-sm text-slate-500 mt-1">Developer - Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
