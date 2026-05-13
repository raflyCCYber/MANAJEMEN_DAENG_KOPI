import { orders } from '../data/data'

export default function Reports() {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const completedOrders = orders.filter(order => order.status === 'completed').length
  const pendingOrders = orders.filter(order => order.status === 'pending').length

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Sales Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">Rp {totalRevenue.toLocaleString('id-ID')}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Completed Orders</h3>
          <p className="text-3xl font-bold text-blue-600">{completedOrders}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Pending Orders</h3>
          <p className="text-3xl font-bold text-orange-600">{pendingOrders}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4">Monthly Breakdown</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
          Chart visualization would go here
        </div>
      </div>
    </section>
  )
}
