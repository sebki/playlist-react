import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './components/home.jsx'
import {Header} from './components/header.jsx'

class App extends React.Component {
    render() {
        return(
            <div>
              <Header />
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