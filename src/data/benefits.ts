import { Zap, Shield, Heart, Sparkles, Leaf } from 'lucide-react';

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: typeof Zap;
}

export const benefits: Benefit[] = [
  {
    id: "energy",
    title: "Natural Energy Source",
    description: "Honey is rich in natural sugars that provide instant energy to the body",
    icon: Zap
  },
  {
    id: "immunity",
    title: "Boosts Immunity",
    description: "Rich in antioxidants and antibacterial properties that strengthen immune system",
    icon: Shield
  },
  {
    id: "heart",
    title: "Heart Health",
    description: "Improves blood circulation and keeps the heart healthy and strong",
    icon: Heart
  },
  {
    id: "skin",
    title: "Skin Protection",
    description: "Keeps skin soft and smooth while providing natural glow and radiance",
    icon: Sparkles
  },
  {
    id: "digestion",
    title: "Improves Digestion",
    description: "Beneficial for stomach health and improves overall digestive system",
    icon: Leaf
  }
];
