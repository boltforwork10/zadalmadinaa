import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CircleCheck as CheckCircle, User, Upload } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
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
                  <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-gold-400 transition-all duration-300 shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-burgundy-800 font-semibold text-lg group-hover:text-gold-600 transition-colors">
                        {CONTACT.phone}
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
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57829.69259804047!2d55.2309735!3d25.20485775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c6f1%3A0xb06f51a939bb531!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
