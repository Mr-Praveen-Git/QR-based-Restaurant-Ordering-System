import React, { useState } from 'react';
import MenuList from './components/MenuList';
import OrderForm from './components/OrderForm';

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [tableId, setTableId] = useState('');

  const handleAddToOrder = (item) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i);
      } else {
        return [...prev, {...item, quantity: 1}];
      }
    });
  };

  const handleOrderPlaced = () => {
    setOrderItems([]);
    setTableId('');
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Restaurant QR Ordering System</h1>
      <MenuList onAddToOrder={handleAddToOrder} />
      <OrderForm orderItems={orderItems} tableId={tableId} onOrderPlaced={{ setTableId, onOrderPlaced: handleOrderPlaced }} />
    </div>
  );
}

export default App;
