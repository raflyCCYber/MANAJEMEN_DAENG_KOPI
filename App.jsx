import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import MenuManagement from './components/MenuManagement'
import Reports from './components/Reports'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'orders':
        return <Orders />
      case 'menu':
        return <MenuManagement />
      case 'reports':
        return <Reports />
      case 'hero':
        return <Hero />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
