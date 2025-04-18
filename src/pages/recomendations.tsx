import { Search, Utensils } from "lucide-react";
import { FC, useState } from "react";

const tending = ["Tendencia", "Lo más buscado", "Hoy", "Saludable", "En mi ubicación","Menús","Restaurantes"];

interface Props { }

const Recomendations: FC<Props> = () => {
    const [selectedTending, setSelectedTending] = useState<string[]>([]);

    const toggleIngredient = (ingredient: string) => {
        setSelectedTending(prev =>
            prev.includes(ingredient)
                ? prev.filter(i => i !== ingredient)
                : [...prev, ingredient]
        );
    };

    return (
        <div className="w-[95%] lg:w-[70%] m-auto pt-7">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-700">Recomendaciones</h1>
                        <p className="text-gray-600 mt-2">

                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="border border-gray-300 p-2 rounded-lg inline-flex">
                        <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                                <Utensils className="w-4 h-4" />
                                Tendencias
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tending.map(ingredient => (
                                    <button
                                        key={ingredient}
                                        onClick={() => toggleIngredient(ingredient)}
                                        className={`badge px-3 py-1 rounded-full text-sm transition-colors ${selectedTending.includes(ingredient)
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
                    <div className="border border-gray-300 p-2 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                            <Search className="w-4 h-4" />
                            Buscar
                        </h3>
                        <div className="gap-2 w-full">
                            <input className="input bg-white border border-gray-300 w-[100%] placeholder-gray-300" placeholder="Buscar tendencias..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomendations;
