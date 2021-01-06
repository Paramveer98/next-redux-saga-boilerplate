import React from 'react';
const withLoader = WrappedComponent => {
  return class withLoader extends React.Component {
    render() {
      const { isLoading, loader } = this.props;
      return !isLoading ? (
        <WrappedComponent {...this.props} />
      ) : (
          <div className={'loading'}>
            <img src={loader || '/static/playlist_loading.gif'} />
          </div>
        );
    }
  };
};
export default withLoader;
