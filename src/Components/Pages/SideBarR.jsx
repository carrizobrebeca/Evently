import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideBarR = () => {
      const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 h-full fixed right-0 lg:static w-[80%] md:w-[40%] lg:w-full transition-all cursor-pointer z-50 duration-300">
        <div onClick={() => navigate("/profile")} className="flex items-left justify-start p-10 h-[10vh]">
          <img
            src=
            "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
            className="w-20 h-20 object-cover rounded-full "
          />
          <div className='pt-2'>
            <h2 className="text-xl text-gray-600 font-bold font-mono">Nombre</h2>
            <h2 className="text-xl text-gray-400 font-bold font-mono">usuario</h2>
          </div>
        </div>

        <div className="flex items-left justify-start p-10 h-[10vh]">
          <h2 className="text-lg text-gray-600 font-bold font-mono">Sugerencias para ti</h2>
        </div>

        <div className="flex items-center gap-4 text-gray-600 py-2 px-4">
          <img
            src=
            "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
            className="w-20 h-20 object-cover rounded-full "
          />
          <h2 className="text-xl text-gray-600 font-bold font-mono">Nombre</h2>
          <button className="text-xl text-gray-400 font-bold font-mono">Agregar</button>
        </div>

      </div>
    </>
  )
}

export default SideBarR