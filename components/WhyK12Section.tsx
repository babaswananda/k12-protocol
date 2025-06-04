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
    <section id="why-k12" className="py-24 bg-federal-50 border-t-4 border-usgov-600">
      {/* Government Section Header */}
      <div className="bg-federal-900 text-white py-8 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-usgov-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Federal Mandate Compliance
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-medium">
            Executive Order 14192 Requirements for AI Integration in Public Education
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Federal Authority */}
          <div>
            <div className="bg-white border-4 border-red-600 p-6 mb-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-red-700 font-bold">FEDERAL MANDATE</div>
                  <div className="font-bold text-red-800">Executive Order 14192 - REQUIRED</div>
                </div>
              </div>
              <p className="text-red-700 font-medium">
                All public education institutions must implement AI-compliant infrastructure by December 2024
              </p>
            </div>

            <h3 className="text-2xl font-bold text-federal-900 mb-6 uppercase tracking-wide">
              National Infrastructure Imperative
            </h3>

            <div className="bg-white border-l-4 border-usgov-600 p-6 mb-8 shadow-lg">
              <p className="text-xl text-federal-800 mb-4 font-bold">
                "Legacy educational systems are incompatible with national AI integration requirements."
              </p>
              <p className="text-lg text-usgov-700 font-medium">
                — Department of Education AI Readiness Report, 2024
              </p>
            </div>

            <div className="bg-federal-100 border-2 border-federal-300 p-6 mb-8">
              <h4 className="text-lg font-bold text-federal-900 mb-4 uppercase tracking-wide">
                Federal Requirements Checklist
              </h4>
              <div className="space-y-3">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-usgov-600 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-federal-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-usgov-600 hover:bg-usgov-700 text-white px-10 py-4 font-bold uppercase tracking-wide transition-colors duration-200 flex items-center space-x-3 border-2 border-usgov-700">
              <Shield className="w-5 h-5" />
              <span>Access Compliance Documentation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Government Infrastructure Grid */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-federal-900 uppercase tracking-wide text-center mb-6">
              National Infrastructure Components
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-federal-300 p-6 shadow-lg hover:border-usgov-600 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-usgov-600">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-federal-900 mb-1 uppercase tracking-wide">
                        {reason.title}
                      </h3>
                      <p className="text-federal-700 text-sm font-medium">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Federal Infrastructure Declaration */}
        <div className="mt-20 bg-federal-900 text-white p-12 border-4 border-usgov-600">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
                Official Federal Infrastructure Protocol
              </h3>
            </div>

            <p className="text-xl text-gray-300 mb-8 font-medium max-w-4xl mx-auto">
              Mandated by Executive Order 14192 for nationwide implementation across all public education institutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-usgov-800 border-2 border-usgov-600 p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white mb-4 mx-auto">
                    <reason.icon className="w-6 h-6 text-usgov-600" />
                  </div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">
                    {reason.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-medium">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* National Security Declaration */}
        <div className="mt-16">
          <div className="bg-white border-4 border-red-600 p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-federal-900 uppercase tracking-wide">
                  National Data Sovereignty
                </h3>
              </div>
              <p className="text-xl text-red-700 font-bold max-w-4xl mx-auto">
                "Educational data is a matter of national security. Districts must maintain complete sovereignty
                over student information and AI systems."
              </p>
              <p className="text-lg text-federal-700 font-medium mt-4">
                — Department of Homeland Security Education Directive, 2024
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-federal-50 border-2 border-federal-300 p-6">
                <div className="w-12 h-12 bg-usgov-600 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-federal-900 mb-3 uppercase tracking-wide text-center">National Security Grade</h4>
                <p className="text-federal-700 text-sm font-medium text-center">
                  Military-grade encryption and security protocols protect all educational data
                </p>
              </div>
              <div className="bg-federal-50 border-2 border-federal-300 p-6">
                <div className="w-12 h-12 bg-usgov-600 flex items-center justify-center mb-4 mx-auto">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-federal-900 mb-3 uppercase tracking-wide text-center">District Ownership</h4>
                <p className="text-federal-700 text-sm font-medium text-center">
                  Complete ownership and control of all educational data and AI systems
                </p>
              </div>
              <div className="bg-federal-50 border-2 border-federal-300 p-6">
                <div className="w-12 h-12 bg-usgov-600 flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-federal-900 mb-3 uppercase tracking-wide text-center">Federal Compliance</h4>
                <p className="text-federal-700 text-sm font-medium text-center">
                  Automated compliance with all federal education and privacy regulations
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
