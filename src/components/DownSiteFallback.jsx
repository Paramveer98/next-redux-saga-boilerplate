import React from 'react';

/**
 * Fallback which appears when API's fail
 */
const DownSiteFallback = () => (
  <>
    <section>
      <div className="container width-1040">
        <div className="row">
          <div className="col-md-12 fallback-page">
              <img src="/static/assets/img/database-error.png" alt="" />
              <h2>
              DOWN FOR SCHEDULED MAINTENANCE
              </h2>
              <h4>Please check back again soon</h4>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default DownSiteFallback;
