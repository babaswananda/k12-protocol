import Hero from '@/components/Hero'
import Features from '@/components/Features'
import PricingTable from '@/components/PricingTable'
import CTASection from '@/components/CTASection'
import WhyK12Section from '@/components/WhyK12Section'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyK12Section />
      <Features />
      <TestimonialsSection />
      <PricingTable />
      <FAQSection />
      <CTASection />
    </>
  )
}
