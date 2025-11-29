import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 to-sky-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Connecting Your Business to the <span className="text-sky-300">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-10 max-w-2xl mx-auto">
              MMS Connections provides cutting-edge software solutions to transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-services"
                className="bg-white text-sky-700 hover:bg-sky-50 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="/contact-us"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MMS Connections?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, reliability, and customer-centric solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Technology",
                description: "We use the latest tech stack to build scalable and robust applications.",
                icon: (
                  <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Expert Team",
                description: "Our team of experienced developers and designers are dedicated to your success.",
                icon: (
                  <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "24/7 Support",
                description: "We provide round-the-clock support to ensure your business never stops.",
                icon: (
                  <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-6 bg-sky-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-600 rounded-2xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your goals with our custom software solutions.
              </p>
              <Link
                href="/contact-us"
                className="bg-white text-sky-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
