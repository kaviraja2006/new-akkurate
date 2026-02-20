import Image from "next/image";

export default function InsightsImageSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.25fr]">
        <Image
          src="https://res.cloudinary.com/ddnxhn442/image/upload/v1771582012/Screenshot_2026-02-20_153630_zxwrrj.png"
          alt="Team at work"
          width={950}
          height={1280}
          className="mx-auto h-auto w-full max-w-[480px] object-cover"
        />

        <div>
          <div className="mb-3 inline-block rounded-full bg-[#1f58d6] px-5 py-1.5 text-xs font-semibold text-white">
            Why Choose Us
          </div>

          <h2 className="mb-4 max-w-[760px] text-3xl leading-[1.1] text-slate-950 lg:text-[44px]">
            <span className="font-bold">SassTech</span> makes you a better
            <br />
            elevating your team&apos;s wellness
            <br />
            optimizing Business <span className="font-bold">Growth.</span>
          </h2>

          <p className="mb-7 max-w-[640px] text-sm leading-relaxed text-slate-600 lg:text-base">
            In today&apos;s competitive business, the demand for efficient and cost-effective IT solutions has never been
            more critical.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[#ebedf0] px-7 py-8">
              <h3 className="mb-2 text-xl font-bold text-slate-900 lg:text-2xl">Expertise & Specialization</h3>
              <p className="text-sm leading-relaxed text-slate-600 lg:text-base">
                In today&apos;s competitive business demand cost-effective IT solutions has never
              </p>
            </div>
            <div className="rounded-xl bg-[#ebedf0] px-7 py-8">
              <h3 className="mb-2 text-xl font-bold text-slate-900 lg:text-2xl">Expertise & Specialization</h3>
              <p className="text-sm leading-relaxed text-slate-600 lg:text-base">
                In today&apos;s competitive business demand cost-effective IT solutions has never
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <span className="text-5xl font-bold leading-none text-[#1f58d6] lg:text-6xl">1.3m</span>
            <p className="max-w-[360px] text-sm leading-relaxed text-[#1c2451] lg:text-base">
              Average revenue growth for per successful clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
