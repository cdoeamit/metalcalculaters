import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consented = localStorage.getItem('cookie-consent');
        if (!consented) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0 md:mr-6 text-sm">
                <p>
                    We use cookies to analyze traffic and personalize content (including Google Ads).
                    By using our site, you acknowledge that you have read and understand our{' '}
                    <a href="/privacy-policy" className="underline text-indigo-300 hover:text-indigo-200">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="/terms" className="underline text-indigo-300 hover:text-indigo-200">Terms of Service</a>.
                </p>
            </div>
            <button
                onClick={handleAccept}
                className="w-full md:w-auto px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-medium transition-colors text-sm"
            >
                Accept & Close
            </button>
        </div>
    );
};

export default CookieBanner;
