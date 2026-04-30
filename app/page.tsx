import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/ProblemSection'
import SystemSection from '@/components/home/SystemSection'
import ServicesSection from '@/components/home/ServicesSection'
import PackagesSection from '@/components/home/PackagesSection'
import AuditSection from '@/components/home/AuditSection'
import ReviewTrialSection from '@/components/home/ReviewTrialSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FoundersSection from '@/components/home/FoundersSection'
import FAQSection from '@/components/home/FAQSection'
import CustomServicesSection from '@/components/home/CustomServicesSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <ServicesSection />
      <PackagesSection />
      <AuditSection />
      <ReviewTrialSection />
      <TestimonialsSection />
      <FoundersSection />
      <CustomServicesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
