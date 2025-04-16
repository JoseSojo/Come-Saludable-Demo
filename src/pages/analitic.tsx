import { FC, useEffect, useRef, useState } from "react"
import AnalititictDashboard from "../components/card/analitictDashboard";
import { CircleGauge, Telescope, MessageCircleIcon, Calendar } from "lucide-react";
import VisitsStatistics from "../components/visitStatictics";
import LayoutChart from "../templates/layoutChart";
import BarChart from "../components/chart/barChart";
import PieChart from "../components/chart/PieChat";

const dataPie1 = [
    { name: 'Enero', value: 4000 },
    { name: 'Febrero', value: 3000 },
    { name: 'Marzo', value: 2000 },
    { name: 'Abril', value: 5000 },
    { name: 'Mayo', value: 200 },
    { name: 'Junio', value: 1000 },
    { name: 'Julio', value: 2600 },
    { name: 'Agosto', value: 2300 }
];

const dataPie2 = [
    { name: 'Ficha', value: 5000 },
    { name: 'Menus', value: 2400 },
];

interface Props { }

const Analitic: FC<Props> = () => {

    const divContainerRef = useRef<HTMLDivElement | null>(null);
    const [widthChart, setWidthChart] = useState(500);

    useEffect(() => {
        if(divContainerRef.current) {
            setWidthChart(divContainerRef.current.offsetWidth);
        }
    }, [divContainerRef.current?.offsetWidth]);

    return (
        <div className="min-h-screen w-full bg-gray-100">
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Analíticas</h1>
                        <p className="text-gray-600">Sección de análisis, y estadísticas.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <AnalititictDashboard
                        title="Visitas Totales"
                        description="↗︎ 25% más que el mes anterior"
                        number="4.8K"
                        ico={<CircleGauge width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Vistas Este Mes"
                        description="↗︎ 18% más que el mes anterior"
                        number="14.4K"
                        inverse
                        ico={<Calendar width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Vistas Este Hoy"
                        description="↗︎ 18% más que el mes anterior"
                        number="14.4K"
                        ico={<Telescope width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Comentarios"
                        description="400k comentarios positivos"
                        number="450k"
                        ico={<MessageCircleIcon width={40} height={40} />}
                    />
                </div>

                <VisitsStatistics />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">

                    <LayoutChart title="Páginas Más Visitadas">
                        <PieChart data={dataPie2} />
                    </LayoutChart>

                    <LayoutChart title="Visitas por Menú">
                        <PieChart data={dataPie1} />
                    </LayoutChart>

                    <div className="col-span-2" ref={divContainerRef}>
                        <LayoutChart title="Tráfico del Sitio">
                            <BarChart width={widthChart} />
                        </LayoutChart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analitic
