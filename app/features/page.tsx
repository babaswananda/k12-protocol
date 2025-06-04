import Features from '@/components/Features'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Features - .K-12 Portal',
  description: 'Explore the comprehensive features of the .K-12 AI-native education protocol.',
}

export default function FeaturesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete AI-Native Education Stack
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your district needs to transition to the future of education, 
            built on protocol-native infrastructure.
          </p>
        </div>
      </div>
      <Features />
      <CTASection />
    </>
  )
}
