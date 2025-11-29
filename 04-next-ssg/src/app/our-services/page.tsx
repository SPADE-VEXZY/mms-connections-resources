import Link from "next/link";

export default function OurServices() {
    const services = [
        {
            title: "Custom Software Development",
            description: "Tailored software solutions designed to meet your specific business needs and challenges.",
            features: ["Requirement Analysis", "Architecture Design", "Full-Stack Development", "QA & Testing"],
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android devices.",
            features: ["iOS & Android", "React Native / Flutter", "UI/UX Design", "App Store Deployment"],
        },
        {
            title: "Web Application Development",
            description: "Responsive, high-performance web applications using the latest technologies.",
            features: ["Next.js / React", "E-commerce Solutions", "CMS Development", "PWA"],
        },
        {
            title: "Cloud Solutions & DevOps",
            description: "Scalable cloud infrastructure and automated deployment pipelines.",
            features: ["AWS / Azure / GCP", "CI/CD Pipelines", "Docker & Kubernetes", "Cloud Migration"],
        },
        {
            title: "UI/UX Design",
            description: "User-centered design that ensures an intuitive and engaging experience.",
            features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
        },
        {
            title: "IT Consulting",
            description: "Strategic advice to help you leverage technology for business growth.",
            features: ["Digital Transformation", "Tech Stack Selection", "Security Audits", "Process Optimization"],
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-sky-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-sky-100 max-w-3xl mx-auto">
                        Comprehensive technology solutions to drive your business forward.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-sky-200 group">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-500 text-sm">
                                            <svg className="w-4 h-4 text-sky-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact-us" className="text-sky-600 font-semibold hover:text-sky-800 flex items-center">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We understand that every business is unique. Contact us to discuss your specific requirements.
                    </p>
                    <Link
                        href="/contact-us"
                        className="bg-sky-600 text-white hover:bg-sky-700 font-bold py-3 px-8 rounded-full transition-colors inline-block"
                    >
                        Get a Quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
