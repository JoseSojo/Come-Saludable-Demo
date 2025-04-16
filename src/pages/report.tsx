import { FC } from "react"
import AnalititictDashboard from "../components/card/analitictDashboard";
import { CircleGauge, Telescope, Calendar } from "lucide-react";


interface Props { }

const Report: FC<Props> = () => {

    return (
        <div className="min-h-screen w-full bg-gray-100">
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Reportes</h1>
                        <p className="text-gray-600">genera reportes pdf de acuerdo a tus necesidades.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <AnalititictDashboard
                        title="Realizados hoy"
                        description="↗︎ 25% más que el mes anterior"
                        number="4.8K"
                        ico={<CircleGauge width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Realizados este mes"
                        description="↗︎ 18% más que el mes anterior"
                        number="14.4K"
                        ico={<Calendar width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Todos"
                        description="↗︎ 18% más que el mes anterior"
                        number="14.4K"
                        ico={<Telescope width={40} height={40} />}
                        inverse
                    />
                </div>
            </div>
        </div>
    );
}

export default Report;
