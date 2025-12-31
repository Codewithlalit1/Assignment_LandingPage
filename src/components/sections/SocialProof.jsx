import React from 'react';
import Section from '../common/Section';

const SocialProof = () => {
    const companies = [
        { name: 'Acme Corp', color: 'text-gray-400' },
        { name: 'Global Tech', color: 'text-gray-400' },
        { name: 'Nebula', color: 'text-gray-400' },
        { name: 'Circle AI', color: 'text-gray-400' },
        { name: 'Fox Run', color: 'text-gray-400' }
    ];

    return (
        <Section className="py-12 border-y border-gray-100 bg-white">
            <div className="text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                    Trusted by innovative teams worldwide
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                    {companies.map((company) => (
                        <div key={company.name} className="flex items-center font-bold text-xl text-gray-400">
                            {/* Placeholder for Logo */}
                            <span className="tracking-tight">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SocialProof;
