import React, { FC, useState } from 'react';
import {
    MapPin,
    Phone,
    Globe,
    Clock,
    Star,
    Upload,
    Trash2,
    Edit3,
    Plus
} from 'lucide-react';
import UniqueMap from '../components/map/uniqueMap';
import { Restaurant } from '../types/types';
import { menus } from '../data/restaurants';
import MenuCard from '../components/card/menu';

interface Props {
    edit?: boolean,
    restaurantData: Restaurant
}

const ProfileComponent: FC<Props> = ({ edit, restaurantData }) => {
    const [selectedTab, setSelectedTab] = useState('general');
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        // Handle file upload logic here
    };

    return (
        <div className="min-h-screen w-full bg-gray-50">
            {/* Cover Image */}
            <div className="relative h-64 bg-gray-300">
                <img
                    src={restaurantData.coverImage}
                    alt={restaurantData.name}
                    className="w-full h-full object-cover"
                />
                {edit && <button className="absolute bottom-4 right-4 btn bg-green-600 hover:bg0-green-700 text-white border-0">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Cambiar Portada
                </button>}
            </div>

            {/* Profile Header */}
            <div className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{restaurantData.name}</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <span className="ml-1 font-bold text-gray-900">{restaurantData.rating}</span>
                                </div>
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-600">{restaurantData.cuisine}</span>
                            </div>
                        </div>
                        {edit && <div className="mt-4 md:mt-0">
                            <button className="px-4 py-2 rounded btn bg-green-600 hover:bg0-green-700 text-white border-0">Editar Perfil</button>
                        </div>}
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-gray-950" />
                            <span className="text-gray-600">{restaurantData.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-gray-950" />
                            <span className="text-gray-600">{restaurantData.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-gray-950" />
                            <span className="text-gray-600">{restaurantData.website}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-gray-950" />
                            <span className="text-gray-600">{restaurantData.hours}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="container mx-auto px-4 py-6">
                <div className="tabs tabs-boxed inline-flex bg-white p-1 rounded-lg">
                    <button
                        className={`text-black tab ${selectedTab === 'general' ? 'tab-active' : ''}`}
                        onClick={() => setSelectedTab('general')}
                    >
                        <span className={`${selectedTab === `general` ? `text-gray-900 font-semibold` : `text-gray-500`}`}>General</span>
                    </button>
                    <button
                        className={`text-black tab ${selectedTab === 'photos' ? 'tab-active' : ''}`}
                        onClick={() => setSelectedTab('photos')}
                    >
                        <span className={`${selectedTab === `photos` ? `text-gray-900 font-semibold` : `text-gray-500`}`}>Fotos</span>
                    </button>
                    <button
                        className={`text-black tab ${selectedTab === 'ubication' ? 'tab-active' : ''}`}
                        onClick={() => setSelectedTab('ubication')}
                    >
                        <span className={`${selectedTab === `ubication` ? `text-gray-900 font-semibold` : `text-gray-500`}`}>Ubicación</span>
                    </button>
                    <button
                        className={`text-black tab ${selectedTab === 'menu' ? 'tab-active' : ''}`}
                        onClick={() => setSelectedTab('menu')}
                    >
                        <span className={`${selectedTab === `menu` ? `text-gray-900 font-semibold` : `text-gray-500`}`}>Menús</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {selectedTab === 'general' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* About Section */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Sobre Nosotros</h2>
                                    <p className="text-gray-600">{restaurantData.description}</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Resumen del Mes</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-sm text-gray-600">Visitas</div>
                                            <div className="text-2xl font-bold text-gray-900">{restaurantData.metrics.monthlyVisits}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Calificación Promedio</div>
                                            <div className="text-2xl font-bold text-gray-900">{restaurantData.metrics.avgRating}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Total de Reseñas</div>
                                            <div className="text-2xl font-bold text-gray-900">{restaurantData.metrics.totalReviews}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Tasa de Respuesta</div>
                                            <div className="text-2xl font-bold text-gray-900">{restaurantData.metrics.responseRate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedTab === 'photos' && (
                        <div className="space-y-6">
                            {/* Upload Section */}
                            {edit && <div
                                className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'
                                    }`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <Upload className="w-12 h-12 mx-auto text-gray-400" />
                                <h3 className="mt-2 text-lg font-semibold">Arrastra tus fotos aquí</h3>
                                <p className="text-sm text-gray-500 mt-1">O</p>
                                <button className="btn btn-primary mt-4">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Seleccionar Archivos
                                </button>
                            </div>}

                            {/* Gallery Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {restaurantData.gallery.map((photo, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={photo}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        {edit && <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                                            <button className="btn btn-circle btn-sm">
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button className="btn btn-circle btn-sm btn-error">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedTab === 'ubication' && (
                        <div className="space-y-6">
                            {/* Upload Section */}
                            <UniqueMap restaurant={restaurantData} />
                        </div>
                    )}

                    {selectedTab === 'menu' && (
                        <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {
                                menus.map(menu => <MenuCard menu={menu} />)
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
