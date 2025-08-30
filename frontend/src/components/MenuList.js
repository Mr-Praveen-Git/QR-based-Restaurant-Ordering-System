import React, { useEffect, useState } from 'react';
import { fetchMenu } from '../api';

export default function MenuList({ onAddToOrder }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu()
      .then(res => setMenu(res.data))
      .catch(() => alert('Error loading menu'));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {menu.map(item => (
        <div key={item.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>₹ {item.price.toFixed(2)}</p>
          <button onClick={() => onAddToOrder(item)}>Add to Order</button>
        </div>
      ))}
    </div>
  );
}
