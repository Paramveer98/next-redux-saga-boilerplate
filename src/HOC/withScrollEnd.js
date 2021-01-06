import React from 'react';

const withScrollEnd = WrappedComponent => {
  return class WithScrollEnd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrolledToBottom: false
      };
    }

    componentDidMount() {
      document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
      const windowHeight =
        'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        this.setState({
          scrolledToBottom: true
        });
      } else {
        this.setState({
          scrolledToBottom: false
        });
      }
    };
    render() {
      return (
        <WrappedComponent
          scrolledToBottom={this.state.scrolledToBottom}
          {...this.props}
        />
      );
    }
  };
};

export default withScrollEnd;
