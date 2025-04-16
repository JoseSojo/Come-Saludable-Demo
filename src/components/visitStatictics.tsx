import { FC, useState } from 'react';
import { LayoutGrid, Table as TableIcon, Users, Clock, Calendar } from 'lucide-react';

const visits = [
  {
    period: "Hoy",
    totalVisits: 1234,
    uniqueVisitors: 856,
    topPages: [
      { name: "Ficha", visits: 450 },
      { name: "Menú", visits: 320 },
    ],
    icon: Clock
  },
  {
    period: "Ayer",
    totalVisits: 1456,
    uniqueVisitors: 998,
    topPages: [
      { name: "Ficha", visits: 524 },
      { name: "Menú", visits: 398 },
    ],
    icon: Clock
  },
  {
    period: "Este Mes",
    totalVisits: 45678,
    uniqueVisitors: 28345,
    topPages: [
      { name: "Ficha", visits: 15240 },
      { name: "Menú", visits: 12450 },
    ],
    icon: Calendar
  },
  {
    period: "Este Año",
    totalVisits: 543210,
    uniqueVisitors: 324567,
    topPages: [
      { name: "Ficha", visits: 187650 },
      { name: "Menú", visits: 156432 },
    ],
    icon: Calendar
  },
  {
    period: "Total",
    totalVisits: 1234567,
    uniqueVisitors: 789012,
    topPages: [
      { name: "Ficha", visits: 456789 },
      { name: "Menú", visits: 345678 },
    ],
    icon: Users
  }
];

const VisitsStatistics: FC = () => {
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table');

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Estadísticas de Visitas</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg flex items-center gap-2 ${
                viewMode === 'table'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <TableIcon className="w-5 h-5" />
              Tabla
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`p-2 rounded-lg flex items-center gap-2 ${
                viewMode === 'card'
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
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Período</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Visitas Totales</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Visitantes Únicos</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Páginas Más Visitadas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {visits.map((visit, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 flex items-center gap-2">
                      <visit.icon className="w-5 h-5 text-gray-500" />
                      {visit.period}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                      {visit.totalVisits.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {visit.uniqueVisitors.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <ul className="space-y-1">
                        {visit.topPages.map((page, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{page.name}</span>
                            <span className="font-medium">{page.visits.toLocaleString()}</span>
                          </li>
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
            {visits.map((visit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <visit.icon className="w-6 h-6 text-gray-700" />
                    <h3 className="text-xl font-bold text-gray-900">{visit.period}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {visit.totalVisits.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Visitas Totales</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">
                          {visit.uniqueVisitors.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">Visitantes Únicos</div>
                      </div>
                    </div>


                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Páginas Más Visitadas:</h4>
                      <ul className="space-y-2">
                        {visit.topPages.map((page, i) => (
                          <li key={i} className="flex justify-between text-sm">
                            <span className="text-gray-500">{page.name}</span>
                            <span className="font-medium text-gray-900">
                              {page.visits.toLocaleString()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default VisitsStatistics;
