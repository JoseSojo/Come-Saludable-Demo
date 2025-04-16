export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  cuisine: string;
}

export interface Menu {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  calories: number;
}

export interface LoginFormData {
  code: string;
}

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
