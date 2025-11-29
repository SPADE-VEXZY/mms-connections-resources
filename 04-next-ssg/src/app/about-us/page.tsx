import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-sky-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">About MMS Connections</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a team of passionate technologists dedicated to building software that makes a difference.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                To empower businesses with innovative, reliable, and scalable software solutions that drive growth and efficiency. We strive to be the bridge between complex technology and user-friendly experiences.
                            </p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-gray-600">
                                To be the leading software development partner in the region, known for our technical excellence, customer-centric approach, and commitment to quality.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                            {/* Placeholder for an image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                <span className="text-lg">Office / Team Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The talented individuals behind our success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Hein Htet Zan", role: "CEO & Founder" },
                            { name: "Sarah Johnson", role: "CTO" },
                            { name: "Michael Chen", role: "Lead Developer" },
                            { name: "Emily Davis", role: "Product Designer" },
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                                    <span>{member.name} Photo</span>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-sky-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
