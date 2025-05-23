import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderProfile = () => {
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
        src=
        "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
        className="w-40 h-40 object-cover rounded-full "
      /></div>
      <form className="w-full p-10 bg-gray-100">
        <div className="flex justify-between p-4">
          <h2 className="text-xl md:text-3xl text-gray-600 font-bold font-momo">
            Nombre
          </h2>
          <h2 className="text-xl md:text-3xl text-gray-400 font-bold font-momo">
            usuario
          </h2>
          {/* <button className="bg-gray-600 text-gray-100 pl-2 pr-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button> */}


        </div>
        <div className="border-2 border-gray-300"></div>
        <div className="flex justify-between p-4">
          <h2><span className="font-bold">259 </span>publicaciones</h2>
          <h2><span className="font-bold">259 </span>seguidores</h2>
          <h2><span className="font-bold">259 </span>seguidos</h2>
          <h2><span className="font-bold">259 </span>eventos</h2>
        </div>
        
      </form>
      
    </header>
  );
};

export default HeaderProfile;