import React from 'react';

const SEOContent = () => {
    return (
        <div className="mt-12 space-y-12">
            {/* How to Use Section with Gold/Silver Aesthetics */}
            <section className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                        <span className="text-yellow-400">⚡</span> How to Use the Metal Calculator
                    </h2>
                    <p className="text-gray-300 mt-2 max-w-2xl">
                        Master the art of component calculation with our specialized modes tailored for jewelers.
                    </p>
                </div>

                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <div className="relative pl-6 border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Mel (Multi-Batch)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Use this for <strong>mixed scrap lots</strong>. Enter the weight and purity for multiple batches of silver.
                                The system runs a complex weighted average calculation to tell you exactly how much
                                <span className="font-semibold text-yellow-600"> pure silver</span> or
                                <span className="font-semibold text-orange-600"> copper</span> to add.
                            </p>
                        </div>

                        <div className="relative pl-6 border-l-4 border-gray-400">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Gut Mel (Dilution)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The standard tool for <strong>lowering purity</strong>. Perfect for converting 999 Fine Silver grains
                                into casting grain or sheet metal (e.g., Sterling 925). It calculates the precise alloy addition needed.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="relative pl-6 border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Dak Mel (Standard Mix)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Specialized for <strong>solder manufacturing</strong>. It breaks down the alloy components into
                                Jast (Zinc) and Copper ratios relative to standard jewelry grades:
                                <span className="block mt-2 text-sm bg-gray-100 p-2 rounded text-gray-700">
                                    • 50% • 62.5% • 72.5%
                                </span>
                            </p>
                        </div>

                        <div className="relative pl-6 border-l-4 border-gray-400">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Dakh Mel 37</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A unique <strong>two-stage process</strong> for creating 37% purity alloys. It first equilibrates
                                your metal to 52%, then calculates the secondary alloy addition (Jast/KDM) to hit the final target.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section with Card Design */}
            <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-indigo-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mb-4">?</div>
                        <h3 className="font-bold text-gray-900 mb-3">Why is accuracy vital?</h3>
                        <p className="text-gray-600 text-sm">
                            Even 0.1% error can cause stamped jewelry to fail hallmarking tests. Our calculator uses 64-bit floating point math to ensure your alloys meet legal standards essentially every time.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold mb-4">🔥</div>
                        <h3 className="font-bold text-gray-900 mb-3">Melting Loss?</h3>
                        <p className="text-gray-600 text-sm">
                            Always account for <strong>burn loss</strong> (oxidation). While we calculate the exact chemical math, experienced refiners usually aim 0.2% higher (e.g. 92.7%) to be safe.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">⚖️</div>
                        <h3 className="font-bold text-gray-900 mb-3">What is "Fine" weight?</h3>
                        <p className="text-gray-600 text-sm">
                            This is the weight of <strong>pure gold/silver</strong> only, hiding inside your alloy.
                            <br />
                            <code className="bg-white px-1 mt-2 inline-block rounded border">Total × (Purity / 100)</code>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SEOContent;
