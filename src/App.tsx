import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './App.css';
import { getLinkStyle } from './utils/linkUtils';

/**
 * APP Component
 *
 * @return {JSX.Element}
 */
const App = () => {
  return (
    <div>
      <h1 className='title'>Bookkeeper</h1>
      <nav className='app-nav'>
        <NavLink className='invoice-nav' to='/invoices' style={getLinkStyle}>Invoices</NavLink>
        <NavLink className='expenses-nav' to='/expenses' style={getLinkStyle}>Expenses</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
