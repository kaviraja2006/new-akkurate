import Link from 'next/link';

export default function BlogSection() {
    const posts = [
        {
            id: 1,
            title: "15 Best AI Apps for Android to Make Life Easier",
            date: "02 Apr 2024",
            comments: 3,
            imgColor: "bg-purple-200",
            image:
                "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1400",
            imageAlt: "Person holding a smartphone with app interface",
            link: "#"
        },
        {
            id: 2,
            title: "15 Best man-made intelligence Applications for...",
            date: "02 Apr 2024",
            comments: 3,
            imgColor: "bg-yellow-100",
            image:
                "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1400",
            imageAlt: "Laptop on a desk workspace",
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                        Insights to help you do what you <br />
                        do better, faster and more profitably.
                    </h2>
                    <div className="hidden md:inline-block">
                        <Link href="#" className="bg-[#110e2e] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
                            Sign Up Now
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <div key={post.id} className="group">
                            <div className={`rounded-3xl overflow-hidden aspect-[16/9] mb-6 relative ${post.imgColor}`}>
                                <img
                                    src={post.image}
                                    alt={post.imageAlt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                                <span className="bg-slate-100 px-3 py-1 rounded-full">{post.date}</span>
                                <span>Comments ({post.comments < 10 ? `0${post.comments}` : post.comments})</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                                {post.title}
                            </h3>

                            <Link href={post.link} className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                                Learn More <span>-&gt;</span>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
