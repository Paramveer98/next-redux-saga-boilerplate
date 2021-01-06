import React from 'react';

/**
 * Welcome Component
 */
const Welcome = () => (
  <section className='login-wrapper  styles_modal__gNwv sasborder-right-1'>
    <div className='container'>
      <div className='col-lg-12 text-center'>
        <div className='login-form'>
          <h3>Welcome to TuneReel</h3>
          <p>
            Explore Our Curated Royalty-Free Music Library
          </p>
        </div>
        <img
          className='modal-logo mt-3 mb-3'
          width='220'
          src='/static/assets/img/tunereel-footer-logo.png'
        />
        <h6 className='tagline mt-4'>Easy Licensing. Exclusively Curated</h6>
      </div>
    </div>
  </section>
);

export default Welcome;
