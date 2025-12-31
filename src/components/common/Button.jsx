import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "border-transparent text-white bg-primary-600 hover:bg-primary-700 shadow-sm hover:shadow-md",
        secondary: "border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
        ghost: "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
