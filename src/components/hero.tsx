import { FC } from "react"
import { motion } from 'framer-motion';
import { useLocation } from "wouter";
import HeroImage from "../assets/hero.webp";
import HeroImage2 from "../assets/hero2.webp";
import { ArrowRight, Leaf } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

const Hero: FC<Props> = ({
  title = "Come Saludable, Vive Mejor",
  description = "Descubre una nueva forma de alimentarte. Conectamos los mejores restaurantes saludables con personas que buscan un estilo de vida más equilibrado. Comida deliciosa, nutritiva y directa a tu mesa."
}) => {
  const [location, setLocation] = useLocation();

  const navigate = (path: string) => {
    setLocation(path);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const isRestaurantsPage = location === '/restaurants';

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="sm:text-center lg:text-left"
            >
              <motion.h1
                variants={item}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">{title.split(',')[0]},</span>
                <span className="block text-green-600">{title.split(',')[1]}</span>
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >

                {description}
              </motion.p>
              <motion.div
                variants={item}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    <Leaf className="w-5 h-5 mr-2" />
                    Soy Restaurante
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => navigate(isRestaurantsPage ? '/' : '/restaurants')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    {isRestaurantsPage ? 'Volver al Inicio' : 'Ver Restaurantes'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={isRestaurantsPage ? HeroImage : HeroImage2}
          alt="Comida saludable"
        />
      </div>
    </div>
  )
}

export default Hero
