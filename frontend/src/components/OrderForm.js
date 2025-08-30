import React, { useState } from 'react';
import { placeOrder } from '../api';

export default function OrderForm({ orderItems, tableId, onOrderPlaced }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!tableId) {
      alert('Please enter table number');
      return;
    }
    if (orderItems.length === 0) {
      alert('Add some items to order');
      return;
    }

    const orderData = {
      tableId: Number(tableId),
      items: orderItems.map(item => ({
        menuItemId: item.id,
        quantity: item.quantity,
      })),
    };

    setLoading(true);
    placeOrder(orderData)
      .then(() => {
        alert('Order placed successfully!');
        onOrderPlaced();
      })
      .catch(() => alert('Error placing order'))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{marginTop: '20px'}}>
      <h2>Your Order</h2>
      <input
        type="number"
        placeholder="Enter Table Number"
        value={tableId}
        onChange={e => onOrderPlaced.setTableId(e.target.value)}
        style={{marginBottom: '10px', padding: '5px'}}
      />
      {orderItems.length === 0 && <p>No items added</p>}
      {orderItems.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Placing...' : 'Place Order'}
      </button>
    </div>
  );
}
