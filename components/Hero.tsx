'use client'

import { useState } from 'react'
import { ArrowRight, Shield, Zap, Users, BookOpen, CheckCircle } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

const Hero = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  const features = [
    {
      icon: Shield,
      title: 'Protocol-Native Identity',
      description: 'Sovereign .k-12 domains for every district'
    },
    {
      icon: Zap,
      title: 'AI-Enhanced Learning',
      description: 'Personalized agents for every student'
    },
    {
      icon: Users,
      title: 'District Control',
      description: 'Complete administrative oversight'
    },
    {
      icon: BookOpen,
      title: 'EO 14192 Compliant',
      description: 'Aligned with federal AI directives'
    }
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-federal-50 to-white min-h-screen flex items-center">
      {/* Government Seal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-usgov-500/5 via-transparent to-federal-500/5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-federal-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 border border-usgov-200 rounded-full opacity-20"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Federal Compliance Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white border-4 border-usgov-600 text-usgov-800 text-sm font-bold mb-12 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-usgov-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-federal-600">CERTIFIED COMPLIANT</div>
                <div className="font-bold">Executive Order 14192</div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-federal-900 mb-8 leading-tight">
            <span className="block text-federal-600 text-2xl md:text-3xl lg:text-4xl font-normal uppercase tracking-wider mb-4">
              United States Department of Education
            </span>
            <span className="block">Official AI-Native Protocol</span>
            <span className="block text-usgov-600">for Public Education</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-6 text-federal-700 font-normal">
              Secure • Compliant • Sovereign
            </span>
          </h1>

          {/* Government Subheadline */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-federal-700 mb-6 leading-relaxed font-medium">
              The official infrastructure protocol mandated by Executive Order 14192 for the integration of
              artificial intelligence in American public education systems.
            </p>
            <div className="bg-white border-l-4 border-usgov-600 p-6 shadow-lg">
              <p className="text-lg text-federal-800 leading-relaxed">
                <span className="font-bold text-usgov-700">.K-12 Protocol</span> provides school districts with
                sovereign, AI-native infrastructure that ensures compliance, security, and educational excellence
                for the next generation of American students.
              </p>
            </div>
          </div>

          {/* Government CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-usgov-600 hover:bg-usgov-700 text-white px-12 py-4 text-lg font-bold uppercase tracking-wide transition-colors duration-200 flex items-center space-x-3 shadow-lg border-2 border-usgov-700">
              <Shield className="w-6 h-6" />
              <span>Secure District Handle</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-federal-400 hover:border-usgov-600 bg-white text-federal-800 hover:text-usgov-700 px-12 py-4 text-lg font-bold uppercase tracking-wide transition-all duration-200 flex items-center space-x-3">
              <Users className="w-6 h-6" />
              <span>Request Official Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Official Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white border-2 border-federal-300 p-8 shadow-lg">
              <h3 className="text-xl font-bold text-federal-900 mb-4 uppercase tracking-wide text-center">
                Official District Registration
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="District Name"
                    className="px-4 py-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Official District Email"
                    className="px-4 py-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-usgov-600 hover:bg-usgov-700 text-white px-6 py-4 font-bold uppercase tracking-wide transition-colors duration-200"
                >
                  Submit Official Request
                </button>
              </form>
              <p className="text-sm text-federal-600 mt-4 text-center font-medium">
                Authorized personnel only • Secure government processing
              </p>
            </div>
          </div>

          {/* Government Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-federal-300 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-usgov-600"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-usgov-600 mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-federal-900 mb-3 uppercase tracking-wide text-center">
                  {feature.title}
                </h3>
                <p className="text-federal-700 text-sm leading-relaxed text-center font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Government Trust Indicators */}
          <div className="mt-20 pt-8 border-t-4 border-federal-300">
            <div className="bg-federal-50 p-8 border-2 border-federal-200">
              <h3 className="text-lg font-bold text-federal-900 mb-6 uppercase tracking-wide text-center">
                Certified Implementation Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white border border-federal-300 p-4 shadow">
                    <div className="text-federal-800 font-bold text-sm">CALIFORNIA</div>
                    <div className="text-federal-600 text-xs">Department of Education</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white border border-federal-300 p-4 shadow">
                    <div className="text-federal-800 font-bold text-sm">TEXAS</div>
                    <div className="text-federal-600 text-xs">Education Agency</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white border border-federal-300 p-4 shadow">
                    <div className="text-federal-800 font-bold text-sm">NEW YORK</div>
                    <div className="text-federal-600 text-xs">State Education Dept</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white border border-federal-300 p-4 shadow">
                    <div className="text-federal-800 font-bold text-sm">FLORIDA</div>
                    <div className="text-federal-600 text-xs">Education Department</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero
