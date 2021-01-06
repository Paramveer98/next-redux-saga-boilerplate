import React from 'react';
import { connect } from 'react-redux';
import initialize from '../src/utility/initialize';
import HomeComponent from '../src/containers/home/Home';
import { getUser } from '../src/utility/utils';

class Home extends React.Component {
  static async getInitialProps(props) {
    initialize(props.ctx);
    let user = getUser(props.ctx.req);
    let url = props.ctx.asPath;
    const isServer = props.ctx.isServer;

    if (isServer) {
      // 
    }

    return {
      asPath: url,
      user,
      isServer
    };
  }

  state = {
  };


  render() {
    const {
      asPath,
      isServer
    } = this.props;
    return (
      <HomeComponent
        asPath={asPath}
        title="Home Page"
        isServer={isServer}
      />
    );
  }
}

export default connect()(Home);
