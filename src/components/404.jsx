import React from 'react';
import Link from 'next/link';

/**
 * 404 component that will render if component doesn't exist 
 */
const FourOFour = () => {
  return (
    <section className='error-page-area text-center blank-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <h1>404</h1>
            <h2>Sorry Page Was Not Found!</h2>
            <p>Make sure you typed in the right address, or try again later.</p>
            <Link as='/' href='/'>
              <a className='button button-round button-back-home'>
                Back To Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourOFour;
