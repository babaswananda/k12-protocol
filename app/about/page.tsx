import { Shield, Users, Target, Award, ArrowRight } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'About - .K-12 Portal',
  description: 'Learn about the mission, vision, and team behind the .K-12 AI-native education protocol.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every decision we make prioritizes the safety and privacy of students and educators.'
    },
    {
      icon: Users,
      title: 'Educator Empowerment',
      description: 'We build tools that enhance human teaching, never replace it.'
    },
    {
      icon: Target,
      title: 'Student Success',
      description: 'Our ultimate goal is improving learning outcomes for every student.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in technology, compliance, and service.'
    }
  ]

  const team = [
    {
      name: 'Dr. Elena Rodriguez',
      title: 'Chief Executive Officer',
      background: 'Former Superintendent with 20+ years in education leadership',
      expertise: 'Educational policy, district management, AI ethics'
    },
    {
      name: 'Marcus Chen',
      title: 'Chief Technology Officer',
      background: 'Former Principal Engineer at leading EdTech companies',
      expertise: 'Distributed systems, cryptography, educational technology'
    },
    {
      name: 'Dr. Amara Johnson',
      title: 'Chief Education Officer',
      background: 'Former classroom teacher and curriculum specialist',
      expertise: 'Pedagogy, learning sciences, AI-assisted instruction'
    },
    {
      name: 'David Kim',
      title: 'Chief Security Officer',
      background: 'Former cybersecurity lead for federal education initiatives',
      expertise: 'Information security, compliance, risk management'
    }
  ]

  const milestones = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Founded with mission to create protocol-native education infrastructure'
    },
    {
      year: '2024',
      title: 'First Districts',
      description: 'Launched pilot program with 10 forward-thinking school districts'
    },
    {
      year: '2024',
      title: 'EO 14192 Compliance',
      description: 'Achieved full compliance certification for federal AI mandates'
    },
    {
      year: '2024',
      title: 'Scale',
      description: 'Expanded to serve 150+ districts and 500,000+ students nationwide'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-federal-900 to-federal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future of Education Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We believe education deserves better than platforms. It deserves protocols. 
                Infrastructure that schools own, control, and can build upon for generations.
              </p>
              <button className="bg-white text-federal-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                <span>Join Our Mission</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To provide every K-12 institution with sovereign, AI-native infrastructure 
                that empowers educators, protects students, and prepares communities for 
                the future of learning.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                A world where every school district owns their digital destiny, where 
                AI enhances human potential, and where education technology serves 
                learning, not corporate interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders from education, technology, and policy backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {member.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {member.background}
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Expertise:</span> {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in building the future of education infrastructure
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-primary-600">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2 mr-8"></div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-primary-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always happy to discuss our mission, technology, and vision 
            for the future of education with fellow educators and leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule a Conversation
            </button>
            <button className="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Read Our Blog
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
