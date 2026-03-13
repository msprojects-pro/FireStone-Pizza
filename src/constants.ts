import { BusinessHours, MenuItem, TeamMember } from './types';

export const BUSINESS_INFO = {
  name: 'FireStone Pizza',
  phone: '(407) 562-8841',
  email: 'hello@firestonepizza.com',
  ordersEmail: 'orders@firestonepizza.com',
  cateringEmail: 'catering@firestonepizza.com',
  address: '2135 Lakeview Boulevard, Orlando, FL 32803',
  socials: {
    instagram: 'https://instagram.com/firestonepizza',
    facebook: 'https://facebook.com/firestonepizza',
    tiktok: 'https://tiktok.com/@firestonepizza',
  },
};

export const TEAM: TeamMember[] = [
  {
    name: 'Anthony Russo',
    role: 'Founder/Chef',
    image: 'https://images.pexels.com/photos/16537982/pexels-photo-16537982.jpeg?auto=compress&cs=tinysrgb&w=800',
    objectPosition: 'center 20%',
  },
  {
    name: 'Marco Bellini',
    role: 'Pizza Chef',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Samantha Carter',
    role: 'Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Daniel Lopez',
    role: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&q=80&w=800',
  },
];

export const MENU: MenuItem[] = [
  { 
    name: 'Margherita Classic', 
    price: 14, 
    description: 'San Marzano tomatoes, fresh mozzarella, basil, EVOO.', 
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Pepperoni Supreme', 
    price: 16, 
    description: 'Classic pepperoni, mozzarella, oregano, hot honey drizzle.', 
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'BBQ Chicken', 
    price: 18, 
    description: 'Grilled chicken, red onions, cilantro, smoky BBQ base.', 
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800'
  },
  { name: 'Veggie Garden', price: 17, description: 'Bell peppers, mushrooms, olives, spinach, feta.', category: 'pizza' },
  { name: 'Meat Lovers', price: 19, description: 'Pepperoni, sausage, bacon, ham, meatballs.', category: 'pizza' },
  { name: 'Garlic Breadsticks', price: 8, description: 'Freshly baked with garlic butter and parmesan.', category: 'side' },
  { name: 'Tiramisu', price: 8, description: 'Classic Italian coffee-flavored dessert.', category: 'dessert' },
  { name: 'Chocolate Brownie', price: 7, description: 'Warm, fudgy brownie with vanilla gelato.', category: 'dessert' },
];

export const HOURS: BusinessHours[] = [
  { day: 'Mon-Wed', open: '11:00', close: '22:00', dayIndex: 1 },
  { day: 'Thu', open: '11:00', close: '23:00', dayIndex: 4 },
  { day: 'Fri-Sat', open: '11:00', close: '00:00', dayIndex: 5 },
  { day: 'Sun', open: '12:00', close: '21:00', dayIndex: 0 },
];
