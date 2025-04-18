import { FC, useState } from 'react';
import { LayoutGrid, Table as TableIcon } from 'lucide-react';

const menus = [
    {
        name: "Menú Ejecutivo",
        description: "Incluye entrada, plato principal, postre y bebida",
        price: "€25",
        category: "Almuerzo",
        availability: "Lunes a Viernes",
        items: ["Ensalada César", "Solomillo con patatas", "Tiramisú", "Vino/Refresco"]
    },
    {
        name: "Menú Degustación",
        description: "5 platos con maridaje de vinos",
        price: "€75",
        category: "Cena",
        availability: "Todos los días",
        items: ["Amuse-bouche", "Carpaccio", "Risotto", "Pescado del día", "Postre del chef"]
    },
    {
        name: "Menú Vegetariano",
        description: "Selección de platos vegetarianos",
        price: "€30",
        category: "Almuerzo/Cena",
        availability: "Todos los días",
        items: ["Gazpacho", "Risotto de setas", "Tarta de zanahoria", "Infusión"]
    },
    {
        name: "Menú Fin de Semana",
        description: "Especial brunch de fin de semana",
        price: "€35",
        category: "Brunch",
        availability: "Sábados y Domingos",
        items: ["Huevos Benedict", "Pancakes", "Café/Té", "Zumo natural"]
    }
];

interface Props {
    title?: string;
}

const MenuList: FC<Props> = ({ title }) => {
    const [viewMode, setViewMode] = useState<'table' | 'card'>('table');

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-600">{title ? title : `Menús`}</h2>
                    <div className="flex gap-2">
                        
                        <button
                            onClick={() => setViewMode('table')}
                            className={`p-2 rounded-lg flex items-center gap-2 ${viewMode === 'table'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <TableIcon className="w-5 h-5" />
                            Tabla
                        </button>
                        <button
                            onClick={() => setViewMode('card')}
                            className={`p-2 rounded-lg flex items-center gap-2 ${viewMode === 'card'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                            Tarjetas
                        </button>
                    </div>
                </div>

                {viewMode === 'table' ? (
                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-900">Nombre</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-900">Descripción</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-900">Precio</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-900">Categoría</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-900">Disponibilidad</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-900">Platos</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {menus.map((menu, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{menu.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{menu.description}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{menu.price}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{menu.category}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{menu.availability}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            <ul className="list-disc list-inside">
                                                {menu.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menus.map((menu, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold text-gray-900">{menu.name}</h3>
                                        <span className="text-lg font-semibold text-gray-900">{menu.price}</span>
                                    </div>
                                    <p className="mt-2 text-gray-500">{menu.description}</p>
                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold mr-2">Categoría:</span>
                                            {menu.category}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold mr-2">Disponibilidad:</span>
                                            {menu.availability}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Platos incluidos:</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-500">
                                            {menu.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default MenuList;
