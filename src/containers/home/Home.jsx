import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useState, useEffect } from 'react';

const Home = props => {
  const [value, setBanner] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>Home</div>
    </>
  );
};
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
