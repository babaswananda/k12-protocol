'use client'

import { Shield, Zap, Users, Database, CheckCircle, ArrowRight } from 'lucide-react'

const WhyK12Section = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Future-proof identity',
      description: 'Protocol-native domains that evolve with technology'
    },
    {
      icon: Zap,
      title: 'AI-assisted communication',
      description: 'Intelligent email and messaging for all stakeholders'
    },
    {
      icon: Users,
      title: 'Intelligent student records',
      description: 'AI-enhanced data management and insights'
    },
    {
      icon: Database,
      title: 'Decentralized file and funding control',
      description: 'Complete sovereignty over your district data'
    }
  ]

  const complianceFeatures = [
    'Executive Order 14192 mandates AI integration in public education',
    'Schools need more than tools — they need protocol',
    'Built for sovereignty, security, and scalability',
    'Designed by educators, for educators'
  ]

  return (
    <section id="why-k12" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              EO 14192 Compliance Required
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why .K-12?
            </h2>
            
            <div className="text-xl text-gray-600 mb-8 space-y-4">
              <p className="font-semibold text-gray-900">
                Legacy systems weren't built for the AI age.
              </p>
              <p className="text-2xl font-bold text-primary-600">
                .K-12 is.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2">
              <span>Learn More About Compliance</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Infrastructure Layer */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              .K-12 is the official infrastructure layer for:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 mx-auto">
                    <reason.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sovereignty Message */}
        <div className="mt-16 text-center">
          <div className="bg-federal-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Sovereignty by Design
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              All domains, agents, data, and interactions are owned by the district. 
              Not by a third-party platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Privacy First</h4>
                <p className="text-gray-300">
                  Every inbox, vault, and profile is end-to-end encrypted and powered by Fugio
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Your Data</h4>
                <p className="text-gray-300">
                  Complete ownership and control of all educational data and communications
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Your Rules</h4>
                <p className="text-gray-300">
                  Customize policies, permissions, and protocols to fit your district's needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyK12Section
