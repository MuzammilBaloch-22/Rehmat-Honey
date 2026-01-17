import acaciaHoney1 from '@/assets/Acacia Honey1.webp';
import acaciaHoney2 from '@/assets/Acacia Honey2.webp';
import sidrHoney1 from '@/assets/Sdr-e-Honey1.webp';
import sidrHoney2 from '@/assets/Sdr-e-Honey2.webp';
import wildHoney1 from '@/assets/WildHoney1.png';
import wildHoney2 from '@/assets/WildHoney2.webp';
import blackForestHoney1 from '@/assets/BlackForestHoney1.jpg';
import blackForestHoney2 from '@/assets/BlackForestHoney2.png';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  weight: string;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  category: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: "acacia",
    category: "Acacia Honey",
    variants: [
      {
        id: "acacia-500g",
        name: "Acacia Honey 500g",
        price: 1500,
        weight: "500g",
        image: acaciaHoney1,
        description: "Pure light-colored acacia honey with delicate floral taste"
      },
      {
        id: "acacia-1kg",
        name: "Acacia Honey 1kg",
        price: 2800,
        weight: "1kg",
        image: acaciaHoney2,
        description: "Pure light-colored acacia honey with delicate floral taste"
      }
    ]
  },
  {
    id: "sidr",
    category: "Sidr Honey",
    variants: [
      {
        id: "sidr-500g",
        name: "Sidr Honey 500g",
        price: 3500,
        weight: "500g",
        image: sidrHoney1,
        description: "Premium Sidr honey from Sindh with rich medicinal properties"
      },
      {
        id: "sidr-1kg",
        name: "Sidr Honey 1kg",
        price: 6500,
        weight: "1kg",
        image: sidrHoney2,
        description: "Premium Sidr honey from Sindh with rich medicinal properties"
      }
    ]
  },
  {
    id: "wild",
    category: "Wild Mountain Honey",
    variants: [
      {
        id: "wild-500g",
        name: "Wild Honey 500g",
        price: 2500,
        weight: "500g",
        image: wildHoney1,
        description: "Wild honey from Northern Pakistan mountains with natural minerals"
      },
      {
        id: "wild-1kg",
        name: "Wild Honey 1kg",
        price: 4500,
        weight: "1kg",
        image: wildHoney2,
        description: "Wild honey from Northern Pakistan mountains with natural minerals"
      }
    ]
  },
  {
    id: "blackforest",
    category: "Black Forest Honey",
    variants: [
      {
        id: "blackforest-500g",
        name: "Black Forest Honey 500g",
        price: 4000,
        weight: "500g",
        image: blackForestHoney1,
        description: "Dark rich honeydew honey with intense flavor and antioxidants"
      },
      {
        id: "blackforest-1kg",
        name: "Black Forest Honey 1kg",
        price: 7500,
        weight: "1kg",
        image: blackForestHoney2,
        description: "Dark rich honeydew honey with intense flavor and antioxidants"
      }
    ]
  }
];

export const getAllVariants = (): ProductVariant[] => {
  return products.flatMap(product => product.variants);
};
