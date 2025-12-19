import React from 'react';
import { Link } from 'react-router-dom';
import RegularDashboard from '../RegularDashboard';
import SEOContent from '../components/SEOContent';

const Home = () => {
    return (
        <RegularDashboard>
            {/* Hero Section */}
            <div className="text-center bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white py-20 px-4 rounded-xl shadow-2xl relative overflow-hidden mb-12">
                {/* Decorative Metallic Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
                            Gold & Silver
                        </span><br />
                        Refining Calculator
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        The professional standard for purity adjustment, alloying, and melting calculations.
                        Trusted by jewelers and refiners worldwide.
                    </p>

                    <Link to="/calculator" className="inline-block">
                        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                            🚀 Open Calculator
                        </button>
                    </Link>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-70">
                        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">✓ 100% Free</span>
                        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">✓ No Signup</span>
                        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">✓ Mobile Ready</span>
                    </div>
                </div>
            </div>

            {/* Feature Grid (More Content) */}
            <section className="mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Why Use This Tool?</h2>
                    <p className="text-gray-600 mt-2">Precision engineering for your precious metals</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold mb-2">Pinpoint Accuracy</h3>
                        <p className="text-gray-600">
                            Uses 64-bit floating point calculations to ensure your alloy mixtures effectively meet hallmarking standards every time.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                        <p className="text-gray-600">
                            No complex formulas to remember. Just enter your weights and purities, and get instant dosage instructions.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold mb-2">100% Secure</h3>
                        <p className="text-gray-600">
                            Runs entirely in your browser. Your proprietary formulas and trade secrets never leave your device.
                        </p>
                    </div>
                </div>
            </section>

            {/* Guides and FAQs */}
            <SEOContent />

            {/* Bottom CTA */}
            <div className="mt-16 text-center bg-indigo-900 rounded-xl p-10 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Refine?</h2>
                <p className="mb-8 text-indigo-200">Start calculating your perfect alloy mix now.</p>
                <Link to="/calculator">
                    <button className="px-8 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                        Go to Calculator
                    </button>
                </Link>
            </div>
        </RegularDashboard>
    );
};

export default Home;
