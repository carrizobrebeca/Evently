import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideBarL = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-[60%] md:w-[25%] bg-gray-100 border-r-2 border-gray-300 z-50">

                <div className="flex items-left justify-start p-10 h-[10vh]">

                    <h2 className="text-4xl text-gray-600 font-bold font-mono">Evently</h2>

                </div>

                <div className="bg-gray-100 p-8 h-[70vh] flex flex-col justify-between gap-8">
                    <nav className="flex flex-col gap-8">
                        <button
                            onClick={() => navigate("/home")}
                            className="flex items-center gap-4 text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>


                            Inicio
                        </button>
                        <button
                            // onClick={() => navigate("/home")}
                            className="flex items-center gap-4 text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                            Buscar
                        </button>
                        <button
                            // onClick={() => navigate("/home")}
                            className="flex items-center gap-4 text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>


                            Explorar
                        </button>
                        <button
                            // onClick={() => navigate("/home")}
                            className="flex items-center gap-4 text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>


                            Mensajes
                        </button>
                        <button
                            // onClick={() => navigate("/home")}
                            className="flex items-center gap-4 text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                            Notificaciones
                        </button>
                        <button
                            onClick={() => navigate("/profile")}
                            className="flex items-center gap-4 text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            Perfil
                        </button>

                    </nav>

                </div>
                <div className="bg-gray-300 p-8 rounded-tr-[100px] h-[20vh]">
                    <nav className="">

                        <button
                            // onClick={() => navigate("/pedidos")}
                            className="flex items-center text-white py-2 px-4"
                        >

                            © 2025 REBECA CARRIZO BOURLOT
                        </button>

                    </nav>

                </div>
            </div>
        </>
    )
}

export default SideBarL