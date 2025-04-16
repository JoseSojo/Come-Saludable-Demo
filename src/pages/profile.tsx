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
import CoverImage from '../assets/image/7.webp'; 

import Image1 from '../assets/image/1.webp'; 
import Image2 from '../assets/image/2.webp'; 
import Image3 from '../assets/image/3.webp'; 
import Image4 from '../assets/image/4.webp'; 
import Image5 from '../assets/image/5.webp'; 
import Image6 from '../assets/image/6.webp'; 
import Image8 from '../assets/image/8.webp'; 
import Image10 from '../assets/image/10.webp'; 


const restaurantData = {
    name: "La Casa del Sabor",
    rating: 4.8,
    cuisine: "Mediterránea",
    priceRange: "€€€",
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    description: "Restaurante mediterráneo con más de 20 años de experiencia, especializado en paellas y mariscos frescos.",
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
};

const Profile: FC = () => {
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
                    src={CoverImage}
                    alt={restaurantData.name}
                    className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 right-4 btn bg-green-600 hover:bg0-green-700 text-white border-0">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Cambiar Portada
                </button>
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
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-600">{restaurantData.priceRange}</span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button className="px-4 py-2 rounded btn bg-green-600 hover:bg0-green-700 text-white border-0">Editar Perfil</button>
                        </div>
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
                            <div
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
                            </div>

                            {/* Gallery Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {restaurantData.gallery.map((photo, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={photo}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                                            <button className="btn btn-circle btn-sm">
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button className="btn btn-circle btn-sm btn-error">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
