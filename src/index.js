import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navbar} from './components/navbar.jsx';
import {Home} from './components/home.jsx'

class App extends React.Component {
    render() {
        return(
            <div>
              <Navbar />
              <Home />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);