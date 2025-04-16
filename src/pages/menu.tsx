import { FC } from "react"
import AnalititictDashboard from "../components/card/analitictDashboard";
import { Calendar, AppleIcon } from "lucide-react";
import MenuList from "../components/menusList";


interface Props { }

const Menu: FC<Props> = () => {

    return (
        <div className="min-h-screen w-full bg-gray-100">
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Menús</h1>
                        <p className="text-gray-600">administración de menús, crea nuevos, acutaliza, elimina.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <AnalititictDashboard
                        title="Creados hoy"
                        description="↗︎ 3 más que el mes anterior"
                        number="23"
                        ico={<AppleIcon width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Creados ayer"
                        description="↗︎ 3 más que el mes anterior"
                        number="23"
                        ico={<AppleIcon width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Creados este mes"
                        description="↗︎ 3 más que el mes anterior"
                        number="23"
                        ico={<AppleIcon width={40} height={40} />}
                    />
                    <AnalititictDashboard
                        title="Vistas Este Mes"
                        description="↗︎ 18% más que el mes anterior"
                        number="14.4K"
                        inverse
                        ico={<Calendar width={40} height={40} />}
                    />
                </div>

                {/* <MenuList /> */}
                <MenuList title="Todos los menús" />
            </div>
        </div>
    );
}

export default Menu;
