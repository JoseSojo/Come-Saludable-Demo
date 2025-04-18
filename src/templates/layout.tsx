import { FC, ReactNode } from "react"
import Hero from "../components/hero"
import Footer from "../components/footer"
import { Apple, Home, Map, Search } from "lucide-react"
import { Link, useLocation } from "wouter"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const sections = [
    { id: 'Inicio', name: 'Inicio', icon: Home, link: `/` },
    { id: 'Restaurante', name: 'Restaurante', icon: Apple, link: `/restaurants/` },
    { id: 'Buscar', name: 'Buscar', icon: Search, link: `/search/` },
    { id: 'Recomendados', name: 'Recomendados', icon: Map, link: `/recomendations/` },
    { id: 'login', name: 'Acceder', icon: Map, link: `/login/` },
  ];

  return (
    <>
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
        </div>
      </div>

      { location[0] === `/` && <Hero />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
