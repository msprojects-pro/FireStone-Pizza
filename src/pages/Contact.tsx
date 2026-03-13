import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Music, Users } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 px-6 md:px-12 text-center space-y-4">
        <SectionReveal>
          <h1 className="text-5xl md:text-7xl font-bold">Get In Touch</h1>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            We'd love to hear from you. Whether it's a question about our menu, 
            a catering request, or just to say hi.
          </p>
        </SectionReveal>
      </section>

      {/* Map Placeholder */}
      <section className="mt-20 px-6 md:px-12">
        <SectionReveal className="max-w-7xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden relative shadow-lg">
          <div className="absolute inset-0 bg-secondary/5 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute z-10 bg-white p-8 rounded-3xl shadow-2xl text-center space-y-4 max-w-xs">
              <MapPin className="text-primary w-10 h-10 mx-auto" />
              <h3 className="text-xl font-bold">Find Us</h3>
              <p className="text-sm text-secondary/60">{BUSINESS_INFO.address}</p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary py-2 text-xs inline-block"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Contact Cards */}
      <section className="mt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectionReveal className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-secondary/5 space-y-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
              <Mail size={28} />
            </div>
            <h3 className="text-2xl font-bold">General</h3>
            <p className="text-secondary/60 text-sm">For general questions and feedback.</p>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary font-bold hover:underline block">
              {BUSINESS_INFO.email}
            </a>
          </SectionReveal>

          <SectionReveal delay={0.1} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-secondary/5 space-y-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
              <Phone size={28} />
            </div>
            <h3 className="text-2xl font-bold">Orders</h3>
            <p className="text-secondary/60 text-sm">Place an order or check status.</p>
            <a href={`mailto:${BUSINESS_INFO.ordersEmail}`} className="text-primary font-bold hover:underline block">
              {BUSINESS_INFO.ordersEmail}
            </a>
            <p className="text-sm font-bold">{BUSINESS_INFO.phone}</p>
          </SectionReveal>

          <SectionReveal delay={0.2} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-secondary/5 space-y-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold">Catering</h3>
            <p className="text-secondary/60 text-sm">Events, parties, and large orders.</p>
            <a href={`mailto:${BUSINESS_INFO.cateringEmail}`} className="text-primary font-bold hover:underline block">
              {BUSINESS_INFO.cateringEmail}
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Social Footer */}
      <section className="mt-32 border-t border-secondary/5 pt-20 px-6 md:px-12 text-center space-y-12">
        <SectionReveal className="space-y-4">
          <h2 className="text-4xl font-bold">Follow the Fire</h2>
          <p className="text-secondary/60">Join our community for daily specials and behind-the-scenes.</p>
        </SectionReveal>

        <div className="flex justify-center gap-8 md:gap-16">
          <SectionReveal delay={0.1}>
            <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white shadow-md rounded-3xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                <Instagram size={32} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-40">Instagram</span>
            </a>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white shadow-md rounded-3xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                <Facebook size={32} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-40">Facebook</span>
            </a>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <a href={BUSINESS_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white shadow-md rounded-3xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                <Music size={32} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-40">TikTok</span>
            </a>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
