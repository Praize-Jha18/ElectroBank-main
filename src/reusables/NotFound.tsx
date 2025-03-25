import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="mt-2 text-gray-600">The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-4 text-blue-600 underline">Go back home</Link>
        </div>
    );
};

export default NotFound