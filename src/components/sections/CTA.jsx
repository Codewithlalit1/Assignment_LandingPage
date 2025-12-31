import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';

const CTA = () => {
    return (
        <Section background="primary" className="bg-primary-600 text-white">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white">
                    Ready to code at the speed of thought?
                </h2>
                <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of developers who are already building faster and smarter with AgentIDE. Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-white text-primary-600 hover:bg-gray-100 border-transparent text-lg px-8 py-4">
                        Get Started for Free
                    </Button>
                    <Button className="bg-primary-700 text-white border-primary-500 hover:bg-primary-800 text-lg px-8 py-4">
                        Schedule a Demo
                    </Button>
                </div>
                <p className="mt-6 text-sm text-primary-200">
                    No credit card required · 14-day free trial · Cancel anytime
                </p>
            </div>
        </Section>
    );
};

export default CTA;
