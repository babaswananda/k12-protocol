'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    district: '',
    phone: '',
    studentCount: '',
    timeSlot: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Demo request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const timeSlots = [
    '9:00 AM - 10:00 AM EST',
    '10:00 AM - 11:00 AM EST',
    '11:00 AM - 12:00 PM EST',
    '1:00 PM - 2:00 PM EST',
    '2:00 PM - 3:00 PM EST',
    '3:00 PM - 4:00 PM EST'
  ]

  const demoFeatures = [
    'Live walkthrough of the .K-12 platform',
    'Personalized setup for your district',
    'Q&A with our education specialists',
    'Compliance and security overview',
    'Custom pricing discussion',
    'Implementation timeline planning'
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Personalized Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how .K-12 can transform your district's educational infrastructure. 
            Get a live demonstration tailored to your specific needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Demo Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request Your Demo
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Superintendent, IT Director"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                    School District *
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Students
                    </label>
                    <select
                      id="studentCount"
                      name="studentCount"
                      value={formData.studentCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-500">1 - 500 students</option>
                      <option value="501-2000">501 - 2,000 students</option>
                      <option value="2001-5000">2,001 - 5,000 students</option>
                      <option value="5001-10000">5,001 - 10,000 students</option>
                      <option value="10000+">10,000+ students</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your district's specific needs or questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-usgov-600 hover:bg-usgov-700 text-white px-8 py-4 rounded-government font-bold uppercase tracking-wide transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Submit Federal Request</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Demo Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              
              <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="font-semibold text-gray-900">45-minute session</span>
                </div>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="font-semibold text-gray-900">Dedicated education specialist</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="font-semibold text-gray-900">Flexible scheduling</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Demo Includes:
              </h3>
              <ul className="space-y-3 mb-8">
                {demoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our education specialists are available to answer questions and provide guidance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 mr-2">Phone:</span>
                    <span className="text-primary-600">1-800-K12-PROTOCOL</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 mr-2">Email:</span>
                    <span className="text-primary-600">demo@k-12.protocol</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
