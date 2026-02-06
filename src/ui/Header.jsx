import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/Users/Username';

function Header() {
  return (
    <header className="bg-yellow-300 h-16 flex items-center justify-between px-4 py-2">
      <Link to="/" className='font-semibold uppercase tracking-widest'>fast React Pizza.Co</Link>
      
        <SearchOrder />
        <Username />
      
    </header>
  );
}

export default Header;
