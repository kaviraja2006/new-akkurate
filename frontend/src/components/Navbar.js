import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
      <div className="flex h-[72px] items-center justify-between px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769847944/akkurate_g55qvc.png" alt="Akkurate Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold tracking-tight text-slate-900">Akkurate</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
          <Link href="#" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">About</Link>

          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-4">
              Service
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

          <Link href="#" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link>
        </div>

        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-base font-semibold hover:bg-slate-800 transition-colors">
          Sign Up Now
        </button>
      </div>
    </nav>
  );
}
