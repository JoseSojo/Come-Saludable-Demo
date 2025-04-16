import { FC, useState } from "react"
import { Link, useLocation } from "wouter";
import { LoginFormData } from "../types/types";

const Login: FC = () => {
    const [location, setLocation] = useLocation();

    const navigate = (path: string) => {
        setLocation(path);
        location;
    }

    const [formData, setFormData] = useState<LoginFormData>({ code: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically validate and authenticate
        // navigate(`/restaurant/${formData.code}`);
        navigate(`/dashboard`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Acceso para Restaurantes
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Ingresa tu código de acceso para gestionar tu restaurante
                    <br />
                    <Link href="/" className={`text-center text-sky-800 font-bold`}>Volver al inicio</Link>

                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                                Código de Acceso
                            </label>
                            <div className="mt-1">
                                <input
                                    id="code"
                                    name="code"
                                    type="text"
                                    required
                                    pattern="[0-9]{7}"
                                    maxLength={7}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-600 text-gray-600 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="1234567"
                                    value={formData.code}
                                    onChange={(e) => setFormData({ code: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login
