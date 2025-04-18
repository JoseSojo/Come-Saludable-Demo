import { User2, LogOut, FileText, MenuIcon, BarChart, ArrowLeftCircle } from "lucide-react"
import { FC, ReactNode } from "react"
import { Link, useLocation } from "wouter"

interface Props {
  children: ReactNode
}

const LayoutDashboard: FC<Props> = ({ children }) => {

  const location = useLocation();

  const sections = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, link: `/dashboard/` },
    { id: 'reports', name: 'Reportes', icon: FileText, link: `/dashboard/report/` },
    { id: 'menus', name: 'Menús', icon: MenuIcon, link: `/dashboard/menu/` },
    { id: 'analytics', name: 'Análisis', icon: BarChart, link: `/dashboard/analytics/` },
  ];

  const handleGoBack = () => {
    window.history.back(); // Equivalente a navigate(-1) en React Router
  };

  return (
    <>
      {/* <nav className=" px-5 lg:px-10 bg-emerald-300 flex items-center justify-between">
        <h1 className="font-black text-lg text-emerald-900">ComeSaludable</h1>
        <ul className="flex h-full">
          <li className="h-full">
            <button className="group hover:bg-emerald-400 duration-200 px-4 h-full py-4">
              <Link href="/dashboard/profile">
                <User2 className="text-emerald-900  duration-100" />
              </Link>
            </button>
          </li>
          <li className="h-full">
            <button className="group hover:bg-red-400 duration-200 px-4 h-full py-4">
              <Link href="/">
                <LogOut className="text-emerald-900  duration-100" />
              </Link>
            </button>
          </li>
        </ul>
      </nav> */}
      <div className="bg-white shadow-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-green-900 font-black">ComeSaludable</h1>

          <div className="flex gap-2">
            {sections.map((section) => (
              <Link
                href={section.link}
                key={section.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all btn-sm btn border-0 ${location[0] === section.link
                  ? 'bg-success text-white shadow-lg scale-105'
                  : 'btn-ghost hover:bg-green-50 text-green-400 shadow-0 hover:shadow-0'
                  }`}
              >
                <span className="font-medium">{section.name}</span>
              </Link>
            ))}
          </div>

          <ul className="flex">
            <li className="h-full">
              <button onClick={handleGoBack} className="group hover:bg-sky-400 duration-200 px-4 h-full py-4">
                <ArrowLeftCircle className="text-sky-900  duration-100" />
              </button>
            </li>
            <li className="h-full">
              <button className="group hover:bg-emerald-400 duration-200 px-4 h-full py-4">
                <Link href="/dashboard/restaurant">
                  <User2 className="text-emerald-900  duration-100" />
                </Link>
              </button>
            </li>
            <li className="h-full">
              <button className="group hover:bg-red-400 duration-200 px-4 h-full py-4">
                <Link href="/">
                  <LogOut className="text-emerald-900  duration-100" />
                </Link>
              </button>
            </li>
          </ul>

        </div>
      </div>
      <main className="flex w-full">
        {/* <div className="w-64 sticky top-0 h-screen bg-gray-50 flex flex-col py-3">
          <Link href="/dashboard" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            <span className="text-gray-700">Dashboard</span>
          </Link>
          <Link href="/dashboard/menu" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard/menu` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
           <span className="text-gray-700"> Menús</span>
          </Link>
          <Link href="/dashboard/analitic" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard/analitic` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            <span className="text-gray-700">Análisis</span>
          </Link>
          <Link href="/dashboard/report" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard/report` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            <span className="text-gray-700">Reportes</span>
          </Link>

        </div> */}
        {children}
      </main>
    </>
  )
}

export default LayoutDashboard
