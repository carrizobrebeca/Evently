
const Members = () => {

    return (
        <div className="bg-gray-100 grid lg:grid-cols-5 xl:grid-cols-6 min-h-screen bg-gray-100">
            <section className="mt-10 mb-10">
                <div className="flex items-center gap-4 text-gray-600 py-2 px-4">
                    <img
                        src=
                        "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
                        className="w-20 h-20 object-cover rounded-full "
                    />
                    <h2 className="text-xl text-gray-600 font-bold font-mono">Nombre</h2>
                    <h2 className="text-xl text-gray-400 font-bold font-mono">usuario</h2>
                </div>
            </section>
        </div>
    );
};

export default Members;
