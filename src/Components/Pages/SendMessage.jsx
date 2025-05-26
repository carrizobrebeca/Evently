
import React, { useState } from "react";
import Header from "../Pages/Header";
import SideBarR from "../Pages/SideBarR";
import NavBar from "../Pages/NavBar";
import Post from "../Pages/Post";
import SideBarLMin from "../Pages/SideBarLMin";
import { useNavigate } from "react-router-dom";

const SendMessage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-200">
      <div className="lg:col-span-1">
        <SideBarLMin />
      </div>
      <main className="lg:col-span-2 xl:col-span-4 bg-gray-100 p-8 h-auto overflow">
        <div onClick={() => navigate("/profile")} className="flex items-start cursor-pointer gap-4 text-gray-600 pl-4 pr-4">
          <img
            src=
            "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
            className="w-20 h-20 object-cover rounded-full "
          />
          <h2 className="text-xl text-gray-600 font-bold font-mono">Nombre</h2>
          <h2 className="text-xl text-gray-600 font-bold font-mono">Usuario</h2>
        </div>

        <div className="border-b-4 pt-4 pb-4 border-gray-300">


        </div>
        <div className="fixed bottom-4 left-10 right-4 bg-white p-4">
          <input type="text" placeholder="Enviar mensaje..." />
           <button>enviar</button>
        </div>
       
      </main>
      <div className="lg:col-span-1 bg-gray-100">

      </div>
    </div>
  );
};

export default SendMessage;
