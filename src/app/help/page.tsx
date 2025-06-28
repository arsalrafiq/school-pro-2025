'use client';

import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is SchoolPro?',
    answer: 'SchoolPro is a comprehensive school management system designed to streamline administrative tasks and enhance educational processes.'
  },
  {
    question: 'Can SchoolPro adapt to my school\'s unique requirements?',
    answer: 'Yes, SchoolPro is highly customizable and can be adapted to meet your school\'s specific needs and workflows.'
  },
  {
    question: 'What are the system requirements for using SchoolPro?',
    answer: 'SchoolPro is a web-based solution that works on any modern browser. No special hardware or software installation is required.'
  },
  {
    question: 'How can I migrate my existing school data to SchoolPro?',
    answer: 'We provide comprehensive data migration services and tools to help you seamlessly transfer your existing data.'
  },
  {
    question: 'What kind of support does SchoolPro offer?',
    answer: 'We offer 24/7 technical support, regular updates, and comprehensive documentation to help you get the most out of SchoolPro.'
  },
  {
    question: 'Do I need expensive training to use SchoolPro?',
    answer: 'No, SchoolPro is designed to be user-friendly. We provide free basic training and documentation for all users.'
  },
  {
    question: 'How much does SchoolPro cost?',
    answer: 'We offer flexible pricing plans to suit schools of all sizes. Contact us for a customized quote.'
  },
  {
    question: 'Is there a long-term contract requirement?',
    answer: 'No, we offer flexible subscription options including monthly and annual plans.'
  },
  {
    question: 'How does SchoolPro ensure my school\'s data security?',
    answer: 'We implement industry-standard security measures including encryption, regular backups, and secure access controls.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and other popular payment methods.'
  },
  {
    question: 'Can SchoolPro be installed on our school\'s servers?',
    answer: 'Yes, we offer both cloud-hosted and on-premise deployment options.'
  },
  {
    question: 'Do you offer custom feature development?',
    answer: 'Yes, we can develop custom features to meet your school\'s specific requirements.'
  }
];

const helpArticles = [
  {
    title: 'Getting Started Guide',
    description: 'Learn the basics of using our platform',
    icon: '📚',
    href: '/help/getting-started'
  },
  {
    title: 'Account Management',
    description: 'How to manage your account settings',
    icon: '⚙️',
    href: '/help/account'
  },
  {
    title: 'Troubleshooting Common Issues',
    description: 'Solutions to frequent problems',
    icon: '🔧',
    href: '/help/troubleshooting'
  }
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Help Center & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers, learn best practices, and discover how to get the most out of your SchoolPro
            system. Browse through our frequently asked questions or explore our helpful articles to enhance
            your experience.
          </p>
        </div>

        {/* Help Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {helpArticles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{article.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600">{article.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Email Support
            </h3>
            <p className="text-gray-600 mb-4">
              Get in touch with our support team via email
            </p>
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Send Email
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Live Chat
            </h3>
            <p className="text-gray-600 mb-4">
              Chat with our support team in real-time
            </p>
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Start Chat
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Phone Support
            </h3>
            <p className="text-gray-600 mb-4">
              Call us directly for immediate assistance
            </p>
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 