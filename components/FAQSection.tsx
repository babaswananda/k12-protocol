'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What makes .K-12 different from other education platforms?',
      answer: '.K-12 is not a platform—it\'s a protocol. This means you own your domain, your data, and your infrastructure. Unlike traditional SaaS platforms, you\'re not locked into a vendor. You have complete sovereignty over your educational technology stack while benefiting from AI-native tools and compliance guarantees.'
    },
    {
      question: 'How does .K-12 ensure compliance with Executive Order 14192?',
      answer: 'Our infrastructure is specifically designed to meet EO 14192 requirements for safe AI integration in education. This includes human oversight mechanisms, transparent AI decision-making processes, regular audits, and comprehensive documentation. We maintain ongoing compliance monitoring and provide detailed reports for regulatory review.'
    },
    {
      question: 'What is the implementation timeline for a typical district?',
      answer: 'Implementation typically takes 4-8 weeks depending on district size. Week 1-2: Domain setup and initial configuration. Week 3-4: Staff training and system integration. Week 5-6: Student onboarding and testing. Week 7-8: Full deployment and optimization. We provide dedicated support throughout the entire process.'
    },
    {
      question: 'How secure is student data on the .K-12 platform?',
      answer: 'Student data security is our top priority. We use end-to-end encryption, zero-knowledge architecture, and Fugio-powered encryption for all data storage and transmission. We\'re SOC 2 Type II certified, COPPA compliant, and FERPA compliant. Your district maintains complete control over data residency and access permissions.'
    },
    {
      question: 'Can we integrate .K-12 with our existing systems?',
      answer: 'Yes, .K-12 is designed for seamless integration. We provide APIs and connectors for popular Student Information Systems (SIS), Learning Management Systems (LMS), and other educational tools. Our technical team works with your IT department to ensure smooth integration without disrupting existing workflows.'
    },
    {
      question: 'What kind of training and support do you provide?',
      answer: 'We provide comprehensive training for administrators, teachers, and support staff. This includes live training sessions, video tutorials, documentation, and ongoing support. Each district gets a dedicated customer success manager and access to our 24/7 technical support team.'
    },
    {
      question: 'How does pricing work for multi-school districts?',
      answer: 'Our pricing is designed to scale with your district. We offer volume discounts for larger districts and can create custom packages for unique needs. Pricing includes all features, training, support, and compliance guarantees. Contact our sales team for a personalized quote based on your district size and requirements.'
    },
    {
      question: 'What happens to our data if we decide to leave .K-12?',
      answer: 'You own your data completely. If you decide to migrate away from .K-12, we provide full data export capabilities in standard formats. There are no lock-in mechanisms or data hostage situations. We also provide migration assistance to ensure a smooth transition if needed.'
    },
    {
      question: 'How do AI tutors work and are they safe for students?',
      answer: 'AI tutors are personalized learning assistants that adapt to each student\'s learning style and pace. They operate under strict safety protocols with human teacher oversight. All interactions are logged and monitored. Teachers can review, modify, or override any AI recommendations. The AI is designed to supplement, not replace, human instruction.'
    },
    {
      question: 'What kind of ongoing costs should we expect?',
      answer: 'Our pricing is transparent with no hidden fees. Annual subscription includes all features, updates, support, and compliance monitoring. Optional add-ons include additional storage, premium integrations, and custom development. We provide detailed cost projections during the sales process so there are no surprises.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about .K-12 implementation, 
            security, and compliance
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our education specialists are here to help. Schedule a call or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule a Call
              </button>
              <button className="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
