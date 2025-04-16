import { User2, LogOut } from "lucide-react"
import { FC, ReactNode } from "react"
import { Link, useLocation } from "wouter"

interface Props {
  children: ReactNode
}

const LayoutDashboard: FC<Props> = ({ children }) => {

  const [location] = useLocation();

  return (
    <>
      <nav className=" px-5 lg:px-10 bg-emerald-300 flex items-center justify-between">
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
      </nav>
      <main className="flex w-full">
        <div className="w-64 sticky top-0 h-screen bg-gray-50 flex flex-col py-3">
          <Link href="/dashboard" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            Dashboard
          </Link>
          <Link href="/dashboard/menu" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard/menu` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            Menús
          </Link>
          <Link href="/dashboard/analitic" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard/analitic` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            Análisis
          </Link>
          <Link href="/dashboard/report" className={`w-full py-3 text-center duration-100 font-semibold ${location === `/dashboard/report` ? `bg-gray-200` : `hover:bg-gray-200`}`}>
            Reportes
          </Link>

        </div>
        {children}
      </main>
    </>
  )
}

export default LayoutDashboard
