import { NavLink, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__logo">Welcome!</div>

      <nav className="App__nav">
        <NavLink
          to='/'
          className={({ isActive }) => isActive ? 'is-active': undefined}
        >Converter</NavLink>
        {' | '}
        {/* <Link to='/currencies'>Currencies</Link> */}
        <NavLink
          to='/currencies'
          className={({ isActive }) => isActive ? 'is-active': undefined}
        >Currencies</NavLink>
        {' | '}
        <a href='/contact'>Contact</a>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
