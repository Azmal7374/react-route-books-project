import React from 'react';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=''>
      
    <Header></Header>
    <div className='min-h-[calc(100vh-136px)]'>
    <Outlet></Outlet>
    </div>
      <Footer></Footer>

    </div>
  );
};

export default App;