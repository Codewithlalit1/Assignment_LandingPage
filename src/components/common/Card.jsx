import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`bg-white rounded-xl border border-gray-100 p-6 shadow-sm ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
