import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-sky-500 mb-4 block">
                            MMS Connections
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            Empowering businesses with innovative software solutions. We connect technology with your vision to drive growth and success.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-us" className="text-gray-400 hover:text-sky-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-services" className="text-gray-400 hover:text-sky-500 transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-400 hover:text-sky-500 transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-400 hover:text-sky-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Tech Avenue</li>
                            <li>Yangon, Myanmar</li>
                            <li>info@mmsconnections.com</li>
                            <li>+95 9 123 456 789</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} MMS Connections. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
