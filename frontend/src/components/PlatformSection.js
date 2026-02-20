import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function PlatformSection() {
    return (
        <section
            className="relative overflow-hidden bg-[#f2f4f8] py-14 lg:py-16"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/ddnxhn442/image/upload/v1771516548/work_showcase_background_etdhdd.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-1/4 h-[460px] w-[460px] rounded-full bg-white/40 blur-3xl" />
                <div className="absolute -right-24 -top-20 h-[560px] w-[560px] rounded-full border border-white/40" />
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-white/25 to-transparent" />
            </div>

            <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12">
                <div className="space-y-7 lg:col-span-5">
                    <div>
                        <RevealOnScroll>
                            <span className="mb-3 inline-flex rounded-full bg-white px-6 py-1.5 text-[11px] font-semibold leading-none text-blue-700 shadow-sm">
                                Tech Solution
                            </span>
                        </RevealOnScroll>
                        <RevealOnScroll delay={100}>
                            <h2 className="mb-4 text-[30px] font-semibold leading-tight tracking-[-0.015em] text-slate-950 sm:text-4xl lg:text-[46px]">
                                The Complete <span className="font-normal">Platform To</span>
                                <br />
                                Power Your Operations
                            </h2>
                        </RevealOnScroll>
                        <RevealOnScroll delay={200}>
                            <p className="max-w-[620px] text-xs leading-relaxed text-slate-600 lg:text-sm">
                                In today&apos;s competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                            </p>
                        </RevealOnScroll>
                    </div>

                    <div className="space-y-5 pt-1">
                        <div className="group cursor-pointer">
                            <RevealOnScroll delay={300}>
                            <h3 className="text-xl font-semibold leading-[1.2] text-slate-800 transition-colors group-hover:text-blue-700 lg:text-[34px]">
                                Tailored solution
                            </h3>
                            </RevealOnScroll>
                        </div>

                        <div className="group cursor-pointer rounded-2xl border-l-[4px] border-blue-600 bg-white px-8 py-6 shadow-[0_18px_35px_rgba(15,23,42,0.06)]">
                            <RevealOnScroll delay={400}>
                                <h3 className="mb-2 text-xl font-bold leading-[1.2] text-[#0f336a] lg:text-[32px]">Cutting-edge technology</h3>
                            </RevealOnScroll>
                            <RevealOnScroll delay={480}>
                                <p className="max-w-[610px] text-xs leading-relaxed text-slate-600 lg:text-sm">
                                    We customize our technology to fit your specific need ensuring the best possible outcomes.
                                </p>
                            </RevealOnScroll>
                        </div>

                        <div className="group cursor-pointer">
                            <RevealOnScroll delay={500}>
                                <h3 className="text-xl font-semibold leading-[1.2] text-slate-800 transition-colors group-hover:text-blue-700 lg:text-[34px]">
                                    Discovery & Analysis
                                </h3>
                            </RevealOnScroll>
                        </div>

                        <div className="group cursor-pointer">
                            <RevealOnScroll delay={600}>
                                <h3 className="text-xl font-semibold leading-[1.2] text-slate-800 transition-colors group-hover:text-blue-700 lg:text-[34px]">
                                    Deployment & Support
                                </h3>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                <div className="relative lg:col-span-7 lg:pt-14">
                    <div className="absolute -top-7 right-10 z-30 hidden lg:block">
                        <button className="rounded-full bg-[#1f58d6] px-10 py-2.5 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(31,88,214,0.25)] transition-colors hover:bg-[#194cc0]">
                            Sign up Now
                        </button>
                    </div>

                    <div className="relative z-10 overflow-hidden rounded-[30px] border-[10px] border-white/90 shadow-[0_25px_60px_rgba(15,23,42,0.18)]">
                        <Image
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771514584/company_bn1gri.png"
                            alt="Tech solution meeting"
                            width={1120}
                            height={760}
                            className="aspect-[16/10] h-auto w-full object-cover"
                        />
                    </div>

                    <div className="absolute -right-6 top-[10%] z-20 hidden items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-[0_16px_35px_rgba(15,23,42,0.15)] sm:flex">
                        <div>
                            <p className="text-[9px] text-slate-400">Your balance</p>
                            <p className="text-xl font-semibold leading-none text-slate-900">$1,000</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_35%,#fff_8%,#ef4444_9%,#ef4444_17%,#fff_18%,#fff_28%,#3b82f6_29%,#3b82f6_37%,#fff_38%,#fff_100%)] ring-1 ring-slate-200" />
                    </div>

                    <div className="absolute -bottom-5 -left-7 z-20 hidden w-[240px] rounded-xl bg-white p-4 shadow-[0_18px_38px_rgba(15,23,42,0.17)] md:block">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                                <span className="text-[9px] font-semibold">UI</span>
                            </div>
                            <div>
                                <p className="text-[11px] font-semibold text-slate-900">Usability testing</p>
                                <p className="text-[9px] text-slate-500">12 products</p>
                            </div>
                        </div>
                        <div className="mb-2 flex items-center justify-between text-[9px] text-slate-500">
                            <span>Rate 4.9</span>
                            <span>Type UI/UX design</span>
                        </div>
                        <div className="flex h-10 items-end gap-1.5">
                            {[46, 62, 75, 44, 58, 34, 19, 61, 31].map((h, i) => (
                                <div key={i} className="h-full flex-1 rounded-t bg-indigo-600/95" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>

                    <div className="absolute -bottom-4 right-0 z-20 hidden w-40 rounded-xl bg-white p-3 shadow-[0_16px_35px_rgba(15,23,42,0.14)] md:block">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-[9px] text-slate-600">Your Pie Chart</p>
                            <p className="text-[8px] text-slate-400">Monthly</p>
                        </div>
                        <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-[conic-gradient(#2563eb_0_68%,#dbeafe_68%_100%)]" />
                        <div className="flex justify-between text-[8px] text-slate-400">
                            <span>Business 63%</span>
                            <span>System 25%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
