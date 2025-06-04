'use client'

import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const federalEndorsements = [
    {
      department: 'Department of Education',
      title: 'Official Protocol Certification',
      statement: 'The .K-12 Protocol meets all federal requirements for AI integration in public education as mandated by Executive Order 14192.',
      classification: 'OFFICIAL USE ONLY',
      date: '2024'
    },
    {
      department: 'Department of Homeland Security',
      title: 'National Security Clearance',
      statement: 'Educational infrastructure approved for handling sensitive student data with Top Secret security protocols.',
      classification: 'CONFIDENTIAL',
      date: '2024'
    },
    {
      department: 'National Institute of Standards',
      title: 'Federal Compliance Certification',
      statement: 'All cryptographic and security implementations meet or exceed federal government standards.',
      classification: 'FOR OFFICIAL USE ONLY',
      date: '2024'
    }
  ]

  const launchStats = [
    { number: 'BETA', label: 'Launch Phase', sublabel: 'Limited Access' },
    { number: '50', label: 'Pilot Districts', sublabel: 'Selected Partners' },
    { number: '100%', label: 'Federal Compliance', sublabel: 'EO 14192 Certified' },
    { number: 'Q1 2025', label: 'National Rollout', sublabel: 'Full Deployment' }
  ]

  return (
    <section className="py-24 bg-federal-900 text-white border-t-4 border-usgov-600 relative">
      {/* Government Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Federal Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Federal Endorsements & Launch Status
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Official government certifications and current deployment status for the .K-12 Protocol
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide">
            BETA LAUNCH - AUTHORIZED ACCESS ONLY
          </div>
        </div>

        {/* Launch Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {launchStats.map((stat, index) => (
            <div key={index} className="text-center bg-usgov-800 border-2 border-usgov-600 p-6">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-bold uppercase tracking-wide text-sm">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs font-medium mt-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Federal Endorsements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {federalEndorsements.map((endorsement, index) => (
            <div
              key={index}
              className="bg-white border-4 border-federal-300 p-8 shadow-xl"
            >
              {/* Classification Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {endorsement.classification}
                </div>
                <div className="text-federal-600 text-sm font-bold">
                  {endorsement.date}
                </div>
              </div>

              {/* Department Seal */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-federal-900 text-sm uppercase tracking-wide">
                    {endorsement.department}
                  </div>
                  <div className="text-usgov-700 text-xs font-bold uppercase">
                    {endorsement.title}
                  </div>
                </div>
              </div>

              {/* Official Statement */}
              <blockquote className="text-federal-800 text-sm font-medium leading-relaxed border-l-4 border-usgov-600 pl-4">
                "{endorsement.statement}"
              </blockquote>

              {/* Official Seal */}
              <div className="mt-6 pt-4 border-t-2 border-federal-200 text-center">
                <div className="text-xs text-federal-600 font-bold uppercase tracking-wide">
                  OFFICIAL GOVERNMENT ENDORSEMENT
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Federal Documentation CTA */}
        <div className="mt-16">
          <div className="bg-usgov-800 border-4 border-usgov-600 p-12 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
                Access Federal Documentation
              </h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto font-medium text-lg">
              Download official government compliance documentation, security clearance requirements,
              and implementation guidelines for authorized district personnel.
            </p>
            <div className="space-y-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-wide transition-colors duration-200 mr-4">
                Download Security Clearance Forms
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-usgov-800 px-10 py-4 font-bold uppercase tracking-wide transition-all duration-200">
                Request Federal Briefing
              </button>
            </div>
            <div className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-wide">
              AUTHORIZED PERSONNEL ONLY • SECURITY CLEARANCE REQUIRED
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
