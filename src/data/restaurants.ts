import { Restaurant, Menu } from '../types/types';
import Image1 from '../assets/image/1.webp';
import Image2 from '../assets/image/2.webp';
import Image3 from '../assets/image/3.webp';
import Image4 from '../assets/image/4.webp';
import Image5 from '../assets/image/5.webp';
import Image6 from '../assets/image/6.webp';
import Image8 from '../assets/image/8.webp';
import Image10 from '../assets/image/10.webp';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Verde & Sano',
    description: 'Cocina orgánica y sostenible con ingredientes locales de temporada',
    image: Image1,
    rating: 4.8,
    location: 'Zona Gourmet',
    cuisine: 'Orgánica',
    position: [10.2355, -67.5987] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image8,
      // Image9,
      Image10,
    ]
  },
  {
    id: '2',
    name: 'Equilibrio',
    description: 'Fusión de sabores mediterráneos con un toque moderno',
    image: Image2,
    rating: 4.6,
    location: 'Centro Ciudad',
    cuisine: 'Mediterránea',
    position: [10.2469, -67.5958] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image8,
      // Image9,
      Image10,
    ]
  },
  {
    id: '3',
    name: 'Nutrición Vital',
    description: 'Platos balanceados con proteínas magras y vegetales frescos',
    image: Image3,
    rating: 4.7,
    location: 'Distrito Financiero',
    cuisine: 'Fitness',
    position: [10.5068, -66.9146] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image8,
      // Image9,
      Image10,
    ]
  },
  {
    id: '4',
    name: 'Sabor Natural',
    description: 'Especialistas en bowls y ensaladas personalizadas',
    image: Image4,
    rating: 4.5,
    location: 'Plaza Central',
    cuisine: 'Bowl & Ensaladas',
    position: [10.4806, -66.9036] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image8,
      // Image9,
      Image10,
    ]
  },
  {
    id: '4',
    name: 'Sabor Natural',
    description: 'Especialistas en bowls y ensaladas personalizadas',
    image: Image5,
    rating: 4.5,
    location: 'Plaza Central',
    cuisine: 'Bowl & Ensaladas',
    position: [10.4236, -66.8516] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image8,
      // Image9,
      Image10,
    ]
  },
  {
    id: '4',
    name: 'Sabor Natural',
    description: 'Especialistas en bowls y ensaladas personalizadas',
    image: Image6,
    rating: 4.5,
    location: 'Plaza Central',
    cuisine: 'Bowl & Ensaladas',
    position: [10.2469, -67.5958] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image8,
      // Image9,
      Image10,
    ]
  }
];

export const menus: Menu[] = [
  {
    id: '1',
    restaurantId: '1',
    name: 'Bowl Proteico Verde',
    description: 'Quinoa, aguacate, huevo pochado, espinacas y vinagreta de limón',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    calories: 450
  },
  {
    id: '2',
    restaurantId: '1',
    name: 'Ensalada Energética',
    description: 'Mix de lechugas, nueces, frutas de temporada y pollo a la parrilla',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    calories: 380
  },
  {
    id: '3',
    restaurantId: '2',
    name: 'Pasta Integral Mediterránea',
    description: 'Pasta integral con verduras asadas y aceite de oliva virgen',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    calories: 520
  },
  {
    id: '4',
    restaurantId: '2',
    name: 'Salmón al Grill',
    description: 'Salmón fresco con quinoa y vegetales salteados',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    calories: 490
  },
  {
    id: '5',
    restaurantId: '3',
    name: 'Pollo Fit',
    description: 'Pechuga de pollo a la plancha con batata y brócoli',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2',
    calories: 420
  },
  {
    id: '6',
    restaurantId: '3',
    name: 'Bowl Vegano',
    description: 'Garbanzos, kale, tomates cherry y aderezo tahini',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38',
    calories: 380
  }
];
