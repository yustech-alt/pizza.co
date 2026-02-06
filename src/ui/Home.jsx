import React from 'react';
import CreateUser from '../features/Users/CreateUser';

function Home() {
  return (
    <div className='flex flex-col items-center justify-center text-center md:my-20 '>
      <h1 className="mt-18  text-2xl md:text-3xl font-semibold mb-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
