import React from 'react';
import { Users, Home, ShoppingBag, Send } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

const Catering: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Services Header */}
      <section className="pt-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionReveal className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">Catering & Services</h1>
            <p className="text-secondary/60 max-w-2xl mx-auto">
              Bring the FireStone experience to your next event. From intimate gatherings to large corporate parties.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-6 border border-secondary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold">Private Parties</h3>
              <p className="text-secondary/60 leading-relaxed">
                Birthdays, anniversaries, or just a Friday night. We handle the food, you handle the fun.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1} className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-6 border border-secondary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Home size={28} />
              </div>
              <h3 className="text-2xl font-bold">Family Dining</h3>
              <p className="text-secondary/60 leading-relaxed">
                A warm, welcoming atmosphere for the whole family. Kids love watching the fire!
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2} className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-6 border border-secondary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-2xl font-bold">Online Ordering</h3>
              <p className="text-secondary/60 leading-relaxed">
                Fast, fresh, and convenient. Order your favorite pies for pickup or delivery.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="mt-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-secondary text-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-12 md:w-1/2 space-y-8 bg-primary">
            <h2 className="text-4xl font-bold">Plan Your Event</h2>
            <p className="text-white/80 leading-relaxed">
              Fill out the form and our catering manager will get back to you within 24 hours to discuss your needs.
            </p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                Customizable Menus
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                On-site Wood-Fired Oven (Optional)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                Full Service Staffing
              </li>
            </ul>
          </div>

          <div className="p-12 md:w-1/2 bg-white text-secondary">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                <input type="text" className="w-full border-b border-secondary/20 py-2 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                <input type="email" className="w-full border-b border-secondary/20 py-2 focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Event Date</label>
                <input type="date" className="w-full border-b border-secondary/20 py-2 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                <textarea className="w-full border-b border-secondary/20 py-2 focus:border-primary outline-none transition-colors resize-none" rows={3} placeholder="Tell us about your event..." />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;
