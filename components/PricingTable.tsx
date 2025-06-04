'use client'

import { Check, Star, Zap } from 'lucide-react'

const PricingTable = () => {
  const plans = [
    {
      name: 'Basic',
      description: '1 school',
      price: '$1,500',
      period: '/year',
      features: [
        'Handle registration',
        'AI email (25 accounts)',
        'Vault access',
        'Basic student agents',
        'Standard support',
        'EO 14192 compliance'
      ],
      cta: 'Start Basic',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'District',
      description: 'Up to 10 schools',
      price: '$9,500',
      period: '/year',
      features: [
        'Everything in Basic',
        'AI email (unlimited)',
        'Advanced student agents',
        'Parent/teacher portals',
        'District control center',
        'Priority support',
        'Custom integrations',
        'Training included'
      ],
      cta: 'Choose District',
      popular: true,
      color: 'border-primary-500'
    },
    {
      name: 'Statewide',
      description: 'Up to 100 schools',
      price: 'Custom',
      period: '',
      features: [
        'Everything in District',
        'Dedicated AI support',
        'Fugio vault cluster',
        'Training modules',
        'White-label options',
        'API access',
        'Custom development',
        '24/7 support'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'National',
      description: 'Multi-state',
      price: 'Strategic',
      period: '',
      features: [
        'Everything in Statewide',
        'Full jurisdiction buildout',
        'Custom protocol features',
        'Dedicated team',
        'Government partnerships',
        'Regulatory compliance',
        'Research collaboration',
        'Executive briefings'
      ],
      cta: 'Schedule Call',
      popular: false,
      color: 'border-gray-200'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plans & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right plan for your district size. All plans include first-year training, support, and onboarding.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 ${plan.color} p-8 transition-all duration-500 hover:scale-105 hover:shadow-3xl ${
                plan.popular ? 'ring-4 ring-primary-500/30 scale-105 bg-gradient-to-br from-white to-primary-50/50' : 'hover:border-primary-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg animate-pulse">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
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
