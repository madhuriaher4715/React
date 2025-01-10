

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-700 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900">
      <h2 className="text-xl font-bold">Sidebar</h2>
      <nav className="mb-2">
      <ul>
        <li className="mb-2">
            <a href="#" className="block p-2 hover:bg-gray-700 rounded"></a>Select Template</li>
        <li className="mb-2">
            <a href="#" className="block p-2 hover:bg-gray-700 rounded "></a>Create Resume</li>
        <li className="mb-2">
            <a href="#"className="block p-2 hover:bg-gray-700 rounded " ></a>Add any more</li>
        <li className="mb-2">
        <a href="#"className="block p-2 hover:bg-gray-700 rounded " ></a> Export Resume</li>

      </ul>
      </nav>
    </div>
    </div>
  )
}

export default Sidebar
