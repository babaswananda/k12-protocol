'use client'

import { ArrowRight, Calendar, Download, Users, Zap } from 'lucide-react'

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Zap,
      title: 'Request a Demo for Your School',
      description: 'See the platform in action with a personalized walkthrough',
      buttonText: 'Schedule Demo',
      buttonStyle: 'bg-primary-600 hover:bg-primary-700 text-white',
      href: '/demo'
    },
    {
      icon: Users,
      title: 'Secure Your .K-12 Handle',
      description: 'Reserve your district\'s official domain before it\'s taken',
      buttonText: 'Reserve Handle',
      buttonStyle: 'bg-green-600 hover:bg-green-700 text-white',
      href: '#reserve'
    },
    {
      icon: Download,
      title: 'Download the District Brief',
      description: 'Get the complete technical and compliance overview',
      buttonText: 'Download PDF',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700 text-white',
      href: '/district-brief.pdf'
    },
    {
      icon: Calendar,
      title: 'Join the Education Protocol Waitlist',
      description: 'Be first to access new features and beta programs',
      buttonText: 'Join Waitlist',
      buttonStyle: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
      href: '/waitlist'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your District?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the future of education with protocol-native infrastructure designed for the AI age.
          </p>
        </div>

        {/* CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ctaOptions.map((cta, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mr-4">
                  <cta.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {cta.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {cta.description}
              </p>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${cta.buttonStyle}`}
              >
                <span>{cta.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center bg-federal-900 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            This is the new standard for public education infrastructure.
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            No more platforms. Just protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-federal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-federal-900 transition-all duration-200">
              Contact Sales Team
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by education leaders nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">EO 14192 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">COPPA Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium">FERPA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
