'use client'

import { useState } from 'react'
import { Shield, Users, Calendar, CheckCircle, ArrowRight, Clock, Star } from 'lucide-react'
import { GlowingCard } from '@/components/ui/glowing-card'

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    districtName: '',
    contactName: '',
    email: '',
    phone: '',
    position: '',
    state: '',
    studentCount: '',
    urgency: '',
    currentSystems: '',
    interests: []
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Application submitted successfully! You have been added to the National Security Waitlist. Priority access notifications will be sent based on federal deployment schedule.')
  }

  const waitlistBenefits = [
    {
      icon: Star,
      title: 'Priority Access',
      description: 'First access to new federal infrastructure features and capabilities'
    },
    {
      icon: Shield,
      title: 'Early Security Clearance',
      description: 'Expedited security clearance processing for authorized personnel'
    },
    {
      icon: Calendar,
      title: 'Beta Program Participation',
      description: 'Exclusive participation in federal pilot programs and testing phases'
    },
    {
      icon: Users,
      title: 'Federal Liaison Support',
      description: 'Direct access to dedicated government implementation specialists'
    }
  ]

  const deploymentPhases = [
    {
      phase: 'Phase 1',
      timeline: 'Q1 2025',
      description: 'Initial 50 pilot districts (Currently Active)',
      status: 'active'
    },
    {
      phase: 'Phase 2',
      timeline: 'Q2 2025',
      description: 'Expansion to 200 districts across 10 states',
      status: 'upcoming'
    },
    {
      phase: 'Phase 3',
      timeline: 'Q3 2025',
      description: 'National rollout to 1,000+ districts',
      status: 'planned'
    },
    {
      phase: 'Phase 4',
      timeline: 'Q4 2025',
      description: 'Full federal mandate compliance nationwide',
      status: 'planned'
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
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              National Security Waitlist
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto">
            Join the priority deployment queue for .K-12 Protocol federal infrastructure implementation
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide">
            FEDERAL DEPLOYMENT SCHEDULE • PRIORITY ACCESS PROGRAM
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Waitlist Application Form */}
          <div>
            <GlowingCard className="bg-white border-4 border-federal-300 p-8 shadow-xl" glowColor="rgba(29, 78, 216, 0.3)">
              <div className="mb-6">
                <div className="bg-usgov-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide mb-4">
                  PRIORITY ACCESS APPLICATION
                </div>
                <h2 className="text-2xl font-bold text-federal-900 uppercase tracking-wide">
                  Submit Federal Application
                </h2>
                <p className="text-federal-700 mt-2 font-medium">
                  Complete this form to join the national deployment waitlist
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      State *
                    </label>
                    <select
                      required
                      className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="NY">New York</option>
                      <option value="FL">Florida</option>
                      <option value="IL">Illinois</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="OH">Ohio</option>
                      <option value="other">Other State</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      Position *
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
                      <option value="board-member">School Board Member</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                      Student Population
                    </label>
                    <select
                      className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                    >
                      <option value="">Select Range</option>
                      <option value="under-500">Under 500 students</option>
                      <option value="500-2000">500 - 2,000 students</option>
                      <option value="2000-10000">2,000 - 10,000 students</option>
                      <option value="over-10000">Over 10,000 students</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                      Implementation Urgency
                    </label>
                    <select
                      className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                      value={formData.urgency}
                      onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    >
                      <option value="">Select Priority</option>
                      <option value="immediate">Immediate (Q1 2025)</option>
                      <option value="high">High Priority (Q2 2025)</option>
                      <option value="standard">Standard (Q3 2025)</option>
                      <option value="flexible">Flexible Timeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                    Current Technology Systems
                  </label>
                  <textarea
                    rows={3}
                    className="w-full p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    placeholder="Describe your current educational technology infrastructure..."
                    value={formData.currentSystems}
                    onChange={(e) => setFormData({...formData, currentSystems: e.target.value})}
                  />
                </div>

                <div className="bg-federal-100 border-2 border-federal-300 p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      id="federal-agreement"
                      required
                      className="w-4 h-4"
                    />
                    <label htmlFor="federal-agreement" className="text-sm font-bold text-federal-900 uppercase tracking-wide">
                      Federal Deployment Agreement *
                    </label>
                  </div>
                  <p className="text-xs text-federal-700 font-medium">
                    I acknowledge that .K-12 Protocol deployment follows federal mandates under Executive Order 14192 
                    and agree to participate in the national implementation schedule as determined by the Department of Education.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-usgov-600 hover:bg-usgov-700 text-white px-8 py-4 font-bold uppercase tracking-wide transition-colors duration-200 flex items-center justify-center space-x-2 rounded-government"
                >
                  <Shield className="w-5 h-5" />
                  <span>Join Federal Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </GlowingCard>
          </div>

          {/* Waitlist Information */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-federal-900 mb-6 uppercase tracking-wide">
                Priority Access Benefits
              </h2>
              <div className="space-y-4">
                {waitlistBenefits.map((benefit, index) => (
                  <GlowingCard key={index} className="bg-white border-2 border-federal-300 p-6" glowColor="rgba(29, 78, 216, 0.2)">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-usgov-600 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-federal-900 uppercase tracking-wide text-sm">
                          {benefit.title}
                        </h3>
                        <p className="text-federal-700 text-sm font-medium">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </GlowingCard>
                ))}
              </div>
            </div>

            {/* Deployment Timeline */}
            <GlowingCard className="bg-federal-900 text-white p-8" glowColor="rgba(29, 78, 216, 0.3)">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">
                Federal Deployment Schedule
              </h3>
              <div className="space-y-4">
                {deploymentPhases.map((phase, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-usgov-800 border border-usgov-600">
                    <div className={`w-4 h-4 rounded-full ${
                      phase.status === 'active' ? 'bg-green-400' : 
                      phase.status === 'upcoming' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm uppercase tracking-wide">{phase.phase}</span>
                        <span className="text-xs font-bold">{phase.timeline}</span>
                      </div>
                      <p className="text-sm text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-bold">Currently accepting Phase 2 applications</span>
                </div>
              </div>
            </GlowingCard>
          </div>
        </div>
      </div>
    </div>
  )
}
