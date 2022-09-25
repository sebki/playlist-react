import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return( 
      <nav className='flex justify-end mt-16 text-gray-100 font-bold text-xl mr-8'>
        <Link to={'/'} className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
          Home
        </Link>
        <Link to={'/playlists'} className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
          Playlisten
        </Link>
        <Link to={'/events'} className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
          Events
        </Link>
        <Link to={'/inspiration'} className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
          Inspiration
        </Link>
      </nav>
    )
  }
}