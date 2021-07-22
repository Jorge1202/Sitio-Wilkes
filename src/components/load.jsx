import { Link } from 'react-router-dom';

import logo from '../assets/img/logo/logo.svg';
import './styles/load.css';

const Load = () => (
  <div className="Load">
    <header className="Load-header">
      <img src={logo} className="Load-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="https://reactjs.org"
        className="Load-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </header>
  </div>
);

export default Load;
