'use client'

import { Mail, Users, Shield, Brain, Database, Zap, GraduationCap, Settings } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: 'Secure AI Communication',
      description: 'Military-grade encrypted messaging system',
      details: 'NSA-approved encryption protocols for all district personnel and student communications.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Federal AI Learning Systems',
      description: 'Government-certified adaptive learning protocols',
      details: 'Department of Education approved AI tutoring systems with federal oversight compliance.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'National Command Center',
      description: 'Centralized federal oversight dashboard',
      details: 'Pentagon-grade command and control systems for district-wide operations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: 'Classified Data Vault',
      description: 'Top Secret clearance-level data protection',
      details: 'CIA-grade encryption and storage for all sensitive educational intelligence.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Federal Curriculum Tools',
      description: 'Government-approved educational content systems',
      details: 'Department of Education certified tools for curriculum development and assessment.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'National Security Compliance',
      description: 'Homeland Security approved infrastructure',
      details: 'Full compliance with all federal security and educational regulations.',
      color: 'from-red-500 to-red-600'
    }
  ]

  const benefits = [
    {
      category: 'For Districts',
      items: [
        'Single dashboard to manage all schools and agent assignments',
        'Token-gated digital curriculum access',
        'Staff-wide AI-enhanced email and workflow tools'
      ]
    },
    {
      category: 'For Educators',
      items: [
        'Drag-and-drop curriculum builder with AI assistants',
        'AI lesson plan coaching and grading support',
        'Personalized learning agents per student'
      ]
    },
    {
      category: 'For Parents',
      items: [
        'Weekly agent-generated summaries of progress',
        'Chat agent for direct communication with staff/AI tutors',
        'Multi-lingual assistant built into student pages'
      ]
    },
    {
      category: 'For Students',
      items: [
        'Interactive learning journeys (XP, tokens, unlocks)',
        'Private, personalized AI notebook and tutor',
        'Career coach agents trained on local job market'
      ]
    }
  ]

  return (
    <section id="features" className="py-24 bg-federal-50 border-t-4 border-usgov-600">
      {/* Government Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Federal Section Header */}
      <div className="bg-federal-900 text-white py-12 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Federal Infrastructure Components
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto">
            Each .K-12 protocol implementation provides government-grade infrastructure
            mandated by Executive Order 14192
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide">
            <Shield className="w-5 h-5 mr-2" />
            CLASSIFIED: AUTHORIZED PERSONNEL ONLY
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Government Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-4 border-federal-300 p-8 shadow-xl hover:border-usgov-600 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  CLASSIFIED
                </div>
              </div>
              <h3 className="text-xl font-bold text-federal-900 mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-usgov-700 font-bold mb-4 text-sm uppercase tracking-wide">
                {feature.description}
              </p>
              <p className="text-federal-700 text-sm font-medium leading-relaxed">
                {feature.details}
              </p>
              <div className="mt-4 pt-4 border-t-2 border-federal-200">
                <div className="text-xs text-federal-600 font-bold uppercase tracking-wide">
                  SECURITY CLEARANCE: TOP SECRET
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Institutional Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  {benefit.category}
                </h4>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Future Add-ons */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Coming Soon
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Tokenized scholarship systems',
              'NFT-based student credentialing',
              'District DAOs for funding votes',
              'AI-assisted IEP customization',
              'Universal student portfolios',
              'Blockchain-verified transcripts',
              'Smart contract grading',
              'Decentralized learning networks'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-sm text-gray-700 border border-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
