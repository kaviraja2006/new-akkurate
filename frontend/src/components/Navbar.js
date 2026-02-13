import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform -skew-x-12">
            <span className="text-white font-bold text-lg skew-x-12">SS</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Sasstech</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-4">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
              <div className="flex flex-col">
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">IT Solution</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Web Hosting</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Task Management</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">CRM Software</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">App Landing</Link>
              </div>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-4">
              Pages
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
              <div className="flex flex-col">
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Pricing</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">About Us</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">App Integration</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Integration Details</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Privacy Policy</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">FAQ</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Project Details</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Service Details</Link>
              </div>
            </div>
          </div>

          {/* Shop Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-4">
              Shop
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
              <div className="flex flex-col">
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Shop</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Shop Details</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Cart</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Checkout</Link>
              </div>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-4">
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
              <div className="flex flex-col">
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Blog</Link>
                <Link href="#" className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Blog Details</Link>
              </div>
            </div>
          </div>
          <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
          Sign Up Now
        </button>
      </div>
    </nav>
  );
}
