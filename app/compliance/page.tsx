import { Shield, CheckCircle, FileText, Users, Lock, Award } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Compliance - .K-12 Portal',
  description: 'Learn how .K-12 meets all federal and state education compliance requirements.',
}

export default function CompliancePage() {
  const complianceStandards = [
    {
      icon: Shield,
      title: 'Executive Order 14192',
      description: 'Full compliance with federal AI integration mandates for public education',
      status: 'Certified',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'COPPA Compliance',
      description: 'Children\'s Online Privacy Protection Act certification for student data',
      status: 'Certified',
      color: 'text-green-600'
    },
    {
      icon: Lock,
      title: 'FERPA Compliant',
      description: 'Family Educational Rights and Privacy Act full compliance',
      status: 'Certified',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'SOC 2 Type II',
      description: 'System and Organization Controls security framework certification',
      status: 'Certified',
      color: 'text-green-600'
    },
    {
      icon: FileText,
      title: 'GDPR Ready',
      description: 'General Data Protection Regulation compliance for international districts',
      status: 'Ready',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'State Standards',
      description: 'Meets all 50 state education technology and privacy requirements',
      status: 'Verified',
      color: 'text-green-600'
    }
  ]

  const securityFeatures = [
    'End-to-end encryption for all communications',
    'Zero-knowledge architecture for student data',
    'Multi-factor authentication for all users',
    'Regular third-party security audits',
    'Incident response and breach notification protocols',
    'Data residency controls for local compliance'
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-federal-900 to-federal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4 mr-2" />
            Fully Compliant & Certified
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Compliance from Day One
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            .K-12 meets and exceeds all federal, state, and international compliance requirements 
            for educational technology and student data protection.
          </p>
        </div>
      </div>

      {/* Compliance Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of compliance across all regulatory frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mr-4">
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {standard.title}
                    </h3>
                    <span className={`text-sm font-medium ${standard.color}`}>
                      {standard.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Security by Design
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every aspect of .K-12 is built with security and privacy as core principles, 
                not afterthoughts.
              </p>
              <ul className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Compliance Documentation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">SOC 2 Type II Report</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">COPPA Certification</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Privacy Impact Assessment</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">EO 14192 Compliance Guide</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Order 14192 Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive Order 14192 Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our infrastructure is specifically designed to meet the U.S. Government's 
              official directive on safe, responsible AI integration in schools.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Safe AI Implementation
                </h3>
                <p className="text-gray-600">
                  All AI systems undergo rigorous testing and validation before deployment
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Human Oversight
                </h3>
                <p className="text-gray-600">
                  Educators maintain control and oversight of all AI-assisted processes
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4 mx-auto">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Transparent Operations
                </h3>
                <p className="text-gray-600">
                  Full documentation and audit trails for all AI decision-making processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
