import { useState } from 'react'
import { menuItems, orders } from '../data/data'

export default function Dashboard() {
  const [dateRange, setDateRange] = useState('month')
  
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const totalOrders = orders.length
  const totalMenuItems = menuItems.length
  const completedOrders = orders.filter(o => o.status === 'completed').length
  const averageOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0

  const StatCard = ({ icon, label, value, color, trend }) => (
    <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-${color}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-2">{label}</p>
          <p className={`text-3xl font-bold text-${color}`}>{value}</p>
          {trend && <p className="text-xs text-green-600 mt-2">↑ {trend}</p>}
        </div>
        <div className={`text-3xl text-${color} opacity-20`}>{icon}</div>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome to Daeng Kopi Management System</p>
          </div>
          <div className="flex gap-2">
            {['day', 'week', 'month', 'year'].map(range => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded capitalize transition ${
                  dateRange === range
                    ? 'bg-amber-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon="💰"
            label="Total Revenue"
            value={`Rp ${totalRevenue.toLocaleString('id-ID')}`}
            color="amber-900"
            trend="12% from last month"
          />
          <StatCard
            icon="📦"
            label="Total Orders"
            value={totalOrders}
            color="green-500"
            trend="5 new today"
          />
          <StatCard
            icon="☕"
            label="Menu Items"
            value={totalMenuItems}
            color="blue-500"
            trend="4 in stock"
          />
          <StatCard
            icon="✅"
            label="Completed Orders"
            value={completedOrders}
            color="purple-500"
            trend={`${Math.round((completedOrders/totalOrders)*100)}% completion`}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Orders - Large */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
              <a href="#" className="text-amber-900 hover:underline text-sm">View All</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Order ID</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Customer</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Items</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="py-3 px-4 font-mono text-sm text-gray-900">{order.id}</td>
                      <td className="py-3 px-4 text-gray-900">{order.customer}</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{order.items.length} item(s)</td>
                      <td className="py-3 px-4 font-bold text-amber-900">Rp {order.total.toLocaleString('id-ID')}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status === 'completed' ? '✓ Completed' : '⏳ Pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="space-y-6">
            {/* Average Order Value */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Order Value</h3>
              <p className="text-3xl font-bold text-blue-600">Rp {averageOrderValue.toLocaleString('id-ID')}</p>
              <p className="text-sm text-gray-600 mt-2">Per transaction</p>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
              <div className="space-y-3">
                {menuItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="text-sm bg-amber-100 text-amber-900 px-2 py-1 rounded">
                      Rp {item.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-semibold">{Math.round((completedOrders/totalOrders)*100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{width: `${(completedOrders/totalOrders)*100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Revenue Trend</h2>
            <div className="h-64 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg flex items-center justify-center text-gray-500 border-2 border-amber-200">
              <div className="text-center">
                <p className="text-lg">📊 Revenue Chart</p>
                <p className="text-sm text-gray-500">Chart visualization</p>
              </div>
            </div>
          </div>

          {/* Orders Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders Overview</h2>
            <div className="h-64 bg-gradient-to-b from-green-50 to-green-100 rounded-lg flex items-center justify-center text-gray-500 border-2 border-green-200">
              <div className="text-center">
                <p className="text-lg">📈 Orders Chart</p>
                <p className="text-sm text-gray-500">Order trends</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
