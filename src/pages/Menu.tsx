import React from 'react';
import { SectionReveal } from '../components/SectionReveal';
import { MENU } from '../constants';

const MenuPage: React.FC = () => {
  const pizzas = MENU.filter(m => m.category === 'pizza');
  const others = MENU.filter(m => m.category !== 'pizza');

  return (
    <div className="pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionReveal className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">The Menu</h1>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Every pizza is hand-stretched and fired in our stone oven at 800°F.
          </p>
        </SectionReveal>

        {/* Signature Pizzas */}
        <div className="space-y-12">
          <SectionReveal>
            <h2 className="text-3xl font-bold flex items-center gap-4">
              Signature Pizzas
              <div className="h-px bg-primary/20 flex-grow" />
            </h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pizzas.map((item, idx) => (
              <SectionReveal key={item.name} delay={idx * 0.05} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-secondary/5 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">${item.price}</span>
                </div>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Sides & Desserts */}
        <div className="space-y-12">
          <SectionReveal>
            <h2 className="text-3xl font-bold flex items-center gap-4">
              Sides & Desserts
              <div className="h-px bg-primary/20 flex-grow" />
            </h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((item, idx) => (
              <SectionReveal key={item.name} delay={idx * 0.05} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-secondary/5 flex justify-between items-center group">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-secondary/60 text-sm">{item.description}</p>
                </div>
                <span className="text-primary font-bold text-lg ml-4">${item.price}</span>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal className="bg-secondary text-white p-12 rounded-[3rem] text-center space-y-6">
          <h3 className="text-3xl font-bold">Dietary Needs?</h3>
          <p className="text-white/60 max-w-xl mx-auto">
            We offer gluten-free crust and vegan cheese options for all our pizzas. 
            Just ask your server or specify in your online order!
          </p>
          <button className="btn-primary">Order Online Now</button>
        </SectionReveal>
      </div>
    </div>
  );
};

export default MenuPage;
