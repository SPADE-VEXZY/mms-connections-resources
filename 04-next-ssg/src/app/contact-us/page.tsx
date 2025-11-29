"use client";

import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-sky-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-sky-100 max-w-3xl mx-auto">
                        Have a question or want to work together? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                            <p className="text-gray-600 mb-10 text-lg">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-sky-100 p-3 rounded-lg mr-4 text-sky-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Our Office</h3>
                                        <p className="text-gray-600">123 Tech Avenue, Innovation District</p>
                                        <p className="text-gray-600">Yangon, Myanmar</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-sky-100 p-3 rounded-lg mr-4 text-sky-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                        <p className="text-gray-600">info@mmsconnections.com</p>
                                        <p className="text-gray-600">support@mmsconnections.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-sky-100 p-3 rounded-lg mr-4 text-sky-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600">+95 9 123 456 789</p>
                                        <p className="text-gray-600">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                                <span>Google Map Embed</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                            {isSubmitted ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                                    <p className="font-bold">Thank you!</p>
                                    <p>Your message has been sent successfully. We'll be in touch soon.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-4 text-sm font-semibold underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Project Proposal">Project Proposal</option>
                                            <option value="Support">Support</option>
                                            <option value="Careers">Careers</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-[1.02] shadow-md ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-sky-700"
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
