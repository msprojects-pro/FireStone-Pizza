import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music, MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO, HOURS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold">
            FireStone <span className="text-primary">PIZZA</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Authentic flavor, fresh from the oven. Since 2020, we've been serving Orlando's favorite wood-fired pizzas.
          </p>
          <div className="flex gap-4">
            <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href={BUSINESS_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Music size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-widest text-primary">Hours</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between">
                <span>{h.day}</span>
                <span>{h.open} - {h.close}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-widest text-primary">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>{BUSINESS_INFO.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>{BUSINESS_INFO.email}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/catering" className="hover:text-primary transition-colors">Catering</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} FireStone Pizza. All rights reserved.</p>
      </div>
    </footer>
  );
};
