import { FC} from "react"
import AnalititictDashboard from "../components/card/analitictDashboard";
import { CircleGauge, Telescope, MessageCircleIcon } from "lucide-react";
import MenuList from "../components/menusList";

interface Props { }

const Dashboard: FC<Props> = () => {

    const date = new Date();

    return (
        <div className="min-h-screen w-full bg-gray-100">
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard del Restaurante</h1>
                        <p className="text-gray-600">Bienvenido de nuevo. Aquí está el resumen de las visitas a tu sitio.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <AnalititictDashboard
                        title="Menús"
                        description="↗︎ 3 más que el mes anterior"
                        number="28"
                        inverse
                        ico={<CircleGauge width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Vistas de Hoy"
                        description={`${date.getDay()} / ${date.getMonth()+1} / ${date.getFullYear()}`}
                        number="1204"
                        ico={<Telescope width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Comentarios de hoy"
                        description=""
                        number="20"
                        ico={<MessageCircleIcon width={40} height={40} />}
                    />
                </div>

                <MenuList />
            </div>
        </div>
    );
}

export default Dashboard
