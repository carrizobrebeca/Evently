import React, { useState } from "react";
import SideBarL from "./SideBarL";
import HeaderEvent from "./HeaderEvent";
import Comment from "./Comment";
import PostEvent from "./PostEvent";
import Members from "./Members";

const Event = () => {
  const [activeTab, setActiveTab] = useState("publicaciones");

  const buttons = [
    {
      id: "publicaciones",
      label: "Publicaciones",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
      ),
    },
    {
      id: "participantes",
      label: "Participantes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="bg-gray-200 grid lg:grid-cols-5 xl:grid-cols-6 min-h-screen bg-gray-200">
      <div className="lg:col-span-1">
        <SideBarL />
      </div>
      <div className="bg-gray-100 lg:col-span-1"></div>
      <main className="lg:col-span-2 xl:col-span-4 bg-gray-100 p-8 h-auto overflow">
        <HeaderEvent />
        <div className="border-t-4 border-gray-300 flex justify-around">
          {buttons.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`pt-6 flex items-center justify-center gap-2 border-t-4 ${
                activeTab === id ? "border-gray-300" : "border-gray-100"
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>
      
       {activeTab === "publicaciones" && (
  <>
    <section className="mt-2 mb-2">
      <Comment />
    </section>
    <section className="mt-2 mb-2">
      <PostEvent />
    </section>
  </>
)}

{activeTab === "participantes" && (
  <section className="mt-2 mb-2">
    <Members />
  </section>
)}
      </main>
      <div className="bg-gray-100 lg:col-span-1"></div>
    </div>
  );
};

export default Event;
