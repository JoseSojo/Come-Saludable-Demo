import { Quote, Star } from "lucide-react";
import { FC } from "react"
import Image1 from '../assets/faces/1.jpg';
import Image2 from '../assets/faces/2.jpg';
import Image3 from '../assets/faces/3.jpg';

const testimonials = [
  {
    name: "María González",
    role: "Food Critic",
    image: Image1,
    content: "Una experiencia culinaria excepcional. Los sabores son auténticos y el servicio es impecable.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    role: "Chef Profesional",
    image: Image2,
    content: "La calidad de los ingredientes y la presentación de los platos es extraordinaria.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Blogger Gastronómico",
    image: Image3,
    content: "Cada visita es una nueva aventura culinaria. ¡Altamente recomendado!",
    rating: 5
  }
];

interface Props { }

const Testimonial: FC<Props> = () => {

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 rounded py-3 bg-base-100 shadow-xl flex">
              <figure className="px-6 pt-6">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-full h-[200px] w-52 object-cover" />
                  </div>
                </div>
              </figure>
              <div className="grid place-content-center place-items-center items-center text-center">
                <Quote className="text-primary w-8 h-8 mb-2" />
                <p className="text-lg italic">{testimonial.content}</p>
                <div className="flex items-center mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-bold text-xl mt-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
