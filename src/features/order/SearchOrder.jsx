import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleOnsubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form action="" onSubmit={handleOnsubmit}>
      <input
        type="text"
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 w-40 rounded-full bg-yellow-100 px-6 py-2 font-semibold uppercase transition-all duration-300 placeholder:text-stone-400 focus:w-72 focus:ring focus:ring-yellow-500 focus:ring-offset-0 focus:outline-none sm:w-65"
      />
    </form>
  );
}

export default SearchOrder;
