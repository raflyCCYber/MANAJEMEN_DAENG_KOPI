export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="bg-amber-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">☕ Daeng Kopi</div>
        <ul className="flex gap-6">
          <li>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-4 py-2 rounded transition ${currentPage === 'dashboard' ? 'bg-amber-700' : 'hover:bg-amber-800'}`}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('orders')}
              className={`px-4 py-2 rounded transition ${currentPage === 'orders' ? 'bg-amber-700' : 'hover:bg-amber-800'}`}
            >
              Orders
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('menu')}
              className={`px-4 py-2 rounded transition ${currentPage === 'menu' ? 'bg-amber-700' : 'hover:bg-amber-800'}`}
            >
              Menu
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('reports')}
              className={`px-4 py-2 rounded transition ${currentPage === 'reports' ? 'bg-amber-700' : 'hover:bg-amber-800'}`}
            >
              Reports
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
