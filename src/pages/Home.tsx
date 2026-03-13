import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Flame, Utensils } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { MENU } from '../constants';

const Home: React.FC = () => {
  const featuredPizzas = MENU.filter(m => m.category === 'pizza').slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
            alt="Pizza Hero" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl text-white font-bold leading-tight"
          >
            Authentic Flavor, <br />
            <span className="text-primary italic">Fresh From the Oven.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Experience the art of wood-fired pizza in the heart of Orlando. 
            Crafted with passion, served with love.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/menu" className="btn-primary flex items-center justify-center gap-2">
              View Menu <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary flex items-center justify-center gap-2">
              Visit Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <SectionReveal className="space-y-4 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
              <Flame size={32} />
            </div>
            <h3 className="text-2xl font-bold">Wood-Fired</h3>
            <p className="text-secondary/60">Our custom stone oven burns at 800°F to create that perfect smoky crust.</p>
          </SectionReveal>
          
          <SectionReveal className="space-y-4 text-center" delay={0.2}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-bold">Premium Ingredients</h3>
            <p className="text-secondary/60">We source San Marzano tomatoes and fresh mozzarella daily.</p>
          </SectionReveal>
          
          <SectionReveal className="space-y-4 text-center" delay={0.4}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
              <Utensils size={32} />
            </div>
            <h3 className="text-2xl font-bold">Family Tradition</h3>
            <p className="text-secondary/60">Recipes passed down through generations, perfected for you.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionReveal className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Signature Pies</h2>
            <p className="text-secondary/60 max-w-xl mx-auto">The favorites that made us famous. Hand-tossed and baked to perfection.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza, idx) => (
              <SectionReveal key={pizza.name} delay={idx * 0.1} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={pizza.image || `https://picsum.photos/seed/${pizza.name}/600/400`} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold">{pizza.name}</h4>
                    <span className="text-primary font-bold">${pizza.price}</span>
                  </div>
                  <p className="text-secondary/60 text-sm">{pizza.description}</p>
                  <Link to="/menu" className="text-primary font-bold text-sm flex items-center gap-1 group/link">
                    Order Now <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/menu" className="btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
