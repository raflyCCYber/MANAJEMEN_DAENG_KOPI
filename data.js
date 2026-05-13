export const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    category: 'Coffee',
    price: 25000,
    description: 'Strong and bold black coffee'
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'Coffee',
    price: 35000,
    description: 'Coffee with steamed milk and foam'
  },
  {
    id: 3,
    name: 'Latte',
    category: 'Coffee',
    price: 35000,
    description: 'Smooth coffee with steamed milk'
  },
  {
    id: 4,
    name: 'Iced Coffee',
    category: 'Coffee',
    price: 30000,
    description: 'Cold coffee with ice'
  }
]

export const orders = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    items: ['Cappuccino', 'Latte'],
    total: 70000,
    status: 'completed',
    date: '2024-05-10'
  },
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    items: ['Espresso'],
    total: 25000,
    status: 'pending',
    date: '2024-05-13'
  }
]
