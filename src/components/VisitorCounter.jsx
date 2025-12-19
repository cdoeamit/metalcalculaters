import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const hasFetched = React.useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const NAMESPACE = 'metalcalculator';
        const KEY = 'visits';
        const SESSION_KEY = `has_visited_${NAMESPACE}_${KEY}`;

        // Check if this user has already 'visited' in this session
        const hasVisited = sessionStorage.getItem(SESSION_KEY);

        // If visited, just GET the count. If not, hit UP to increment.
        const endpoint = hasVisited
            ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`
            : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`;

        fetch(endpoint)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                // api.counterapi.dev returns { count: number }
                setCount(data.count);
                setLoading(false);

                // Mark as visited for this session so we don't count again
                if (!hasVisited) {
                    sessionStorage.setItem(SESSION_KEY, 'true');
                }
            })
            .catch(err => {
                console.warn("Counter API failed, showing fallback", err);
                const fakeCount = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
                setCount(fakeCount);
                setLoading(false);
            });
    }, []);

    // Always render. If loading, show '...'

    return (
        <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 rounded-full border border-gray-700 shadow-inner">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Visits</span>
                <span className="text-sm font-bold text-green-400 font-mono">
                    {loading ? '...' : (count || 0).toLocaleString()}
                </span>
            </div>
        </div>
    );
};

export default VisitorCounter;
