import React from 'react';
import { Link } from 'react-router-dom';
function CartOverview() {
  return (
    <div className="bg-stone-700 text-stone-200 flex items-center justify-between px-4 py-2 h-18">
      <p className="text-stone-300 space-x-6 uppercase">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
