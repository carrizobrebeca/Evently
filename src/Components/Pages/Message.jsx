import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Message = () => {
  const navigate = useNavigate();
    return (
        <>
            <div className="fixed top-0 left-20 h-screen w-[60%] md:w-[25%] bg-gray-100 border-l-2 border-r-2 border-gray-300 ml-2 z-60">
                <div className="flex items-left justify-start p-10 h-[10vh]">
                    <h2 className="text-4xl text-gray-600 font-bold font-mono">Mensaje</h2>
                </div>                
                <div onClick={() => navigate("/sendmessage")}  className="flex justify-between items-center cursor-pointer gap-4 text-gray-600 pl-4 pr-4">
                    <img
                        src=
                        "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
                        className="w-20 h-20 object-cover rounded-full "
                    />
                    <h2 className="text-xl text-gray-600 font-bold font-mono">Nombre</h2>
                     <h2 className="text-xl text-gray-600 font-bold font-mono">Usuario</h2>
                    <button className="text-xl text-gray-400 font-bold font-mono">X</button>
                </div>

            </div>
        </>
    )
}

export default Message