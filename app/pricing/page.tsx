import PricingTable from '@/components/PricingTable'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Pricing - .K-12 Portal',
  description: 'Choose the right .K-12 plan for your district. Transparent pricing with no hidden fees.',
}

export default function PricingPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your district size. All plans include training, 
            support, and compliance guarantees.
          </p>
        </div>
      </div>
      <PricingTable />
      <CTASection />
    </>
  )
}
