'use client'

import { ArrowRight, Calendar, Download, Users, Zap } from 'lucide-react'

const CTASection = () => {
  const federalActions = [
    {
      icon: Zap,
      title: 'Request Federal Briefing',
      description: 'Classified demonstration for authorized district personnel only',
      buttonText: 'Submit Security Clearance',
      buttonStyle: 'bg-usgov-600 hover:bg-usgov-700 text-white border-2 border-usgov-700',
      classification: 'CONFIDENTIAL',
      href: '/demo'
    },
    {
      icon: Users,
      title: 'Secure Official Protocol Handle',
      description: 'Reserve your district\'s federal infrastructure domain',
      buttonText: 'Request Authorization',
      buttonStyle: 'bg-red-600 hover:bg-red-700 text-white border-2 border-red-700',
      classification: 'RESTRICTED',
      href: '#reserve'
    },
    {
      icon: Download,
      title: 'Access Federal Documentation',
      description: 'Download classified compliance and security specifications',
      buttonText: 'Download Classified Files',
      buttonStyle: 'bg-federal-700 hover:bg-federal-800 text-white border-2 border-federal-800',
      classification: 'TOP SECRET',
      href: '/district-brief.pdf'
    },
    {
      icon: Calendar,
      title: 'Join National Security Waitlist',
      description: 'Priority access to federal infrastructure deployment',
      buttonText: 'Submit Federal Application',
      buttonStyle: 'border-2 border-usgov-600 text-usgov-600 hover:bg-usgov-600 hover:text-white',
      classification: 'OFFICIAL USE ONLY',
      href: '/waitlist'
    }
  ]

  return (
    <section className="py-24 bg-federal-50 border-t-4 border-usgov-600 relative">
      {/* Government Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Federal Section Header */}
      <div className="bg-federal-900 text-white py-12 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Federal Implementation Protocol
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto">
            Authorized access points for .K-12 Protocol deployment in compliance with Executive Order 14192
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide">
            AUTHORIZED PERSONNEL ONLY • SECURITY CLEARANCE REQUIRED
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Federal Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {federalActions.map((action, index) => (
            <div
              key={index}
              className="bg-white border-4 border-federal-300 shadow-2xl p-8 hover:border-usgov-600 transition-colors duration-300 group"
            >
              {/* Classification Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {action.classification}
                </div>
                <div className="w-12 h-12 bg-usgov-600 flex items-center justify-center">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-federal-900 mb-4 uppercase tracking-wide">
                {action.title}
              </h3>

              <p className="text-federal-700 mb-6 font-medium">
                {action.description}
              </p>

              <button
                className={`w-full py-4 px-6 font-bold uppercase tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 rounded-government ${action.buttonStyle}`}
              >
                <span>{action.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Security Footer */}
              <div className="mt-4 pt-4 border-t-2 border-federal-200 text-center">
                <div className="text-xs text-federal-600 font-bold uppercase tracking-wide">
                  FEDERAL AUTHORIZATION REQUIRED
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Federal Declaration */}
        <div className="bg-federal-900 text-white border-4 border-usgov-600 p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
                Official Federal Infrastructure Standard
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-4 font-medium">
              Executive Order 14192 mandates protocol-based educational infrastructure.
            </p>
            <p className="text-lg text-gray-400 font-medium">
              No more vendor platforms. Only sovereign protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-usgov-600 hover:bg-usgov-700 text-white px-10 py-4 font-bold uppercase tracking-wide transition-colors duration-200 flex items-center space-x-2 border-2 border-usgov-700 rounded-government">
              <span>Begin Federal Implementation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-federal-900 transition-all duration-200 rounded-government">
              Contact Federal Liaison
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">
              AUTHORIZED BY EXECUTIVE ORDER 14192 • DEPARTMENT OF EDUCATION CERTIFIED
            </div>
          </div>
        </div>

        {/* Federal Compliance Indicators */}
        <div className="mt-16">
          <div className="bg-white border-4 border-federal-300 p-8 shadow-lg">
            <h4 className="text-xl font-bold text-federal-900 mb-6 uppercase tracking-wide text-center">
              Federal Compliance Certifications
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-federal-50 border-2 border-federal-300 p-4">
                <div className="w-8 h-8 bg-green-600 flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-federal-900 uppercase tracking-wide">EO 14192</span>
                <div className="text-xs text-federal-600 font-medium">COMPLIANT</div>
              </div>
              <div className="text-center bg-federal-50 border-2 border-federal-300 p-4">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-federal-900 uppercase tracking-wide">COPPA</span>
                <div className="text-xs text-federal-600 font-medium">CERTIFIED</div>
              </div>
              <div className="text-center bg-federal-50 border-2 border-federal-300 p-4">
                <div className="w-8 h-8 bg-purple-600 flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-federal-900 uppercase tracking-wide">SOC 2</span>
                <div className="text-xs text-federal-600 font-medium">TYPE II</div>
              </div>
              <div className="text-center bg-federal-50 border-2 border-federal-300 p-4">
                <div className="w-8 h-8 bg-orange-600 flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-federal-900 uppercase tracking-wide">FERPA</span>
                <div className="text-xs text-federal-600 font-medium">COMPLIANT</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-xs text-federal-600 font-bold uppercase tracking-wide">
                VERIFIED BY DEPARTMENT OF EDUCATION • NATIONAL SECURITY APPROVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
