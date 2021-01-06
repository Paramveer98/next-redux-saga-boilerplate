import React from 'react';

const withUser = WrappedComponent => {
  return class WithUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {}
      };
    }
    render() {
      return <WrappedComponent user={this.state.user} {...this.props} />;
    }
  };
};

export default withUser;
