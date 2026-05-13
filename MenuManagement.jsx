import { menuItems } from '../data/data'

export default function MenuManagement() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Menu Management</h2>
      
      <button className="mb-8 bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-800 transition">
        + Add New Item
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.category}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-amber-900">Rp {item.price.toLocaleString('id-ID')}</span>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
