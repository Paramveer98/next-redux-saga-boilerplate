import React from 'react';

const withConnectivity = WrappedComponent => {
    return class WithConnectivity extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                onLine: true
            }
        }
        render() {
            const { onLine } = this.state;
            return (
                <>
                    {!onLine && <div><p>No Internet Connection!</p></div>}
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default withConnectivity;