import React from 'react';
import Header from './Header';
import CartOverView from '../features/Cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="container mx-auto px-4 py-6  ">
          <Outlet />
        </main>
      </div>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
