import { Menu } from "../../types/types";
import Image from '../../assets/hero.webp';

interface Props {
  menu: Menu;
}

export default function MenuCard({ menu }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={Image}
        alt={menu.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{menu.name}</h3>
        <p className="mt-2 text-gray-600">{menu.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">${menu.price}</span>
          <span className="text-sm text-gray-500">{menu.calories} cal</span>
        </div>
      </div>
    </div>
  );
}