import Link from 'next/link';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section - Stats & App Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-16 mb-16 gap-10">
                    <RevealOnScroll variant="scale">
                        <div className="flex gap-16">
                            <div>
                                <p className="text-4xl font-bold mb-2 flex items-center gap-2">
                                    <span className="text-blue-500">↑</span> 88%
                                </p>
                                <p className="text-xs text-slate-400">Average revenue growth <br /> for per successful clients</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold mb-2">1.3m</p>
                                <p className="text-xs text-slate-400">Average revenue growth <br /> for per successful clients</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* App Features Checklist */}
                    <RevealOnScroll variant="scale" delay={200}>
                        <div className="flex gap-8 text-xs font-bold text-white">
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">✓</span>
                                Various analysis options.
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">✓</span>
                                Page Load (time, size, number of requests).
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* App Store Buttons */}
                    <RevealOnScroll variant="scale" delay={400}>
                        <div className="flex gap-4">
                            <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                                {/* Apple Icon */}
                                <span className="text-xl"></span>
                                <div className="text-left">
                                    <p className="text-[8px] uppercase">Download on the</p>
                                    <p className="text-xs font-bold">App Store</p>
                                </div>
                            </div>
                            <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                                {/* Play Store Icon */}
                                <span className="text-xl">▶</span>
                                <div className="text-left">
                                    <p className="text-[8px] uppercase">Get it on</p>
                                    <p className="text-xs font-bold">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Mockup phone floating out of container - pure CSS simulation */}
                    {/* In real implementatin, use absolute positioning relative to a wrapper to have it sticking out */}
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-8">
                    {/* Column 1: Brand & Subscribe */}
                    <RevealOnScroll variant="scale" delay={500} className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769847944/akkurate_g55qvc.png" alt="Akkurate Logo" className="h-8 w-auto bg-white rounded-md p-0.5" />
                            <span className="text-lg font-bold">Akkurate</span>
                        </div>

                        <div className="flex gap-2">
                            <input type="email" placeholder="Email Address" className="bg-[#1a1a1a] text-white text-sm px-4 py-3 rounded w-full border border-slate-800 focus:outline-none focus:border-blue-600" />
                            <button className="bg-blue-600 px-6 py-3 rounded text-sm font-bold whitespace-nowrap">Sign Up &gt;</button>
                        </div>

                        <p className="text-[10px] text-slate-500">
                            By subscribing, you're accept <a href="#" className="underline text-slate-300">Privacy Policy</a>
                        </p>
                    </RevealOnScroll>

                    {/* Column 2: Links */}
                    <RevealOnScroll variant="scale" delay={600}>
                        <h4 className="font-bold mb-6">My account</h4>
                        <ul className="space-y-4 text-xs text-slate-400">
                            <li><Link href="#" className="hover:text-white">Forum Support</Link></li>
                            <li><Link href="#" className="hover:text-white">Help & FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Pricing and plans</Link></li>
                            <li><Link href="#" className="hover:text-white">Cookies Policy</Link></li>
                        </ul>
                    </RevealOnScroll>

                    {/* Column 3: Service */}
                    <RevealOnScroll variant="scale" delay={700}>
                        <h4 className="font-bold mb-6">Service</h4>
                        <ul className="space-y-4 text-xs text-slate-400">
                            <li><Link href="#" className="hover:text-white">IT Consultation</Link></li>
                            <li><Link href="#" className="hover:text-white">Cloud Services</Link></li>
                            <li><Link href="#" className="hover:text-white">AI Machine Learning</Link></li>
                            <li><Link href="#" className="hover:text-white">Data Security</Link></li>
                            <li><Link href="#" className="hover:text-white">Software Development</Link></li>
                            <li><Link href="#" className="hover:text-white">Cyber Security</Link></li>
                        </ul>
                    </RevealOnScroll>

                    {/* Column 4: Contact */}
                    <RevealOnScroll variant="scale" delay={800}>
                        <h4 className="font-bold mb-6">Locations</h4>
                        <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                            55 Main Street, 2nd block Melborne,<br /> Australia
                        </p>

                        <h4 className="font-bold mb-4">Contact</h4>
                        <p className="text-xs text-slate-400 mb-2">support@gmail.com</p>
                        <p className="text-lg font-bold mb-2">+000 (123) 456 88</p>
                    </RevealOnScroll>
                </div>

                {/* Bottom Bar */}
                <RevealOnScroll variant="scale" delay={900}>
                    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500">
                        <p>© 2024 <span className="text-blue-500">Akkurate</span> - IT Services. All rights reserved.</p>

                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-white flex items-center gap-1">Facebook</Link>
                            <Link href="#" className="hover:text-white flex items-center gap-1">Twitter</Link>
                            <Link href="#" className="hover:text-white flex items-center gap-1">Instagram</Link>
                            <Link href="#" className="hover:text-white flex items-center gap-1">Pinterest</Link>
                        </div>
                    </div>
                </RevealOnScroll>

            </div>
        </footer>
    );
}
