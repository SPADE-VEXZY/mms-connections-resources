import Link from "next/link";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";

interface ProductDetailProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/products" className="text-sky-600 hover:text-sky-800 flex items-center font-medium">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Products
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center text-gray-400">
                        <span className="text-2xl">{product.name} Showcase</span>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-sm font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wide mr-4">
                                {product.category}
                            </span>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {product.fullDescription}
                        </p>

                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact-us"
                                className="bg-sky-600 text-white hover:bg-sky-700 font-bold py-4 px-8 rounded-xl text-center transition-colors shadow-lg hover:shadow-xl"
                            >
                                Request Demo
                            </Link>
                            <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-sky-600 hover:text-sky-600 font-bold py-4 px-8 rounded-xl transition-colors">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
