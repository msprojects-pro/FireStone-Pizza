export interface TeamMember {
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
}

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: 'pizza' | 'side' | 'dessert';
  image?: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
}
