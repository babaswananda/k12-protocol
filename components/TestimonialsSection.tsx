'use client'

import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Martinez',
      title: 'Superintendent',
      district: 'Springfield Unified School District',
      image: '/api/placeholder/64/64',
      quote: 'The .K-12 protocol has transformed how we approach education technology. Our teachers are more empowered, our students are more engaged, and our data is more secure than ever.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      district: 'Metro Public Schools',
      image: '/api/placeholder/64/64',
      quote: 'Implementation was seamless, and the AI-assisted features have reduced our administrative workload by 40%. The compliance guarantees give us complete peace of mind.',
      rating: 5
    },
    {
      name: 'Jennifer Rodriguez',
      title: 'Principal',
      district: 'Valley Education District',
      image: '/api/placeholder/64/64',
      quote: 'Our students love their personalized AI tutors, and parents appreciate the transparent communication. .K-12 has brought our entire community closer together.',
      rating: 5
    },
    {
      name: 'Dr. Robert Thompson',
      title: 'Director of Innovation',
      district: 'Riverside County Schools',
      image: '/api/placeholder/64/64',
      quote: 'The protocol-native approach means we\'re not locked into any vendor. We own our data, our processes, and our future. That\'s true educational sovereignty.',
      rating: 5
    }
  ]

  const stats = [
    { number: '150+', label: 'School Districts' },
    { number: '500K+', label: 'Students Served' },
    { number: '25K+', label: 'Educators Empowered' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Education Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what superintendents, principals, and education technology leaders 
            are saying about .K-12
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-primary-600" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.title}
                  </div>
                  <div className="text-primary-600 text-sm font-medium">
                    {testimonial.district}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to See Detailed Case Studies?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Download our comprehensive case studies to see exactly how districts 
              like yours have implemented .K-12 and achieved measurable results.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
