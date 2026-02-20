import Image from 'next/image';

export default function CallToActionSection() {
    return (
        <section className="relative overflow-hidden bg-[#e5e9f2] py-10 lg:py-12">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-28 top-1/2 h-40 w-[48%] -translate-y-1/2 -rotate-[16deg] bg-gradient-to-r from-[#8fb0ff]/45 to-white/0" />
                <div className="absolute right-[-12%] top-[18%] h-44 w-[72%] -rotate-[15deg] bg-gradient-to-r from-white/0 via-[#f5c8d2]/55 to-[#f3c0cc]/75" />
                <div className="absolute right-[20%] top-[16%] h-[420px] w-[620px] -rotate-[17deg] border border-white/35" />
            </div>

            <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-end gap-8 px-6 lg:grid-cols-12">
                <div className="relative lg:col-span-5">
                    <div className="relative mx-auto h-[520px] w-full max-w-[560px] lg:h-[580px] lg:max-w-[640px]">
                        <Image
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771569701/flipped_one_oqhmgf.png"
                            alt="Expert consultant"
                            width={760}
                            height={980}
                            className="absolute bottom-0 left-1/2 h-auto w-[124%] -translate-x-1/2 object-contain"
                            sizes="(max-width: 1024px) 95vw, 700px"
                        />

                        <div className="pointer-events-none absolute left-[72%] top-[39%] z-20 w-[110px] sm:w-[130px] lg:w-[150px]">
                            <Image
                                src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771503561/curved_arrow_uaxfe6.png"
                                alt="Curved decorative arrow"
                                width={420}
                                height={220}
                                className="h-auto w-full animate-front-back-medium"
                                sizes="(max-width: 1024px) 130px, 150px"
                            />
                        </div>
                    </div>
                </div>

                <div className="pb-8 lg:col-span-7 lg:pb-20 lg:pl-8">
                    <div className="mb-4 inline-block rounded-full bg-[#1f58d6] px-6 py-1.5 text-xs font-semibold text-white">
                        Have A Projects?
                    </div>
                    <h2 className="mb-4 text-3xl font-semibold leading-[1.1] text-black sm:text-4xl lg:text-[46px]">
                        Have <span className="font-bold">A Project? Speak</span>
                        <br />
                        <span className="font-bold">With Our</span> expert.
                    </h2>
                    <p className="mb-7 max-w-[700px] text-base text-slate-600">
                        Leave your contacts and get a free consultation from
                    </p>

                    <button className="w-full max-w-[560px] rounded-sm bg-[#17104d] px-8 py-3.5 text-2xl font-medium text-white">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    );
}
