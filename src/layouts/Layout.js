import Head from 'next/head';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { deauthenticate } from '../containers/signin/actions';
import { compose } from 'redux';
import withConnectivity from '../HOC/withConnectivity';
import withUser from '../HOC/withUser';

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css'
      />
      <script id="convertful-api" src="https://app.convertful.com/Convertful.js?owner=1435" async></script>

    </Head>
    <div className='tabs is-centered'>
      <div className='logo'>
        <img src='/static/nextjs.png' />
      </div>
      <div className='nav-bar'>
        <NavBar
          isAuthenticated={isAuthenticated}
          deauthenticate={deauthenticate}
        />
      </div>
    </div>

    <div className='has-text-centered'>{children}</div>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user
});

const mapDispatchToProps = dispatch => ({
  deauthenticate: () => {
    dispatch(deauthenticate());
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withConnectivity,
  withUser
)(Layout);
