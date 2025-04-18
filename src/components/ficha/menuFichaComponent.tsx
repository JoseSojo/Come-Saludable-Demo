import { Clock, Users, Utensils, DollarSign, Star, Tag, ArrowLeft } from 'lucide-react';
import { Menu } from '../../types/types';
import { FC } from 'react';

interface Props {
    menu: Menu
}

const MenuFichaComponent: FC<Props> = ({ menu }) => {

    const handleGoBack = () => {
        window.history.back(); // Equivalente a navigate(-1) en React Router
      };

    return (
        <div className='w-full p-5'>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden lg:w-[50%] m-auto">

                <div className="relative h-64">
                    <img
                        src={menu.image}
                        alt={menu.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <button 
                            onClick={handleGoBack}
                            className="cursor-pointer bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4 fill-current text-gray-600" />
                            <span className="font-semibold text-gray-600">volver</span>
                        </button>
                    </div>
                    <div className="absolute top-4 right-4">
                        <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold text-yellow-400">{menu.calories}</span>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{menu.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                {
                                    menu.category.map(menu => (
                                        <div className='flex items-center badge badge-ghost bg-gray-200 border-gray-300'>
                                            <Tag className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600 font-mono">{menu}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-xl font-bold text-green-400">
                            <DollarSign className="w-5 h-5 " />
                            <span>{menu.price.toFixed(2)}</span>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-6">{menu.description}</p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-900 font-semibold font-mono">{menu.preparationTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-900 font-semibold font-mono">{menu.servings} personas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-900 font-semibold font-mono">{menu.ingredients.length} ingredientes</span>
                        </div>
                    </div>

                    {/* Ingredients */}
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-gray-800">Ingredientes:</h4>
                        <div className="flex flex-wrap gap-2">
                            {menu.ingredients.map((ingredient, index) => (
                                <span
                                    key={index}
                                    className="badge badge-ghost bg-gray-200 border-gray-300 text-gray-600 rounded-full text-sm"
                                >
                                    {ingredient}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Allergens */}
                    {menu.allergens.length > 0 && (
                        <div>
                            <h4 className="font-semibold mb-2 text-warning">Alérgenos:</h4>
                            <div className="flex flex-wrap gap-2">
                                {menu.allergens.map((allergen, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-warning px-3 py-1 rounded-full text-sm"
                                    >
                                        {allergen}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuFichaComponent;
