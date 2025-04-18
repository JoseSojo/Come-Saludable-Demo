import { useState, useMemo, FC } from 'react';
import { Search, Filter, ChevronDown, MapPin, Tag, Utensils } from 'lucide-react';
import MenuCard from '../components/card/menu';
import { menus, restaurants } from '../data/restaurants';
// import MenuCard from './MenuCard';

const sampleMenus = menus;

const categories = ["Todos", "Platos Principales", "Asiático", "Mediterráneo", "Postres"];
// const restaurants = ["Todos", "La Casa del Sabor", "Il Gusto", "Sakura"];
const ingredients = ["Arroz", "Mariscos", "Setas", "Pescado", "Carne", "Vegetales"];

const MenuSearch: FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedRestaurant, setSelectedRestaurant] = useState("Todos");
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [showFilters, setShowFilters] = useState(false);

    const filteredMenus = useMemo(() => {
        return sampleMenus.filter(menu => {
            const matchesSearch = menu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                menu.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "Todos" || menu.category.includes(selectedCategory);
            const matchesRestaurant = selectedRestaurant === "Todos" || menu.restaurantId === selectedRestaurant;
            const matchesIngredients = selectedIngredients.length === 0 ||
                selectedIngredients.every(ing => menu.ingredients.includes(ing));

            return matchesSearch && matchesCategory && matchesRestaurant && matchesIngredients;
        });
    }, [searchTerm, selectedCategory, selectedRestaurant, selectedIngredients]);

    const toggleIngredient = (ingredient: string) => {
        setSelectedIngredients(prev =>
            prev.includes(ingredient)
                ? prev.filter(i => i !== ingredient)
                : [...prev, ingredient]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Search Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 text-gray-700">Explorar Menús</h1>
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar platos, ingredientes..."
                                className="input input-bordered w-full pl-10 bg-white text-black border-gray-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter className="w-5 h-5 mr-2" />
                            Filtros
                            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Filters Section */}
                {showFilters && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Restaurant Filter */}
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                                    <MapPin className="w-4 h-4" />
                                    Restaurantes
                                </h3>
                                <select
                                    className="select select-bordered w-full bg-white text-black border-gray-300"
                                    value={selectedRestaurant}
                                    onChange={(e) => setSelectedRestaurant(e.target.value)}
                                >
                                    {restaurants.map(restaurant => (
                                        <option key={restaurant.id} value={restaurant.id}>
                                            {restaurant.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                                    <Tag className="w-4 h-4" />
                                    Categorías
                                </h3>
                                <select
                                    className="select select-bordered w-full bg-white text-black border-gray-300"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Ingredients Filter */}
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                                    <Utensils className="w-4 h-4" />
                                    Ingredientes
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {ingredients.map(ingredient => (
                                        <button
                                            key={ingredient}
                                            onClick={() => toggleIngredient(ingredient)}
                                            className={`badge px-3 py-1 rounded-full text-sm transition-colors ${selectedIngredients.includes(ingredient)
                                                ? 'badge-success text-white'
                                                : 'badge-ghost bg-gray-300 text-gray-700 border-gray-400 hover:bg-gray-200'
                                                }`}
                                        >
                                            {ingredient}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Results Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="bg-white rounded-lg shadow p-4 mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">{restaurant.name}</span>
                                </div>
                                <div className='flex justify-between items-cetnter'>
                                    <div className="text-sm text-gray-500">{restaurant.address}</div>
                                </div>
                            </div>
                            {/* <MenuCard menu={menu} /> */}
                        </div>
                    ))}

                    {sampleMenus.map((menu, index) => (
                        <div key={index} className="flex flex-col">
                            <MenuCard menu={menu} />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredMenus.length === 0 && (
                    <div className="text-center py-12">
                        <Utensils className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                        <p className="text-gray-500">
                            Intenta ajustar los filtros o buscar con otros términos
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MenuSearch;
