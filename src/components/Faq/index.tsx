'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const faqData = [
    {
        question: "What is our AI Sales Chatbot?",
        answer: "Our AI Sales Chatbot helps businesses automate conversations, generate leads, and work smarter with AI-powered insights.",
    },
    {
        question: "How does it learn?",
        answer: "The chatbot continuously learns from interactions to improve responses and adapt to your business needs.",
    },
    {
        question: "Can it integrate with my platform?",
        answer: "Yes, it can integrate seamlessly with your website, CRM, or other sales tools to enhance your workflow.",
    },
    {
        question: "Is my customer data safe?",
        answer: "Absolutely. We prioritize security with advanced encryption and compliance protocols.",
    },
    {
        question: "Does it improve over time?",
        answer: "Yes, the AI adapts and gets smarter the more it interacts with customers, optimizing lead generation and sales.",
    },
    {
        question: "Can multiple teams use it?",
        answer: "Yes, the chatbot can support multiple users and teams, ensuring smooth collaboration and workflow.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className="py-16 bg-white text-gray-900">
            <div className="container">
                <div className="mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-primary uppercase text-sm">Popular questions</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Learn how our AI Chatbot works</h2>
                        <p className="text-gray-600 mt-2">Automate conversations and collaborate smarter with AI</p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-lg p-4 cursor-pointer transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">{item.question}</h3>
                                    <Image
                                        src={"/images/icons/plus-icon.svg"}
                                        alt='plus-icon'
                                        width={20}
                                        height={20}
                                        className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                                    />
                                </div>

                                <div
                                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 visible' : 'max-h-0 hidden'
                                        }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
