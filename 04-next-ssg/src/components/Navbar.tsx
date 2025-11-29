import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-sky-600">
              MMS Connections
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-sky-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/our-services" className="text-gray-700 hover:text-sky-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Our Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-sky-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Products
            </Link>
            <Link href="/contact-us" className="bg-sky-600 text-white hover:bg-sky-700 transition-colors px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
}
