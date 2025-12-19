import React from 'react';
import RegularDashboard from '../RegularDashboard';

const About = () => {
    return (
        <RegularDashboard>
            <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-6">About Metal Calculator</h1>

                <div className="space-y-4 text-gray-700">
                    <p>
                        Welcome to the <strong>Metal Calculator</strong>, the ultimate tool designed for jewelers, refiners, and precious metal enthusiasts.
                    </p>

                    <h2 className="text-xl font-semibold text-indigo-800 mt-6">Our Mission</h2>
                    <p>
                        Our goal is to simplify complex metal purity calculations. Whether you are melting old jewelry, adjusting silver purity for silverware, or refining scrap metal, our tools help you calculate the exact amounts of copper, pure silver, or alloy needed.
                    </p>

                    <h2 className="text-xl font-semibold text-indigo-800 mt-6">Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Multi-Batch Purity Adjustment</strong>: Calculate additions for multiple batches of varying weights and purities.</li>
                        <li><strong>Fine Silver Calculation</strong>: Quickly determine the fine silver content in any alloy.</li>
                        <li><strong>Dilution & Melting</strong>: Precision tools for lowering purity to standard grades like 925, 800, or custom values.</li>
                        <li><strong>PDF Reports</strong>: Download professional PDF reports of your calculations for your records.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-indigo-800 mt-6">Free & Secure</h2>
                    <p>
                        This tool is completely free to use. Importantly, it is <strong>100% Client-Side</strong>.
                        This means all calculations happen right in your browser. We do not store your data, trade secrets, or calculation history on our servers.
                    </p>
                </div>
            </div>
        </RegularDashboard>
    );
};

export default About;
