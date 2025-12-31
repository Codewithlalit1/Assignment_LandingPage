import React from 'react';
import Section from '../common/Section';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
    const steps = [
        {
            title: "Connect Your Repository",
            description: "Securely link your code repositories. We support all major providers including GitHub, GitLab, and Bitbucket. Setup takes less than 30 seconds.",
            image: "https://placehold.co/600x400/e0e7ff/4f46e5?text=Repository+Sync"
        },
        {
            title: "AI Analyzes Context",
            description: "Our engine scans your codebase to understand dependencies, patterns, and architectural style. It builds a semantic map of your project.",
            image: "https://placehold.co/600x400/f3e8ff/9333ea?text=Context+Analysis"
        },
        {
            title: "Start Building Instantly",
            description: "Get straight to coding with a fully configured environment. No more 'works on my machine' issues or complex dependency management.",
            image: "https://placehold.co/600x400/dcfce7/16a34a?text=Instant+Dev+Env"
        }
    ];

    return (
        <Section id="how-it-works">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    How it works
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Three simple steps to revolutionize your development process.
                </p>
            </div>

            <div className="space-y-24">
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Image Side */}
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                                <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {/* Note: In a real app, use local images or optimized assets */}
                                <div className="aspect-w-16 aspect-h-9 bg-gray-100 w-full flex items-center justify-center h-64 lg:h-80">
                                    <div className="text-gray-400 font-medium">Image: {step.title}</div>
                                    {/* Placeholder visual */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                                        <div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg p-4">
                                            <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
                                            <div className="space-y-2">
                                                <div className="h-3 w-full bg-gray-100 rounded"></div>
                                                <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                                                <div className="h-3 w-4/6 bg-gray-100 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-1">
                            <div className="flex items-center mb-6">
                                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600 font-bold text-lg mr-4">
                                    {index + 1}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {step.description}
                            </p>
                            <ul className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span>Benefit point illustrating {step.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Benefits;
