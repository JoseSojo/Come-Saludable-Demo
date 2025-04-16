import RestaurantCard from '../components/card/restaurantCard';
import { FC } from 'react';
import { restaurants } from '../data/restaurants';

const Restaurants: FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Nuestros Restaurantes
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Restaurants;