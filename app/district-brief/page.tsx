'use client'

import { useState } from 'react'
import { Shield, Download, FileText, Lock, CheckCircle, ArrowRight } from 'lucide-react'
import { GlowingCard } from '@/components/ui/glowing-card'

export default function DistrictBriefPage() {
  const [formData, setFormData] = useState({
    districtName: '',
    contactName: '',
    email: '',
    position: '',
    clearanceLevel: ''
  })

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate PDF download
    const link = document.createElement('a')
    link.href = '/api/download-district-brief'
    link.download = 'K12-Protocol-Federal-District-Brief-CLASSIFIED.pdf'
    link.click()
    alert('Classified document download initiated. Please ensure secure handling of all materials.')
  }

  const briefSections = [
    {
      title: 'Executive Summary',
      description: 'Overview of Executive Order 14192 compliance requirements and .K-12 Protocol implementation',
      classification: 'OFFICIAL USE ONLY'
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed infrastructure requirements, security protocols, and system architecture',
      classification: 'CONFIDENTIAL'
    },
    {
      title: 'Implementation Timeline',
      description: 'Phased deployment schedule, training requirements, and federal oversight milestones',
      classification: 'RESTRICTED'
    },
    {
      title: 'Compliance Framework',
      description: 'FERPA, COPPA, SOC 2 Type II compliance documentation and audit procedures',
      classification: 'OFFICIAL USE ONLY'
    },
    {
      title: 'Security Protocols',
      description: 'Encryption standards, data sovereignty measures, and federal security requirements',
      classification: 'CONFIDENTIAL'
    },
    {
      title: 'Cost Analysis',
      description: 'Federal contract pricing, GSA schedule information, and ROI projections',
      classification: 'RESTRICTED'
    }
  ]

  return (
    <div className="min-h-screen bg-federal-50 relative">
      {/* Government Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Federal Header */}
      <div className="bg-federal-900 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Federal District Brief
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto">
            Comprehensive technical and compliance documentation for .K-12 Protocol implementation
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide">
            CLASSIFIED MATERIAL • AUTHORIZED ACCESS ONLY
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Access Request Form */}
          <div>
            <GlowingCard className="bg-white border-4 border-federal-300 p-8 shadow-xl" glowColor="rgba(29, 78, 216, 0.3)">
              <div className="mb-6">
                <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide mb-4">
                  CLASSIFIED DOCUMENT ACCESS
                </div>
                <h2 className="text-2xl font-bold text-federal-900 uppercase tracking-wide">
                  Security Clearance Verification
                </h2>
                <p className="text-federal-700 mt-2 font-medium">
                  Complete this form to access the classified .K-12 Protocol District Brief
                </p>
              </div>

              <form onSubmit={handleDownload} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                    District Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    value={formData.districtName}
                    onChange={(e) => setFormData({...formData, districtName: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                    Position/Title *
                  </label>
                  <select
                    required
                    className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                  >
                    <option value="">Select Position</option>
                    <option value="superintendent">Superintendent</option>
                    <option value="cto">Chief Technology Officer</option>
                    <option value="principal">Principal</option>
                    <option value="it-director">IT Director</option>
                    <option value="curriculum-director">Curriculum Director</option>
                    <option value="board-member">School Board Member</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                    Security Clearance Level *
                  </label>
                  <select
                    required
                    className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    value={formData.clearanceLevel}
                    onChange={(e) => setFormData({...formData, clearanceLevel: e.target.value})}
                  >
                    <option value="">Select Clearance Level</option>
                    <option value="public">Public (Basic Information Only)</option>
                    <option value="official">Official Use Only</option>
                    <option value="restricted">Restricted Access</option>
                    <option value="confidential">Confidential</option>
                  </select>
                </div>

                <div className="bg-federal-100 border-2 border-federal-300 p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      className="w-4 h-4"
                    />
                    <label htmlFor="agreement" className="text-sm font-bold text-federal-900 uppercase tracking-wide">
                      Confidentiality Agreement *
                    </label>
                  </div>
                  <p className="text-xs text-federal-700 font-medium">
                    I acknowledge that this document contains classified federal education infrastructure information 
                    and agree to handle all materials in accordance with federal security protocols and Executive Order 14192.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-usgov-600 hover:bg-usgov-700 text-white px-8 py-4 font-bold uppercase tracking-wide transition-colors duration-200 flex items-center justify-center space-x-2 rounded-government"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Classified Brief</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </GlowingCard>
          </div>

          {/* Brief Contents */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-federal-900 mb-6 uppercase tracking-wide">
                Document Contents
              </h2>
              <div className="space-y-4">
                {briefSections.map((section, index) => (
                  <GlowingCard key={index} className="bg-white border-2 border-federal-300 p-6" glowColor="rgba(29, 78, 216, 0.2)">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-federal-900 uppercase tracking-wide text-sm">
                        {section.title}
                      </h3>
                      <div className="bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">
                        {section.classification}
                      </div>
                    </div>
                    <p className="text-federal-700 text-sm font-medium">
                      {section.description}
                    </p>
                  </GlowingCard>
                ))}
              </div>
            </div>

            {/* Document Info */}
            <GlowingCard className="bg-federal-900 text-white p-8" glowColor="rgba(29, 78, 216, 0.3)">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Document Information
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Document Type:</span>
                  <span className="font-bold">Federal Technical Brief</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Classification:</span>
                  <span className="font-bold">CONFIDENTIAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pages:</span>
                  <span className="font-bold">127 pages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Last Updated:</span>
                  <span className="font-bold">December 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">File Size:</span>
                  <span className="font-bold">15.2 MB</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-bold">Executive Order 14192 Compliant</span>
                </div>
              </div>
            </GlowingCard>
          </div>
        </div>
      </div>
    </div>
  )
}
