import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Pizza } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Catering', path: '/catering' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="glass-nav h-20 flex items-center px-6 md:px-12 justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <Pizza className="text-primary w-8 h-8 transition-transform group-hover:rotate-45" />
        <span className="text-2xl font-display font-bold tracking-tight">
          FireStone <span className="text-primary">PIZZA</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary ${
              location.pathname === link.path ? 'text-primary' : 'text-secondary/70'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/menu" className="btn-primary py-2 text-sm">Order Now</Link>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-secondary/10 p-6 flex flex-col gap-4 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-primary' : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/menu" className="btn-primary text-center">Order Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
