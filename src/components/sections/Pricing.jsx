import React, { useState } from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import Card from '../common/Card';
import { Check } from 'lucide-react';

const Pricing = () => {
    // Default to the 'Pro' plan (index 1) which is marked as popular
    const [selectedPlan, setSelectedPlan] = useState(1);

    const plans = [
        {
            name: 'Starter',
            price: '$0',
            period: '/month',
            description: 'Perfect for hobbyists and side projects.',
            features: ['Basic AI auto-complete', 'Local processing only', 'Community support', '1 Project'],
            cta: 'Start Free',
            popular: false
        },
        {
            name: 'Pro',
            price: '$29',
            period: '/month',
            description: 'For professional developers and serious teams.',
            features: ['Advanced context awareness', 'Cloud-based processing', 'Priority email support', 'Unlimited Projects', 'Team collaboration'],
            cta: 'Get Started',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large organizations needing control.',
            features: ['Self-hosted options', 'SSO & Advanced Security', 'Dedicated success manager', 'Custom SLA', 'Audit logs'],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <Section id="pricing">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Simple, transparent pricing
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Choose the plan that fits your needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, index) => {
                    const isSelected = selectedPlan === index;

                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedPlan(index)}
                            className="cursor-pointer relative"
                        >
                            <Card
                                className={`relative flex flex-col h-full transition-all duration-300 ${isSelected
                                        ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-50 transform -translate-y-2 shadow-xl'
                                        : 'hover:border-primary-200'
                                    }`}
                                hoverEffect={false} // Disable default hover since we manage it manually
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                                    <div className="mt-4 flex items-baseline">
                                        <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                        <span className="ml-1 text-xl text-gray-500">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={isSelected ? 'primary' : 'outline'}
                                    className="w-full justify-center transition-colors duration-300"
                                >
                                    {plan.cta}
                                </Button>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Pricing;
