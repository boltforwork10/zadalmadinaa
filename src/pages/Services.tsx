import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import HowWeWork from '@/components/HowWeWork';
import { SERVICES, IMAGES } from '@/data';

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Technical Services"
        subtitle="A comprehensive range of technical services delivered with precision and expertise."
        image={IMAGES.pageHeaders.services}
        breadcrumb="Services"
      />

      <section className="py-24 md:py-32 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
              Complete Service Catalog
            </h2>
            <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              From installation and maintenance to finishing works — everything your building needs under one roof.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
    </>
  );
}
