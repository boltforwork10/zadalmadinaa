import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CircleCheck as CheckCircle, User, Upload } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CONTACT, SERVICE_TYPES, IMAGES } from '@/data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Reach out to us for a consultation or quotation. Our team is ready to assist with all your technical service needs."
        image={IMAGES.pageHeaders.contact}
        breadcrumb="Contact Us"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <Reveal>
              <div className="h-full">
                <h3 className="font-heading text-2xl text-burgundy-800 font-bold mb-6 tracking-tight">
                  Let's Discuss Your Project
                </h3>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Reach out to us for a consultation or quotation. Our team is ready to assist with all
                  your technical service needs in Dubai.
                </p>

                <div className="space-y-6">
                  <a href={`tel:${CONTACT.phone1Raw}`} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-gold-400 transition-all duration-300 shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-burgundy-800 font-semibold text-lg group-hover:text-gold-600 transition-colors">
                        {CONTACT.phone1}
                      </p>
                    </div>
                  </a>

                  <a href={`tel:${CONTACT.phone2Raw}`} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-gold-400 transition-all duration-300 shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Landline</p>
                      <p className="text-burgundy-800 font-semibold text-lg group-hover:text-gold-600 transition-colors">
                        {CONTACT.phone2}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${CONTACT.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-gold-400 transition-all duration-300 shrink-0">
                      <WhatsAppIcon size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                      <p className="text-burgundy-800 font-semibold text-lg group-hover:text-gold-600 transition-colors">
                        {CONTACT.whatsapp}
                      </p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-gold-400 transition-all duration-300 shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-burgundy-800 font-semibold text-lg group-hover:text-gold-600 transition-colors break-all">
                        {CONTACT.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</p>
                      <p className="text-burgundy-800 font-semibold text-lg">{CONTACT.location}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-burgundy-700 text-white font-semibold hover:bg-burgundy-800 transition-all duration-300"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="bg-offwhite rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="font-heading text-2xl text-burgundy-800 font-bold mb-3 tracking-tight">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-500">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Name" icon={<User size={16} />}>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="form-input"
                        />
                      </FormField>
                      <FormField label="Phone Number" icon={<Phone size={16} />}>
                        <input
                          type="tel"
                          required
                          placeholder="+971 ..."
                          className="form-input"
                        />
                      </FormField>
                    </div>

                    <FormField label="Email" icon={<Mail size={16} />}>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </FormField>

                    <FormField label="Service Type">
                      <select required defaultValue="" className="form-input appearance-none cursor-pointer">
                        <option value="" disabled>Select a service</option>
                        {SERVICE_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Project Details">
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your project requirements..."
                        className="form-input resize-none"
                      />
                    </FormField>

                    <FormField label="Attach File/Image" icon={<Upload size={16} />}>
                      <input
                        type="file"
                        className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-burgundy-700 file:text-white hover:file:bg-burgundy-800 file:cursor-pointer cursor-pointer"
                      />
                    </FormField>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-gold text-burgundy-900 font-bold tracking-wide hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-[1.01]"
                    >
                      <Send size={18} />
                      Submit Quote Request
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>

          {/* Google Maps */}
          <Reveal delay={0.2} className="mt-16">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Zad Almadina Location — Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5783.064486784384!2d55.2257!3d25.1426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f275d2b1d4b7b%3A0x0!2sAl%20Quoz%20First%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-sm font-medium text-burgundy-800 mb-2">
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}
