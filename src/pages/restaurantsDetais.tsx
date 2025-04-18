import { useParams } from 'wouter';
import { restaurants, menus } from '../data/restaurants';
import MenuCard from '../components/card/menu';
import Image from '../assets/hero.webp';
import UniqueMap from '../components/map/uniqueMap';

export default function RestaurantsDetails() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const restaurantMenus = menus.filter(m => m.restaurantId === id);

  if (!restaurant) {
    return <div>Restaurante no encontrado</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            className="w-full h-64 object-cover"
            src={Image}
            alt={restaurant.name}
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
            <p className="mt-2 text-gray-600">{restaurant.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-500">{restaurant.location}</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
                {restaurant.cuisine}
              </span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8 p-5'>
          <UniqueMap restaurant={restaurant} />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Menús</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurantMenus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
}