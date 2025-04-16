import { motion } from 'framer-motion';
import { FC } from "react"
import Image from '../assets/faces/4.jpg';

interface Props { }

const Recommendations: FC<Props> = () => {
  const recommendations = [
    {
      title: "Proteínas Magras",
      description: "Pollo, pescado y legumbres para mantener la masa muscular"
    },
    {
      title: "Grasas Saludables",
      description: "Aguacate, aceite de oliva y frutos secos para la salud cardiovascular"
    },
    {
      title: "Carbohidratos Complejos",
      description: "Quinoa, arroz integral y batata para energía sostenida"
    }
  ];

  return (
    <div className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid place-items-center lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative">
              <img
                className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover"
                src={Image}
                alt="Dra. María González"
                style={{
                  clipPath: "url(#apple-clip)"
                }}
              />
              <svg className="absolute -bottom-1 -right-1 w-72 h-72 hidden">
                <defs>
                  <clipPath id="apple-clip">
                    <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Dra. María González
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Especialista en Nutrición Deportiva
            </p>

            <div className="mt-4 flex justify-center lg:justify-start space-x-4">
              <a href="https://instagram.com/dra.mariagonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600">
                {/* <Instagram className="h-6 w-6" /> */}
              </a>
              <a href="https://tiktok.com/@dra.mariagonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600">
                {/* <TiktokIcon className="h-6 w-6" /> */}
              </a>
              <a href="https://facebook.com/dra.mariagonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600">
                {/* <Facebook className="h-6 w-6" /> */}
              </a>
            </div>
          </motion.div>

          <div className="mt-12 lg:mt-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {recommendations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <Check className="h-6 w-6 text-green-600" /> */}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations
