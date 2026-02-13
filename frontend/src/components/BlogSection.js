import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

export default function BlogSection() {
    const posts = [
        {
            id: 1,
            title: "15 Best AI Apps for Android to Make Life Easier",
            date: "02 Apr 2024",
            comments: 3,
            imgColor: "bg-purple-200",
            imgPlaceholder: "Phone Mockup",
            link: "#"
        },
        {
            id: 2,
            title: "15 Best man-made intelligence Applications for...",
            date: "02 Apr 2024",
            comments: 3,
            imgColor: "bg-yellow-100", // Yellow for contrast
            imgPlaceholder: "Laptop Mockup",
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center mb-12">
                    <RevealOnScroll variant="scale">
                        <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                            Insights to help you do what you <br />
                            do better, faster and more profitably.
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll variant="scale" delay={200} className="hidden md:inline-block">
                        <Link href="#" className="bg-[#110e2e] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
                            Sign Up Now
                        </Link>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <RevealOnScroll variant="scale" delay={300 + index * 200} key={post.id} className="group">
                            <div className={`rounded-3xl overflow-hidden aspect-[16/9] mb-6 relative ${post.imgColor} flex items-center justify-center`}>
                                {/* Image Placeholder */}
                                <span className="font-bold text-slate-800 opacity-20 text-4xl">{post.imgPlaceholder}</span>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold">Read More</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                                <span className="bg-slate-100 px-3 py-1 rounded-full">{post.date}</span>
                                <span>Comments ({post.comments < 10 ? `0${post.comments}` : post.comments})</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                                {post.title}
                            </h3>

                            <Link href={post.link} className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                                Learn More <span>↗</span>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
}
