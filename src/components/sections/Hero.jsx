import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../common/Button';
import Section from '../common/Section';

const Hero = () => {
    return (
        <Section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-6 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
                        v2.0 is now live
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Transform Your Workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500">AgentIDE</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        The all-in-one solution that helps teams collaborate, automate, and scale efficiently. Experience the future of intelligent development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 group">
                            Watch Demo <Play className="ml-2 h-5 w-5 fill-current text-gray-400 group-hover:text-primary-600 transition-colors" />
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`h-8 w-8 rounded-full border-2 border-white bg-gray-${i * 100 + 200}`} style={{ backgroundColor: `hsl(${220 + i * 10}, 70%, 80%)` }}></div>
                            ))}
                        </div>
                        <p>Loved by 10,000+ developers</p>
                    </div>
                </div>

                {/* Hero Image/Illustration */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="relative rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-2xl p-6 sm:p-8 transform hover:scale-[1.01] transition-transform duration-500">
                        {/* Mock UI */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                <div className="h-8 flex-1 bg-gray-100 rounded-lg ml-4"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                                <div className="h-32 bg-primary-50 rounded-lg border border-primary-100 flex items-center justify-center">
                                    <span className="text-primary-600 font-medium font-mono">Run Analysis...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
