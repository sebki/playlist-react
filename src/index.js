import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import {Home} from './components/home'
import { Login } from './components/login';
import { Layout } from './components/layout';
import { Playlists } from './components/playlists';
import { Events } from './components/events';
import { Inspiration } from './components/inspiration';

class App extends React.Component {
    render() {
        return(
            <>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/playlists' element={<Playlists />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/inspiration' element={<Inspiration />} />
                    <Route path='/login' element={<Login />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);