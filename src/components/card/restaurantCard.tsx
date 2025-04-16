import { FC } from 'react';
import { Restaurant } from '../../types/types';
import { Star } from 'lucide-react';
import { Link } from 'wouter';

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard: FC<Props> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={restaurant.image}
        alt={restaurant.name}
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{restaurant.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-gray-600">{restaurant.description}</p>
        <p className="text-sm text-gray-500 mt-2">{restaurant.location}</p>
        <div className="mt-2 flex justify-between items-center">
          <Link className={`bg-green-600 hover:bg-green-700 px-4 text-sm py-1 rounded-2xl text-white`} href={`/restaurant/${restaurant.id}`}>
            ver más
          </Link>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {restaurant.cuisine}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
