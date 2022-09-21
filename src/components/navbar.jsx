import React from 'react';

class Navbar extends React.Component {
    render() {
      return( 
        <div className='flex justify-end mt-16 text-gray-100 font-bold text-xl mr-8'>
          <span className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
            Home
          </span>
          <span className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
            Playlisten
          </span>
          <span className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
            Events
          </span>
          <span className='flex px-4 decoration-pink decoration-4 no-underline hover:underline'>
            Inspiration
          </span>
        </div>
      )
    }
  }

  export {Navbar}