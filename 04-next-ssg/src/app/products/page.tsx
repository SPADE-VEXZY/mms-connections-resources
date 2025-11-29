import Link from "next/link";
import { products } from "@/lib/data";

export default function Products() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-sky-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl text-sky-100 max-w-3xl mx-auto">
                        Discover our range of software solutions designed to solve real-world problems.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                    {/* Placeholder for product image */}
                                    <span>{product.name} Image</span>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-1 rounded-full uppercase tracking-wide">
                                            {product.category}
                                        </span>
                                        <span className="text-sm font-medium text-gray-500">{product.price}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="mt-auto block w-full text-center bg-white border border-sky-600 text-sky-600 hover:bg-sky-50 font-semibold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
