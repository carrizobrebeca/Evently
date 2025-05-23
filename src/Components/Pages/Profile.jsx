import React from 'react'
import Header from './Header';
import SideBarR from './SideBarR';


const Profile = () => {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <SideBarR />
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
    <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6 bg-gradient-to-r from-green-300 via-yellow-100 to-yellow-200">
          <h2>Cuerpo</h2>
        </div>
      </section>
    </main>
  </div>
);
}

export default Profile