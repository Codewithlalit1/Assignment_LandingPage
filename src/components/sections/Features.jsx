import React from 'react';
import { Zap, Shield, BarChart, Code, Layers, Globe } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';

const Features = () => {
    const features = [
        {
            icon: <Zap className="h-6 w-6 text-yellow-500" />,
            title: 'Lightning Fast',
            description: 'Optimized for speed with sub-millisecond response times. Build without the wait.'
        },
        {
            icon: <Code className="h-6 w-6 text-primary-500" />,
            title: 'Intelligent Autocomplete',
            description: 'Context-aware code suggestions that understand your entire codebase structure.'
        },
        {
            icon: <Shield className="h-6 w-6 text-green-500" />,
            title: 'Enterprise Security',
            description: 'Bank-level encryption and compliance with SOC2, GDPR, and HIPAA standards.'
        },
        {
            icon: <BarChart className="h-6 w-6 text-blue-500" />,
            title: 'Deep Analytics',
            description: 'Gain insights into your team\'s velocity, code quality, and technical debt.'
        },
        {
            icon: <Layers className="h-6 w-6 text-purple-500" />,
            title: 'Seamless Integration',
            description: 'Connects with GitHub, GitLab, Jira, and Slack out of the box.'
        },
        {
            icon: <Globe className="h-6 w-6 text-indigo-500" />,
            title: 'Remote Collaboration',
            description: 'Real-time pair programming with voice, video, and screen sharing built-in.'
        }
    ];

    return (
        <Section id="features" background="gray">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Features</h2>
                <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Everything you need to build faster
                </p>
                <p className="mt-4 text-xl text-gray-500">
                    Packed with powerful features designed to supercharge your development workflow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="h-full">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-primary-50 transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {feature.description}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Features;
