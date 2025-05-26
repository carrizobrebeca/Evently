import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/event.avif";
const HeaderEvent = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await axios.get("https://back-foodglobal-pf.up.railway.app/usuarios");
        // const users = response.data;

        // const usuariosPendientes = users.filter(
        //   (user) => user.status === "pendiente"
        // );

        // setNotifications(usuariosPendientes);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleNotificationClick = (e) => {
    e.preventDefault();
    setIsNotificationOpen((prev) => !prev);
  };

  const handleViewClick = (id) => {
    navigate(`/users`);
  };

  return (
    <header className="flex flex-row md:flex-row items-center justify-between gap-4 pt-6 pb-6">
      <div> <img
        src={icon}
        className="w-40 h-40 object-cover rounded-full "
      /></div>
      <form className="w-full p-10 bg-gray-100">
        <div className="flex justify-between p-4">
          <h2 className="text-xl md:text-3xl text-gray-600 font-bold font-momo">
            Nombre Evento
          </h2>
          <h2 className="text-xl md:text-3xl text-gray-400 font-bold font-momo">
            tipo
          </h2>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="text-xl md:text-3xl text-gray-600 font-momo">
            Nombre creador
          </h3>
          <button className="text-xl md:text-3xl bg-gray-300 rounded-3xl p-2 text-gray-100 font-momo">
            usuario
          </button>
        </div>
        <div className="flex justify-between p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <h3 className="text-xl md:text-3xl text-gray-400 font-momo">
            Lugar
          </h3>
        </div>
        <div className="border-2 border-gray-300"></div>
        <div className="flex justify-between p-4">
          <h2><span className="font-bold">259 </span>publicaciones</h2>
          <h2><span className="font-bold">259 </span>participantes</h2>
        </div>
      </form>
    </header>
  );
};

export default HeaderEvent;