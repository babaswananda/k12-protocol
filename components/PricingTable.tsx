'use client'

import { Check, Star, Zap } from 'lucide-react'

const PricingTable = () => {
  const contracts = [
    {
      name: 'Pilot Program',
      description: 'Single Institution',
      price: 'CLASSIFIED',
      period: '',
      classification: 'RESTRICTED',
      features: [
        'Federal protocol implementation',
        'Top Secret security clearance',
        'Military-grade encryption',
        'Government oversight access',
        'Federal compliance monitoring',
        'National security protocols'
      ],
      cta: 'Request Clearance',
      popular: false,
      color: 'border-federal-400'
    },
    {
      name: 'District Contract',
      description: 'Multi-School Deployment',
      price: 'GSA SCHEDULE',
      period: '',
      classification: 'OFFICIAL USE ONLY',
      features: [
        'All Pilot Program features',
        'Unlimited federal accounts',
        'Advanced AI surveillance',
        'Command center access',
        'Federal priority support',
        'Government integration APIs',
        'Classified training modules',
        'Pentagon-grade infrastructure'
      ],
      cta: 'Submit RFP',
      popular: true,
      color: 'border-usgov-600'
    },
    {
      name: 'State Contract',
      description: 'Statewide Implementation',
      price: 'FEDERAL BUDGET',
      period: '',
      classification: 'CONFIDENTIAL',
      features: [
        'All District Contract features',
        'Dedicated federal liaison',
        'National security vault cluster',
        'Government training facilities',
        'White House briefing access',
        'Congressional reporting tools',
        'Federal development team',
        'National security oversight'
      ],
      cta: 'Contact Pentagon',
      popular: false,
      color: 'border-federal-400'
    },
    {
      name: 'National Security',
      description: 'Multi-State Deployment',
      price: 'TOP SECRET',
      period: '',
      classification: 'TOP SECRET',
      features: [
        'All State Contract features',
        'National infrastructure control',
        'Presidential briefing access',
        'Joint Chiefs oversight',
        'International partnerships',
        'National defense integration',
        'Congressional testimony support',
        'Executive order compliance'
      ],
      cta: 'Contact NSA',
      popular: false,
      color: 'border-red-600'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-federal-50 border-t-4 border-usgov-600">
      {/* Government Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Federal Section Header */}
      <div className="bg-federal-900 text-white py-12 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Federal Contract Tiers
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto">
            Government procurement options for .K-12 Protocol implementation.
            All contracts include federal oversight, security clearance, and compliance guarantees.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide">
            SECURITY CLEARANCE REQUIRED FOR ACCESS
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Federal Contract Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className={`relative bg-white border-4 ${contract.color} p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl ${
                contract.popular ? 'ring-4 ring-usgov-600/50 bg-gradient-to-br from-white to-usgov-50/50' : 'hover:border-usgov-600'
              }`}
            >
              {/* Classification Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide">
                  {contract.classification}
                </div>
              </div>

              {/* Popular Badge */}
              {contract.popular && (
                <div className="absolute -top-4 right-4">
                  <div className="bg-usgov-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Contract Header */}
              <div className="text-center mb-8 mt-4">
                <h3 className="text-xl font-bold text-federal-900 mb-2 uppercase tracking-wide">
                  {contract.name}
                </h3>
                <p className="text-federal-600 mb-4 font-medium uppercase text-sm tracking-wide">
                  {contract.description}
                </p>
                <div className="bg-federal-100 border-2 border-federal-300 p-4">
                  <span className="text-2xl font-bold text-usgov-700 uppercase tracking-wide">
                    {contract.price}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {contract.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 bg-usgov-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-federal-800 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 font-bold uppercase tracking-wide transition-all duration-200 border-2 ${
                  contract.popular
                    ? 'bg-usgov-600 hover:bg-usgov-700 text-white border-usgov-700'
                    : 'bg-federal-100 hover:bg-federal-200 text-federal-900 border-federal-400'
                }`}
              >
                {contract.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">
                What's Included
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Setup & Training</h4>
                <ul className="space-y-1">
                  <li>• Complete onboarding process</li>
                  <li>• Staff training sessions</li>
                  <li>• Technical setup assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Ongoing Support</h4>
                <ul className="space-y-1">
                  <li>• 24/7 technical support</li>
                  <li>• Regular system updates</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Security & Compliance</h4>
                <ul className="space-y-1">
                  <li>• EO 14192 compliance</li>
                  <li>• COPPA certification</li>
                  <li>• SOC 2 Type II</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your district?
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Our Education Specialists
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingTable
