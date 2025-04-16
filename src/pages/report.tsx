import { useState } from 'react';
import {
  FileDown,
  Calendar,
  Check,
  Eye,
  FileText,
  BarChart,
  Clock,
  Store,
  Menu as MenuIcon,
  Star,
  FileX,
  Navigation,
  FileX2
} from 'lucide-react';

const menus = [
  { 
    id: 1, 
    name: 'Menú Ejecutivo', 
    price: '€25',
    views: 1234,
    avgTimeSpent: '2m 30s',
    conversionRate: '15%',
    sales: 456,
    rating: 4.5,
    reviews: 89
  },
  { 
    id: 2, 
    name: 'Menú Degustación', 
    price: '€75',
    views: 856,
    avgTimeSpent: '3m 45s',
    conversionRate: '25%',
    sales: 234,
    rating: 4.8,
    reviews: 67
  },
  { 
    id: 3, 
    name: 'Menú Vegetariano', 
    price: '€30',
    views: 945,
    avgTimeSpent: '2m 15s',
    conversionRate: '18%',
    sales: 345,
    rating: 4.6,
    reviews: 78
  }
];

const restaurantMetrics = [
  { id: 'revenue', name: 'Vistas', icon: Navigation },
  { id: 'avg_ticket', name: 'Comentarios', icon: FileText },
  { id: 'customer_satisfaction', name: 'Comentarios Positivos', icon: Star },
  { id: 'popular_dishes', name: 'Comentarios Correctivos', icon: FileX },
];

const menuMetrics = [
  { id: 'views', name: 'Vistas', icon: Navigation },
  { id: 'conversion', name: 'Comentarios', icon: FileText },
  { id: 'avg_time', name: 'Comentarios Positivos', icon: Clock },
  { id: 'rating', name: 'Comentarios Negativos', icon: FileX2 },
];

const Report = () => {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'menu'>('restaurant');
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricId)
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with Tabs */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-700">Generador de Reportes</h1>
                <p className="text-gray-600 mt-2">
                  Crea reportes detallados de tu restaurante o menús específicos
                </p>
              </div>
              <button className="btn btn-primary">
                <FileDown className="w-5 h-5 mr-2" />
                Generar PDF
              </button>
            </div>

            <div className="tabs tabs-boxed bg-base-content p-1 rounded-lg inline-flex">
              <button
                className={`tab ${activeTab === 'restaurant' ? 'tab-active' : ''}`}
                onClick={() => {
                  setActiveTab('restaurant');
                  setSelectedMenu(null);
                  setSelectedMetrics([]);
                }}
              >
                
                <span className='text-gray-600 flex items-center'><Store className="w-4 h-4 mr-2" />Reporte del Restaurante</span>
              </button>
              <button
                className={`tab ${activeTab === 'menu' ? 'tab-active' : ''}`}
                onClick={() => {
                  setActiveTab('menu');
                  setSelectedMetrics([]);
                }}
              >
                <span className='text-gray-600 flex items-center'><MenuIcon className="w-4 h-4 mr-2" />Reporte de Menú</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Configuration */}
            <div className="lg:col-span-2 space-y-8">
              {/* Date Range Selector */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-primary" />
                  Rango de Fechas
                </h2>
                <div className="flex justify-between items-center gap-3">
                    <input type='date' name='from' className='input input-sm bg-white text-gray-600 border-gray-600' />
                    <input type='date' name='to' className='input input-sm bg-white text-gray-600 border-gray-600' />
                </div>
              </div>

              {/* Menu Selection (only for menu tab) */}
              {activeTab === 'menu' && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-600">
                    <MenuIcon className="w-5 h-5 text-primary" />
                    Seleccionar Menú
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {menus.map((menu) => (
                      <button
                        key={menu.id}
                        onClick={() => setSelectedMenu(menu.id)}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          selectedMenu === menu.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-600">{menu.name}</span>
                          {selectedMenu === menu.id && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Ventas:</span>
                            <span className="font-medium text-green-600">{menu.sales}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Calificación:</span>
                            <span className="font-medium text-green-600">{menu.rating}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Reseñas:</span>
                            <span className="font-medium text-green-600">{menu.reviews}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Metrics Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-600">
                <BarChart className="w-5 h-5 text-primary" />
                Métricas a Incluir
              </h2>
              <div className="space-y-3">
                {(activeTab === 'restaurant' ? restaurantMetrics : menuMetrics).map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => toggleMetric(metric.id)}
                    className={`w-full p-3 rounded-lg flex items-center gap-3 transition-colors text-gray-500 ${
                      selectedMetrics.includes(metric.id)
                        ? 'bg-primary/5 text-primary'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <metric.icon className="w-5 h-5" />
                    <span>{metric.name}</span>
                    {selectedMetrics.includes(metric.id) && (
                      <Check className="w-5 h-5 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-600">
                <Eye className="w-5 h-5 text-primary" />
                Vista Previa del Reporte
              </h2>
              <div className="flex gap-2">
                <button className="btn bg-green-600 hover:bg-green-700 border-0 btn-sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Vista Previa
                </button>
                <button className="btn btn-primary btn-sm">
                  <FileDown className="w-4 h-4 mr-2" />
                  Descargar
                </button>
              </div>
            </div>
            
            {((activeTab === 'menu' && selectedMenu && selectedMetrics.length > 0) ||
              (activeTab === 'restaurant' && selectedMetrics.length > 0)) ? (
              <div className="space-y-4">
                {activeTab === 'menu' && selectedMenu && (
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">
                      {menus.find(m => m.id === selectedMenu)?.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedMetrics.map(metricId => {
                        const menu = menus.find(m => m.id === selectedMenu);
                        if (!menu) return null;
                        
                        let value = '';
                        switch (metricId) {
                          case 'views':
                            value = menu.views.toLocaleString();
                            break;
                          case 'conversion':
                            value = menu.conversionRate;
                            break;
                          case 'avg_time':
                            value = menu.avgTimeSpent;
                            break;
                          case 'rating':
                            value = menu.rating.toString();
                            break;
                          case 'reviews':
                            value = menu.reviews.toString();
                            break;
                        }
                        
                        return (
                          <div key={metricId}>
                            <p className="text-sm text-gray-500">
                              {menuMetrics.find(m => m.id === metricId)?.name}
                            </p>
                            <p className="text-lg font-semibold">{value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {activeTab === 'restaurant' && (
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">Resumen del Restaurante</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedMetrics.map(metricId => {
                        let value = '';
                        switch (metricId) {
                          case 'revenue':
                            value = '€45,678';
                            break;
                          case 'sales':
                            value = '1,234';
                            break;
                          case 'avg_ticket':
                            value = '€37.50';
                            break;
                          case 'customer_satisfaction':
                            value = '4.7/5';
                            break;
                        }
                        
                        return (
                          <div key={metricId}>
                            <p className="text-sm text-gray-500">
                              {restaurantMetrics.find(m => m.id === metricId)?.name}
                            </p>
                            <p className="text-lg font-semibold">{value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <FileText className="w-12 h-12 mx-auto text-gray-400" />
                <p className="mt-2 text-gray-500">
                  {activeTab === 'menu' 
                    ? 'Selecciona un menú y las métricas para generar una vista previa'
                    : 'Selecciona las métricas para generar una vista previa del reporte'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
