import { Leaf } from "lucide-react";
import { Link } from "wouter";
import FB from "../assets/fb.svg";
import IG from "../assets/ig.svg";
import TK from "../assets/tk.svg";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Come Saludable</span>
            </div>
            <p className="mt-4 text-green-200">
              Transformando la manera en que comemos, un plato saludable a la vez.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-green-200 hover:text-white">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-green-200 hover:text-white">
                  Acceso Restaurantes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-7">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-green-200 hover:text-white">
                <img src={IG} className="w-8" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-green-200 hover:text-white">
                <img src={TK} className="w-8" />
                {/* <TiktokIcon className="h-6 w-6" /> */}
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-green-200 hover:text-white">
                <img src={FB} className="w-8" />
                {/* <Face className="h-6 w-6" /> */}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-200">
          <p><strong>Come Saludable</strong>.</p>
        </div>
      </div>
    </footer>
  );
}