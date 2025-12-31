import React from 'react';
import Section from '../common/Section';
import Card from '../common/Card';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Senior Developer at TechFlow',
            image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=random',
            quote: "AgentIDE has completely transformed how our team writes code. The AI assistance is surprisingly intuitive and has cut our development time by 40%.",
            stars: 5
        },
        {
            name: 'Michael Ross',
            role: 'CTO at StartupX',
            image: 'https://ui-avatars.com/api/?name=Michael+Ross&background=random',
            quote: "I was skeptical at first, but the depth of context understanding is unmatched. It's like having a senior engineer available 24/7.",
            stars: 5
        },
        {
            name: 'Elena Rodriguez',
            role: 'Frontend Lead',
            image: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=random',
            quote: "The seamless integration with our existing tools made adoption incredibly easy. Highly recommended for any dev team.",
            stars: 4
        }
    ];

    return (
        <Section id="testimonials" background="gray">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Loved by developers
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    See what the community has to say about AgentIDE.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="flex flex-col h-full">
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-auto">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-10 w-10 rounded-full mr-4"
                            />
                            <div>
                                <div className="font-bold text-slate-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
