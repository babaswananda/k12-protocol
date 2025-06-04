'use client'

import { Mail, Users, Shield, Brain, Database, Zap, GraduationCap, Settings } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: 'AI Email',
      description: 'Staff/students get agent-assisted inboxes',
      details: 'Private, encrypted, agent-assisted communication for all district personnel and students.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Smart Learning Agents',
      description: 'Every student receives an AI that adapts as they learn',
      details: 'Personalized AI tutors that understand individual learning patterns and preferences.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'District Control Center',
      description: 'View, manage, and deploy across all departments',
      details: 'Centralized dashboard for complete administrative oversight and control.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: 'Vault',
      description: 'Fugio-secure access to documents, grades, forms, and more',
      details: 'End-to-end encrypted storage for all sensitive educational data.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Teacher Tools',
      description: 'Agent-assisted curriculum building + grading',
      details: 'AI-powered tools to help educators create engaging content and streamline assessment.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Compliant & Customizable',
      description: 'Your domain, your data, your sovereignty',
      details: 'Full compliance with educational regulations while maintaining complete data ownership.',
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
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Get With Your Handle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each .k-12 handle unlocks the full stack of the future
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                {feature.description}
              </p>
              <p className="text-gray-600 text-sm">
                {feature.details}
              </p>
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
