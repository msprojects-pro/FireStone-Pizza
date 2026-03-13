import React from 'react';
import { SectionReveal } from '../components/SectionReveal';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Story Section */}
      <section className="pt-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">The FireStone <br /><span className="text-primary">Story</span></h1>
            <div className="space-y-4 text-secondary/70 leading-relaxed text-lg">
              <p>
                Established in 2020, FireStone Pizza was born out of a simple obsession: 
                the perfect crust. Our founder, Anthony Russo, spent years traveling through 
                Naples and Rome, learning the ancient secrets of wood-fired dough.
              </p>
              <p>
                We brought that passion back to Orlando, building our custom stone oven 
                by hand and sourcing only the finest ingredients. What started as a small 
                neighborhood spot has grown into a destination for pizza lovers who 
                value authenticity and quality above all else.
              </p>
              <p className="font-display italic text-secondary">
                "It's not just pizza; it's a piece of our heritage, fired at 800 degrees."
              </p>
            </div>
          </SectionReveal>
          
          <SectionReveal delay={0.2} className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <span className="text-4xl font-bold block">5+</span>
              <span className="text-sm uppercase tracking-widest font-medium">Years of Excellence</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionReveal className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
            <p className="text-secondary/60 max-w-xl mx-auto">The hands and hearts behind every slice.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <SectionReveal key={member.name} delay={idx * 0.1} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: member.objectPosition || 'center' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
