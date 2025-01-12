

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer">Home</li>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer">Profile</li>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer">Setting</li>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer">Logout</li>
                    </ul>
                </nav>
            </aside>

            {/*Main*/}
            <main className="flex-1 p-6">
                <h2 className="text-3xl font-semibold">Welcome To my Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {/* card 1*/}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold"> Card first</h3>
                        <p className="mt-2">Some Content for card first</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold"> Card second</h3>
                        <p className="mt-2">Some Content for card second</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold"> Card third</h3>
                        <p className="mt-2">Some Content for card third</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
