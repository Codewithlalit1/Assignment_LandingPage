import React, { useState } from 'react';
import Section from '../common/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-slate-900 pr-8">{question}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Is AgentIDE compatible with VS Code extensions?",
            answer: "Yes! We support the entire VS Code extension ecosystem. You can install your favorite themes and plugins directly from the marketplace."
        },
        {
            question: "How does the AI ensure code security?",
            answer: "Your code is processed in a secure, isolated environment. For Enterprise plans, we offer self-hosted options where code never leaves your infrastructure."
        },
        {
            question: "Can I use it offline?",
            answer: "AgentIDE has a robust offline mode. Basic features work without internet, and changes sync automatically when you reconnect."
        },
        {
            question: "Do you offer student discounts?",
            answer: "Absolutely! Students and educators allow free access to our Pro plan. Simply sign up with your .edu email address."
        }
    ];

    return (
        <Section id="faq" background="gray">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 sm:px-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
