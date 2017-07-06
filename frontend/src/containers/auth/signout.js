// @flow
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
    this.props.history.push('/');
  }

  render() {
    return <h1>Sorry to see you go...</h1>;
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func,
  history: PropTypes.obj
};

export default connect(null, actions)(Signout);
