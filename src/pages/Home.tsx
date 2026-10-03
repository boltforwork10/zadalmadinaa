import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
