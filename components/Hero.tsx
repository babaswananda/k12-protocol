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
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50 to-purple-100 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <ParticleBackground />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-success-100 to-primary-100 border border-success-200 text-success-800 text-sm font-semibold mb-8 animate-scale-in shadow-lg">
            <CheckCircle className="w-5 h-5 mr-2 animate-pulse" />
            Executive Order 14192 Compliant
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight animate-slide-up">
            <span className="block">The Future of</span>
            <span className="block bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent animate-gradient-x">
              Public Education
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-700">
              Has a Handle
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Secure your school's official <span className="font-semibold text-primary-600">.K-12 domain</span> and unlock 
            AI-native tools, student identity, and district-wide intelligence — in compliance with EO 14192.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button className="group relative bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-xl hover:scale-105">
              <span className="relative z-10">Reserve Your School's Handle</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group border-2 border-gray-300 hover:border-primary-600 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-primary-600 px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>View District Pricing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your district email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Demo
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-2">
              Schedule a personalized demo for your district
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-primary-200 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by forward-thinking districts</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">Springfield USD</div>
              <div className="text-gray-400 font-semibold">Metro Public Schools</div>
              <div className="text-gray-400 font-semibold">Valley Education District</div>
              <div className="text-gray-400 font-semibold">Riverside County Schools</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-gradient-to-br from-primary-400 to-indigo-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  )
}

export default Hero
